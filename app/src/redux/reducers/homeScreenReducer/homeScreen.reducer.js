import {
  SONGS_API_SUCCESS,
  SONGS_API_PROGRESS,
  SONGS_API_FAILURE,
} from '../../actionConstants/index';

export const initialState = {
  isLoading: false,
  isError: false,
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SONGS_API_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    }
    case SONGS_API_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        data: {},
      };
    }
    case SONGS_API_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: {},
      };
    }
  }
  return state;
}
