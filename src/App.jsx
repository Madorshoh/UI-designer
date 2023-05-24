import './App.css'
import {Container} from '@mui/material'
import Header from './components/header/header'
import HomePage from './components/home_page/home'
import AboutMe from './components/about_me/about_me'
import Works from './components/My recent works/works'

function App() {
  return (
    <>
    <Container>
      
      <Header />
      <HomePage />
      <AboutMe />
      <Works />
     </Container>
    </>
  )
}

export default App
