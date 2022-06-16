// In App.js in a new project

import * as React from 'react';
import order from './assets/data/orders.json';
import { View, Text, FlatList,StyleSheet } from 'react-native';
import {LoGo, Backarrow} from './assets/index';
import { getFocusedRouteNameFromRoute, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Logo from './assets/svg/logo.svg';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

function ConsultScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Consult Screen</Text>
    </View>
  );
}

const ListHead = ()=>{
  return(
    <View>
      <Text style={styles.header}>Submitted orders{"\n"}{"\n"}</Text>
      <Text style={styles.subhead}>Pending orders</Text>
    </View>
  )
}

function OrderScreen() {
  return (
    <View style={styles.container}>
          <FlatList
      keyExtractor={(item) => item.orderID}
      data={order}
      ListHeaderComponent ={ListHead}
      renderItem={({ item }) => (
        
        <Text style={styles.item}>
        <Text>{item.orderStatus}{"\n"}</Text>
        <Text style={{fontWeight: "bold"}}>{item.pharmacyName}{"\n"}</Text>
        <Text>Sum total: R{item.orderTotal}</Text>
        </Text>
            )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item:{
    marginTop:24,
    padding:30,
    fontSize:24,
    backgroundColor:'#e9f5f9'
  },
  header:{
    fontSize: 30,
    fontWeight: "bold"
  },
  subhead:{
    fontSize: 18,
    fontWeight: "bold"
  }
});
function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === "Consults") {
            iconName = focused ? 'message' : 'message';
          } else if (route.name === "Orders") {
            iconName = focused ? 'cart' : 'cart';
          } else if (route.name === "Profile") {
            iconName = focused ? 'account-cog' : 'account-cog';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />
        }
      })}
      >
        <Stack.Screen name="Home" component={HomeScreen}  /> 
        <Stack.Screen name="Consults" component={ConsultScreen} options={{ tabBarBadge: 0 }} />
        <Stack.Screen name="Orders" component={OrderScreen} options={{ tabBarBadge: 0, headerLeft:() => (
                  <View>
                  <Text>  <Backarrow />  <LoGo /></Text>
                  </View>
    ) }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;