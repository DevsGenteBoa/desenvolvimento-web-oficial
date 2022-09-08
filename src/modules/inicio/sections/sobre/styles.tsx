import styled from "styled-components";

export const Container = styled.section`
  margin-top: 78px;
  p {
    font-size: 1.2rem;
    line-height: 1.4;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 24px;
  font-weight: 500;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 200px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 100px;
  }
`;

export const BoxSvg = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
