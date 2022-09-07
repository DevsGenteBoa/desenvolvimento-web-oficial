import styled from "styled-components";

type Variant = "primary" | "secondary" | "tertiary";

const Button = styled.button<{ variant?: Variant; css?: string }>`
  ${(props) => {
    const variants: { [key in Variant]: string } = {
      primary: `
        font-weight: 600;
        background-color: #ff8416;
        color: #fff;
        `,
      secondary: `
        font-weight: 500;
        color: #ff8416;
        `,
      tertiary: `
        font-weight: 500;
        `,
    };
    return variants[props.variant as Variant];
  }}
  border: 0;
  border-radius: 28px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1rem;
  transition: opacity 0.2s ease-in-out;
  :hover {
    opacity: 0.8;
  }
  ${({ css }) => css}
`;

export default Button;
