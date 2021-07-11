import request from "../../api";
import {
    POPULAR_VIDEOS_FAILED,
    POPULAR_VIDEOS_REQUEST,
    POPULAR_VIDEOS_SUCCESS,
} from "../actionTypes";

export const getPopularVideos = () => async (dispatch) => {
    try {
        dispatch({
            type: POPULAR_VIDEOS_REQUEST,
        });

        const { data } = await request("/videos", {
            params: {
                part: "snippet,contentDetails,statistics",
                chart: "mostPopular",
                regionCode: "ID",
                maxResults: 20,
                pageToken: "",
            },
        });
        console.log(data);

        dispatch({
            type: POPULAR_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
            },
        });
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: POPULAR_VIDEOS_FAILED,
            payload: error.message,
        });
    }
};

// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer[YOUR_ACCESS_TOKEN];
// Accept: application / json;
