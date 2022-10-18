import React from 'react';
import type {Node} from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {NavigationContainer, useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function FinalScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange' }}>
      <Text>FinalScreen</Text>
    </View>
  );
}

function Tab1() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gold' }}>
      <Text>Tab1</Text>
      {/* <Button title="go to settings" onPress={() => navigation.navigate('Settings')} /> */}
    </View>
  );
}

function Tab2() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'purple' }}>
      <Text>Tab2</Text>
      <Button title="FinalScreen" onPress={() => navigation.navigate('FinalScreen')} />
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
      <Text>Home Screen</Text>
      <Button title="go to settings" onPress={() => navigation.navigate('Settings')} />
      <Button title="go to tabs" onPress={() => navigation.navigate('MyTabs')} />
    </View>
  );
}

function Settings() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
      <Text>Settings</Text>
      <Button title="go Home" onPress={() => navigation.navigate('Home')} />
      <Button title="go to tabs" onPress={() => navigation.navigate('MyTabs')} />
    </View>
  );
}


const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
      animationEnabled: false,
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="FinalScreen" component={FinalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
