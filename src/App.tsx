import { Container } from "components/Container";
import { Header } from "layout/header/Header";
import { Main } from "layout/sections/main/Main";
import { Skills } from "layout/sections/skills/Skills";
import { Projects } from "layout/sections/projects/Projects";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Main />
        <Skills />
        <Projects />
      </Container>
    </>
  );
}

export default App;
