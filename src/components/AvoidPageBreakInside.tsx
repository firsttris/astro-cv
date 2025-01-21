import styled from '@emotion/styled';

const AvoidPageBreakInsideBox = styled.div({
  "@media print": {
    pageBreakInside: "avoid",
  },
});

interface AvoidPageBreakInsideProps 
{
  children: React.ReactNode;
}

export const AvoidPageBreakInside = ({children}: AvoidPageBreakInsideProps) => {
  return <AvoidPageBreakInsideBox>{children}</AvoidPageBreakInsideBox>;
};