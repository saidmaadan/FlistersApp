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

export function normalizeListing(listing){
  return{
    id: listing.id || '',
    title: listing.listing_name || '',
    image: `${HOST}${listing.image}` || '',
    listing_type: listing.listing_type || '',
    bedroom: listing.bedroom || '',
    price: listing.price || '',
    instant: listing.instant || '',
    summary: listing.summary || '',
    bathroom: listing.bathroom || '',
    accomodate: listing.accomodate || '',
    unavailableDates: listing.unavailableDates || '',
    host: listing.host ? {
      email: listing.host.email || '',
      full_name: listing.host.full_name || '',
      avatar: listing.host.avatar || '',
    } : {
      email: '',
      full_name: '',
      avatar: '',
    }
  }
}
