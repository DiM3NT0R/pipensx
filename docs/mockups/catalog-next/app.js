"use strict";
const paths = {
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  library: '<path d="M4 4v16M9 4v16M14 4v16m4-15 4 14"/>',
  heart:
    '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  box: '<path d="m12 3 9 5v9l-9 5-9-5V8Zm-9 5 9 5 9-5m-9 5v9M7 5.8l9 5"/>',
  layers: '<path d="m12 3 10 6-10 6L2 9Zm-10 12 10 6 10-6M2 15l10 6 10-6"/>',
  git: '<circle cx="6" cy="5" r="3"/><circle cx="6" cy="19" r="3"/><circle cx="18" cy="6" r="3"/><path d="M6 8v8m0-2c8 0 12-2 12-5"/>',
  disk: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 13h18m-5 3h1m-5 0h1"/>',
  settings:
    '<path d="m10 3-1 3-3 1-3 3 2 2-2 2 3 3 3 1 1 3h4l1-3 3-1 3-3-2-2 2-2-3-3-3-1-1-3Z"/><circle cx="12" cy="12" r="3"/>',
  search: '<circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5 5"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-11 12h4"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  shield: '<path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6Zm-4 10 3 3 5-6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  pause: '<path d="M8 4v16M16 4v16"/>',
  play: '<path d="m7 4 14 8-14 8Z"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  refresh:
    '<path d="M20 7v5h-5M4 17v-5h5m-4-5a8 8 0 0 1 14-2l1 2M4 17l1 2a8 8 0 0 0 14-2"/>',
  spark: '<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>',
  cloud: '<path d="M6 19a5 5 0 1 1 .7-10A7 7 0 0 1 20 11a4 4 0 0 1-1 8Z"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
};
const icon = (name) =>
  `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.box}</svg>`;
function icons(root = document) {
  root
    .querySelectorAll("[data-icon]")
    .forEach((el) => (el.innerHTML = icon(el.dataset.icon)));
}
const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const games = [
  {
    id: "hades",
    title: "Hades",
    studio: "Supergiant Games",
    genre: "Roguelike",
    size: 5.7,
    version: "1.0.3",
    year: 2020,
    lang: "Русский",
    desc: "Выбраться из подземного мира — только начало. Динамичный roguelike от Supergiant Games: боги Олимпа, десятки комбинаций способностей и ещё один забег.",
    tag: "Выбор редакции",
  },
  {
    id: "hollow",
    title: "Hollow Knight",
    studio: "Team Cherry",
    genre: "Метроидвания",
    size: 5.2,
    version: "1.4.3",
    year: 2018,
    lang: "Русский",
    desc: "Спуститесь в забытое королевство Халлоунест. Исследуйте переплетённые миры, встречайте необычных существ и раскройте историю древней цивилизации.",
    tag: "Любимец сообщества",
  },
  {
    id: "celeste",
    title: "Celeste",
    studio: "Maddy Makes Games",
    genre: "Платформер",
    size: 1.4,
    version: "1.4.0",
    year: 2018,
    lang: "Русский",
    desc: "Помогите Мэдлин добраться до вершины горы Селеста. Точный платформер о смелости, принятии себя и маленьких шагах вперёд.",
    tag: "Установлена",
  },
  {
    id: "dead",
    title: "Dead Cells",
    studio: "Motion Twin",
    genre: "Roguelike",
    size: 2.5,
    version: "1.25",
    year: 2018,
    lang: "Русский",
    desc: "Исследуйте постоянно меняющийся замок. Экспериментируйте с оружием, побеждайте боссов и начинайте заново — теперь с новым планом.",
    tag: "Есть обновление",
  },
  {
    id: "stardew",
    title: "Stardew Valley",
    studio: "ConcernedApe",
    genre: "Симулятор",
    size: 1.5,
    version: "1.6",
    year: 2017,
    lang: "Русский",
    desc: "Начните новую жизнь в долине: обустройте ферму, подружитесь с соседями и исследуйте мир в своём темпе.",
    tag: "Установлена",
  },
  {
    id: "sea",
    title: "Sea of Stars",
    studio: "Sabotage Studio",
    genre: "RPG",
    size: 4.8,
    version: "1.0.5",
    year: 2023,
    lang: "Русский",
    desc: "Приключение двух детей солнцестояния. Пошаговые сражения, уютные города и мир, который хочется исследовать.",
    tag: "Для долгого вечера",
  },
  {
    id: "tunic",
    title: "TUNIC",
    studio: "Andrew Shouldice",
    genre: "Приключение",
    size: 2.8,
    version: "1.0.2",
    year: 2022,
    lang: "Английский",
    desc: "Маленький лис в большом незнакомом мире. Ищите секреты, собирайте страницы руководства и находите свой путь.",
    tag: "Открытие недели",
  },
  {
    id: "balatro",
    title: "Balatro",
    studio: "LocalThunk",
    genre: "Карточная",
    size: 0.3,
    version: "1.0.1",
    year: 2024,
    lang: "Русский",
    desc: "Карточный roguelike, где джокеры меняют правила. Соберите неожиданную комбинацию и попробуйте ещё одну партию.",
    tag: "Быстрая партия",
  },
];
const initial = {
  favorites: ["hollow", "celeste"],
  installed: ["celeste", "dead", "stardew"],
  updated: [],
  free: 86.4,
  queue: [
    {
      id: "demo-hades",
      game: "hades",
      name: "Hades",
      progress: 62,
      status: "active",
      size: 5.7,
      components: "Игра + обновление",
      recovery: false,
    },
    {
      id: "demo-sea",
      game: "sea",
      name: "Sea of Stars",
      progress: 0,
      status: "queued",
      size: 4.8,
      components: "Игра + обновление",
      recovery: false,
    },
  ],
  sources: { community: true, homebrew: true, personal: false },
  snapshot: 142,
};
let state = structuredClone(initial);
try {
  const saved = JSON.parse(localStorage.getItem("pipensx-concept-v1"));
  if (
    saved &&
    Array.isArray(saved.queue) &&
    saved.queue.every((q) => games.some((g) => g.id === q.game)) &&
    Array.isArray(saved.installed) &&
    Array.isArray(saved.favorites) &&
    Number.isFinite(saved.free) &&
    saved.sources &&
    Number.isInteger(saved.snapshot)
  )
    state = { ...initial, ...saved, updated: saved.updated || [] };
} catch {}
let page = "discover",
  query = "",
  genre = "Все жанры",
  language = "Все языки",
  fitsOnly = false,
  smallOnly = false,
  sort = "editor",
  modalGame = null,
  modalTab = "releases",
  buildRunning = false;
