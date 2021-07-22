import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SongItem from '../SongListItem';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const songs = props => {
  const {data} = props;

  function renderIndividual(item) {
    return <SongItem detail={item} />;
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

function mapDispatchToProps(dispatch) {
  return {};
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(songs);
