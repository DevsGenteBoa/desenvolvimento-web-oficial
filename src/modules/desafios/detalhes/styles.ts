import styled from 'styled-components';

export const DesafioContainer = styled.div`
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 32px;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 0.8rem;
`;

export const AnexosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 16px;

  padding: 10px;
`;
export const Anexo = styled.li`
  padding: 8px;
  border-radius: 15px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  i {
    display: flex;
    align-items: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: rgba(0, 0, 125, 0.6);

    :hover {
      text-decoration: underline;
    }
  }
`;
