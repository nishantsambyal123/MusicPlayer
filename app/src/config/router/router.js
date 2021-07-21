import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../components/HomeScreen';
import SongDetails from '../../components/SongDetails';
import {NavigationContainer} from '@react-navigation/native';

const AppStackEntry = () => {
  const Stack = createStackNavigator();

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
