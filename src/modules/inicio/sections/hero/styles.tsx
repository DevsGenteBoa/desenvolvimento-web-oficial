import styled from 'styled-components';
import { device } from 'src/components/devices';

const HeroSectionWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.6rem;
    letter-spacing: -1px;
    line-height: 1.25;
    font-weight: 600;
    text-align: center;
  }
  p {
    padding: 2rem 0;
    text-align: center;
    font-size: 1rem;
    line-height: 1.1;
  }
  div {
    text-align: center;
    button {
      cursor: pointer;
      font-weight: bold;
      width: 50%;
      background-color: #0000ff;
      border: none;
      color: #fff;
      border-radius: 8px;
      padding: 0.5rem 0.5rem;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: #0000cc;
      }
    }
  }
  @media ${device.tablet} {
    h1 {
        text-align: start;
    }
    p {
        text-align: start;
    }
    div {
        text-align: start;
        button {
            width: 38%;
        }
    }
  }
`;

const Left = styled.div``;

const Button = styled.button`
  padding: 1rem 0;
`;

export { Right, Left, HeroSectionWrapper, Button };
