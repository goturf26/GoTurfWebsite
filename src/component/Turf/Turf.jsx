import { useEffect, useState } from 'react';
import { getAllPublicTurfs } from '../../api';
import cricket from "../../assets/cricket1.jpg";
import "./turf.css";

function Turf() {
  const [turfs, setTurfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedTurf, setSelectedTurf] = useState(null);

  useEffect(() => {
    fetchTurfs();
  }, []);

  const fetchTurfs = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await getAllPublicTurfs();

      if (response.success && Array.isArray(response.turfs)) {
        setTurfs(response.turfs);
      } else {
        setError('No data received from server');
      }
    } catch (err) {
      console.error('Fetch Error:', err);
      setError('Unable to load turfs. Check console.');
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (turf) => {
    setSelectedTurf(turf);
  };

  const closeModal = () => {
    setSelectedTurf(null);
  };

  if (loading) {
    return (
      <section className="features" id="turf">
        <h2>Games</h2>
        <h2 className="line">Pick Your <span className="highlight">Turf</span></h2>
        <div style={{ textAlign: 'center', padding: '80px' }}>Loading turfs...</div>
      </section>
    );
  }

  return (
    <section className="features" id="turf">
      <h2>Available Turfs</h2>
      <p className="turf-sub">
  Explore premium sports turfs near you and book instantly.
</p>
      <h2 className="line">
        Pick Your <span className="highlight">Turf</span>
      </h2>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <div className="feature-grid">
        {turfs.length > 0 ? (
          turfs.map((turf) => (
            <div className="feature-box" key={turf.turfId}>
              <div className="feature-img">
                <img 
                  src={turf.imageUrl || cricket} 
                  alt={turf.turfName}
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = cricket; 
                  }}
                />
              </div>
              <div className="feature-text">
                <h3>{turf.turfName}</h3>
                
                <div className="price-row">
                  <span className="price">₹{turf.pricePerHour || 0}/hr</span>
                  <button 
                    onClick={() => handleViewDetails(turf)}
                    className="view-btn"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px' }}>
            No turfs available at the moment.
          </p>
        )}
      </div>

      {/* ==================== MODAL (No Book Now Button) ==================== */}
      {selectedTurf && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <img 
              src={selectedTurf.imageUrl || cricket} 
              alt={selectedTurf.turfName}
              className="modal-image"
              onError={(e) => { e.target.src = cricket; }}
            />

            <div className="modal-info">
              <h2>{selectedTurf.turfName}</h2>
              <p className="location"><strong>📍</strong> {selectedTurf.turfAddress}</p>
              
              <div className="modal-details">
                <p><strong>Sports:</strong> {selectedTurf.sports ? selectedTurf.sports.join(', ') : 'Not available'}</p>
                <p><strong>Price:</strong> ₹{selectedTurf.pricePerHour || 0} per hour</p>
                {selectedTurf.description && <p><strong>Description:</strong> {selectedTurf.description}</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Turf;