import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components"
import { auth } from "../routes/firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 18px;
    cursor: pointer;
`;

export default function GithubButton() {
    const navigate = useNavigate();
    const handleClick = async () => {
        try {
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth, provider);
            navigate("/");
        } catch (e) {
            alert(e);
        }
    }
    return (
        <Button onClick={handleClick}>Continue with Github</Button>
    )
}