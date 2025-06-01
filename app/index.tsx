import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ' #F5FCFF',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
})