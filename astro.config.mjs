// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), icon({
    include: {
      'vscode-icons': [
        'file-type-typescript-official',
        'file-type-js-official',
        'file-type-node2',
        'file-type-python',
        'file-type-go',
        'file-type-csharp',
        'file-type-php',
        'file-type-swift',
        'file-type-reactts',
        'file-type-reactjs',
        'file-type-gatsby',
        'file-type-astro',
        'file-type-svelte',
        'file-type-angular',
        'file-type-vue',
        'file-type-light-next',
        'file-type-light-nx',
        'file-type-css',
        'file-type-scss2',
        'file-type-styled',
        'file-type-tailwind',
        'file-type-test',
        'file-type-jest',
        'file-type-cypress',
        'file-type-playwright',
        'file-type-mongo',
        'file-type-sql',
        'file-type-json',
        'file-type-gitlab',
        'folder-type-github',
        'folder-type-linux',
        'file-type-docker2',
        'file-type-azure',
        'file-type-jenkins',
        'file-type-maven',
        'file-type-webpack',
        'file-type-vite',
        'file-type-rest',
        'folder-type-api-opened',
        'file-type-graphql',
        'folder-type-vscode',
        'file-type-nginx',
        'file-type-light-nx',
        'file-type-gradle',
        'file-type-xml',

      ],
      devicon: [
        'java-wordmark',
        'materialui',
        'angularmaterial',
        'bootstrap-wordmark',
        'junit',
        'amazonwebservices-wordmark',
        'intellij',
        'socketio',
        'sqldeveloper',
        'traefikproxy',
        'groovy',
        "githubactions",
        "spring",
        "selenium",
        'primeng',
        'postgresql-wordmark',
        'githubactions',
        "jenkins"
      ],
      logos: [
        'react-query-icon',
        'apollostack',
        'leaflet',
        'atlassian',
        'immutable',
        'sequelize',
        'hapi',
        'jquery',
        'laravel',
        'cordova',
        'babel',
        'visual-studio',
        'knockout',
        'kubernetes',
        'subversion',
        'bitbucket',
        'jira',
        'confluence',
        'wordpress-icon',
        'eclipse-icon',
        'xray-for-jira',
        'react',
        'rollup',
        'parcel-icon',
        'grpc',
        'flask',
        'fastapi'
      ],
      'material-symbols': [
        'stacked-line-chart',
        'grid-4x4',
        'view-kanban-outline',
        'waterfall-chart'
      ],
      'simple-icons': [
        'oracle',
        'scrumalliance',
        'esbuild',
        'turborepo',
        'mqtt'
      ],
      'skill-icons': [
        'redux',
        'emotion-light'
      ],
      cib: ['gerrit'],
      iconoir: ['agile'],
      mdi: ['kodi'],
      openmoji: [
        'envelope',
        'mobile-phone',
        'github',
        'linkedin']
    }
  })]
});