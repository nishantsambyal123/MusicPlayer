import request from '../service';
import {SONGS_URL} from '../../../appConstants/urls';
export function getSongServiceRequest() {
  return request(SONGS_URL, 'GET');
}
