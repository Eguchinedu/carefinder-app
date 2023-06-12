import { Container } from "react-bootstrap"
import heroImg from "../../images/Hero-img.png";
import "./PhotoSection.css";
const PhotoSection = () => {
    return (
      <Container className="photo-container">
        <div className="hero">
          <img src={heroImg} alt="hero" />
        </div>
        <div className="text-one">
          <p>
            We care about your health and well-being
          </p>
        </div>
        <div className="text-two">
          <p>Sign in to explore Health centres around you</p>
        </div>
      </Container>
    );
}
export default PhotoSection