import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SolucoesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  list-style: none;
  gap: 16px;
  padding: 20px 0;
  strong {
    font-size: 1rem;
    color: rgba(0, 0, 125, 0.6);
  }
  div {
    padding: 12px;
    border-radius: 15px;
    background-color: #f5f5f5;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 8px;
    a {
      color: rgba(0, 0, 125, 0.6);
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;
