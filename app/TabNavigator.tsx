import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './index'
import React from 'react'

const TabNavigator = () => {
    const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator screenOptions={{headerShown: false}} >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})