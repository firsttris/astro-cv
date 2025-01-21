import styled from "@emotion/styled";

const StyledBox = styled.div({
  "@media print": {
    pageBreakBefore: "always",
  },
});

export const PageBreakBefore = () => {
  return <StyledBox />;
};