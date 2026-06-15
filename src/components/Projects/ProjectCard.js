import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, onClick }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{cursor: "pointer"}} onClick={onClick}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <button style={{color: 'white', marginTop: '10px', background: 'transparent', border: '1px solid white', padding: '5px 15px', borderRadius: '5px'}}>
            Découvrir le projet
          </button>
        </div>
      </div>
    </Col>
  )
}
