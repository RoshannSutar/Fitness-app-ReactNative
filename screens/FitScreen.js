import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FitnessItems } from "../Context";

const FitScreen = () => {
  const route = useRoute();
  
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const excercise = route.params.excercises;
  const current = excercise[index];
  
  const {completed,
    setCompleted,
    workout,
    setWorkout,
    calories,
    setCalories,
    minutes,
    SetMinutes,} = useContext(FitnessItems)
    console.log(completed,"completed excercise");
  return (
    <SafeAreaView style={{ marginTop: 27 ,backgroundColor:"#FEFBF3",height:"100%"}}>
      <Image
        style={{ width: "100%", height: 350 }}
        source={{ uri: current.image }}
      />
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {current.name}
      </Text>
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 38,
          fontWeight: "bold",
        }}
      >
        x{current.sets}
      </Text>
      {index + 1 >= excercise.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate("Home");

            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={{
            backgroundColor: "#317773",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            borderRadius: 20,
            padding: 10,
            width: 150,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            }}
          >
            DONE
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("Rest");
            setCompleted([...completed,current.name])
            setWorkout(workout+1)
            setCalories(calories+6.3)
            SetMinutes(minutes+2.5)

            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={{
            backgroundColor: "#6D9886",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            borderRadius: 20,
            padding: 10,
            width: 150,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            }}
          >
            DONE 👍
          </Text>
        </Pressable>
      )}

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 50,
        }}
      >
        <Pressable
        disabled = {index==0}
        onPress = {()=>{
            navigation.navigate("Rest");
            setTimeout(()=>{
                setIndex(index-1)
            },2000)
        }}
          style={{
            backgroundColor: "#79B4B7",
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 20,
            width: 100,
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            👈 PREV
          </Text>
        </Pressable>
        {index + 1 >= excercise.length ? (
          <Pressable
            onPress={() => {
            navigation.navigate("Home");

            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
            style={{
              backgroundColor: "#79B4B7",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              SKIP 👉
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
            navigation.navigate("Rest");

            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
            style={{
              backgroundColor: "#79B4B7",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              SKIP 👉
            </Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});
