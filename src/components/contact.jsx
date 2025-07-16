import React from "react";
import "../styles/contact.css";
import AnimatedDock from "./dock";
import Whatsapp from "../components/img/whatsapp.png";
import Google from "../components/img/google.png";
import Waze from "../components/img/waze.png";

export default function Contact() {
  const Contact1 = "DAUD BIN MOHAMMAD";
  const Contact2 = "SITI AMINAH BINTI WAHAB";
  const Contact3 = "SYAZWANI SYAHIRAH";
  
  return (
    <>
      <div className="contact-container">
        <div className="contact-wrapper">
          {/* Title */}
          <div className="contact-title">
            <h2>HUBUNGI KAMI</h2>
            <div className="title-underline"></div>
          </div>

          {/* Main Content Card */}
          <div className="contact-card">
            
            {/* WhatsApp Contacts Section */}
            <div className="whatsapp-section">
              <h3 className="section-title">Hubungi Melalui WhatsApp</h3>
              <div className="contacts-grid">
                <button
                  className="contact-button"
                  onClick={() => {
                    window.open("https://wa.link/5naetw ", "_blank");
                  }}
                >
                  <img
                    className="whatsapp-icon"
                    src={Whatsapp}
                    alt="WhatsApp"
                  />
                  <span className="contact-name">{Contact1}</span>
                </button>
                
                <button
                  className="contact-button"
                  onClick={() => {
                    window.open("https://wa.link/oj346k ", "_blank");
                  }}
                >
                  <img
                    className="whatsapp-icon"
                    src={Whatsapp}
                    alt="WhatsApp"
                  />
                  <span className="contact-name">{Contact2}</span>
                </button>
                
                <button
                  className="contact-button"
                  onClick={() => {
                    window.open("https://wa.link/lcc1f4 ", "_blank");
                  }}
                >
                  <img
                    className="whatsapp-icon"
                    src={Whatsapp}
                    alt="WhatsApp"
                  />
                  <span className="contact-name">{Contact3}</span>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="section-divider"></div>

            {/* Location Section */}
            <div className="location-section">
              <h3 className="section-title">Lokasi Kami</h3>
              <div className="location-buttons">
                <div className="location-item">
                  <a
                    href="https://maps.app.goo.gl/QGer2XuTnA3d19Zy9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="location-button google-maps"
                    onClick={e => {
                      e.preventDefault();
                      window.open(
                        "https://maps.app.goo.gl/QGer2XuTnA3d19Zy9",
                        "_blank"
                      );
                    }}
                  >
                    <img
                      className="location-icon"
                      src={Google}
                      alt="Google Maps"
                    />
                  </a>
                  <p className="location-label">Google Maps</p>
                </div>
                
                <div className="location-item">
                  <a
                    href="https://ul.waze.com/ul?place=ChIJfeXof8e3zTERchewv2BrmA4&ll=2.91918070%2C101.65799890&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="location-button waze"
                    onClick={e => {
                      e.preventDefault();
                      window.open(
                        "https://ul.waze.com/ul?place=ChIJfeXof8e3zTERchewv2BrmA4&ll=2.91918070%2C101.65799890&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
                        "_blank"
                      );
                    }}
                  >
                    <img
                      className="location-icon"
                      src={Waze}
                      alt="Waze"
                    />
                  </a>
                  <p className="location-label">Waze</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dock Component */}
          <div className="dock-container">
            <AnimatedDock />
          </div>
        </div>
      </div>
    </>
  );
}