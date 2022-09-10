import styled from "styled-components";
import { device } from "./devices";

const Container = styled.div`
    width: 100%;
    padding: 0 2rem;
    @media ${device.tablet} {
        padding: 0 4rem;
    }
`

export default Container