import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
const item = props => {
  const song = props.detail.item;
  console.log(song);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemRow}>
        <Image style={styles.imageView} source={{uri: song.artworkUrl100}} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.titleText}>{song.trackName ?? 'Untitled'}</Text>
          <Text>{song.artistName}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  itemRow: {
    flexDirection: 'row',
    margin: 8,
  },
  imageView: {
    width: 50,
    height: 50,
  },
  descriptionContainer: {
    marginLeft: 10,
  },
  titleText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default item;
