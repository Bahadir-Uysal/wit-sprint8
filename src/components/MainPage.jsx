import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Main = styled.main`
diplay:flex;
justify-content:center;
`;
const Div = styled.div `
display:flex;
flex-direction:row`


export default function MainPage() {
  return (
    <Main>
      <Div>
        <h3>Teknolojik Yemekler</h3>
        <h1>KOD ACIKTIRIR PİZZA, DOYURUR</h1>
        <Link to ="/orderpage"><button>ACIKTIM</button></Link>
      </Div>
    </Main>
  );
}
