import styled from "@emotion/styled";
import React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const StyledLink = styled.a({
  textDecoration: "none",
  color: "#1976d2",
  '&:hover': {
    textDecoration: "underline",
  }
});

export const Link: React.FC<LinkProps> = ({ href, ...props }) => {
  return <StyledLink href={href} {...props} />;
};