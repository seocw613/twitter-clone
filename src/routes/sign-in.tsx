import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { Error, Form, Input, Title, Wrapper } from "../components/auth-components";
import GithubButton from "../components/github-button";

export default function SignIn() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (isLoading) return;
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (e) {
            if (e instanceof FirebaseError) {
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = e;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }
    return (
        <Wrapper>
            <Title>
                Sign in
            </Title>
            <Form onSubmit={handleSubmit}>
                <Input onChange={handleChange} name="email" value={email} placeholder="email" type="email" required />
                <Input onChange={handleChange} name="password" value={password} placeholder="password" type="password" required />
                <Input type="submit" value={isLoading ? "Loading..." : "Sign in"} />
            </Form>
            <GithubButton />
            {error != null ? <Error>{error}</Error> : null}
        </Wrapper>
    )
}