import styled from "styled-components"
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
`;

const Title = styled.h1`
    font-size: 50px;
`;

const Button = styled.button`
    margin-top: 20px;
`;

export default function Home() {
    const navigate = useNavigate();
    const handleClick = async () => {
        const signOut = confirm("Sign out of X?");
        if (signOut) {
            auth.signOut();
            navigate("/sign-in");
        }
    }
    return (
        <Wrapper>
            <Title>Welcome home!</Title>
            <Button onClick={handleClick}>Sign out</Button>
        </Wrapper>
    )
}