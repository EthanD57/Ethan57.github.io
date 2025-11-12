import pittLogo from './images/pitt_logo.png'
import './App.css'

function App() {

  const sendCommand = async (action) => {
    try {await fetch('http://localhost:5000/api/slide/control', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action }),
      });
    } catch (error) {
      console.error('Error sending command:', error);
    }
  };

  return (
    <>
      <div>
        <a href="https://www.pitt.edu/" target="_blank">
          <img src={pittLogo} className="logo" alt="Pitt logo" />
        </a>
      </div>
      <h1>Demonstrator Controller</h1>

      <div className="card">
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '20px' }}>
          <button
            onClick={() => sendCommand('previous')}
            style={{
              fontSize: '24px',
              padding: '20px 40px',
              backgroundColor: '#61dafb',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            ← Previous
          </button>
          <button
            onClick={() => sendCommand('next')}
            style={{
              fontSize: '24px',
              padding: '20px 40px',
              backgroundColor: '#61dafb',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
             Next →
          </button>
        </div>

        <button
          onClick={() => sendCommand('pause')}
          style={{
            fontSize: '18px',
            padding: '15px 30px',
            backgroundColor: '#ff9800',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          ⏸ Pause/Play
        </button>
      </div>

      <p className="read-the-docs">
        Control the CS Demonstrator slides from this panel
      </p>
    </>
  )
}

export default App
