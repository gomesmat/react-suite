import React from "react";
import { Link, Outlet } from "react-router-dom";

import "rsuite/dist/rsuite.min.css";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <nav>
        <h3>React Suite</h3>
        <h5>Teste de componentes</h5>
        <ul>
          <li>
            <Link to="/checkpicker">Picker Filtros</Link>
          </li>
          <li>
            <Link to="/daterangepicker">DateRangePicker</Link>
          </li>
          <li>
            <Link to="/cascader">
              Cascader
            </Link>
          </li>
          <li>
            <Link to="/tooltip">Tooltip</Link>
          </li>
          <li>
            <Link to="/mascara">Mascara</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
