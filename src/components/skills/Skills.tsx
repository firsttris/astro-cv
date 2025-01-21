import { SkillGrid } from "./SkillGrid";
import { getLangFromUrl, useTranslations } from "../../i18n/utils";
import {
  bundlers,
  databases,
  ide,
  integration,
  languages,
  libraries,
  projectMethology,
  protocols,
  styling,
  testing,
} from "./technologies";

export const Skills = () => {
  const lang = getLangFromUrl('de');
  const t = useTranslations(lang);

  const skills = [
    {
      title: t("languages"),
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
      title: t("libraries"),
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
      ],
    },
    {
      title: t("styling"),
      skills: [
        styling.css,
        styling.scss,
        styling.mui,
        styling.styled,
        styling.tailwind,
      ],
    },
    {
      title: t("testing"),
      skills: [
        testing.testingLibrary,
        testing.jest,
        testing.cypress,
        testing.playwright,
      ],
    },
    {
      title: t("databases"),
      skills: [databases.mongodb, databases.sql],
    },
    {
      title: t("integration"),
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
      title: t("bundlers"),
      skills: [bundlers.vite, bundlers.webpack],
    },
    {
      title: t("protocols"),
      skills: [
        protocols.rest,
        protocols.jsonrpc,
        protocols.websocket,
        protocols.openapi,
        protocols.graphql,
      ],
    },
    {
      title: t("ide"),
      skills: [ide.intellij, ide.vscode],
    },
    {
      title: t("projectMethology"),
      skills: [
        projectMethology.scrum,
        projectMethology.kanban,
        projectMethology.agile,
        projectMethology.waterfall,
      ],
    },
  ];

  return (
    <div>
      {skills.map((skill, index) => (
        <SkillGrid key={index} {...skill} />
      ))}
    </div>
  );
};
