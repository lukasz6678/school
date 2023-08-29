import { Link } from "react-router-dom";
import logo from "./logo.png";

export function Home() {
  return (
    <>
      <h1>Witamy serdecznie na naszej stronie</h1>

      <p>
        Poniżej znajdą Państwo wszystkie informacje o naszej ofercie eduakcyjnej
      </p>
      <img src={logo} alt="logo" width={300} height={150} />
      <ul>
        <li>
          <Link to="/offert/piano">Fortepian (Pianino)</Link>
        </li>
        <li>
          <Link to="/offert/organ">Organy</Link>
        </li>
        <li>
          <Link to="/offert/theory">Teoria muzyki, kształcenie słuchu</Link>
        </li>
        <li>
          <Link to="/offert/violin">Skrzypce</Link>
        </li>
        <li>
          <Link to="/offert/clarnet">Klarnet</Link>
        </li>
        <li>
          <Link to="/offert/concertos">
            Organizacja koncertów edukacyjnych dla dzieci i dorosłych
          </Link>
        </li>
      </ul>
    </>
  );
}
