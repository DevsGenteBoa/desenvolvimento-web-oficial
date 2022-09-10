import { device } from "src/components/devices";
import styled from "styled-components";

const SocialWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


const SocialTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
        text-align: center;
        font-size: 1.5rem;
        padding: 2rem 0;
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

const SocialIcons = styled.div`
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
    div {
        a {
            display: block;
            color: black;
            transition: all 0.3s ease-in-out;
            &:hover {
                color: #0000FF;
                transform: scale(1.5);
            }
        }
    }
    
`

export { SocialWrapper, SocialTitle, SocialIcons } 
