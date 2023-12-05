import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React,{useContext} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { FitnessItems } from "../Context";

const WorkoutScreen = () => {
  const route = useRoute();
  
  const navigation = useNavigation();
  const {completed,
    setCompleted,
    } = useContext(FitnessItems)
  return (
    <>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#FEFBF3", marginTop: 27 }}
      >
        <Image
          source={{ uri: route.params.image }}
          style={{ width: "100%", height: 220 }}
        />
        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 30, left: 20 }}
          name="arrow-back-outline"
          size={28}
          color="#9D9D9D"
        />
        
        {route.params.excercises.map((item, index) => (
          
          <Pressable
            key={index}
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
          >
            <Image
              style={{ width: 90, height: 90 ,borderRadius:5}}
              source={{ uri: item.image }}
              
            />
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 4 , width:210,color:"#9D9D9D"}}>
                {item.name}
              </Text>
              <Text
                style={{
                  marginTop: 4,
                  fontSize: 18,
                  color: "gray",
                  marginLeft: 4,
                }}
              >
                x{item.sets}
              </Text>
            </View>
            {completed.includes(item.name)?(
                <AntDesign name="checkcircle" size={24} color ="green"/>
            ):(
                null
            )}
          </Pressable>
        ))}
      </ScrollView>
      <Pressable
      onPress={() => {navigation.navigate("Fit",{
        excercises:route.params.excercises
      })
      setCompleted([]);
      }}
        style={{
          backgroundColor: "#79B4B7",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 7,
          marginVertical: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          START 👍
        </Text>
      </Pressable>
    </>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});
