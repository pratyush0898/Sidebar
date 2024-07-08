import React, { useState } from 'react'
import './App.css'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={`sidebar ${isOpen ? 'close-w' : 'open-w'}`}>
        <div className="inner">
          <div className="center">
            <div className="icons">
                <div className="open icon" style={{display: isOpen ? 'none' : 'block'}} onClick={toggleOpen}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </div>
                <div className={`close icon ${isOpen ? 'open-l':'none'}`} style={{display: isOpen ? 'block' : 'none'}} onClick={toggleOpen}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </div>
            </div>
            <div>
              <br />
            </div>
            <nav>
              <ul className="icons">
                <li className="icon link">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"/></svg>
                </li>
                <li className="icon">

                </li>
              </ul>
            </nav>
          </div>
        </div>
    </section>
  );
}

export default App
