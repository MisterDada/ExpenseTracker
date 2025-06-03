import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type FiltersProps = {
  selected: string;
  setSelected: (filter: string) => void;
};

const Filters: React.FC<FiltersProps> = ({ selected, setSelected }) => {
  return (
    <View
      style={{
        paddingHorizontal: -20,
        paddingVertical: 10,
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 10,
        }}
      >
        <Pressable onPress={() => setSelected("today")}>
          <View
            style={[
              styles.filters,
              selected === "today" && { backgroundColor: "black" },
            ]}
          >
            <Text style={[selected === "today" && { color: "white" }]}>
              Today
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setSelected("week")}>
          <View
            style={[
              styles.filters,
              selected === "week" && { backgroundColor: "black" },
            ]}
          >
            <Text style={[selected === "week" && { color: "white" }]}>
              This week
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setSelected("month")}>
          <View
            style={[
              styles.filters,
              selected === "month" && { backgroundColor: "black" },
            ]}
          >
            <Text style={[selected === "month" && { color: "white" }]}>
              This month
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setSelected("lastmonth")}>
          <View
            style={[
              styles.filters,
              selected === "lastmonth" && { backgroundColor: "black" },
            ]}
          >
            <Text style={[selected === "lastmonth" && { color: "white" }]}>
              Last month
            </Text>
          </View>
        </Pressable>
      </ScrollView>
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
  },
});
