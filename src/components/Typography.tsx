import styled from '@emotion/styled';

export const Typography = styled.p({
    margin: 0,
    padding: 0,
    fontWeight: 400,
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    '&.h3': {
      fontSize: '48px', 
      lineHeight: '56px', 
      letterSpacing: '0px', 
      textTransform: 'uppercase'
    },
    '&.h5': {
      fontSize: '24px', 
      lineHeight: '32px',
      letterSpacing: '0px', 
    },
    '&.caption': {
      fontSize: '12px',
      lineHeight: '20px', 
      letterSpacing: '0.03333px',
    },
    '&.body1': {
      fontSize: '16px', 
      lineHeight: '24px',
      letterSpacing: '0.00938px',
    }
  });