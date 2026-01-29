import {
  buildTools,
  databases,
  languages,
  libraries,
  projectMethology,
  api,
  styling,
  testing,
  type Skill,
  uiFrameworks,
  cloud,
  container,
  versionControl,
  cicd,
  aiTools,
} from './technologies';

interface MySkills {
  title: string;
  skills: Skill[];
}

export const mySkills: MySkills[] = [
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
      uiFrameworks.react,
      uiFrameworks.solid,
      uiFrameworks.gatsby,
      uiFrameworks.astro,
      uiFrameworks.svelte,
      uiFrameworks.angular,
      uiFrameworks.vue,
      uiFrameworks.nextjs,
      libraries.nx,
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
    title: "databases",
    skills: 
    [
      databases.mongodb, 
      databases.sql
    ],
  },
  {
    title: "apis",
    skills: [
      ...Object.values(api),
    ],
  },
  {
    title: "testing",
    skills: [
      testing.jest,
      testing.vitest,
      testing.cypress,
      testing.playwright,
      testing.selenium,
    ],
  },
  {
    title: "cloud",
    skills: [
      cloud.aws,
      cloud.azure
    ],
  },
  {
    title: 'container',
    skills: [
      container.docker,
      container.podman,
      container.kubernetes,
    ],
  },
  {
    title: 'cicd',
    skills: [
      cicd.githubActions,
      versionControl.gitlab,
      cicd.travis,
      cicd.jenkins,
    ]
  },
  {
    title: "build-tools",
    skills: [
      buildTools.webpack,
      buildTools.vite,
      buildTools.nx,
      buildTools.babel
    ],
  },
  {
    title: "ai-tools",
    skills: [
      aiTools.copilot,
      aiTools.claudeCode,
      aiTools.geminiCli,
    ],
  },
  {
    title: "versionControl",
    skills: [
      ...Object.values(versionControl)
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