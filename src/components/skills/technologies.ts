export enum Level {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Expert = "Expert",
}

export interface Skill {
  name: string;
  icon: string;
  website: string;
  level: Level;
}

export const languages: Record<string, Skill>  = {
  typescript: {
    name: "TypeScript",
    icon: "vscode-icons:file-type-typescript-official",
    website: "https://www.typescriptlang.org/",
    level: Level.Expert,
  },
  javascript: {
    name: "JavaScript",
    icon: "vscode-icons:file-type-js-official",
    website: "https://www.javascript.com/",
    level: Level.Expert
  },
  nodejs: {
    name: "NodeJs",
    icon: "vscode-icons:file-type-node2",
    website: "https://nodejs.org/",
    level: Level.Expert
  },
  python: {
    name: "Python",
    icon: "vscode-icons:file-type-python",
    website: "https://www.python.org/",
    level: Level.Intermediate,
  },
  java: {
    name: "Java",
    icon: "devicon:java-wordmark",
    website: "https://www.oracle.com/java/",
    level: Level.Intermediate,
  },
  go: {
    name: "Go",
    icon: "vscode-icons:file-type-go",
    website: "https://golang.org/",
    level: Level.Intermediate,
  },
  csharp: {
    name: "C#",
    icon: "vscode-icons:file-type-csharp",
    website: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    level: Level.Intermediate,
  },
  php: {
    name: "PHP",
    icon: "vscode-icons:file-type-php",
    website: "https://www.php.net/",
    level: Level.Intermediate,
  },
  groovy: {
    name: "Groovy",
    icon: "devicon:groovy",
    website: "https://groovy-lang.org/",
    level: Level.Intermediate,
  },
  swift: {
    name: "Swift",
    icon: "vscode-icons:file-type-swift",
    website: "https://swift.org/",
    level: Level.Beginner,
  },
};

export const uiFrameworks = {
  react: {
    name: "React",
    icon: "vscode-icons:file-type-reactts",
    website: "https://reactjs.org/",
    level: Level.Expert
  },
  solid: {
    name: "Solid.js",
    icon: "vscode-icons:file-type-reactjs",
    website: "https://www.solidjs.com/",
    level: Level.Expert
  },
  gatsby: {
    name: "Gatsby",
    icon: "vscode-icons:file-type-gatsby",
    website: "https://www.gatsbyjs.com/",
    level: Level.Expert
  },
  astro: {
    name: "Astro",
    icon: "vscode-icons:file-type-astro",
    website: "https://astro.build/",
    level: Level.Expert
  },
  svelte: {
    name: "Svelte",
    icon: "vscode-icons:file-type-svelte",
    website: "https://svelte.dev/",
    level: Level.Intermediate,
  },
  angular: {
    name: "Angular",
    icon: "vscode-icons:file-type-angular",
    website: "https://angular.io/",
    level: Level.Expert
  },
  vue: {
    name: "Vue",
    icon: "vscode-icons:file-type-vue",
    website: "https://vuejs.org/",
    level: Level.Intermediate,
  },
  nextjs: {
    name: "NextJs",
    icon: "vscode-icons:file-type-light-next",
    website: "https://nextjs.org/",
    level: Level.Intermediate,
  },
}

