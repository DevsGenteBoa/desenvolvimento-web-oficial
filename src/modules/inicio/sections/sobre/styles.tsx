import styled from "styled-components";
import { device } from "src/components/devices";



const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Left = styled.div`
    padding:2rem 0 ;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h2 {
        text-align: center;
        font-size: 1.5rem;
    }
    p {
        text-align: center;
        font-size: 0.8rem;
    }
    @media ${device.tablet} {
        h2 {
            font-size: 1.7rem;
        }
        p {
            font-size: 1.2rem;
        }
    }
`;




export { Left, AboutWrapper }