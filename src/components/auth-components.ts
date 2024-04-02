import styled from "styled-components";

export const Wrapper = styled.div`
    width: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 50px;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 50px;
`;

export const Input = styled.input`
    width: 100% - 20px;
    height: 40px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    padding: 0px 10px;
    &[type="submit"] {
        font-size: 18px;
        cursor: pointer;
    }
`;

export const Error = styled.span`
    font-size: 16px;
    margin-top: 20px;
`;