export const libraries = {
  dotnet: {
    name: ".NET",
    icon: "devicon:dot-net",
    website: "https://dotnet.microsoft.com/",
    level: Level.Intermediate,
  },
  aspnet: {
    name: "ASP.NET",
    icon: "devicon:dot-net",
    website: "https://dotnet.microsoft.com/apps/aspnet",
    level: Level.Beginner,
  },
  spring: {
    name: "Spring-Boot",
    icon: "devicon:spring",
    website: "https://spring.io/projects/spring-boot",
    level: Level.Intermediate,
  },
  nx: {
    name: "NX",
    icon: "vscode-icons:file-type-light-nx",
    website: "https://nx.dev/",
    level: Level.Expert
  },
  reactQuery: {
    name: "React-Query",
    icon: "logos:react-query-icon",
    website: "https://react-query.tanstack.com/",
    level: Level.Expert
  },
  apollo: {
    name: "Apollo",
    icon: "logos:apollostack",
    website: "https://www.apollographql.com/",
    level: Level.Intermediate,
  },
  leaflet: {
    name: "Leaflet",
    icon: "logos:leaflet",
    website: "https://leafletjs.com/",
    level: Level.Intermediate,
  },
  recharts: {
    name: "Recharts",
    icon: "material-symbols:stacked-line-chart",
    website: "https://recharts.org/",
    level: Level.Intermediate,
  },
  reactBeautifulDnd: {
    name: "React-Beautiful-Dnd",
    icon: "logos:atlassian",
    website: "https://github.com/atlassian/react-beautiful-dnd",
    level: Level.Intermediate,
  },
  redux: {
    name: "Redux",
    icon: "skill-icons:redux",
    website: "https://redux.js.org/",
    level: Level.Expert
  },
  agGrid: {
    name: "Ag-Grid",
    icon: "material-symbols:grid-4x4",
    website: "https://www.ag-grid.com/",
    level: Level.Expert
  },
  knockoutJs: {
    name: "KnockoutJs",
    icon: "logos:knockout",
    website: "https://knockoutjs.com/",
    level: Level.Intermediate,
  },
  laravel: {
    name: "Laravel",
    icon: "logos:laravel",
    website: "https://laravel.com/",
    level: Level.Intermediate,
  },
  reselect: {
    name: "Reselect",
    icon: "logos:react",
    website: "https://github.com/reduxjs/reselect",
    level: Level.Expert,
  },
  immutablejs: {
    name: "Immutable.js",
    icon: "logos:immutable",
    website: "https://immutable-js.github.io/immutable-js/",
    level: Level.Expert,
  },
  sequelize: {
    name: "Sequelize",
    icon: "logos:sequelize",
    website: "https://sequelize.org/",
    level: Level.Expert,
  },
  hapi: {
    name: "HapiJs",
    icon: "logos:hapi",
    website: "https://hapi.dev/",
    level: Level.Expert,
  },
  jquery: {
    name: "jQuery",
    icon: "logos:jquery",
    website: "https://jquery.com/",
    level: Level.Expert,
  },
  oracleAdf: {
    name: "Oracle ADF",
    icon: "simple-icons:oracle",
    website: "https://www.oracle.com/middleware/technologies/adf.html",
    level: Level.Intermediate,
  },
  cordova: {
    name: "Cordova",
    icon: "logos:cordova",
    website: "https://cordova.apache.org/",
    level: Level.Intermediate,
  },
  flask: {
    name: "Flask",
    icon: "logos:flask",
    website: "https://flask.palletsprojects.com/",
    level: Level.Intermediate,
  },
  fastApi: {
    name: "FastAPI",
    icon: "logos:fastapi",
    website: "https://fastapi.tiangolo.com/",
    level: Level.Intermediate,
  }
};

export const styling = {
  css: {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
    website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    level: Level.Expert,
  },
  scss: {
    name: "SCSS",
    icon: "vscode-icons:file-type-scss2",
    website: "https://sass-lang.com/",
    level: Level.Expert,
  },
  mui: {
    name: "Material-UI (MUI)",
    icon: "devicon:materialui",
    website: "https://mui.com/",
    level: Level.Expert,
  },
  angularMaterial: {
    name: "Angular-Material",
    icon: "devicon:angularmaterial",
    website: "https://material.angular.io/",
    level: Level.Expert,
  },
  styled: {
    name: "Styled-Components",
    icon: "vscode-icons:file-type-styled",
    website: "https://styled-components.com/",
    level: Level.Expert,
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: "vscode-icons:file-type-tailwind",
    website: "https://tailwindcss.com/",
    level: Level.Expert,
  },
  bootstrap: {
    name: "Bootstrap",
    icon: "devicon:bootstrap-wordmark",
    website: "https://getbootstrap.com/",
    level: Level.Expert,
  },
  emotion: {
    name: "Emotion",
    icon: "skill-icons:emotion-light",
    website: "https://emotion.sh/docs/introduction",
    level: Level.Expert,
  },
  primeNg: {
    name: "PrimeNG",
    icon: "devicon:primeng",
    website: "https://www.primefaces.org/primeng/",
    level: Level.Intermediate,
  }
};

