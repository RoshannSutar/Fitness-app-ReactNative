import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Fitness from "../data/Fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const FitnessCards = () => {
    const FitnessData = Fitness;
    const navigation = useNavigation();
    return (
        <View>
        {FitnessData.map((item, key) => (
            <Pressable 
            onPress={() => navigation.navigate("Workout" ,{
                image : item.image,
                excercises : item.excersises,
                id : item.id,
                
            }) }
            style={{alignItems: "center", justifyContent: "center", margin: 10,borderColor:"black" }}
            >
            <Image
                source={{ uri: item.image }}
                style={{ width:"95%", height: 200,borderRadius:6 }}
            />
            <Text
                style={{
                position: "absolute",
                color: "black",
                fontSize: 16,
                fontWeight: "bold",
                left: 20,
                top: 10,
                }}
            >
                {item.name}
            </Text>
            <MaterialCommunityIcons
                style={{
                position: "absolute",
                color: "black",
                bottom: 15,
                left: 20,
                }}
                name="lightning-bolt"
                size={24}
                color="black"
            />
            </Pressable>
        ))}
        </View>
    );
    };

export default FitnessCards;

const styles = StyleSheet.create({});
