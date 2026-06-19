import React, { useEffect, useState } from "react";
import Tournamentimg from "../../assets/cricket1.jpg";
import "./tournament.css";

function Tournament() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    fetch("https://goturfuser.onrender.com/api/public-tournaments")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setTournaments(data.tournaments);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="tournament-section" id="tournament">

      {/* Heading */}
      <h2 className="tournament-title">Live Tournaments</h2>

      <p className="tournament-subtitle">
        Compete with top players, join exciting tournaments, and win amazing rewards with GoTurf.
      </p>

      {/* Tournament Cards */}
      <div className="tournament-grid">

        {tournaments.map((tournament, index) => (
          <div className="tournament-card" key={index}>

            <img
              src={tournament.imageUrl || Tournamentimg}
              alt={tournament.name}
              className="tournament-image"
            />

            <div className="card-content">

              <h3>{tournament.name}</h3>

              <p className="sport">{tournament.sport}</p>

              <p>Entry Fee ₹{tournament.entryFee}</p>

              <p>Prize Pool ₹{tournament.prizePool}</p>

              <p className="app-only">
                Available on GoTurf App 📱
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Tournament;