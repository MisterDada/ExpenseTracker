import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Filters = () => {
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 10, flexDirection: "row", gap: 10 }}>
      <View
        style={styles.filters}
      >
        <Text>Today</Text>
      </View>
      <View
        style={styles.filters}
      >
        <Text>This week</Text>
      </View>
      <View
        style={styles.filters}
      >
        <Text>This month</Text>
      </View>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
    filters: {
          backgroundColor: "white",
          paddingHorizontal: 20,
          alignItems: "center",
          paddingVertical: 10,
            borderRadius: 50,
        }
});
