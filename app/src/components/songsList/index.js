import React from 'react';
import {connect} from 'react-redux';
import SongItem from '../SongListItem';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, FlatList} from 'react-native';

const Songs = props => {
  const navigation = useNavigation();
  const {data} = props;
  function renderIndividual(item) {
    return <SongItem detail={item} itemClicked={songClickListener} />;
  }

  function songClickListener(song) {
    navigation.navigate('SongDetails', {song});
  }

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data.results}
        keyExtractor={(item, index) => index}
        renderItem={item => renderIndividual(item)}
      />
    </View>
  );
};

function mapStateToProps({HomeScreenReducer}) {
  return {
    data: HomeScreenReducer.data,
  };
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default connect(mapStateToProps)(Songs);
