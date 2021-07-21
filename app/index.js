import React, {useEffect, useState} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import AppStackEntry from './src/config/router';
import Strings from './src/appConstants/strings';
const App = () => {
  const [networkState, setNetworkState] = useState(true);

  useEffect(() => {
    checkNetworkState();
  }, [networkState]);

  function checkNetworkState() {
    NetInfo.fetch().then(state => {
      setNetworkState(state.isConnected);
    });
  }

  return (
    <Provider store={store}>
      <View style={styles.appContainer}>
        <AppStackEntry />
        {!networkState &&
          Alert.alert(
            Strings.NO_INTERNET_TITLE,
            Strings.NO_INTERNET_MESSAGE,
            [{text: Strings.TRY_AGAIN, onPress: () => checkNetworkState()}],
            {
              cancelable: false,
            },
          )}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
