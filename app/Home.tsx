import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";


const Home= () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.header}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: "50%",
            backgroundColor: "gray",
          }}
        ></View>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Good Morning!</Text>
          <Text style={{fontSize: 18, color: 'gray'}}>Track your expenses</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20,
  },
});
