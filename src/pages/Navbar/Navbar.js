import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Faq } from "./Faq";
import { Contact } from "./Contact";
import { Gallery } from "./Gallery";
import { Offert } from "./Offert";

export function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="list">
            <li>
              <NavLink to="/">Strona główna</NavLink>
            </li>
            <NavLink to="/offert/">Oferta edukacyjna</NavLink>
            <li>
              <NavLink to="/about">O nas</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Galeria zdjęć</NavLink>
            </li>
            <li>
              <NavLink to="/faq">Najczęściej zadawane pytania</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offert/*" element={<Offert />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
