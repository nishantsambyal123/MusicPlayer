import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import SongDetails from '../../screens/SongDetails';
import {NavigationContainer} from '@react-navigation/native';

const AppStackEntry = () => {
  const Stack = createNativeStackNavigator();

  function HomeStack() {
    return (
      <Stack.Navigator headerMode="screen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="SongDetails"
          component={SongDetails}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default AppStackEntry;
