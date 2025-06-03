import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import useStore from "./Store";

const Home = () => {
  const expenses = useStore((state) => state.expenses);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(231, 231, 231)" }}>
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
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Good Morning!
          </Text>
          <Text style={{ fontSize: 18, color: "gray" }}>
            Track your expenses
          </Text>
        </View>
      </View>
      <View></View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 10, gap: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Expenses</Text>
        </View>

        <View>
          {expenses.map((expense: any) => (
            <View
              style={{
                backgroundColor: "white",
                paddingHorizontal: 20,
                paddingVertical: 30,
                borderWidth: 0,
                borderColor: "#ccc",
                justifyContent: "space-between",
                flexDirection: "row",
                borderRadius: 5,
              }}
            >
              <Text
                key={expense.id}
                style={{ fontSize: 16, fontWeight: "bold" }}
              >
                {expense.description}
              </Text>
              <Text style={{ fontSize: 14, color: "green" }}>
                ${expense.amount}
              </Text>
            </View>
          ))}
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
