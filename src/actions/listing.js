import { HOST } from '../constants';
import { normalizeListings, normalizeListing } from '../utils';

export const SET_LISTINGS = 'SET_LISTINGS';
export const SET_LISTING = 'SET_LISTING';

export function setListings(listings){
  return{
    type: SET_LISTINGS,
    listings
  }
}

export function setListing(listing){
  return{
    type: SET_LISTING,
    listing
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

export function getListing(listingId){
  return (dispatch) => {
    return fetch(`${HOST}/api/v1/listings/${listingId}`)
    .then(response => response.json())
    .then(json => {
      console.log('getListing', json);

      if (json.is_success){
        dispatch(setListing(normalizeListing(json.listing)));
      } else{
        alert(json.error);
      }
    })
    .catch(e => alert(e));
  }
}
