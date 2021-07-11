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
    activeCategory: "All",
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
                videos:
                    state.activeCategory === payload.category
                        ? [...state.videos, ...payload.videos]
                        : payload.videos,
                loading: false,
                nextPageToken: payload.nextPageToken,
                category: payload.category,
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

export const searchVidByCategoryReducer = (state = initialState, action) => {
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
                category: payload.category,
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
