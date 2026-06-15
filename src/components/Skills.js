import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col size={12}>
                    <div className="skill-bx wow zoomIn">
                        <h2>Compétences Techniques</h2>
                        <p>Sélectionnez une catégorie pour découvrir mes compétences acquises lors de mes différentes expériences et projets.</p>
                        
                        <Tab.Container id="skills-tabs" defaultActiveKey="data">
                          <Row>
                            <Col sm={4}>
                              <Nav variant="pills" className="flex-column nav-pills custom-nav-pills">
                                <Nav.Item>
                                  <Nav.Link eventKey="data">📊 Analyse de Données</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="ml">🤖 Machine Learning</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="dl">🧠 Deep Learning & IA</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="mlops">☁️ MLOps & Déploiement</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="methode">🔬 Méthodologie</Nav.Link>
                                </Nav.Item>
                              </Nav>
                            </Col>
                            <Col sm={8} className="d-flex flex-column justify-content-center">
                              <Tab.Content className="text-start px-4">
                                <Tab.Pane eventKey="data">
                                  <h4>Analyse de Données & Data Science</h4>
                                  <ul>
                                    <li>Réaliser une analyse exploratoire de données (EDA) poussée.</li>
                                    <li>Effectuer des opérations de nettoyage complexes sur des données structurées.</li>
                                    <li>Réaliser des analyses statistiques univariées, bivariées et multivariées.</li>
                                    <li>Communiquer ses résultats à l'aide de représentations graphiques claires.</li>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="ml">
                                  <h4>Machine Learning</h4>
                                  <ul>
                                    <li>Mettre en place des modèles d'apprentissage supervisé (Classification, Scoring).</li>
                                    <li>Mettre en place des modèles d'apprentissage non supervisé (Clustering, Segmentation).</li>
                                    <li>Évaluer la stabilité d'un modèle dans le temps (Data drift).</li>
                                    <li>Interpréter et expliquer les résultats d'un modèle (SHAP).</li>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="dl">
                                  <h4>Deep Learning & Intelligence Artificielle</h4>
                                  <ul>
                                    <li>Développer des modèles de Deep Learning (Réseaux de neurones, RNN, BERT).</li>
                                    <li>Extraire des features textuelles (NLP) et visuelles (Computer Vision).</li>
                                    <li>Appliquer des techniques de Transfer Learning pour l'image et le texte.</li>
                                    <li>Concevoir un modèle de segmentation d'images (ex: U-Net).</li>
                                    <li>Améliorer la robustesse des modèles via la Data Augmentation.</li>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="mlops">
                                  <h4>MLOps, Ingénierie & Déploiement</h4>
                                  <ul>
                                    <li>Déployer un modèle de Machine Learning via une API REST.</li>
                                    <li>Déployer et mettre en production un modèle dans le Cloud.</li>
                                    <li>Entraîner des modèles lourds sur des instances Cloud (GPU).</li>
                                    <li>Développer et déployer une Preuve de Concept (PoC) de bout en bout.</li>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="methode">
                                  <h4>Méthodologie & Recherche</h4>
                                  <ul>
                                    <li>Réaliser une veille technologique pour identifier des solutions innovantes.</li>
                                    <li>Comparer rigoureusement des modèles de référence (État de l'art / SOTA).</li>
                                  </ul>
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>

                        <div className="tech-stack mt-5 pt-5 border-top">
                          <h3 className="mb-5 text-center" style={{ fontWeight: '700', fontSize: '28px' }}>Ma Stack Technique</h3>
                          <div className="tech-grid">
                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" /><span>Python</span></div>
                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" alt="R" /><span>R</span></div>
                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" /><span>Pandas</span></div>
                            <div className="tech-item"><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-Learn" /><span>Scikit-Learn</span></div>
                            <div className="tech-item"><img src="https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png" alt="XGBoost" /><span>XGBoost</span></div>

                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" /><span>TensorFlow</span></div>
                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" alt="Keras" /><span>Keras</span></div>
                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" alt="PyTorch" /><span>PyTorch</span></div>
                            <div className="tech-item"><img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="HuggingFace" /><span>HuggingFace</span></div>
                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" alt="Streamlit" /><span>Streamlit</span></div>

                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt="Flask" /><span>Flask</span></div>
                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" /><span>Docker</span></div>
                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" /><span>Git</span></div>
                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" /><span>AWS</span></div>
                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt="Azure" /><span>Azure</span></div>

                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /><span>React</span></div>
                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" /><span>HTML</span></div>
                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" /><span>CSS</span></div>
                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" /><span>VS Code</span></div>
                            <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" /><span>Postman</span></div>
                          </div>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
