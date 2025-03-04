interface ImageKeyMap {
  [key: string]: { image: string };
}

const presence = new Presence({
    clientId: "778572824708775946"
  }),
  // Maps editor mode titles to respective images
  langMap: ImageKeyMap = {
    "arma header file": { image: "sqf" },
    actionscript: { image: "as" },
    autohotkey: { image: "ahk" },
    "babel javascript": { image: "babel" },
    batch: { image: "bat" },
    "c#": { image: "csharp" },
    "c++": { image: "cpp" },
    "cmake cache": { image: "cmake" },
    coffeescript: { image: "coffee" },
    "cuda c++": { image: "cuda" },
    diet: { image: "d" },
    "d++": { image: "d" },
    "dm script": { image: "dm" },
    "denizen script": { image: "denizen" },
    "dlangui markup language": { image: "d" },
    dockerfile: { image: "docker" },
    "embedded elixir": { image: "elixir" },
    "f#": { image: "fsharp" },
    gdscript: { image: "godot" },
    "git commit message": { image: "git" },
    "git rebase message": { image: "git" },
    "html (c#)": { image: "cshtml" },
    "html (embedded elixir)": { image: "elixir" },
    "html (twig)": { image: "twig" },
    hxml: { image: "haxe" },
    "haxe ast dump": { image: "haxe" },
    ignore: { image: "git" },
    jsonc: { image: "json" },
    javascript: { image: "js" },
    "javascript react": { image: "jsx" },
    "javascript for automation (jxa)": { image: "js" },
    "julia markdown": { image: "julia" },
    "literate haskell": { image: "haskell" },
    "markdown react": { image: "markdownx" },
    merlin: { image: "ocaml" },
    ocamlbuild: { image: "ocaml" },
    opam: { image: "ocaml" },
    nimble: { image: "nim" },
    "objective-c": { image: "objc" },
    "objective-c++": { image: "objc" },
    "perl 6": { image: "perl" },
    "plain text": { image: "txt" },
    reason: { image: "reasonml" },
    sass: { image: "scss" },
    "shell script": { image: "shell" },
    typescript: { image: "ts" },
    "typescript react": { image: "tsx" },
    "visual basic": { image: "vb" },
    "vue.js": { image: "vue" },
    "vue-postcss": { image: "postcss" },
    "vue-html": { image: "html" },
    xsl: { image: "xml" },
    webassembly: { image: "wasm" },
    "arsd.dscript": { image: "d" },
    "haxe.argument": { image: "haxe" },
    "haxe.type": { image: "haxe" },
    "ocaml.hover.info": { image: "ocaml" },
    "ocaml.hover.type": { image: "ocaml" },
    "reason.hover.info": { image: "reasonml" },
    "reason.hover.signature": { image: "reasonml" },
    "reason.hover.type": { image: "reasonml" },
    "jest-snapshot": { image: "jest" },
    erb: { image: "ruby" },
    "x86 and x86_64 Assembly": { image: "assembly" },
    // Auto-maps keys to identical image keys
    ...((
      keys = [
        "applescript",
        "autoit",
        "brainfuck",
        "c",
        "cmake",
        "css",
        "clojure",
        "coffee",
        "crystal",
        "d",
        "dart",
        "docker",
        "editorconfig",
        "elixir",
        "erlang",
        "gulp",
        "gemfile",
        "go",
        "graphql",
        "groovy",
        "html",
        "handlebars",
        "harbour",
        "haskell",
        "haxe",
        "hjson",
        "json",
        "java",
        "julia",
        "jupyter",
        "kotlin",
        "less",
        "lisp",
        "livescript",
        "log",
        "lua",
        "makefile",
        "markdown",
        "nim",
        "ocaml",
        "php",
        "pascal",
        "perl",
        "pony",
        "postcss",
        "powershell",
        "prisma",
        "processing",
        "pug",
        "purescript",
        "python",
        "r",
        "ruby",
        "rust",
        "scss",
        "sqf",
        "sql",
        "svg",
        "scala",
        "swift",
        "stylus",
        "svelte",
        "tex",
        "v",
        "vba",
        "vala",
        "vue",
        "xml",
        "yaml",
        "marko",
        "nix",
        "zig"
      ]
    ) => {
      const r: ImageKeyMap = {};
      keys.forEach((k) => (r[k] = { image: k }));
      return r;
    })()
  },
  // https://github.com/iCrawl/discord-vscode/blob/master/src/data/languages.json
  knownExtensions: ImageKeyMap = {
    ".ahk": { image: "ahk" },
    ".ahkl": { image: "ahk" },
    "androidmanifest.xml": { image: "android" },
    "/^angular[^.]*\\.js$/i": { image: "angular" },
    ".applescript": { image: "applescript" },
    "/(\\.)?appveyor\\.yml/i": { image: "appveyor" },
    ".ino": { image: "arduino" },
    ".swf": { image: "as" },
    ".as": { image: "as" },
    ".jsfl": { image: "as" },
    ".swc": { image: "as" },
    ".asp": { image: "asp" },
    ".asax": { image: "asp" },
    ".ascx": { image: "asp" },
    ".ashx": { image: "asp" },
    ".asmx": { image: "asp" },
    ".aspx": { image: "asp" },
    ".axd": { image: "asp" },
    "/\\.(l?a|[ls]?o|out|s|a51|asm|axf|elf|prx|puff|z80)$/i": {
      image: "assembly"
    },
    ".agc": { image: "assembly" },
    ".ko": { image: "assembly" },
    ".lst": { image: "assembly" },
    "/\\.((c([+px]{2}?)?-?)?objdump|bsdiff|bin|dat|pak|pdb)$/i": {
      image: "assembly"
    },
    ".d-objdump": { image: "assembly" },
    "/\\.gcode|\\.gco/i": { image: "assembly" },
    "/\\.rpy[bc]$/i": { image: "assembly" },
    "/\\.py[co]$/i": { image: "assembly" },
    ".swp": { image: "assembly" },
    ".DS_Store": { image: "assembly" },
    ".au3": { image: "autoit" },
    "babel.config.js": { image: "babel" },
    "/\\.babelrc/i": { image: "babel" },
    ".bat": { image: "bat" },
    ".batch": { image: "bat" },
    ".cmd": { image: "bat" },
    "/\\.(exe|com|msi)$/i": { image: "bat" },
    ".reg": { image: "bat" },
    "/^(\\.bowerrc|bower\\.json|Bowerfile)$/i": { image: "bower" },
    "/\\.bf?$/i": { image: "brainfuck" },
    "/\\.c$/i": { image: "c" },
    "/(cargo.toml|cargo.lock)/i": { image: "cargo" },
    "circle.yml": { image: "circleci" },
    ".clj": { image: "clojure" },
    ".cl2": { image: "clojure" },
    ".cljc": { image: "clojure" },
    ".cljx": { image: "clojure" },
    ".hic": { image: "clojure" },
    "/\\.cljs(cm)?$/i": { image: "clojure" },
    ".cmake": { image: "cmake" },
    "/^CMakeLists\\.txt$/": { image: "cmake" },
    "/\\.codeclimate\\.(yml|json)/i": { image: "codeclimate" },
    ".coffee": { image: "coffee" },
    ".cjsx": { image: "coffee" },
    ".coffee.ecr": { image: "coffee" },
    ".coffee.erb": { image: "coffee" },
    ".litcoffee": { image: "coffee" },
    ".iced": { image: "coffee" },
    "/\\.c[+px]{2}$|\\.cc$/i": { image: "cpp" },
    "/\\.h[+px]{2}$/i": { image: "cpp" },
    "/\\.[it]pp$/i": { image: "cpp" },
    "/\\.(tcc|inl)$/i": { image: "cpp" },
    ".cats": { image: "cpp" },
    ".idc": { image: "cpp" },
    ".w": { image: "cpp" },
    ".nc": { image: "cpp" },
    ".upc": { image: "cpp" },
    ".xpm": { image: "cpp" },
    "/\\.e?cr$/i": { image: "crystal" },
    ".cs": { image: "csharp" },
    ".csx": { image: "csharp" },
    ".cshtml": { image: "cshtml" },
    //    ".css": { "image": "css" },
    ".css.map": { image: "cssmap" },
    ".cu": { image: "cuda" },
    "/\\.di?$/i": { image: "d" },
    ".dart": { image: "dart" },
    ".dfm": { image: "delphi" },
    ".dpr": { image: "delphi" },
    ".dsc": { image: "denizen" },
    ".dm": { image: "dm" },
    ".dme": { image: "dm" },
    ".dmm": { image: "dm" },
    "/^(Dockerfile|docker-compose)|\\.docker(file|ignore)$/i": {
      image: "docker"
    },
    "/^docker-sync\\.yml$/i": { image: "docker" },
    ".editorconfig": { image: "editorconfig" },
    ".ejs": { image: "ejs" },
    ".ex": { image: "elixir" },
    "/\\.(exs|l?eex)$/i": { image: "elixir" },
    "/^mix\\.(exs?|lock)$/i": { image: "elixir" },
    ".elm": { image: "elm" },
    ".env": { image: "env" },
    ".erl": { image: "erlang" },
    ".beam": { image: "erlang" },
    ".hrl": { image: "erlang" },
    ".xrl": { image: "erlang" },
    ".yrl": { image: "erlang" },
    ".app.src": { image: "erlang" },
    "/^Emakefile$/": { image: "erlang" },
    "/^rebar(\\.config)?\\.lock$/i": { image: "erlang" },
    "/\\.(eslintrc|eslintignore)/i": { image: "eslint" },
    "/(\\.firebaserc|firebase\\.json)/i": { image: "firebase" },
    ".flowconfig": { image: "flowconfig" },
    ".fs": { image: "fsharp" },
    ".fsi": { image: "fsharp" },
    ".fsscript": { image: "fsharp" },
    ".fsx": { image: "fsharp" },
    "/gatsby-(browser|node|ssr|config)\\.js/i": { image: "gatsbyjs" },
    "/^Gemfile(\\.lock)?$/i": { image: "gemfile" },
    "/^\\.git|^\\.keep$|\\.mailmap$/i": { image: "git" },
    ".go": { image: "go" },
    ".gd": { image: "godot" },
    ".gradle": { image: "gradle" },
    gradlew: { image: "gradle" },
    ".gql": { image: "graphql" },
    ".graphql": { image: "graphql" },
    ".groovy": { image: "groovy" },
    ".gvy": { image: "groovy" },
    ".gy": { image: "groovy" },
    ".gsh": { image: "groovy" },
    "/gruntfile\\.(js|coffee)/i": { image: "gruntfile" },
    "gulpfile.js": { image: "gulp" },
    "/\\.(hbs|handlebars|(mu)?stache)$/i": { image: "handlebars" },
    ".prg": { image: "harbour" },
    ".hbp": { image: "harbour" },
    ".hbc": { image: "harbour" },
    ".rc": { image: "harbour" },
    ".fmg": { image: "harbour" },
    ".hs": { image: "haskell" },
    ".hsc": { image: "haskell" },
    ".c2hs": { image: "haskell" },
    ".lhs": { image: "haskell" },
    ".hx": { image: "haxe" },
    ".hxml": { image: "haxe" },
    "/^procfile/i": { image: "heroku" },
    "heroku.yml": { image: "heroku" },
    ".hjson": { image: "hjson" },
    "/\\.x?html?$/i": { image: "html" },
    ".http": { image: "http" },
    ".rest": { image: "http" },
    ".jar": { image: "java" },
    ".java": { image: "java" },
    "jest.config.js": { image: "jest" },
    //    ".js": { "image": "js" },
    ".es6": { image: "js" },
    ".es": { image: "js" },
    ".mjs": { image: "js" },
    ".js.map": { image: "jsmap" },
    //    ".json": { "image": "json" },
    ".jsonc": { image: "json" },
    ".jsx": { image: "jsx" },
    "/\\.(jil|jl)/i": { image: "julia" },
    ".ipynb": { image: "jupyter" },
    ".kt": { image: "kotlin" },
    ".ktm": { image: "kotlin" },
    ".kts": { image: "kotlin" },
    ".less": { image: "less" },
    ".lsp": { image: "lisp" },
    ".lisp": { image: "lisp" },
    ".l": { image: "lisp" },
    ".nl": { image: "lisp" },
    ".ny": { image: "lisp" },
    ".podsl": { image: "lisp" },
    ".sexp": { image: "lisp" },
    ".ls": { image: "livescript" },
    ".log": { image: "log" },
    ".lua": { image: "lua" },
    ".pd_lua": { image: "lua" },
    ".rbxs": { image: "lua" },
    ".wlua": { image: "lua" },
    "/^Makefile/": { image: "makefile" },
    "/^mk\\.config$/": { image: "makefile" },
    "/\\.(mk|mak|make)$/i": { image: "makefile" },
    "/^BSDmakefile$/i": { image: "makefile" },
    "/^GNUmakefile$/i": { image: "makefile" },
    "/^makefile\\.sco$/i": { image: "makefile" },
    "/^Kbuild$/": { image: "makefile" },
    "/^makefile$/": { image: "makefile" },
    "/^mkfile$/i": { image: "makefile" },
    "/^\\.?qmake$/i": { image: "makefile" },
    "/\\.(h|geo|topo)$/i": { image: "manifest" },
    ".cson": { image: "manifest" },
    ".json5": { image: "manifest" },
    ".ndjson": { image: "manifest" },
    ".fea": { image: "manifest" },
    ".json.eex": { image: "manifest" },
    ".proto": { image: "manifest" },
    ".pytb": { image: "manifest" },
    ".pydeps": { image: "manifest" },
    "/\\.pot?$/i": { image: "manifest" },
    ".ejson": { image: "manifest" },
    ".edn": { image: "manifest" },
    ".eam.fs": { image: "manifest" },
    ".qml": { image: "manifest" },
    ".qbs": { image: "manifest" },
    ".ston": { image: "manifest" },
    ".ttl": { image: "manifest" },
    ".rviz": { image: "manifest" },
    ".syntax": { image: "manifest" },
    ".webmanifest": { image: "manifest" },
    "/^pkginfo$/": { image: "manifest" },
    "/^mime\\.types$/i": { image: "manifest" },
    "/^METADATA\\.pb$/": { image: "manifest" },
    "/[\\/\\\\](?:magic[\\/\\\\]Magdir|file[\\/\\\\]magic)[\\/\\\\][-.\\w]+$/i":
      {
        image: "manifest"
      },
    "/(\\\\|\\/)dev[-\\w]+\\1(?:[^\\\\\\/]+\\1)*(?!DESC|NOTES)(?:[A-Z][-A-Z]*)(?:\\.in)?$/":
      {
        image: "manifest"
      },
    "lib/icons/.icondb.js": { image: "manifest" },
    "/\\.git[\\/\\\\](.*[\\/\\\\])?(HEAD|ORIG_HEAD|packed-refs|logs[\\/\\\\](.+[\\/\\\\])?[^\\/\\\\]+)$/":
      {
        image: "manifest"
      },
    "/\\.(md|mdown|markdown|mkd|mkdown|mdwn|mkdn|rmd|ron|pmd)$/i": {
      image: "markdown"
    },
    ".mdx": { image: "markdownx" },
    ".marko": { image: "marko" },
    ".nim": { image: "nim" },
    ".nims": { image: "nim" },
    ".nimble": { image: "nim" },
    ".nix": { image: "nix" },
    "nodemon.json": { image: "nodemon" },
    ".npmrc": { image: "npm" },
    "/\\.mm?$/i": { image: "objc" },
    ".pch": { image: "objc" },
    ".x": { image: "objc" },
    ".ml": { image: "ocaml" },
    ".mli": { image: "ocaml" },
    ".eliom": { image: "ocaml" },
    ".eliomi": { image: "ocaml" },
    ".ml4": { image: "ocaml" },
    ".mll": { image: "ocaml" },
    ".mly": { image: "ocaml" },
    "/\\.pas(cal)?$/i": { image: "pascal" },
    ".lpr": { image: "pascal" },
    ".p": { image: "pawn" },
    ".inc": { image: "pawn" },
    ".sma": { image: "pawn" },
    ".pwn": { image: "pawn" },
    ".sp": { image: "pawn" },
    "/\\.p(er)?l$/i": { image: "perl" },
    ".al": { image: "perl" },
    ".ph": { image: "perl" },
    ".plx": { image: "perl" },
    ".pm": { image: "perl" },
    "/\\.(psgi|xs)$/i": { image: "perl" },
    ".pl6": { image: "perl" },
    "/\\.[tp]6$|\\.6pl$/i": { image: "perl" },
    "/\\.(pm6|p6m)$/i": { image: "perl" },
    ".6pm": { image: "perl" },
    ".nqp": { image: "perl" },
    ".p6l": { image: "perl" },
    ".pod6": { image: "perl" },
    "/^Rexfile$/": { image: "perl" },
    "/\\.php([st\\d]|_cs)?$/i": { image: "php" },
    "/^Phakefile/": { image: "php" },
    ".pony": { image: "ponylang" },
    ".pcss": { image: "postcss" },
    ".ps1": { image: "powershell" },
    ".psd1": { image: "powershell" },
    ".psm1": { image: "powershell" },
    ".ps1xml": { image: "powershell" },
    ".prettierignore": { image: "prettier" },
    "/\\.prettier((rc)|(\\.(toml|yml|yaml|json|js))?$){2}/i": {
      image: "prettier"
    },
    "prettier.config.js": { image: "prettier" },
    "prisma.yml": { image: "prisma" },
    ".pde": { image: "processing" },
    ".jade": { image: "pug" },
    ".pug": { image: "pug" },
    ".purs": { image: "purescript" },
    ".py": { image: "python" },
    ".ipy": { image: "python" },
    ".isolate": { image: "python" },
    ".pep": { image: "python" },
    ".gyp": { image: "python" },
    ".gypi": { image: "python" },
    ".pyde": { image: "python" },
    ".pyp": { image: "python" },
    ".pyt": { image: "python" },
    ".py3": { image: "python" },
    ".pyi": { image: "python" },
    ".pyw": { image: "python" },
    ".tac": { image: "python" },
    ".wsgi": { image: "python" },
    ".xpy": { image: "python" },
    ".rpy": { image: "python" },
    "/\\.?(pypirc|pythonrc|python-venv)$/i": { image: "python" },
    "/^(SConstruct|SConscript)$/": { image: "python" },
    "/^(Snakefile|WATCHLISTS)$/": { image: "python" },
    "/^wscript$/": { image: "python" },
    "/\\.(r|Rprofile|rsx|rd)$/i": { image: "r" },
    ".re": { image: "reasonml" },
    "/\\.(rb|ru|ruby|erb|gemspec|god|mspec|pluginspec|podspec|rabl|rake|opal)$/i":
      {
        image: "ruby"
      },
    "/^\\.?(irbrc|gemrc|pryrc|ruby-(gemset|version))$/i": { image: "ruby" },
    "/^(Appraisals|(Rake|[bB]uild|Cap|Danger|Deliver|Fast|Guard|Jar|Maven|Pod|Puppet|Snap)file(\\.lock)?)$/":
      {
        image: "ruby"
      },
    "/\\.(jbuilder|rbuild|rb[wx]|builder)$/i": { image: "ruby" },
    "/^rails$/": { image: "ruby" },
    ".watchr": { image: "ruby" },
    ".rs": { image: "rust" },
    "/\\.(sc|scala)$/i": { image: "scala" },
    ".scss": { image: "scss" },
    ".sass": { image: "scss" },
    "/\\.(sh|rc|bats|bash|tool|install|command)$/i": { image: "shell" },
    "/^(\\.?bash(rc|[-_]?(profile|login|logout|history|prompt))|_osc|config|install-sh|PKGBUILD)$/i":
      {
        image: "shell"
      },
    "/\\.(ksh|mksh|pdksh)$/i": { image: "shell" },
    ".sh-session": { image: "shell" },
    "/\\.zsh(-theme|_history)?$|^\\.?(antigen|zpreztorc|zlogin|zlogout|zprofile|zshenv|zshrc)$/i":
      {
        image: "shell"
      },
    "/\\.fish$|^\\.fishrc$/i": { image: "shell" },
    "/^\\.?(login|profile)$/": { image: "shell" },
    ".inputrc": { image: "shell" },
    ".tmux": { image: "shell" },
    "/^(configure|config\\.(guess|rpath|status|sub)|depcomp|libtool|compile)$/":
      {
        image: "shell"
      },
    "/^\\/(private\\/)?etc\\/([^\\/]+\\/)*(profile$|nanorc$|rc\\.|csh\\.)/i": {
      image: "shell"
    },
    "/^\\.?cshrc$/i": { image: "shell" },
    ".profile": { image: "shell" },
    ".tcsh": { image: "shell" },
    ".csh": { image: "shell" },
    ".sqf": { image: "sqf" },
    "/\\.(my)?sql$/i": { image: "sql" },
    ".ddl": { image: "sql" },
    ".udf": { image: "sql" },
    ".hql": { image: "sql" },
    ".viw": { image: "sql" },
    ".prc": { image: "sql" },
    ".cql": { image: "sql" },
    ".db2": { image: "sql" },
    "/\\.(styl|stylus)$/i": { image: "stylus" },
    ".svelte": { image: "svelte" },
    ".svg": { image: "svg" },
    ".swift": { image: "swift" },
    ".tex": { image: "tex" },
    ".ltx": { image: "tex" },
    ".aux": { image: "tex" },
    ".sty": { image: "tex" },
    ".dtx": { image: "tex" },
    ".cls": { image: "tex" },
    ".ins": { image: "tex" },
    ".lbx": { image: "tex" },
    ".mkiv": { image: "tex" },
    ".mkvi": { image: "tex" },
    ".mkii": { image: "tex" },
    ".texi": { image: "tex" },
    "/^hyphen(ex)?\\.(cs|den|det|fr|sv|us)$/": { image: "tex" },
    "/\\.te?xt$/i": { image: "text" },
    ".rtf": { image: "text" },
    "/\\.i?nfo$/i": { image: "text" },
    ".msg": { image: "text" },
    "/\\.(utxt|utf8)$/i": { image: "text" },
    ".toml": { image: "toml" },
    ".travis.yml": { image: "travis" },
    ".ts": { image: "ts" },
    ".tsx": { image: "tsx" },
    ".twig": { image: "twig" },
    ".v": { image: "v" },
    ".vh": { image: "v" },
    ".vala": { image: "vala" },
    ".vapi": { image: "vala" },
    ".vb": { image: "vb" },
    ".vbs": { image: "vb" },
    ".vbhtml": { image: "vb" },
    ".vbproj": { image: "vb" },
    ".vba": { image: "vba" },
    ".vcxproj": { image: "vcxproj" },
    ".vscodeignore": { image: "vscodeignore" },
    ".vue": { image: "vue" },
    ".wat": { image: "wasm" },
    ".wast": { image: "wasm" },
    ".wasm": { image: "wasm" },
    "/webpack(\\.dev|\\.development|\\.prod|\\.production)?\\.config(\\.babel)?\\.(js|jsx|coffee|ts|json|json5|yaml|yml)/i":
      {
        image: "webpack"
      },
    ".xml": { image: "xml" },
    "/\\.ya?ml$/i": { image: "yaml" },
    "/^yarn(\\.lock)?$/i": { image: "yarn" },
    ".yarnrc": { image: "yarn" },
    ".zig": { image: "zig" },

    ".json": { image: "json" },
    ".js": { image: "js" },
    ".css": { image: "css" }
  };

