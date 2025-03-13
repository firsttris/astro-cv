import {
  buildTools,
  databases,
  ide,
  integration,
  languages,
  libraries,
  projectMethology,
  api,
  styling,
  testing,
  tools,
} from './technologies';

export const mySkills = [
  {
    title: "languages",
    skills: [
      languages.typescript,
      languages.javascript,
      languages.nodejs,
      languages.python,
      languages.java,
      languages.go,
      languages.csharp,
    ],
  },
  {
    title: "libraries",
    skills: [
      libraries.react,
      libraries.solid,
      libraries.gatsby,
      libraries.astro,
      libraries.svelte,
      libraries.angular,
      libraries.vue,
      libraries.nextjs,
      libraries.nx,
      libraries.spring,
    ],
  },
  {
    title: "styling",
    skills: [
      styling.css,
      styling.scss,
      styling.tailwind,
      styling.styled
    ],
  },
  {
    title: "testing",
    skills: [
      testing.jest,
      testing.cypress,
      testing.playwright,
      testing.selenium,
      testing.junit,
      testing.readyApi
    ],
  },
  {
    title: "databases",
    skills: [databases.mongodb, databases.sql],
  },
  {
    title: "integration",
    skills: [
      integration.aws,
      integration.azure,
      integration.docker,
      integration.gitlab,
      integration.github,
      integration.linux,
    ],
  },
  {
    title: "build-tools",
    skills: [
      ...Object.values(buildTools),
    ],
  },
  {
    title: "apis",
    skills: [
      ...Object.values(api),
    ],
  },
  {
    title: "ide",
    skills: [ide.intellij, ide.vscode],
  },
  {
    title: 'tools',
    skills: [
      tools.jira,
      tools.confluence,
    ],
  },
  {
    title: "projectMethology",
    skills: [
      projectMethology.scrum,
      projectMethology.kanban,
      projectMethology.agile,
      projectMethology.waterfall,
    ],
  },
];