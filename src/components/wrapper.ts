import styled from "styled-components";

const Wrapper = styled.div<{ css?: string }>`
  width: 1024px;
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 1440px) {
    max-width: 100%;
  }
  ${({ css }) => css}
`;

export default Wrapper;
