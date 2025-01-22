export const defaultLang = (() => typeof window !== "undefined" && navigator.language.includes('de') ? 'de' : 'en')(); 

export const translations = {
    en: {
        'business-title': 'Senior Software Developer',
        'academic-title': 'Business Informatics (B.Sc.)',
        cv: 'Curriculum Vitae',
        languages: 'Languages',
        libraries: 'Libraries',
        styling: 'Styling',
        testing: 'Testing',
        databases: 'Databases',
        integration: 'Integration',
        bundlers: 'Bundlers',
        protocols: 'Protocols',
        ide: 'IDE',
        projectMethology: 'Project Methology',
    },
    de: {
        'business-title': 'Senior Software Entwickler',
        'academic-title': 'Wirtschaftsinformatik (B.Sc.)',
        cv: 'Lebenslauf',
        languages: 'Sprachen',
        libraries: 'Bibliotheken',
        styling: 'Styling',
        testing: 'Testing',
        databases: 'Datenbanken',
        integration: 'Integration',
        bundlers: 'Bundler',
        protocols: 'Protokolle',
        ide: 'IDE',
        projectMethology: 'Projekt Methodik',
    },
} as const;