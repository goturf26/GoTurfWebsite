import "./home.css";
import mobvd from "../../assets/mobgoturf.mp4";

function Home() {
  return (
    <>
      <div className="banner">

        {/* LEFT SIDE */}
        <div className="homeLeft">

          <h1>
            Book Sports Turfs <br />
            Instantly. Play Without Limits.
          </h1>

          <p>
            GoTurf makes sports booking simple and seamless. 
            Discover nearby cricket and football turfs, check 
            real-time slot availability, join exciting tournaments, 
            and reserve your game instantly. Built for players who 
            never want to miss the game.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="homeRight">

          <button className="appBtn">
            Get The App
          </button>

        </div>

      </div>

      <div className="appstreaming" id="home">

        {/* APP VIDEO */}
        <div className="app">
          <video autoPlay loop muted playsInline>
            <source src={mobvd} type="video/mp4" />
          </video>
        </div>

        {/* APP CONTENT */}
        <div className="content">
          <h3>Experience GoTurf Mobile App</h3>

          <p>
            GoTurf is an all-in-one sports turf booking platform 
            designed for modern players. Easily explore premium sports 
            venues, book available slots instantly, participate in 
            live tournaments, and manage your complete sports schedule 
            in one place. Whether you play cricket, football, or other 
            turf games, GoTurf brings every match just one tap away.
          </p>
        </div>

      </div>
    </>
  );
}

export default Home;