let lastFileChange: number = null,
  lastFile: string = null;

presence.on("UpdateData", async () => {
  const data: PresenceData = {
      smallImageKey: "gh",
      smallImageText: "GitHub Codespaces"
    },
    isPreparing = document.querySelector(".vscs-splash-screen-steps-pane"),
    activeTab = document.querySelector(".tab.active"),
    editorMode = document.getElementById("status.editor.mode");

  // Preparing Screen
  if (isPreparing) {
    data.largeImageKey = "gh-lg";
    data.details = "Preparing a codespace...";
    delete data.smallImageKey;

    if (document.querySelector(".vso-splash-screen__button"))
      data.details = "Inactive Codespace";
    // Idle/Start Screen
  } else if (activeTab && editorMode) {
    const scmTabs = Array.from(document.querySelectorAll("#status\\.scm")).reverse(),
      scmTab = scmTabs.find(scmTab => scmTab && scmTab.hasAttribute("aria-label")),
      workspace = scmTab ? scmTab.getAttribute("aria-label").split("(Git)")[0] : null,
      filename = activeTab.getAttribute("data-resource-name"),
      filepath = activeTab.getAttribute("title"),
      syntaxMode = editorMode.getAttribute("aria-label").toLowerCase(),
      largeImageKey =
        knownExtensions[
          Object.keys(knownExtensions).find((key) => {
            if (filename.endsWith(key)) return true;
            const match = /^\/(.*)\/([mgiy]+)$/.exec(key);
            if (!match) return false;
            const regex = new RegExp(match[1], match[2]);
            return regex.test(filename);
          })
        ] ?? (syntaxMode in langMap ? langMap[syntaxMode] : null);

    if (lastFile !== filepath) {
      lastFile = filepath;
      lastFileChange = Date.now();
    }

    data.startTimestamp = lastFileChange;
    data.largeImageKey = largeImageKey ? largeImageKey.image : "txt";
    data.details = (await presence.getSetting("details"))
      .replace(/%file%/g, filename)
      .replace(/%path%/g, filepath)
      .replace(/%folder%/g, filepath.split("/").reverse()[1])
      .replace(
        /%ext%/g,
        (largeImageKey ? largeImageKey.image : "txt").toUpperCase()
      )
      .replace(
        /%workspace%/g,
        workspace || "N/A"
      )
      .replace(
        /%workspaceOrFolder%/g,
        workspace || filepath.split("/").reverse()[1]
      );
    data.state = (await presence.getSetting("state"))
      .replace(/%file%/g, filename)
      .replace(/%path%/g, filepath)
      .replace(/%folder%/g, filepath.split("/").reverse()[1])
      .replace(
        /%ext%/g,
        (largeImageKey ? largeImageKey.image : "txt").toUpperCase()
      )
      .replace(
        /%workspace%/g,
        workspace || "N/A"
      )
      .replace(
        /%workspaceOrFolder%/g,
        workspace || filepath.split("/").reverse()[1]
      );
  } else if (!editorMode) {
    data.largeImageKey = "idle";
    data.details = "Idling";
  }

  if (!data.largeImageKey) {
    presence.setTrayTitle();
    presence.setActivity();
  } else presence.setActivity(data);
});
