
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import { getListing } from '../../actions/listing';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width*4/7,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  info: {
    flex: 1,
    alignItems: 'center',
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

    const { image, host } = listing;

    const item = this.props.navigation.state.params.item;
    return (
      <ScrollView style= {styles.container}>
        <Image source = {{uri: image}} style = {styles.image} />
        <View style = {{padding: 30}}>
          <View style = {styles.row}>
            <Text style = {{flex: 1}}>{`Listed By ${host.full_name}`}</Text>
            <Image source={{uri: host.avatar}} style = {styles.avatar} />
          </View>
        </View>
      </ScrollView>
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
