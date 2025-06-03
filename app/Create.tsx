import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import useStore from "./Store";


const Create = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  

  const addExpense = useStore((state) => state.addExpense);

  const handleSubmit = () => {
    addExpense({
      id: new Date().getTime().toString() ,
      amount: parseFloat(amount),
      description,
      category,
    })

    setAmount("");
    setDescription("");
    setCategory("");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.header}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Add new expense
        </Text>
        <Text style={{ fontSize: 15, color: "gray" }}>
          Enter the details of your expense to help you track your spending
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          gap: 20,
          flexDirection: "column",
        }}
      >
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 18 }}>Enter amount</Text>
          <TextInput
            style={{
              borderWidth: 0,
              borderColor: "gray",
              padding: 10,
              borderRadius: 5,
              height: 50,
              backgroundColor: "#f0f0f0",
            }}
            placeholder="Enter amount"
            placeholderTextColor="gray"
            keyboardType="numeric"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          ></TextInput>
        </View>
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 18 }}>Description</Text>
          <TextInput
            style={{
              borderWidth: 0,
              borderColor: "gray",
              padding: 10,
              borderRadius: 5,
              height: 50,
              backgroundColor: "#f0f0f0",
            }}
            placeholder="Description"
            placeholderTextColor="gray"
            value={description}
            onChangeText={(text) => setDescription(text)}
          ></TextInput>
        </View>
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 18 }}>Category</Text>
          <TextInput
            style={{
              borderWidth: 0,
              borderColor: "gray",
              padding: 10,
              borderRadius: 5,
              height: 50,
              backgroundColor: "#f0f0f0",
            }}
            placeholder="Enter Category"
            placeholderTextColor="gray"
            value={category}
            onChangeText={(text) => setCategory(text)}
          ></TextInput>
        </View>
        <Pressable
          onPress={() => handleSubmit()}
        >
          <View
            style={{
              backgroundColor: "black",
              padding: 15,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Add Expense
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 10,
    maxWidth: 300,
  },
});
