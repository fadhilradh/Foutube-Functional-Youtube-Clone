import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/categories/Categories";
import Video from "../components/videos/Video";
import { getPopularVideos } from "../redux/actions/videos.action";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const { videos } = useSelector((state) => state.popularVideos);

    useEffect(() => {
        dispatch(getPopularVideos());
    }, [dispatch]);
    return (
        <Container>
            <Categories />
            <Row>
                {videos.map((video) => (
                    <Col key={video.id} lg={3} md={4}>
                        <Video video={video} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HomeScreen;
