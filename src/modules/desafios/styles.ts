import styled from "styled-components";

export const PageTitle = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;

  @media (max-width: 1440px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }
`;
