import styled from "styled-components";

const Wrapper = styled.div<{ css?: string }>`
  width: 1024px;
  @media (max-width: 1440px) {
    max-width: 100%;
  }
  ${({ css }) => css}
`;

export default Wrapper;
