#include "install/content_registration.hpp"
#include <cassert>
#include <cstdio>
using namespace pipensx::install;
int main() {
    // Missing destination directory, intact source: repair once and retry.
    bool directory = false;
    int attempts = 0, repairs = 0, queries = 0;
    auto reg = [&]() -> uint32_t {
        ++attempts;
        return directory ? 0 : kNcmPlaceHolderNotFound;
    };
    auto has = [&](bool& exists) -> uint32_t {
        ++queries; exists = true; return 0;
    };
    auto repair = [&]() -> uint32_t {
        ++repairs; directory = true; return 0;
    };
    assert(registerContentWithDirectoryRecovery(reg, has, repair) == 0);
    assert(attempts == 2 && repairs == 1 && queries == 1);
    // Normal success never probes or creates a scratch placeholder.
    assert(registerContentWithDirectoryRecovery(reg, has, repair) == 0);
    assert(attempts == 3 && repairs == 1 && queries == 1);
    // Missing source: never replace downloaded content with an empty file.
    attempts = repairs = queries = 0; directory = false;
    auto missing = [&](bool& exists) -> uint32_t {
        ++queries; exists = false; return 0;
    };
    assert(registerContentWithDirectoryRecovery(reg, missing, repair) ==
           kNcmPlaceHolderNotFound);
    assert(attempts == 1 && queries == 1 && repairs == 0);
    // Other registration failures do not run recovery.
    auto denied = []() -> uint32_t { return 0x1234; };
    assert(registerContentWithDirectoryRecovery(denied, has, repair) == 0x1234);
    assert(queries == 1 && repairs == 0);
    auto queryError = [](bool&) -> uint32_t { return 0x2345; };
    assert(registerContentWithDirectoryRecovery(reg, queryError, repair) == 0x2345);
    assert(repairs == 0);
    auto repairError = []() -> uint32_t { return 0x3456; };
    assert(registerContentWithDirectoryRecovery(reg, has, repairError) == 0x3456);
    // Persistent failure is bounded to one retry.
    attempts = 0;
    auto alwaysMissing = [&]() -> uint32_t { ++attempts; return kNcmPlaceHolderNotFound; };
    assert(registerContentWithDirectoryRecovery(alwaysMissing, has, repair) == kNcmPlaceHolderNotFound);
    assert(attempts == 2);
    std::puts("test_content_registration: all assertions passed");
}
