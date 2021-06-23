import { Col, Container, Row } from "react-bootstrap";
import Categories from "../components/categories/Categories";
import Video from "../components/videos/Video";

const HomeScreen = () => {
  return (
    <Container>
      <Categories />
      <Row>
        {[...new Array(20)].map((a, i) => (
          <Col key={i} lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
