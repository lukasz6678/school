import { Routes, Route, NavLink } from "react-router-dom";
import { Clarnet } from "../Courses/Clarnet";
import { Organ } from "../Courses/Organ";
import { Piano } from "../Courses/Piano";
import { Theory } from "../Courses/Theory";
import { Violin } from "../Courses/Violin";
import { Concertos } from "../Courses/Concertos";

export function Offert() {
  return (
    <>
      <nav>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Proszę wybrać instrument / zajęcia
        </h1>
        <ul className="offert-list">
          <li>
            <NavLink to="/offert/piano">Fortepian</NavLink>
          </li>
          <li>
            <NavLink to="/offert/organ">Organy</NavLink>
          </li>
          <li>
            <NavLink to="/offert/theory">Teoria</NavLink>
          </li>
          <li>
            <NavLink to="/offert/violin">Skrzypce</NavLink>
          </li>
          <li>
            <NavLink to="/offert/clarnet">Klarnet</NavLink>
          </li>
          <li>
            <NavLink to="/offert/concertos">Koncerty</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="organ" element={<Organ />} />
        <Route path="piano" element={<Piano />} />
        <Route path="theory" element={<Theory />} />
        <Route path="violin" element={<Violin />} />
        <Route path="clarnet" element={<Clarnet />} />
        <Route path="concertos" element={<Concertos />} />
      </Routes>
    </>
  );
}
