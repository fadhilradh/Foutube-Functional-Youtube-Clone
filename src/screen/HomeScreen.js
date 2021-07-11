import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/categories/Categories";
import Video from "../components/videos/Video";
import {
    getPopularVideos,
    getVideosByCategory,
} from "../redux/actions/videos.action";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const { videos, activeCategory } = useSelector(
        (state) => state.popularVideos
    );

    useEffect(() => {
        dispatch(getPopularVideos());
    }, [dispatch]);

    const fetchData = () => {
        if (activeCategory === "All") dispatch(getPopularVideos());
        else {
            dispatch(getVideosByCategory(activeCategory));
        }
    };

    return (
        <Container>
            <Categories />
            <InfiniteScroll
                className="row"
                dataLength={videos.length}
                next={fetchData}
                hasMore={true}
                loader={
                    <div className="spinner-border text-danger d-block mx-auto" />
                }
            >
                {videos.map((video) => (
                    <Col key={video.id} lg={3} md={4}>
                        <Video video={video} />
                    </Col>
                ))}
            </InfiniteScroll>
        </Container>
    );
};

export default HomeScreen;
