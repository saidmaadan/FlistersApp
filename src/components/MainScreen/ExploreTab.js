
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

const items = [
  {
    id: 1,
    title: "Houston",
    ApartmentType: "House",
    image: {uri: 'https://s-media-cache-ak0.pinimg.com/originals/a8/6a/f7/a86af7857e40acb712bbdd0add98b18c.jpg'},
    bedroom: 3,
    price: 300,
    instant: false
  },
  {
    id: 2,
    title: "Dallas",
    ApartmentType: "Apartment",
    image: {uri: 'http://jhmrad.com/wp-content/uploads/dream-home-design-cube-builders-developers-thrichur-kerala_328693-670x400.jpg'},
    bedroom: 3,
    price: 400,
    instant: true
  },
  {
    id: 3,
    title: "Austin",
    ApartmentType: "House",
    image: {uri: 'http://2.bp.blogspot.com/-Gff78pPguVI/U8qWurvgjRI/AAAAAAAAnJ8/NupGL8kwH8c/s1600/ash-color-roof.jpg'},
    bedroom: 3,
    price: 450,
    instant: false
  },
];

class ExploreTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: items
    };
  }

  onPress(item) {
    this.props.navigate({ routeName: "Detail", params: { item: item } });
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.items}
        renderItem={({item}) =>
          <TouchableOpacity onPress={() => this.onPress(item)} style={styles.item}>
            <Image style={styles.image} source = {item.image} />
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

});

const mapDispatchToProps = dispatch => ({
  navigate: (route) => dispatch(navigate(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreTab);
