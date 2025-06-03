import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet } from 'react-native'
import Create from './Create'
import Home from './Home'

const TabNavigator = () => {
    const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false, }} >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={Create} />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})