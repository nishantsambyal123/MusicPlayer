import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {play, pause} from '../../asset/icons';
import SoundPlayer from 'react-native-sound-player';
const SongDetails = props => {
  const {song} = props.route.params;
  const [toggle, setToggle] = useState(pause);
  useEffect(() => {
    try {
      SoundPlayer.playUrl(song.previewUrl);
    } catch (e) {
      console.log('cannot play the sound file', e);
    }
  });
  useEffect(() => {
    try {
      if (toggle === play) {
        console.log('song Paused');
        SoundPlayer.pause();
      } else {
        SoundPlayer.play();
        console.log('song played');
      }
    } catch (e) {
      console.log('Play Pause exception', e);
    }
  }, [toggle]);

  function playPause() {
    setToggle(toggle === play ? pause : play);
  }
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.imageView} source={{uri: song.artworkUrl100}} />
      <Text style={styles.titleSongs}>
        {song.trackCensoredName ?? song.trackName}
      </Text>
      <View style={styles.controllerView}>
        <TouchableOpacity
          onPress={() => {
            playPause();
          }}>
          <Image style={styles.icon} source={toggle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  controllerView: {
    marginTop: 100,
  },
  titleSongs: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 20,
  },
  imageView: {
    alignSelf: 'center',
    width: 300,
    height: 300,
  },
  icon: {
    alignSelf: 'center',
    width: 80,
    height: 80,
  },
});
export default SongDetails;
