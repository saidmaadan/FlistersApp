import { HOST } from '../constants';
import { normalizeListings} from '../utils';

export const SET_LISTINGS = 'SET_LISTINGS';

export function setListings(listings){
  return{
    type: SET_LISTINGS,
    listings
  }
}

export function getListings(){
  return (dispatch) => {
    return fetch(`${HOST}/api/v1/listings`)
    .then(response => response.json())
    .then(json => {
      console.log('getListings', json);

      if (json.is_success){
        dispatch(setListings(normalizeListings(json.listings)));
      } else{
        alert(json.error);
      }
    })
    .catch(e => alert(e));
  }
}
