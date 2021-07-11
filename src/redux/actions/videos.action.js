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

        dispatch({
            type: POPULAR_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: "All",
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

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
    try {
        console.log(keyword);
        dispatch({
            type: POPULAR_VIDEOS_REQUEST,
        });

        const { data } = await request("/search", {
            params: {
                part: "snippet",
                maxResults: 20,
                pageToken: getState().popularVideos.nextPageToken,
                q: keyword,
                type: "video",
            },
        });
        // console.log(data);

        dispatch({
            type: POPULAR_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: keyword,
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
