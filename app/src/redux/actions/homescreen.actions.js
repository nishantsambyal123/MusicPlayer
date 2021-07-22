import {
  SONGS_API_SUCCESS,
  SONGS_API_PROGRESS,
  SONGS_API_FAILURE,
} from '../actionConstants/index';
import ActionDispatcher from '../../config/networkCalls/actionDispatcher';
import {getSongServiceRequest} from '../../config/networkCalls/serviceRequests/homeScreenServiceRequest';

export function callSongsApi() {
  return ActionDispatcher(
    getSongServiceRequest,
    SONGS_API_SUCCESS,
    SONGS_API_FAILURE,
    SONGS_API_PROGRESS,
  );
}
