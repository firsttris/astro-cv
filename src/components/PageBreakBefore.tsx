import styled from "@emotion/styled";

const PageBreakBeforeBox = styled.div({
  "@media print": {
    pageBreakBefore: "always",
  },
});

export const PageBreakBefore = () => {
  return <PageBreakBeforeBox />;
};