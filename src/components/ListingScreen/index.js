
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { getListing } from '../../actions/listing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

class ListingScreen extends Component {
  componentWillMount(){
    const selectedListingId = this.props.navigation.state.params.item.id;
    this.props.getListing(selectedListingId);
  }
  render() {
    const listing = this.props.listing;
    if(!listing) return null;

    const item = this.props.navigation.state.params.item;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{listing.host.full_name}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  listing: state.listing.listing,
});

const mapDispatchToProps = dispatch => ({
  getListing: (listingId) => dispatch(getListing(listingId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingScreen);
