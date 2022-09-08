import styled from "styled-components";

export const Contribua = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  a {
    transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 1.1rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
    :hover {
      color: rgba(0, 0, 0, 0.8);
    }
  }

  @media (max-width: 768px) {
    min-height: 200px;
    justify-content: center;
    text-align: center;
    padding: 20px;
  }
`;
