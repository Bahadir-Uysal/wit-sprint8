import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header-main">
        <h1>Teknolojik Yemekler</h1>
          <nav>
            <Link to="/"><a>Anasayfa</a></Link>
            <NavLink to="/orderpage"><a>Sipariş Oluştur</a></NavLink>      
          </nav>
      </div>
    </>
  );
}