const $ = (s) => document.querySelector(s),
  gameBy = (id) => games.find((g) => g.id === id);
function persist() {
  try {
    localStorage.setItem("pipensx-concept-v1", JSON.stringify(state));
  } catch {}
}
let toastTimer;
function toast(message) {
  $("#toast").textContent = message;
  $("#toast").classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 3800);
}
function header(title, description, action = "") {
  return `<div class="page-header"><div><div class="eyebrow">Ваша следующая игра</div><h1>${title}</h1><p>${description}</p></div>${action || `<button class="sync-chip" data-action="sync">${icon("check")} Каталог актуален</button>`}</div>`;
}
function cards(list) {
  return `<div class="game-grid">${list
    .map((g) => {
      let installed = state.installed.includes(g.id),
        update = g.id === "dead" && !state.updated.includes("dead"),
        saved = state.favorites.includes(g.id);
      let badge = update
        ? "Есть обновление"
        : installed
          ? "Установлена"
          : g.id === "balatro"
            ? "Открытие недели"
            : "";
      return `<article class="game-card"><div class="cover-wrap"><img src="assets/${g.id}.jpg" alt="Обложка ${esc(g.title)}" loading="lazy"><button class="game-open" data-game="${g.id}" aria-label="Открыть ${esc(g.title)}"></button><button class="heart-button ${saved ? "saved" : ""}" data-favorite="${g.id}" aria-label="${saved ? "Убрать из" : "Добавить в"} избранное: ${esc(g.title)}" aria-pressed="${saved}">${icon("heart")}</button>${badge ? `<span class="cover-badge ${update ? "update" : !installed ? "new" : ""}">${installed && !update ? icon("check") : ""}${badge}</span>` : ""}</div><h3 class="game-title">${g.title}</h3><div class="game-subtitle"><span>${g.genre}</span><b>${g.size.toFixed(1)} ГБ</b></div></article>`;
    })
    .join("")}</div>`;
}
function discover() {
  return `${header("Найди свою следующую игру", "Хорошие игры. Понятные версии. Всё в одном месте.")}<section class="hero"><img src="assets/hades-hero.jpg" alt="Мир Hades"><div class="hero-copy"><div class="hero-tag">${icon("spark")} ВЫБОР РЕДАКЦИИ</div><h2>Ещё один забег.</h2><p>Боги на вашей стороне.<br>Подземный мир — пока нет.</p><div class="hero-meta">Hades &nbsp;·&nbsp; Roguelike &nbsp;·&nbsp; Текст на русском</div><button class="btn" data-game="hades">Открыть игру ${icon("arrow")}</button></div><div class="hero-bottom"><b>01</b> / 03 <span class="hero-dots"><span></span><span></span><span></span></span></div></section><div class="discover-shortcuts"><button class="shortcut" data-collection="small"><span class="shortcut-icon">${icon("disk")}</span><span><strong>Маленькие жемчужины</strong><small>Отличные игры до 3 ГБ</small></span><span class="arrow">↗</span></button><button class="shortcut" data-collection="cozy"><span class="shortcut-icon">${icon("heart")}</span><span><strong>Без спешки</strong><small>Уютный вечер с консолью</small></span><span class="arrow">↗</span></button><button class="shortcut" data-page="homebrew"><span class="shortcut-icon">${icon("box")}</span><span><strong>За пределами каталога</strong><small>Homebrew и эмуляторы</small></span><span class="arrow">↗</span></button></div><section><div class="section-heading"><div><h2>Стоит познакомиться</h2><p>Подборка игр, к которым хочется возвращаться</p></div><button class="text-button" data-page="catalog">Весь каталог ↗</button></div>${cards([games[1], games[2], games[3], games[7]])}</section><div class="collections"><button class="collection" data-collection="adventure"><small>В СВОЁМ ТЕМПЕ</small><h3>Потеряться в новом мире</h3><p>Приключения, полные маленьких открытий ↗</p><img class="collection-art" src="assets/tunic.jpg" alt=""></button><button class="collection" data-collection="rogue"><small>ОДНА ПОПЫТКА? ЕЩЁ ОДНА.</small><h3>Каждый забег — новый</h3><p>Roguelike с характером ↗</p><img class="collection-art" src="assets/hades.jpg" alt=""></button></div>`;
}
function matching() {
  let list = games.filter(
    (g) =>
      (!query ||
        [g.title, g.studio, g.genre, g.desc]
          .join(" ")
          .toLocaleLowerCase("ru")
          .includes(query.toLocaleLowerCase("ru"))) &&
      (genre === "Все жанры" || g.genre === genre) &&
      (language === "Все языки" || g.lang === language) &&
      (!fitsOnly || g.size <= state.free) &&
      (!smallOnly || g.size <= 3) &&
      (page !== "favorites" || state.favorites.includes(g.id)),
  );
  if (sort === "az") list.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "small") list.sort((a, b) => a.size - b.size);
  if (sort === "new") list.sort((a, b) => b.year - a.year);
  return list;
}
function catalog() {
  let list = matching();
  return `<div class="catalog-full">${header(page === "favorites" ? "Ваше избранное" : "Одна игра. Все её версии.", page === "favorites" ? "Сохраните интересное — вернуться можно в любой момент." : "Без дубликатов и загадочных имён раздач. Выбирайте игру, затем состав установки.")}<div class="filters"><select id="genre-filter" class="filter-chip" aria-label="Жанр">${["Все жанры", ...new Set(games.map((g) => g.genre))].map((v) => `<option ${genre === v ? "selected" : ""}>${v}</option>`).join("")}</select><select id="language-filter" class="filter-chip" aria-label="Язык текста">${["Все языки", "Русский", "Английский"].map((v) => `<option ${language === v ? "selected" : ""}>${v}</option>`).join("")}</select><button class="filter-chip ${fitsOnly ? "active" : ""}" data-action="fits" aria-pressed="${fitsOnly}">${icon("disk")} Поместится на SD</button><select id="sort-filter" class="filter-chip" aria-label="Сортировка">${[
    ["editor", "Выбор редакции"],
    ["az", "По алфавиту"],
    ["small", "Сначала небольшие"],
    ["new", "По году выхода"],
  ]
    .map(
      ([v, t]) =>
        `<option value="${v}" ${sort === v ? "selected" : ""}>${t}</option>`,
    )
    .join(
      "",
    )}</select><span class="filter-count">${list.length} игр${smallOnly ? " · до 3 ГБ" : ""}${query ? " · «" + esc(query) + "»" : ""}</span>${query || genre !== "Все жанры" || language !== "Все языки" || fitsOnly || smallOnly ? '<button class="text-button" data-action="reset-filters">Сбросить</button>' : ""}</div>${list.length ? cards(list) : '<div class="empty"><h2>Пока ничего не нашлось</h2><p>Попробуйте другой запрос или сбросьте фильтры.</p><button class="btn secondary" data-action="reset-filters" style="margin-top:18px">Сбросить фильтры</button></div>'}<p class="small-note">Одна карточка объединяет связанные релизы по идентификатору игры. Язык озвучки и текста учитывается отдельно; неподтверждённые сведения остаются неизвестными.</p></div>`;
}
function library() {
  let installed = games.filter((g) => state.installed.includes(g.id));
  return `${header("Всё, что уже ваше", "Библиотека знает установленные версии и помогает обновить только нужное.")}<div class="library-summary"><div class="stat-card"><small>Установлено</small><strong>${installed.length} игры</strong><p>На вашей Switch</p></div><div class="stat-card"><small>Есть обновления</small><strong>${state.updated.includes("dead") ? 0 : 1}</strong><p>Без повторной установки игры</p></div><div class="stat-card"><small>Свободно на SD</small><strong>${state.free.toFixed(1)} ГБ</strong><p>Место для следующей истории</p></div></div>${!state.updated.includes("dead") ? '<div class="library-update-bar"><div><strong>Dead Cells готова к обновлению</strong><p>1.24 → 1.25 · Только патч · 184 МБ</p></div><button class="btn" data-action="update-preview">Посмотреть изменения</button></div>' : ""}${cards(installed)}<p class="small-note">Установленность и версии здесь демонстрационные. В приложении сведения поступают с консоли, а не из истории загрузок.</p>`;
}
const statusName = {
  active: "Скачивается",
  queued: "В очереди",
  paused: "На паузе",
  checking: "Проверка сохранённого",
  completed: "Установлено",
  error: "Связь прервана",
};
function queueView() {
  let pending = state.queue
    .filter((q) => q.status !== "completed")
    .reduce((s, q) => s + q.size, 0);
  return `${header("Очередь без неожиданностей", "Установка продолжается с сохранённого места. Вы управляете порядком.", `<button class="btn secondary" data-action="add-magnet">${icon("download")} Добавить ссылку</button>`)}<div class="notice">${icon("disk")}<div>Для незавершённой очереди: <strong>${pending.toFixed(1)} ГБ</strong>. Свободно на SD: <strong>${state.free.toFixed(1)} ГБ</strong>.<br>В полном приложении оценка включает распакованный размер и временные данные; здесь — сумма демопакетов.</div></div><div class="queue-toolbar"><button class="btn secondary" data-action="pause-all">${icon("pause")} Пауза всех</button><button class="btn secondary" data-action="resume-all">${icon("play")} Продолжить</button><button class="text-button" data-action="clear-completed">Очистить завершённые</button></div>${state.queue.length ? state.queue.map((q, i) => `<article class="task-card" data-queue-id="${q.id}"><div class="task-card-head"><img src="assets/${q.game}.jpg" alt=""><div class="task-card-title"><h3>${esc(q.name)}</h3><p>${esc(q.components)} · ${q.size.toFixed(2)} ГБ · microSD</p></div><span class="pill ${q.status === "queued" || q.status === "paused" ? "gray" : q.status === "checking" ? "blue" : ""}">${statusName[q.status]}</span></div><div class="progress-track"><span style="width:${q.progress}%"></span></div><div class="task-details"><span>${q.progress.toFixed(1)}% · ${((q.size * q.progress) / 100).toFixed(2)} / ${q.size.toFixed(2)} ГБ</span><span>${q.status === "active" ? "18.4 МБ/с · TorBox" : q.status === "completed" ? "Файлы проверены · Установка завершена" : q.status === "checking" ? "Проверяем контрольную точку" : q.status === "queued" ? "Начнётся после текущей задачи" : "Сохранённый прогресс доступен"}</span></div>${q.recovery ? '<p class="small-note">Соединение было прервано. Сохранённые данные будут проверены; завершённые пакеты пропускаются.</p>' : ""}<div class="task-actions">${q.status !== "completed" ? `<button class="btn secondary" data-task="${q.id}" data-command="${q.status === "active" ? "pause" : "resume"}">${icon(q.status === "active" ? "pause" : "play")} ${q.status === "active" ? "Пауза" : "Продолжить"}</button>${i > 0 ? `<button class="btn ghost" data-task="${q.id}" data-command="first">В начало очереди</button>` : ""}<button class="text-button" data-task="${q.id}" data-command="interrupt">Демо: обрыв</button><button class="text-button" data-task="${q.id}" data-command="finish">Демо: завершить</button>` : `<button class="btn secondary" data-game="${q.game}">Открыть игру</button>`}<button class="text-button" data-task="${q.id}" data-command="remove">${q.status === "completed" ? "Убрать из истории" : "Отменить"}</button></div></article>`).join("") : '<div class="empty"><h2>Очередь свободна</h2><p>Выберите игру в каталоге и отправьте её на Switch.</p><button class="btn" data-page="catalog" style="margin-top:15px">Открыть каталог</button></div>'}`;
}
function homebrew() {
  return `${header("Больше возможностей для Switch", "Отдельный каталог приложений: версии, зависимости и аккуратная установка.")}<div class="notice">${icon("box")}<div>Концепция: приложение устанавливается в свою папку. Список файлов сохраняется, чтобы обновление и удаление не затрагивали соседние приложения.</div></div><div class="hb-grid">${[
    {
      name: "RetroArch",
      icon: "◈",
      desc: "Одна библиотека для ваших ретро-игр. Ядра выбираются отдельно, собственные системные файлы можно импортировать.",
      version: "Менеджер ядер · SD:/switch/retroarch/",
    },
    {
      name: "Moonlight",
      icon: "☾",
      desc: "Стриминг с вашего игрового ПК. После установки — короткая настройка подключения к домашнему компьютеру.",
      version: "Проверка обновлений · SD:/switch/moonlight/",
    },
    {
      name: "ScummVM",
      icon: "✦",
      desc: "Классические приключения на консоли. Добавьте свои игровые данные через мастер, который проверит структуру папок.",
      version: "Проверка данных · SD:/switch/scummvm/",
    },
    {
      name: "Порты и дополнения",
      icon: "↗",
      desc: "Папки NRO, архивы и связанные forwarder-пакеты. Сначала подготовка файлов, затем установка ярлыка.",
      version: "Предпросмотр путей · Отчёт об установке",
    },
  ]
    .map(
      (h) =>
        `<article class="hb-card"><div class="hb-icon">${h.icon}</div><h3>${h.name}</h3><p>${h.desc}</p><small>${h.version}</small><button class="btn secondary" data-hb="${h.name}">Состав установки ${icon("arrow")}</button></article>`,
    )
    .join(
      "",
    )}</div><p class="small-note">Это демонстрация будущего раздела. Приложения и системные файлы не скачиваются.</p>`;
}
function sources() {
  return `${header("Источники под вашим контролем", "Наш каталог объединяет сведения. Вы сами выбираете, откуда брать файлы.")}<div class="notice">${icon("shield")}<div>Карточка игры и способ загрузки — разные вещи. Смена TorBox на TorrServer не меняет библиотеку и ваши избранные игры.</div></div>${[
    {
      key: "community",
      icon: "spark",
      title: "pipensx Community Catalog",
      desc: "Независимая база игр, идентификаторов, переводов и редакторских подборок. Связи с релизами имеют происхождение и дату проверки.",
      foot: "Проектируемый источник · Версионированный статический снимок",
    },
    {
      key: "homebrew",
      icon: "git",
      title: "Официальные homebrew-релизы",
      desc: "Метаданные из разрешённых репозиториев авторов. Версии, совместимость, контрольные суммы и схема установки.",
      foot: "GitHub Releases · Ограниченный список источников",
    },
    {
      key: "personal",
      icon: "layers",
      title: "Личный источник",
      desc: "Ваш JSON-каталог или локальный импорт. При объединении сохраняется источник каждого релиза; спорные совпадения не скрываются.",
      foot: "Локальный файл / HTTPS · Данные остаются у вас",
    },
  ]
    .map(
      (s) =>
        `<div class="source-card"><span class="source-icon">${icon(s.icon)}</span><div class="source-copy"><h3>${s.title}</h3><p>${s.desc}</p><small>${s.foot}</small></div><button class="toggle ${state.sources[s.key] ? "on" : ""}" data-source="${s.key}" role="switch" aria-checked="${state.sources[s.key]}" aria-label="${s.title}"><span></span></button></div>`,
    )
    .join(
      "",
    )}<div class="section-heading" style="margin-top:30px"><div><h2>Способ загрузки</h2><p>Выбор применяется и на консоли, и в Web Companion</p></div></div><div class="source-card"><span class="source-icon">${icon("cloud")}</span><div class="source-copy"><h3>TorBox</h3><p>Подключение настроено · Ключ скрыт · Выбор файлов перед установкой</p></div><button class="btn secondary" data-action="provider">Настроить</button></div><p class="small-note">Переключатели сохраняют настройки концепта. Каталог содержит фиксированную демовыборку; реальные адаптеры источников ещё не реализованы.</p>`;
}
function pipeline() {
  return `${header("Catalog Studio", "Собственный каталог, который собирается без вашего сервера.", `<span class="sync-chip">${icon("git")} Архитектурный прототип</span>`)}<section class="studio-hero"><div class="eyebrow">GITHUB ACTIONS → СТАТИЧЕСКИЙ КАТАЛОГ</div><h2>Ваш каталог. Без машины 24/7.</h2><p>Источники собираются по расписанию. Данные нормализуются и проходят проверки. Switch получает компактный готовый снимок, а новые версии — небольшими дельтами.</p><div class="build-toolbar"><button class="btn" id="build-button" data-action="build">${icon("play")} Запустить демосборку</button><label class="switch-label"><input type="checkbox" id="fail-build"> Смоделировать ошибку проверки</label></div></section><div class="studio-stats"><div class="stat-card"><small>Текущий снимок</small><strong id="snapshot-label">v${state.snapshot}</strong><p>Последняя исправная версия</p></div><div class="stat-card"><small>Начальная загрузка</small><strong>Индекс + язык</strong><p>Без полного JSON в RAM</p></div><div class="stat-card"><small>Обновления</small><strong>Дельты</strong><p>Проверка базовой версии</p></div><div class="stat-card"><small>Постоянный сервер</small><strong>Не нужен</strong><p>Сборка на hosted runners</p></div></div><div class="pipeline">${[
    {
      icon: "layers",
      title: "01 · Собрать",
      desc: "Разрешённые источники, ETag, лимиты запросов.",
    },
    {
      icon: "grid",
      title: "02 · Объединить",
      desc: "Game ID, платформа, версии, языки и происхождение.",
    },
    {
      icon: "shield",
      title: "03 · Проверить",
      desc: "Схема, конфликты, удаление данных, хеши.",
    },
    {
      icon: "cloud",
      title: "04 · Опубликовать",
      desc: "Снимок, дельты и подписанный manifest.",
    },
  ]
    .map(
      (s, i) =>
        `<div class="pipeline-step" id="pipeline-step-${i}"><div class="step-icon">${icon(s.icon)}</div><h3>${s.title}</h3><p>${s.desc}</p></div>`,
    )
    .join(
      "",
    )}</div><div class="studio-columns"><section class="panel"><h3>Последняя сборка <span class="subtle" style="font-size:9px">/ симуляция</span></h3><div class="build-log" id="build-log">10:17  import      источники готовы\n10:17  normalize   идентификаторы согласованы\n10:18  validate    проверки пройдены\n10:18  publish     снимок v${state.snapshot} доступен\n\nОжидает ручного запуска демосборки.</div></section><section class="panel"><h3>Что получает клиент</h3><div class="data-row"><span>manifest.json</span><strong>Версия, хеши, подпись</strong></div><div class="data-row"><span>index.json.zst</span><strong>Компактный список игр</strong></div><div class="data-row"><span>locales/ru/…</span><strong>Только выбранный язык</strong></div><div class="data-row"><span>games/ab/…</span><strong>Карточки по запросу</strong></div><div class="data-row"><span>deltas/142-143.zst</span><strong>Изменения + удаления</strong></div><p style="margin-top:15px">Публикация по неизменяемому пути. Указатель latest меняется последним. При сбое клиент остаётся на проверенном локальном снимке.</p></section></div><div class="architecture"><div class="section-heading"><h2>Чем этот каталог будет лучше</h2></div><div class="architecture-grid"><section class="panel"><div class="eyebrow">НЕЗАВИСИМОСТЬ</div><h3>Источники можно заменить</h3><p>Наша схема и стабильные ID не принадлежат внешнему каталогу. Метаданные, пользовательские релизы и homebrew — отдельные слои с происхождением каждого поля.</p></section><section class="panel"><div class="eyebrow">КАЧЕСТВО ВЫБОРА</div><h3>Игры вместо списка раздач</h3><p>Нормализованные языки текста и озвучки, альтернативные названия, связи игры с патчами и DLC. Неизвестное остаётся неизвестным.</p></section><section class="panel"><div class="eyebrow">СООБЩЕСТВО</div><h3>Правки и подборки через PR</h3><p>Исправления идентификаторов, совместимости и установка homebrew проверяются в CI. Новые источники и спорные изменения проходят review.</p></section><section class="panel"><div class="eyebrow">ОТКАЗОУСТОЙЧИВОСТЬ</div><h3>Ошибка источника не стирает базу</h3><p>Последние корректные данные сохраняются с датой свежести. Аномальное массовое удаление блокирует публикацию; история версий позволяет откат.</p></section></div></div><p class="technical-note">Это предлагаемая архитектура, а не подключённый CI. <a href="https://docs.github.com/en/billing/concepts/product-billing/github-actions" target="_blank" rel="noopener">Стандартные hosted runners бесплатны для публичных репозиториев</a>. Расписание Actions может задерживаться; после 60 дней без активности scheduled workflow может отключиться. Pages имеет ограничения объёма и трафика. Подробности и схема данных — в README рядом с макетом.</p><button class="text-button" data-action="reset-demo" style="margin-top:18px">Сбросить все демоданные</button>`;
}
function render() {
  const views = {
    discover,
    catalog,
    library,
    favorites: catalog,
    downloads: queueView,
    homebrew,
    sources,
    pipeline,
  };
  $("#main").innerHTML =
    `<div class="fade-in">${(views[page] || discover)()}</div>`;
  document
    .querySelectorAll(".nav-item")
    .forEach((b) => b.classList.toggle("active", b.dataset.page === page));
  renderMini();
  icons();
}
function navigate(next) {
  if (buildRunning && next !== page) {
    toast("Дождитесь завершения демосборки");
    return;
  }
  page = next;
  location.hash = next;
  $(".sidebar").classList.remove("open");
  render();
  window.scrollTo({ top: 0 });
}
function renderMini() {
  const items = state.queue.filter((q) => q.status !== "completed");
  $("#queue-count").textContent = items.length;
  $("#library-count").textContent = state.installed.length;
  $("#disk-free").textContent = `${state.free.toFixed(1)} ГБ свободно`;
  $(".storage-meta").innerHTML =
    `<span>${(256 - state.free).toFixed(1)} ГБ занято</span><span>256 ГБ</span>`;
  $(".storage-track span").style.width = `${((256 - state.free) / 256) * 100}%`;
  $("#mini-queue").innerHTML = items.length
    ? items
        .slice(0, 2)
        .map(
          (q) =>
            `<div class="mini-task"><div class="mini-task-top"><img src="assets/${q.game}.jpg" alt=""><div class="mini-task-title">${esc(q.name)}<small>${q.status === "active" ? "Игра + обновление" : statusName[q.status]}</small></div>${q.status !== "queued" ? `<button class="icon-button" data-task="${q.id}" data-command="${q.status === "active" ? "pause" : "resume"}" aria-label="${q.status === "active" ? "Приостановить" : "Продолжить"} ${esc(q.name)}">${icon(q.status === "active" ? "pause" : "play")}</button>` : ""}</div><div class="progress-track"><span style="width:${q.progress}%"></span></div><div class="progress-meta"><b>${q.progress.toFixed(1)}%</b><span>${q.status === "active" ? "18.4 МБ/с" : q.status === "queued" ? "Ожидает" : "Прогресс сохранён"}</span></div></div>`,
        )
        .join("")
    : '<p class="small-note">Всё готово. Время играть.</p>';
  $("#update-button").hidden = state.updated.includes("dead");
}
function filesFor(g) {
  const installed = state.installed.includes(g.id);
  return [
    {
      id: "base",
      name: "Базовая игра",
      size: g.size - 0.18,
      done: installed,
      checked: !installed,
    },
    {
      id: "patch",
      name: `Обновление ${g.version}`,
      size: 0.18,
      done: installed && (g.id !== "dead" || state.updated.includes("dead")),
      checked:
        !installed || (g.id === "dead" && !state.updated.includes("dead")),
    },
    {
      id: "extra",
      name: "Дополнительные материалы",
      size: 0.12,
      done: false,
      checked: false,
    },
  ];
}
function showGame(id) {
  modalGame = gameBy(id);
  modalTab = "releases";
  if (!modalGame) return;
  drawModal();
  $("#game-dialog").showModal();
}
function drawModal() {
  const g = modalGame;
  if (!g) return;
  const installed = state.installed.includes(g.id),
    files = filesFor(g);
  $("#game-dialog").innerHTML =
    `<button class="modal-close icon-button" data-action="close-game" aria-label="Закрыть">${icon("close")}</button><div class="modal-layout"><aside class="modal-art"><img src="assets/${g.id}.jpg" alt="Обложка ${g.title}"><div class="art-meta"><strong>${g.studio}</strong><br>${g.year} · ${g.genre}<br>Текст: ${g.lang}<br>Озвучка: сведения не подтверждены<br><span class="lime">✓ Идентификатор игры сопоставлен</span></div></aside><section class="modal-content"><div class="eyebrow">${installed ? "ВАША БИБЛИОТЕКА" : "COMMUNITY CATALOG"}</div><h2 id="dialog-title">${g.title}</h2><p class="modal-subtitle">${g.studio} · ${g.genre} · ${g.lang}<br>${installed ? "Установлена " + (g.id === "dead" && !state.updated.includes("dead") ? "1.24" : g.version) : "Ещё не установлена"} · Каталог метаданных: pipensx Community</p><div class="modal-tabs"><button class="modal-tab ${modalTab === "releases" ? "active" : ""}" data-modal-tab="releases">Версии и установка</button><button class="modal-tab ${modalTab === "about" ? "active" : ""}" data-modal-tab="about">Об игре</button><button class="modal-tab ${modalTab === "history" ? "active" : ""}" data-modal-tab="history">Происхождение</button></div>${modalTab === "releases" ? `<label class="release-choice"><input type="radio" name="release" value="current" checked><span><strong>Версия ${g.version} <b>Рекомендуемая</b></strong><small>Полный состав · Текст: ${g.lang} · NSP/NSZ<br>Релиз из личного источника · Дата проверки: демо</small></span></label><label class="release-choice"><input type="radio" name="release" value="older"><span><strong>Предыдущая версия</strong><small>Для совместимости · Состав доступен после выбора</small></span></label><h3>Что установить</h3><div id="file-options">${files.map((f) => `<label class="file-row"><input type="checkbox" data-file="${f.id}" data-size="${f.size}" ${f.done ? "disabled" : f.checked ? "checked" : ""}>${f.name}<span class="${f.done ? "installed-mark" : ""}">${f.done ? "✓ Уже установлено" : f.size.toFixed(2) + " ГБ"}</span></label>`).join("")}</div><div class="space-preview"><div class="data-row"><span>Выбрано для установки</span><strong id="selected-size"></strong></div><div class="data-row"><span>Останется на microSD</span><strong id="remaining-size"></strong></div><div class="data-row"><span>Способ загрузки</span><strong>TorBox → Switch</strong></div></div><div class="modal-actions"><button class="btn" id="install-button" data-action="install">${icon("download")} ${installed ? "Установить выбранное" : "Добавить в очередь"}</button><button class="btn secondary" data-favorite="${g.id}" aria-label="Изменить избранное для ${g.title}">${icon("heart")}</button></div><p class="modal-footnote">Демонстрация: версии, состав, размеры и наличие файлов вымышлены. Реальные файлы не скачиваются. Оценка не включает временные данные.</p>` : modalTab === "about" ? `<p class="about-text">${g.desc}</p><h3>Похожие впечатления</h3><p class="modal-subtitle">${g.genre} · Небольшие открытия · Ещё один вечер</p><button class="btn secondary" data-action="find-similar">Смотреть похожие игры ${icon("arrow")}</button>` : `<div class="data-row"><span>Название и студия</span><strong>Редакционная карточка</strong></div><div class="data-row"><span>Идентификатор</span><strong>Сопоставление по платформе</strong></div><div class="data-row"><span>Состав релиза</span><strong>Личный источник пользователя</strong></div><div class="data-row"><span>Доступность загрузки</span><strong>Не проверена на консоли</strong></div><p class="about-text" style="margin-top:15px">В будущем у каждого поля будет источник и дата обновления. Проверка CI подтверждает структуру данных; доступность пиров или кэша провайдера проверяется отдельно перед загрузкой.</p>`}</section></div>`;
  updateSize();
}
function updateSize() {
  if (!$("#selected-size")) return;
  const size = [
    ...$("#game-dialog").querySelectorAll("[data-file]:checked"),
  ].reduce((n, x) => n + Number(x.dataset.size), 0);
  $("#selected-size").textContent = size.toFixed(2) + " ГБ";
  let reserved = state.queue
    .filter((q) => q.status !== "completed")
    .reduce((n, q) => n + q.size, 0);
  $("#remaining-size").textContent =
    (state.free - reserved - size).toFixed(2) + " ГБ с учётом очереди";
  $("#install-button").disabled = size === 0 || size + reserved > state.free;
}
function addInstall() {
  const g = modalGame,
    selected = [...$("#game-dialog").querySelectorAll("[data-file]:checked")];
  if (!selected.length) return;
  let old =
    $("#game-dialog").querySelector('[name="release"]:checked')?.value ===
    "older";
  if (state.queue.some((q) => q.game === g.id && q.status !== "completed")) {
    toast("Эта игра уже в очереди — дубликат не создан");
    $("#game-dialog").close();
    navigate("downloads");
    return;
  }
  let size = selected.reduce((n, x) => n + Number(x.dataset.size), 0);
  let hasActive = state.queue.some((q) =>
    ["active", "checking"].includes(q.status),
  );
  state.queue.push({
    id: "task-" + Date.now(),
    game: g.id,
    name: g.title + (old ? " · предыдущая версия" : ""),
    size,
    progress: 0,
    status: hasActive ? "queued" : "active",
    components: selected
      .map(
        (x) =>
          ({ base: "Игра", patch: "Обновление", extra: "Материалы" })[
            x.dataset.file
          ],
      )
      .join(" + "),
    recovery: false,
    update: selected.some((x) => x.dataset.file === "patch") && !old,
  });
  persist();
  $("#game-dialog").close();
  render();
  toast(g.title + " добавлена в очередь");
}
function startNext() {
  if (!state.queue.some((q) => ["active", "checking"].includes(q.status))) {
    const next = state.queue.find((q) => q.status === "queued");
    if (next) next.status = "active";
  }
}
function taskCommand(id, command) {
  const q = state.queue.find((x) => x.id === id);
  if (!q) return;
  if (command === "pause") {
    q.status = "paused";
    startNext();
  }
  if (command === "resume") {
    if (q.status === "checking") return;
    q.status = "checking";
    persist();
    render();
    setTimeout(() => {
      const current = state.queue.find((x) => x.id === id);
      if (!current || current.status !== "checking") return;
      current.status = state.queue.some(
        (x) => x.id !== id && x.status === "active",
      )
        ? "queued"
        : "active";
      persist();
      render();
      toast("Сохранённые данные проверены. Можно продолжать.");
    }, 1400);
    return;
  }
  if (command === "interrupt") {
    q.status = "error";
    q.recovery = true;
    startNext();
    toast("Демо: связь прервана. Прогресс сохранён.");
  }
  if (command === "first") {
    state.queue = state.queue.filter((x) => x.id !== id);
    state.queue.unshift(q);
    toast("Порядок изменён. Текущая загрузка продолжится.");
  }
  if (command === "remove") {
    state.queue = state.queue.filter((x) => x.id !== id);
    startNext();
    toast("Задача убрана. Установленные игры сохранены.");
  }
  if (command === "finish") {
    if (q.status === "completed") return;
    q.status = "completed";
    q.progress = 100;
    state.free = Math.max(0, state.free - q.size);
    if (!state.installed.includes(q.game)) state.installed.push(q.game);
    if (
      q.game === "dead" &&
      (q.update || q.components.includes("Обновление")) &&
      !state.updated.includes("dead")
    )
      state.updated.push("dead");
    startNext();
    toast("Демо: " + q.name + " установлена. Результат сохранён в библиотеке.");
  }
  persist();
  render();
}
function info(title, body) {
  $("#info-dialog").innerHTML =
    `<h2>${title}</h2><p>${body}</p><button class="btn" data-action="close-info">Понятно</button>`;
  $("#info-dialog").showModal();
}
async function runBuild() {
  if (buildRunning) return;
  buildRunning = true;
  const fail = $("#fail-build").checked,
    button = $("#build-button"),
    log = $("#build-log");
  button.disabled = true;
  button.innerHTML = icon("refresh") + " Собираем…";
  log.textContent = "";
  document.querySelectorAll(".pipeline-step").forEach((s) => {
    s.classList.remove("running", "done");
    s.style.borderColor = "";
  });
  const lines = [
    "import     3 адаптера · ETag · последний валидный кэш",
    "normalize  8 игр · 0 конфликтов ID · языки нормализованы",
    "validate   схема · хеши · связи · порог удаления",
    "publish    новый снимок, дельта и manifest",
  ];
  for (let i = 0; i < 4; i++) {
    const step = $("#pipeline-step-" + i);
    step.classList.add("running");
    await new Promise((r) => setTimeout(r, 850));
    if (fail && i === 2) {
      log.textContent +=
        "validate   ERROR: массовое удаление 42% записей\npublish    BLOCKED: публикация отменена\n\nКлиенты остаются на v" +
        state.snapshot +
        ". Последний снимок сохранён.";
      step.classList.remove("running");
      step.style.borderColor = "#bc7676";
      toast("Проверка не пройдена. Исправный каталог сохранён.");
      break;
    }
    log.textContent +=
      new Date().toLocaleTimeString("ru", {
        hour: "2-digit",
        minute: "2-digit",
      }) +
      "  " +
      lines[i] +
      "\n";
    step.classList.remove("running");
    step.classList.add("done");
    if (i === 3) {
      state.snapshot++;
      persist();
      $("#snapshot-label").textContent = "v" + state.snapshot;
      log.textContent +=
        "\nДемо: опубликована v" +
        state.snapshot +
        ". Смена latest — последний шаг.";
      $("#catalog-time").textContent =
        "Демоснимок v" + state.snapshot + " · только что";
      toast("Демо: новый снимок прошёл проверки и опубликован.");
    }
  }
  buildRunning = false;
  button.disabled = false;
  button.innerHTML = icon("play") + " Запустить демосборку";
}
document.addEventListener("click", (event) => {
  const target = event.target.closest("button,a");
  if (!target) return;
  if (target.dataset.page) {
    query = "";
    smallOnly = false;
    $("#search").value = "";
    navigate(target.dataset.page);
    return;
  }
  if (target.dataset.game) {
    showGame(target.dataset.game);
    return;
  }
  if (target.dataset.favorite) {
    const id = target.dataset.favorite;
    state.favorites = state.favorites.includes(id)
      ? state.favorites.filter((x) => x !== id)
      : [...state.favorites, id];
    persist();
    target.classList.toggle("saved", state.favorites.includes(id));
    target.setAttribute("aria-pressed", state.favorites.includes(id));
    if (page === "favorites") render();
    else if (!$("#game-dialog").open) render();
    toast(
      state.favorites.includes(id)
        ? "Добавлено в избранное"
        : "Убрано из избранного",
    );
    return;
  }
  if (target.dataset.collection) {
    query = "";
    genre = "Все жанры";
    language = "Все языки";
    fitsOnly = false;
    smallOnly = false;
    sort = "editor";
    const name = target.dataset.collection;
    if (name === "small") {
      sort = "small";
      smallOnly = true;
      query = "";
    }
    if (name === "cozy") genre = "Симулятор";
    if (name === "adventure") genre = "Приключение";
    if (name === "rogue") genre = "Roguelike";
    $("#search").value = query;
    navigate("catalog");
    return;
  }
  if (target.dataset.source) {
    state.sources[target.dataset.source] =
      !state.sources[target.dataset.source];
    persist();
    render();
    toast("Настройка источника сохранена в макете");
    return;
  }
  if (target.dataset.task) {
    taskCommand(target.dataset.task, target.dataset.command);
    return;
  }
  if (target.dataset.modalTab) {
    modalTab = target.dataset.modalTab;
    drawModal();
    return;
  }
  if (target.dataset.hb) {
    info(
      target.dataset.hb + " · план установки",
      "Пример будущего мастера: проверить версию → показать файлы и пути → проверить место → установить → сохранить список принадлежащих приложению файлов. Здесь файлы не скачиваются.",
    );
    return;
  }
  const action = target.dataset.action;
  switch (action) {
    case "fits":
      fitsOnly = !fitsOnly;
      render();
      break;
    case "reset-filters":
      query = "";
      genre = "Все жанры";
      language = "Все языки";
      fitsOnly = false;
      smallOnly = false;
      $("#search").value = "";
      render();
      break;
    case "sync":
      toast("Демо: проверен manifest. Текущий снимок актуален.");
      break;
    case "close-game":
      $("#game-dialog").close();
      break;
    case "close-info":
      $("#info-dialog").close();
      break;
    case "install":
      addInstall();
      break;
    case "find-similar":
      genre = modalGame.genre;
      $("#game-dialog").close();
      navigate("catalog");
      break;
    case "pause-all":
      state.queue.forEach((q) => {
        if (["active", "queued", "checking"].includes(q.status))
          q.status = "paused";
      });
      persist();
      render();
      toast("Очередь приостановлена");
      break;
    case "resume-all":
      state.queue.forEach((q) => {
        if (["paused", "error"].includes(q.status)) q.status = "queued";
      });
      startNext();
      persist();
      render();
      toast("Очередь продолжена");
      break;
    case "clear-completed":
      state.queue = state.queue.filter((q) => q.status !== "completed");
      persist();
      render();
      break;
    case "update-preview":
      showGame("dead");
      break;
    case "provider":
      info(
        "Способ загрузки",
        "В полном приложении здесь выбираются TorBox, Real-Debrid, AllDebrid, TorrServer или прямой торрент. Ключ можно настроить с телефона. В макете используется демонстрационный TorBox.",
      );
      break;
    case "build":
      runBuild();
      break;
    case "reset-demo":
      state = structuredClone(initial);
      persist();
      render();
      toast("Демоданные сброшены");
      break;
    case "add-magnet":
      $("#info-dialog").innerHTML =
        '<h2>Добавить личный релиз</h2><p>Вставьте magnet-ссылку. Макет проверит формат, но не подключится к сети.</p><label class="global-search" style="margin-top:20px;max-width:none;border:1px solid #435359;padding:12px;border-radius:8px"><input id="magnet-input" type="text" placeholder="magnet:?xt=urn:btih:…" aria-label="Magnet-ссылка"></label><button class="btn" data-action="validate-magnet">Проверить ссылку</button><button class="btn secondary" data-action="close-info" style="margin-left:10px">Закрыть</button>';
      $("#info-dialog").showModal();
      break;
    case "validate-magnet":
      toast(
        /^magnet:\?[^\s]*xt=urn:btih:([a-f0-9]{40}|[a-z2-7]{32})(?:&|$)/i.test(
          $("#magnet-input").value,
        )
          ? "Формат корректен. Разрешение метаданных доступно в приложении."
          : "Нужна magnet-ссылка с корректным info hash",
      );
      break;
  }
});
document.addEventListener("change", (e) => {
  if (e.target.id === "genre-filter") {
    genre = e.target.value;
    render();
  }
  if (e.target.id === "language-filter") {
    language = e.target.value;
    render();
  }
  if (e.target.id === "sort-filter") {
    sort = e.target.value;
    render();
  }
  if (e.target.dataset.file) updateSize();
  if (e.target.name === "release") {
    const older = e.target.value === "older";
    $("#file-options").innerHTML = (
      older
        ? [
            {
              id: "base",
              name: "Базовая игра · предыдущая версия",
              size: modalGame.size - 0.18,
              done: false,
              checked: true,
            },
          ]
        : filesFor(modalGame)
    )
      .map(
        (f) =>
          `<label class="file-row"><input type="checkbox" data-file="${f.id}" data-size="${f.size}" ${f.done ? "disabled" : f.checked ? "checked" : ""}>${f.name}<span>${f.done ? "✓ Уже установлено" : f.size.toFixed(2) + " ГБ"}</span></label>`,
      )
      .join("");
    updateSize();
  }
});
$("#search").addEventListener("input", (e) => {
  query = e.target.value;
  if (!["catalog", "favorites"].includes(page)) {
    page = "catalog";
    location.hash = page;
  }
  render();
});
$("#menu-button").onclick = () => $(".sidebar").classList.toggle("open");
$("#notifications-button").onclick = () =>
  info(
    "События вашей Switch",
    "Демо: каталог обновлён, найдено обновление Dead Cells, Hades продолжает скачиваться. В полном приложении здесь будет журнал завершений, ошибок и восстановления.",
  );
