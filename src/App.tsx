import Header from "./components/Header/Header.tsx";
import {Container} from "./UI/container/container.styled.ts";
import {Footer} from "./components/Footer/Footer.tsx";
import Main from "./components/Main/Main.tsx";

function App() {

  return (
    <Container>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  )
}

export default App
