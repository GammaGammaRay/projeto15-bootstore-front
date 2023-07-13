import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"


export default function SignInPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  // function para fazer login
  function HeadLogin(e) {
    e.preventDefault()

    const body = { email, password }
    const promisse = axios.post(`${process.env.VITE_API_URL}/sign-in`, body )
    .then(res => {
        console.log(res.data)
        navigate("/home")
    })
    .catch(err => console.log(err.response.data.message))
    
  }

  // layout da page login
  return (
    <SingInContainer>
      <form onSubmit={HeadLogin}>
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

        <button data-test="sign-in-submit" >Entrar</button>
      </form>

      <Link to={"/sign-up"}>
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`