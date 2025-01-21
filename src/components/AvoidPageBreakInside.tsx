import styled from '@emotion/styled';


const StyledDiv = styled.div({
  "@media print": {
    pageBreakInside: "avoid",
  },
});

interface AvoidPageBreakInsideProps 
{
  children: React.ReactNode;
}

export const AvoidPageBreakInside = ({children}: AvoidPageBreakInsideProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};