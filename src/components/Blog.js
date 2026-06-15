import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Blog = () => {
  return (
    <section className="blog" id="blog">
      <Container>
        <Row className="align-items-center">
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Blog & Recherches</h2>
                <div className="blog-bx">
                  <p className="mt-4" style={{ fontSize: '1.2rem', color: '#B8B8B8' }}>
                    Cette section est actuellement en cours de rédaction. Vous y retrouverez bientôt mes articles de veille technologique, 
                    mes analyses sur l'état de l'art en Intelligence Artificielle (SOTA), ainsi que des retours d'expérience technique.
                  </p>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
