import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const App = props => {
  const [useState, setState] = React.useState(0);
  React.useEffect(() => {
    console.log('State changed', useState);
  }, [useState]);

  function setOnButtonClickListener() {
    setState(useState + 1);
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={() => setOnButtonClickListener()}>
        <Text>Hi there {useState}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  button: {
    padding: 20,
    backgroundColor: '#bbcc00',
  },
});

export default App;