$("#connection-button").onclick = () =>
  info(
    "Web Companion",
    "Это локальный веб-макет. Консоль не подключена. В приложении откройте QR-код Web Companion на Switch и подтвердите подключение с помощью PIN.",
  );
$("#update-button").onclick = () => showGame("dead");
document.addEventListener("keydown", (e) => {
  if (
    e.key === "/" &&
    !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName) &&
    !$("#game-dialog").open &&
    !$("#info-dialog").open
  ) {
    e.preventDefault();
    $("#search").focus();
  }
});
for (const dialog of document.querySelectorAll("dialog"))
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        dialog.close();
    }
  });
window.addEventListener("hashchange", () => {
  const next = location.hash.slice(1);
  if (
    [
      "discover",
      "catalog",
      "library",
      "favorites",
      "downloads",
      "homebrew",
      "sources",
      "pipeline",
    ].includes(next) &&
    next !== page &&
    !buildRunning
  ) {
    page = next;
    render();
  }
});
const first = location.hash.slice(1);
if (
  [
    "discover",
    "catalog",
    "library",
    "favorites",
    "downloads",
    "homebrew",
    "sources",
    "pipeline",
  ].includes(first)
)
  page = first;
// A reload must not leave an interrupted demo verification permanently busy.
state.queue.forEach((q) => {
  if (q.status === "checking") q.status = "paused";
});
persist();
render();
setInterval(() => {
  let active = state.queue.find((q) => q.status === "active");
  if (!active) return;
  active.progress = Math.min(99.8, active.progress + 0.12);
  persist();
  renderMini();
  if (page === "downloads") {
    const card = [...document.querySelectorAll("[data-queue-id]")].find(
      (c) => c.dataset.queueId === active.id,
    );
    if (card) {
      card.querySelector(".progress-track span").style.width =
        active.progress + "%";
      card.querySelector(".task-details span").textContent =
        active.progress.toFixed(1) +
        "% · " +
        ((active.size * active.progress) / 100).toFixed(2) +
        " / " +
        active.size.toFixed(2) +
        " ГБ";
    }
  }
}, 3000);
