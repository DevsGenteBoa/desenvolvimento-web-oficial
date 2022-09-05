import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    a {
      text-decoration: none;
      color: #1f1f1f;
      padding: 5px 10px;
      transition: background-color 0.2s ease-in-out;
      border-radius: 22px;
      :hover {
        background-color: rgba(0, 0, 0, 0.06);
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavigationMobile = styled.ul<{ isOpen: boolean }>`
  position: fixed;
  ${({ isOpen }) => (isOpen ? "left: 0;" : "left: 150%;")}
  transition: left 0.2s ease-in-out;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  padding: 10px;
  margin: 0;
  list-style: none;
  z-index: 998;
  li {
    a {
      font-size: 2rem;
      text-decoration: none;
      color: #fff;
      padding: 5px 10px;
      transition: background-color 0.2s ease-in-out;
      border-radius: 22px;
      :hover {
        background-color: rgba(0, 0, 0, 0.06);
      }
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  height: 100%;
  font-size: 1rem;
  font-weight: 700;
  color: #1f1f1f;
  margin: 0;
  padding: 0;
  text-decoration: none;
  a {
    text-decoration: none;
    color: #1f1f1f;
  }
`;

export const Hamburger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
  }
  font-size: 2.2rem;
  cursor: pointer;
  z-index: 999;
`;
