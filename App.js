import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Add this import for importing icons
import { Ionicons } from '@expo/vector-icons';

function Q2Screen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>Q2!</Text>
      <Button 
        title="Go to Q3" 
        onPress={() => navigation.navigate('Q3')}
        />
    </View>
  );
}
function Q1Screen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>Q1!</Text>
      <Button 
        title="Go to Q2" 
        onPress={() => navigation.navigate('Q2')}
        />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
      <Text>Quiz screen</Text>
      <Button
        title="Go to Question 1"
        onPress={() => navigation.navigate('Q1')}
      />
    </View>
  );
}
function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
const HomeStack = createStackNavigator();


function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />            
      <HomeStack.Screen name="Q1" component={Q1Screen} />
      <HomeStack.Screen name="Q2" component={Q2Screen} />
    </HomeStack.Navigator>
  );
 }
 const SettingsStack = createStackNavigator();

 function SettingsStackScreen() {
   return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
 }
 const Tab = createBottomTabNavigator()
 export default class App extends React.Component() {
   render() {
   return (
<NavigationContainer>
     <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused
            ? 'ios-list-box'
            : 'ios-list';
          }
    
    return <Ionicons name={iconName} size={size} color={color}/>;
       },
    })}
    tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    }}>
   )
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
     </Tab.Navigator>
 </NavigationContainer>
   );
   }
 }