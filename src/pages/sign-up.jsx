import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { styled } from "styled-components";


export default function SignUpPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [age, setAge] = useState("")
    const navigate = useNavigate()

    function HeadSignUp(e){
        e.prevent.default()
        const body = {
            name,
            email,
            password,
            age
        }
        if(password !== passwordConfirm) alert("senhas não conferem")
        else{
        const promisse = axios.post(`${process.env.VITE_API_URL}/sign-up`, body )
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err.response.data.message))
        }
    }
    return (
        <>
            <SignUpContainer>
                <form onSubmit={HeadSignUp}>
                    <input
                        data-test="name"
                        placeholder="Nome"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                     <input
                        placeholder="Digite sua idade"
                        type="number"
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <input
                        data-test="email"
                        placeholder="E-mail"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        data-test="password"
                        placeholder="Senha"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        data-test="conf-password"
                        placeholder="Confirme a senha"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                    
                    <button data-test="sign-up-submit">Cadastrar</button>
                </form>
            </SignUpContainer>
        </>
    )
}

const SignUpContainer = styled.div`
    background-color: red;
`