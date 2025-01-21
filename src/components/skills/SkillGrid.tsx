import styled from "@emotion/styled";
import { ChipsWithIcon, Skill } from "../ChipsWithIcon";

interface SkillGridProps {
  title: string;
  skills: Skill[];
}

const Container = styled.div({
  display: "flex",
  //alignItems: "top",
});

const TitleBox = styled.div({
  marginTop: "2px",
  minWidth: "100px",
});

const Title = styled.p({
  fontSize: "12px",
  margin: 0
});

const SkillsBox = styled.div({
  maxWidth: "500px",
});

export const SkillGrid = ({ skills, title }: SkillGridProps) => {
  return (
    <Container>
      <TitleBox>
        <Title>{title}</Title>
      </TitleBox>
      <SkillsBox>
        <ChipsWithIcon skills={skills} />
      </SkillsBox>
    </Container>
  );
};