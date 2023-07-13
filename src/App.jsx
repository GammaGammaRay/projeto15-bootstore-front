

import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import SignInPage from './pages/sign-in'
import SignUpPage from './pages/sign-up'
import HomePage from "./pages/home"

export default function App() {

  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: black;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`