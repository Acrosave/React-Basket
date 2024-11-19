import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function FooterIndex() {
  const [filter, setFilter] = useState(""); // Para el buscador
  const [range, setRange] = useState([1, 37]); // Rango inicial (todos los jugadores)
  const [highlight, setHighlight] = useState(""); // Para resaltar pares o impares

  const players = [
    { id: 2, name: "Kevin Harrell", team: "Top Club", position: "Guard" },
    { id: 5, name: "James Fletcher", team: "Top Club", position: "Center" },
    {
      id: 14,
      name: "Jeff Montes",
      team: "Top Club",
      position: "Forward-Guard",
    },
    {
      id: 27,
      name: "Bryan Warner",
      team: "Top Club",
      position: "Forward-Center",
    },
    {
      id: 4,
      name: "Michael Jordan",
      team: "Top Club",
      position: "Forward-Center",
    },
    {
      id: 11,
      name: "Lebron James",
      team: "Top Club",
      position: "Center",
    },
    {
      id: 20,
      name: "Cyril Gane",
      team: "Top Club",
      position: "Forward-Center",
    },
    { id: 3, name: "Jhon Jones", team: "Top Club", position: "Guard" },
    {
      id: 16,
      name: "Illia Topuria",
      team: "Top Club",
      position: "Forward-Center",
    },
    {
      id: 15,
      name: "Max Holloway",
      team: "Top Club",
      position: "Forward-Center",
    },
    {
      id: 8,
      name: "Stipe Miocic",
      team: "Top Club",
      position: "Forward-Guard",
    },
    { id: 17, name: "Brendan Fraser", team: "Top Club", position: "Guard" },
    {
      id: 26,
      name: "Aleix Volkov",
      team: "Top Club",
      position: "Forward-Center",
    },
    { id: 13, name: "Dustin Poirier", team: "Top Club", position: "Guard" },
    {
      id: 18,
      name: "Alexander Volka",
      team: "Top Club",
      position: "Forward-Center",
    },
    { id: 21, name: "Justin Gaetje", team: "Top Club", position: "Center" },
    { id: 36, name: "Leon Edwards", team: "Top Club", position: "Guard" },
    { id: 31, name: "Kamaru Usman", team: "Top Club", position: "Center" },
  ];

  const filteredPlayers = players.filter(
    (player) =>
      player.name.toLowerCase().includes(filter.toLowerCase()) &&
      player.id >= range[0] &&
      player.id <= range[1]
  );

  return (
    <div className="bg-light ">
      <nav
        className="navbar navbar-expand-lg navbar-dark 
"
      >
        <div className="container ">
          <a className="navbar-brand" href="/">
            <img
              src="src\basketball-2368164_640.jpg"
              alt="Top Club Logo"
              className="me-2"
              height="250"
              width="350"
            />
          </a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pages">
                PAGES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sportspress">
                SPORTSPRESS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop">
                SHOP
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop">
                PURCHASE
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <h1 className="text-center mb-4">ROSTER</h1>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre jugador..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-center mb-4">
          <button
            className="btn btn-dark mx-4"
            onClick={() => setHighlight("even")}
          >
            Pintar Pares
          </button>
          <button
            className="btn btn-dark mx-2"
            onClick={() => setHighlight("odd")}
          >
            Pintar Impares
          </button>
          <button
            className="btn btn-dark mx-2"
            onClick={() => setRange([1, 10])}
          >
            Traer de 1 a 10
          </button>
          <button
            className="btn btn-dark mx-2"
            onClick={() => setRange([11, 20])}
          >
            Traer de 11 a 20
          </button>
        </div>

        <table className="table table-bordered table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Player</th>
              <th>Team</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map((player, index) => (
              <tr
                key={player.id}
                className={
                  highlight === "even" && index % 2 === 0
                    ? "table-warning"
                    : highlight === "odd" && index % 2 !== 0
                    ? "table-warning"
                    : ""
                }
              >
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>{player.team}</td>
                <td>{player.position}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <footer className="text-center mt-4">
          <div className="d-flex justify-content-center">
            <a
              href="https://twitter.com"
              className="btn btn-outline-primary mx-1"
            >
              <i className="bi bi-twitter"></i> Twitter
            </a>
            <a
              href="https://pinterest.com"
              className="btn btn-outline-danger mx-1"
            >
              <i className="bi bi-pinterest"></i> Pinterest
            </a>
            <a
              href="https://reddit.com"
              className="btn btn-outline-warning mx-1"
            >
              <i className="bi bi-reddit"></i> Reddit
            </a>
            <a href="https://tumblr.com" className="btn btn-outline-info mx-1">
              <i className="bi bi-tumblr"></i> Tumblr
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default FooterIndex;
