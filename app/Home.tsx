import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Filters from "./Filters";
import useStore from "./Store";

const Home = () => {
  const expenses = useStore((state) => state.expenses);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(231, 231, 231)" }}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Good Morning!
          </Text>
          <Text style={{ fontSize: 18, color: "gray" }}>
            Track your expenses, build your wealth!
          </Text>
        </View>
      </View>
      <View>
        <Filters />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingHorizontal: 40,
            paddingVertical: 10,
          }}
        >
          Your Expenses
        </Text>
      </View>
      <View style={{ paddingHorizontal: 40, paddingVertical: 10, gap: 20 }}>
        <View style={{ gap: 10 }}>
          {expenses.map((item: any) => (
            <View
              style={{
                backgroundColor: "white",
                paddingHorizontal: 20,
                paddingVertical: 20,
                borderWidth: 0,
                borderColor: "#ccc",
                justifyContent: "space-between",
                flexDirection: "row",
                borderRadius: 5,
                alignItems: "center",
              }}
              key={item.id}
            >
              <View>
                <Text
                  style={{ fontSize: 18, color: "black", fontWeight: "500" }}
                >
                  {item.description}
                </Text>
                <Text style={{ fontSize: 14, color: "gray" }}>
                  {new Date().toLocaleDateString()}
                </Text>
              </View>

              <Text style={{ fontSize: 18, color: "black", fontWeight: "500" }}>
                ₦{item.amount}
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
    paddingHorizontal: 40,
    paddingVertical: 20,
    gap: 20,
  },
});
