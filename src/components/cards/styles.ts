import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 28px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  box-shadow: -4px 7px 47px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: box-shadow 0.3s ease-in-out;
  
  :hover {
    box-shadow: -4px 7px 47px rgba(0, 0, 0, 0.2);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;

export const ReadMore = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Tag = styled.div<{ bg?: string; color?: string }>`
  display: flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 28px;
  font-weight: 500;
  font-size: 14px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#000"};
`;
