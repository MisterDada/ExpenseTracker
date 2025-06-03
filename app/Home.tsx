import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Filters from "./Filters";
import useStore from "./Store";

const Home = () => {
  const expenses = useStore((state) => state.expenses);
  const [selectedFilter, setSelectedFilter] = useState("today");

  // Filtering logic
  const now = new Date();
  const filteredExpenses = expenses.filter((expense: any) => {
    const expenseDate = new Date(expense.date);
    if (selectedFilter === "today") {
      return (
        expenseDate.getDate() === now.getDate() &&
        expenseDate.getMonth() === now.getMonth() &&
        expenseDate.getFullYear() === now.getFullYear()
      );
    } else if (selectedFilter === "week") {
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      return expenseDate >= startOfWeek && expenseDate <= endOfWeek;
    } else if (selectedFilter === "month") {
      return (
        expenseDate.getMonth() === now.getMonth() &&
        expenseDate.getFullYear() === now.getFullYear()
      );
    } else if (selectedFilter === "lastmonth") {
      const lastMonth = new Date(now);
      lastMonth.setMonth(now.getMonth() - 1);
      return (
        expenseDate.getMonth() === lastMonth.getMonth() &&
        expenseDate.getFullYear() === lastMonth.getFullYear()
      );
    }
    return true; // Default case, if no filter matches
  });

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
      
        <Filters selected={selectedFilter} setSelected={setSelectedFilter} />

      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          Your Expenses
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 10, gap: 20 }}>
        <View style={{ gap: 10 }}>
          {filteredExpenses.map((item: any) => (
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
                  {new Date(item.date).toLocaleDateString()}
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
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20,
  },
});
