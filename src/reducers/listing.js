import { SET_LISTINGS, SET_LISTING } from '../actions/listing';

const initialState = {
  listings: [],
  listing: null,
};

export default function(state = initialState, action){
  if (action.type === SET_LISTINGS){
    return{
      ...state,
      listings: action.listings
    }
  }

  if (action.type === SET_LISTING){
    return{
      ...state,
      listing: action.listing
    }
  }
  return state;
}
