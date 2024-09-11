import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header-main">
        <h1>Teknolojik Yemekler</h1>
          <nav>
            <Link to="/"><button>Anasayfa</button></Link>
            <NavLink to="/orderpage"><button>Sipariş Oluştur</button></NavLink>      
          </nav>
      </div>
    </>
  );
}
