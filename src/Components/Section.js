import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
&:not(:last-child) {
  margin-bottom: 50px;
}
`;

const Title = styled.div`
  font-size: 24px;
`;

const Content = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

const Section = ({title, content}) => (
  <Container>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </Container>
)
export default Section;
