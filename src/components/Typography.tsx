import styled from '@emotion/styled';

// Konsistentes Typography-System für das gesamte CV
// Farben
const textColor = '#1e293b';      // Slate-800
const mutedColor = '#64748b';     // Slate-500

export const Typography = styled.p({
  margin: 0,
  padding: 0,
  fontWeight: 400,
  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  color: textColor,

  // Display - für den Namen (Tristan Teufel)
  '&.display': {
    fontSize: '36px',
    lineHeight: '44px',
    fontWeight: 300,
    letterSpacing: '-0.5px',
    textTransform: 'uppercase',
  },

  // H1 - für Section Titles (Skills, Projekte)
  '&.h1': {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 500,
  },

  // H2 - für Untertitel, Projekttitel
  '&.h2': {
    fontSize: '18px',
    lineHeight: '28px',
    fontWeight: 500,
  },

  // Subtitle - für Business-Title
  '&.subtitle': {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    color: mutedColor,
  },

  // Body - für normalen Text
  '&.body': {
    fontSize: '14px',
    lineHeight: '22px',
  },

  // Caption - für kleine Texte, Footer, Legende
  '&.caption': {
    fontSize: '12px',
    lineHeight: '18px',
    color: mutedColor,
  },

  // Label - für Kategorie-Labels
  '&.label': {
    fontSize: '11px',
    lineHeight: '16px',
    fontWeight: 600,
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    color: mutedColor,
  },

  // Chip - für Text in Chips/Tags
  '&.chip': {
    fontSize: '13px',
    lineHeight: '20px',
    fontWeight: 500,
  },

  // Legacy - für Abwärtskompatibilität
  '&.h3': {
    fontSize: '36px',
    lineHeight: '44px',
    fontWeight: 300,
    letterSpacing: '-0.5px',
    textTransform: 'uppercase',
  },
  '&.h5': {
    fontSize: '18px',
    lineHeight: '28px',
    fontWeight: 400,
    color: mutedColor,
  },
  '&.body1': {
    fontSize: '14px',
    lineHeight: '22px',
  },
});
