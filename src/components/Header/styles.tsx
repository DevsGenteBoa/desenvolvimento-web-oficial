import styled from "styled-components";
import { device } from "../devices";

const Logo = styled.div`
    padding-top: 2rem;
    text-decoration: underline;
    display: flex;
    a {
        cursor: pointer;
        font-size: 1.2rem;
        text-decoration: none;
        color: black;
        font-weight: bold;
        transition: all 0.3s ease-in-out;
        &:hover {
            color: blue;
        }
        @media ${device.tablet} {
            font-size: 1.6rem;
        } 
    }
`

export { Logo }