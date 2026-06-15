import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./Projects/ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ReactMarkdown from 'react-markdown';
import { projectsData } from "../projectsData";

export const Projects = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const projects = [
    {
      title: "Ingénieur IA & Développeur Python (Alternance)",
      description: "Fédération Française des Banques Alimentaires (2024 - 2025)",
      imgUrl: projImg1,
      markdownContent: `### Développeur Python et Ingénieur IA (Alternance)
**Fédération Française des Banques Alimentaires, Paris | 09/2024 - 08/2025**

* **Analyse IA :** Réalisation d’un analyseur de fichiers tableurs à l’aide d’agents IA.
* **Optimisation :** Amélioration et mise à jour d’un chatbot afin d’optimiser ses performances.
* **NLP :** Réalisation d’un outil de synthèse automatique des comptes rendus de réunions.
* **Business Intelligence :** Analyse de données et création de tableaux de bord.`
    },
    {
      title: "Ingénieur IA & Développeur Python (Stage)",
      description: "Fédération Française des Banques Alimentaires (2024)",
      imgUrl: projImg2,
      markdownContent: `### Développeur Python et Ingénieur IA (Stage)
**Fédération Française des Banques Alimentaires, Paris | 03/2024 - 08/2024**

* **Data Collection :** Extraction et collecte automatisées des ressources de l’entreprise via du web scraping.
* **Développement IA :** Conception et développement d’un chatbot intelligent intégré à l’API d’OpenAI.
* **Traitement de documents :** Implémentation de fonctionnalités d'assistance et d'analyse de documents métiers.`
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Mes Projets</h2>
                <p>Découvrez une sélection de mes travaux en Intelligence Artificielle, séparés en projets phares et projets académiques.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Expériences Professionnelles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projets Académiques</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleShow(project)}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsData.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleShow(project)}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Modal Project Detail */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered contentClassName="custom-modal-content">
        <Modal.Header closeButton className="bg-dark text-white border-bottom-0">
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white custom-modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {selectedProject?.markdownContent ? (
            <ReactMarkdown>{selectedProject.markdownContent}</ReactMarkdown>
          ) : (
            <p>{selectedProject?.description}</p>
          )}
        </Modal.Body>
        <Modal.Footer className="bg-dark border-top-0">
          {selectedProject?.githubUrl && (
            <Button variant="outline-light" href={selectedProject.githubUrl} target="_blank">
              Voir sur GitHub
            </Button>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

    </section>
  )
}
