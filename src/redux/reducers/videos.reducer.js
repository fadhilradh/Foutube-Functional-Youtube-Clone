import {
    POPULAR_VIDEOS_FAILED,
    POPULAR_VIDEOS_REQUEST,
    POPULAR_VIDEOS_SUCCESS,
} from "../actionTypes";

const initialState = {
    videos: [],
    loading: false,
    nextPageToken: null,
    error: null,
};

export const popularVideosReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case POPULAR_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case POPULAR_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: payload.videos,
                loading: false,
                nextPageToken: payload.nextPageToken,
            };
        case POPULAR_VIDEOS_FAILED:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
