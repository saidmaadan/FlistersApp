
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from 'react-native';

import { navigate } from '../../actions/nav';
import { getListings } from '../../actions/listing';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 20,
  },
  image: {
    width: Dimensions.get('window').width - 80,
    height: Dimensions.get('window').width *4/7,
    marginBottom: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    color: '#555',
  }
});

class ExploreTab extends Component {

  componentWillMount(){
    this.props.getListings();
  }
  onPress(item) {
    this.props.navigate({ routeName: "Listing", params: { item: item } });
  }

  render() {
    const {listings} = this.props;
    return (
      <FlatList
        style={styles.container}
        data={ listings }
        renderItem={({item}) =>
          <TouchableOpacity onPress={() => this.onPress(item)} style={styles.item}>
            <Image style={styles.image} source = {{uri: item.image}} />
            <Text style={styles.title}>{`$${item.price} ${item.instant ? '🙏' : ''}${item.title}`}</Text>
            <Text>{`${item.ApartmentType} - ${item.bedroom} Bedroom(s)`}</Text>
          </TouchableOpacity>
        }
        keyExtractor={(item, index) => item.id}
      />
    );
  }
}

const mapStateToProps = state => ({
  listings: state.listing.listings
});

const mapDispatchToProps = dispatch => ({
  navigate: (route) => dispatch(navigate(route)),
  getListings: () => dispatch(getListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreTab);
