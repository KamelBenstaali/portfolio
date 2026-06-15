import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Envoyer');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Envoi en cours...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Envoyer");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ success: true, message: 'Message envoyé avec succès !' });
    } else {
      setStatus({ success: false, message: 'Une erreur s\'est produite. Veuillez réessayer plus tard.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contactez-moi</h2>
                  <p className="mb-4">
                    Vous souhaitez me proposer une opportunité ou échanger sur l'Intelligence Artificielle ?
                    N'hésitez pas à me contacter directement !
                  </p>

                  <div className="contact-info mt-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="icon-box me-3" style={{ fontSize: '24px' }}>✉️</div>
                      <div>
                        <h5 className="mb-1">Email</h5>
                        <a href="mailto:benstaali.kamel@proton.me" className="text-white text-decoration-none" style={{ fontSize: '18px', fontWeight: '500' }}>
                          benstaali.kamel@proton.me
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <div className="icon-box me-3" style={{ fontSize: '24px' }}>💬</div>
                      <div>
                        <h5 className="mb-1">Discord</h5>
                        <span className="text-white" style={{ fontSize: '18px', fontWeight: '500' }}>
                          kamelBenstaali
                        </span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <div className="icon-box me-3" style={{ fontSize: '24px' }}>📍</div>
                      <div>
                        <h5 className="mb-1">Localisation</h5>
                        <span className="text-white" style={{ fontSize: '18px', fontWeight: '500' }}>
                          Clamart, Île-de-France
                        </span>
                      </div>
                    </div>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
