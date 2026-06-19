import React from "react";
import "./card.css"
import cricket from "../../assets/cricket1.jpg"

function App() {
  // Card data
  const cardsData = [
    {
      image: cricket,
      title: "Cricket Tournament",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: cricket,
      title: "Football League",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: cricket,
      title: "Badminton Match",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:cricket,
      title: "Volleyball Cup",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: cricket,
      title: "Tennis Open",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: cricket,
      title: "Indoor Games",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <>
      {/* ===== Mission Section ===== */}
      <section className="mission" id="card">
        <div className="mission-text">
          <h2>
            great {" "}
            <span className="highlight">GAMES</span>{" "} deserve great{"  "}
            <span className="highlight">GROUNDS</span>
          </h2>

          <p>
             SEASON doesn{"'"}t matter. TIME doesn{"'"}t matter.
              Play with confidence in a safe, well-lit, and reliable playing environment.
              Book your turf instantly and play without limits with <span className="brand-name">
              <span className="highlight">Go</span>Turf
              </span>
          </p>

          <button className="btn-card">Read Our Story</button>
        </div>

        <img src={cricket} className="mission-img" alt="" />
      </section>

      {/* ===== Cards Section ===== */}
      <div className="scroll-container" id="scroll">
        <div className="cards clone">
          {cardsData.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button>View</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
