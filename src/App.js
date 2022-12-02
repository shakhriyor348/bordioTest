import styled from "styled-components";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";






const AppBlock = styled.div`
  display: flex;
`

const Wrapper = styled.div`
  padding-left: 373px;
`

function App() {
  return (
    <>
      <AppBlock>
        <Aside />
      </AppBlock>
      <Wrapper>
        <Navbar />
      </Wrapper>

    </>
  );
}

export default App;
