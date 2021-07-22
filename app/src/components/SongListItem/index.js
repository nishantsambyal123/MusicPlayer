import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './songListItem.styles';
const Item = props => {
  const song = props.detail.item;
  const {itemClicked} = props;
  return (
    <TouchableOpacity onPress={() => itemClicked(song)}>
      <View style={styles.mainContainer}>
        <View style={styles.itemRow}>
          <Image style={styles.imageView} source={{uri: song.artworkUrl100}} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.titleText}>{song.trackName ?? 'Untitled'}</Text>
            <Text>{song.artistName}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