export const accessibility = {
  wcag: {
    name: "WCAG",
    icon: "material-symbols:accessibility-new", 
    website: "https://www.w3.org/WAI/standards-guidelines/wcag/",
    level: Level.Intermediate,
  },
  aria: {
    name: "ARIA",
    icon: "material-symbols:accessibility", 
    website: "https://www.w3.org/WAI/standards-guidelines/aria/",
    level: Level.Intermediate,
  },
  accessibilityTesting: {
    name: "A11y Testing",
    icon: "vscode-icons:file-type-test",
    website: "https://www.w3.org/WAI/test-evaluate/",
    level: Level.Intermediate,
  }
};

export const testing = {
  testingLibrary: {
    name: "Testing-Library",
    icon: "vscode-icons:file-type-test",
    website: "https://testing-library.com/",
    level: Level.Expert,
  },
  jest: {
    name: "Jest",
    icon: "vscode-icons:file-type-jest",
    website: "https://jestjs.io/",
    level: Level.Expert,
  },
  cypress: {
    name: "Cypress",
    icon: "vscode-icons:file-type-cypress",
    website: "https://www.cypress.io/",
    level: Level.Expert,
  },
  playwright: {
    name: "Playwright",
    icon: "vscode-icons:file-type-playwright",
    website: "https://playwright.dev/",
    level: Level.Expert,
  },
  xRay: {
    name: "X-Ray",
    icon: "logos:xray-for-jira",
    website: "https://aws.amazon.com/xray/",
    level: Level.Intermediate,
  },
  junit: {
    name: "JUnit",
    icon: "devicon:junit",
    website: "https://junit.org/junit5/",
    level: Level.Intermediate,
  },
  selenium: {
    name: "Selenium",
    icon: "devicon:selenium",
    website: "https://www.selenium.dev/",
    level: Level.Intermediate,
  },
  readyApi: {
    name: "ReadyAPI",
    icon: "vscode-icons:folder-type-api-opened",
    website: "https://smartbear.com/product/ready-api/",
    level: Level.Intermediate,
  },
};

export const databases = {
  mongodb: {
    name: "MongoDB",
    icon: "vscode-icons:file-type-mongo",
    website: "https://www.mongodb.com/",
    level: Level.Expert,
  },
  postGresSql: {
    name: "PostgreSQL",
    icon: "devicon:postgresql-wordmark",
    website: "https://www.postgresql.org/",
    level: Level.Expert,
  },
  sql: {
    name: "SQL",
    icon: "vscode-icons:file-type-sql",
    website: "https://www.sql.com/",
    level: Level.Expert,
  },
  lowdb: {
    name: "LowDB",
    icon: "vscode-icons:file-type-json",
    website: "https://github.com/typicode/lowdb",
    level: Level.Expert,
  },
};

export const versionControl = {
  gitlab: {
    name: "Gitlab",
    icon: "vscode-icons:file-type-gitlab",
    website: "https://about.gitlab.com/",
    level: Level.Expert,
  },
  github: {
    name: "Github",
    icon: "vscode-icons:folder-type-github",
    website: "https://github.com/",
    level: Level.Expert,
  },
  svn: {
    name: "Subversion",
    icon: "logos:subversion",
    website: "https://subversion.apache.org/",
    level: Level.Expert,
  },
  bitbucket: {
    name: "Bitbucket",
    icon: "logos:bitbucket",
    website: "https://bitbucket.org/",
    level: Level.Expert,
  },
  gerrit: {
    name: "Gerrit",
    icon: "cib:gerrit",
    website: "https://www.gerritcodereview.com/",
    level: Level.Intermediate,
  },
}

export const os = {
  linux: {
    name: "Linux",
    icon: "vscode-icons:folder-type-linux",
    website: "https://www.linux.org/",
    level: Level.Expert,
  },
  windows: {
    name: "Windows",
    icon: "vscode-icons:file-type-windows",
    website: "https://www.microsoft.com/en-us/windows",
    level: Level.Expert,
  },
  macos: {
    name: "macOS",
    icon: "vscode-icons:file-type-osx",
    website: "https://www.apple.com/macos/",
    level: Level.Expert,
  },
}

