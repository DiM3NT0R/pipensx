#pragma once
#include <cstdint>

namespace pipensx::install {

constexpr uint32_t kNcmPlaceHolderNotFound = (3u << 9) | 5u;

// NCM maps RenameFile's PathNotFound to PlaceHolderNotFound for BOTH the
// source file and the destination directory. Rebuild the destination only
// after proving that the source still exists. Never recreate a lost source.
template<class Register, class HasPlaceholder, class EnsureDirectory>
uint32_t registerContentWithDirectoryRecovery(Register registerContent,
        HasPlaceholder hasPlaceholder, EnsureDirectory ensureDirectory) {
    uint32_t rc = registerContent();
    if (rc != kNcmPlaceHolderNotFound)
        return rc;
    bool exists = false;
    uint32_t queryRc = hasPlaceholder(exists);
    if (queryRc != 0)
        return queryRc;
    if (!exists)
        return rc;
    uint32_t repairRc = ensureDirectory();
    return repairRc == 0 ? registerContent() : repairRc;
}

} // namespace pipensx::install
