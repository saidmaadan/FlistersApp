import { HOST } from '../constants'

export function normalizeListings(listings){
  return listings.map(listing => {
    return{
      id: listing.id || '',
      title: listing.listing_name || '',
      image: `${HOST}${listing.image}` || '',
      listing_type: listing.listing_type || '',
      bedroom: listing.bedroom || '',
      price: listing.price || '',
      instant: listing.instant || '',
    }
  })
}