export const container = {
  docker: {
    name: "Docker",
    icon: "vscode-icons:file-type-docker2",
    website: "https://www.docker.com/",
    level: Level.Expert,
  },
  dockerCompose: {
    name: "Docker Compose",
    icon: "vscode-icons:file-type-docker2",
    website: "https://docs.docker.com/compose/",
    level: Level.Expert,
  },
  podman: {
    name: "Podman",
    icon: "devicon:podman",
    website: "https://podman.io/",
    level: Level.Expert,
  },
  kubernetes: {
    name: "Kubernetes",
    icon: "logos:kubernetes",
    website: "https://kubernetes.io/",
    level: Level.Expert,
  },
  helm: {
    name: "Helm",
    icon: "devicon:helm",
    website: "https://helm.sh/",
    level: Level.Beginner,
  },
  openShift: {
    name: "OpenShift",
    icon: "logos:openshift",
    website: "https://www.openshift.com/",
    level: Level.Beginner,
  },
  terraform: {
    name: "Terraform",
    icon: "logos:terraform",
    website: "https://www.terraform.io/",
    level: Level.Beginner,
  },
}

export const cloud = {
  aws: {
    name: "AWS",
    icon: "devicon:amazonwebservices-wordmark",
    website: "https://aws.amazon.com/",
    level: Level.Intermediate,
  },
  azure: {
    name: "Azure",
    icon: "vscode-icons:file-type-azure",
    website: "https://azure.microsoft.com/",
    level: Level.Expert,
  },

};

export const buildTools = {
  webpack: {
    name: "Webpack",
    icon: "vscode-icons:file-type-webpack",
    website: "https://webpack.js.org/",
    level: Level.Expert,
  },
  vite: {
    name: "Vite",
    icon: "vscode-icons:file-type-vite",
    website: "https://vitejs.dev/",
    level: Level.Expert,
  },
  maven: {
    name: "Maven",
    icon: "vscode-icons:file-type-maven",
    website: "https://maven.apache.org/",
    level: Level.Intermediate,
  },
  nx: {
    name: "Nx",
    icon: "vscode-icons:file-type-light-nx",
    website: "https://nx.dev/",
    level: Level.Expert,
  },
  rollup: {
    name: "Rollup",
    icon: "logos:rollup",
    website: "https://rollupjs.org/",
    level: Level.Intermediate,
  },
  esbuild: {
    name: "esbuild",
    icon: "simple-icons:esbuild",
    website: "https://esbuild.github.io/",
    level: Level.Intermediate,
  },
  parcel: {
    name: "Parcel",
    icon: "logos:parcel-icon",
    website: "https://parceljs.org/",
    level: Level.Intermediate,
  },
  turbopack: {
    name: "Turbopack",
    icon: "simple-icons:turborepo",
    website: "https://turbo.build/pack",
    level: Level.Intermediate,
  },
  gradle: {
    name: "Gradle",
    icon: "vscode-icons:file-type-gradle",
    website: "https://gradle.org/",
    level: Level.Intermediate,
  },
  babel: {
    name: "Babel",
    icon: "logos:babel",
    website: "https://babeljs.io/",
    level: Level.Expert,
  },
};

export const api = {
  rest: {
    name: "REST",
    icon: "vscode-icons:file-type-rest",
    website: "https://restfulapi.net/",
    level: Level.Expert,
  },
  jsonrpc: {
    name: "JSON-RPC",
    icon: "vscode-icons:file-type-json",
    website: "https://www.jsonrpc.org/",
    level: Level.Expert,
  },
  websocket: {
    name: "WebSocket",
    icon: "devicon:socketio",
    website: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
    level: Level.Expert,
  },
  openapi: {
    name: "Open-API",
    icon: "vscode-icons:folder-type-api-opened",
    website: "https://www.openapis.org/",
    level: Level.Expert,
  },
  graphql: {
    name: "GraphQL",
    icon: "vscode-icons:file-type-graphql",
    website: "https://graphql.org/",
    level: Level.Expert,
  },
  soap: {
    name: "SOAP",
    icon: "vscode-icons:file-type-xml",
    website: "https://www.w3.org/TR/soap/",
    level: Level.Expert,
  },
  grpc: {
    name: "gRPC",
    icon: "logos:grpc",
    website: "https://grpc.io/",
    level: Level.Intermediate,
  },
  mqtt: {
    name: "MQTT",
    icon: "simple-icons:mqtt",
    website: "https://mqtt.org/",
    level: Level.Intermediate,
  },
};

