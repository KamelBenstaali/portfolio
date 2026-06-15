import { Container, Row, Col } from "react-bootstrap";
import kl from "../assets/img/KL_logo_2_bg.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <img src={kl} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kamel-benstaali/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              {/* <a href="#"><img src={navIcon2} alt="Icon" /></a> */}
              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <p>© 2026 Kamel Benstaali. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
