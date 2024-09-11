import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Main = styled.main`
width: 100%;
  height: 100vh;`;

const Div = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  diplay: flex;
  justify-content: center;
  align-items: center;
`;

export default function MainPage() {
  return (
    <Main>
      <Div>
        <h3>Teknolojik Yemekler</h3>
        <h1>KOD ACIKTIRIR PİZZA, DOYURUR</h1>
        <Link to="/orderpage">
          <button>ACIKTIM</button>
        </Link>
      </Div>
    </Main>
  );
}