export const ide = {
  vscode: {
    name: "Visual Studio Code",
    icon: "vscode-icons:folder-type-vscode",
    website: "https://code.visualstudio.com/",
    level: Level.Expert,
  },
  visualStudio: {
    name: "Visual Studio",
    icon: "logos:visual-studio",
    website: "https://visualstudio.microsoft.com/",
    level: Level.Intermediate,
  },
  intellij: {
    name: "Jetbrains IntelliJ",
    icon: "devicon:intellij",
    website: "https://www.jetbrains.com/idea/",
    level: Level.Intermediate,
  },
  eclipse: {
    name: "Eclipse",
    icon: "logos:eclipse-icon",
    website: "https://www.eclipse.org/",
    level: Level.Intermediate,
  },
};

export const projectMethology = {
  scrum: {
    name: "Scrum",
    icon: "simple-icons:scrumalliance",
    website: "https://www.scrum.org/",
    level: Level.Expert,
  },
  kanban: {
    name: "Kanban",
    icon: "material-symbols:view-kanban-outline",
    website:
      "https://kanbanize.com/kanban-resources/getting-started/what-is-kanban",
    level: Level.Expert,
  },
  agile: {
    name: "Agile",
    icon: "iconoir:agile",
    website: "https://www.agilealliance.org/",
    level: Level.Expert,
  },
  waterfall: {
    name: "Waterfall",
    icon: "material-symbols:waterfall-chart",
    website: "https://www.waterfall2006.com/",
    level: Level.Expert,
  },
};

export const authentication = {
  msal: {
    name: "MSAL",
    icon: "vscode-icons:file-type-azure",
    website:
      "https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-overview",
    level: Level.Expert,
  },
  keycloak: {
    name: "Keycloak",
    icon: "logos:keycloak",
    website: "https://www.keycloak.org/",
    level: Level.Expert,
  }
};

export const tools = {
  jira: {
    name: "Jira",
    icon: "logos:jira",
    website: "https://www.atlassian.com/software/jira",
    level: Level.Expert,
  },
  confluence: {
    name: "Confluence",
    icon: "logos:confluence",
    website: "https://www.atlassian.com/software/confluence",
    level: Level.Expert,
  },
  wordpress: {
    name: "Wordpress",
    icon: "logos:wordpress-icon",
    website: "https://wordpress.com/",
    level: Level.Intermediate,
  },
  sqlDeveloper: {
    name: "Oracle SQL Developer",
    icon: "devicon:sqldeveloper",
    website: "https://www.oracle.com/tools/downloads/sqldev-downloads.html",
    level: Level.Expert,
  },
  soapUI: {
    name: "SoapUI",
    icon: "vscode-icons:folder-type-api-opened",
    website: "https://www.soapui.org/",
    level: Level.Expert,
  },
  oracleSoaSuite: {
    name: "Oracle SOA Suite",
    icon: "simple-icons:oracle",
    website: "https://www.oracle.com/middleware/technologies/soasuite.html",
    level: Level.Intermediate,
  }
};

export const webserver = {
  nginx: {
    name: "Nginx",
    icon: "vscode-icons:file-type-nginx",
    website: "https://www.nginx.com/",
    level: Level.Intermediate,
  },
  traefik: {
    name: "Traefik",
    icon: "devicon:traefikproxy",
    website: "https://traefik.io/",
    level: Level.Expert,
  },
};

export const cicd = {
  githubActions: {
    name: "Github-Actions",
    icon: "devicon:githubactions",
    website: "https://docs.github.com/en/actions",
    level: Level.Expert,
  },
  jenkins: {
    name: "Jenkins",
    icon: "devicon:jenkins",
    website: "https://www.jenkins.io/",
    level: Level.Intermediate,
  },
  travis: {
    name: "Travis",
    icon: "devicon:travis",
    website: "https://travis-ci.org/",
    level: Level.Intermediate,
  }
}