import { useState, useEffect, useRef } from "react";
import "./state.css"
function Stats() {
  const [stats, setStats] = useState({
    experience: 0,
    success: 0,
    reviews: 0,
    partners: 0,
  });

  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startCounter = () => {
    let exp = 0, suc = 0, rev = 0, part = 0;

    const interval = setInterval(() => {
      if (exp < 45) exp++;
      if (suc < 99) suc++;
      if (rev < 500) rev += 10;
      if (part < 300) part += 5;

      setStats({ experience: exp, success: suc, reviews: rev, partners: part });

      if (exp === 45 && suc === 99 && rev === 500 && part === 300) {
        clearInterval(interval);
      }
    }, 40);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCounter();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="stats" ref={statsRef}>
      <div className="stat-box"><h3>{stats.experience}+</h3><p>Network worth</p></div>
      <div className="stat-box"><h3>{stats.success}%</h3><p>Game-Ready Anytime</p></div>
      <div className="stat-box"><h3>{stats.reviews}+</h3><p>Game Enthusiasts</p></div>
      <div className="stat-box"><h3>{stats.partners}+</h3><p>Growing Community</p></div>
    </section>
  );
}

export default Stats;
