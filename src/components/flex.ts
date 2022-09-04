import styled from "styled-components";

export const Flex = styled.div<{ css?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  ${({ css }) => css}
`;
