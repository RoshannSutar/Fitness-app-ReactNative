import { StyleSheet, Text, View, SafeAreaView,Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect,useState } from "react";
import LottieView from 'lottie-react-native';

const RestScreen = () => {
    const navigation = useNavigation();
    let timer = 0;
    const [timeLeft, setTimeLeft] = useState(5);

    const startTime = () => {
        setTimeout(() => {
        if (timeLeft <= 0) {
            navigation.goBack();
            clearTimeout(timer);
        }
        setTimeLeft(timeLeft - 1);
        }, 1000);
    };
    useEffect(() => {
        startTime();
        //clean up
        return () => clearTimeout(timer);
    });
    return (
        <SafeAreaView style={{backgroundColor:"#FEFBF3",height:"100%"}}>
        <LottieView 
                            autoPlay
                            loop
                            speed ={1} 
                            source={require('./break.json')}  style={{height:500 , width:500}}/>
        <Text
            style={{
            fontSize: 40,
            fontWeight: "900",
            marginTop: 50,
            textAlign: "center",
            }}
        >
            Energize Yourself !
        </Text>
        <Text style={{
            fontSize: 60,
            fontWeight: "900",
            marginTop: 50,
            textAlign: "center",
            }}>
            {timeLeft}
        </Text>

        </SafeAreaView>
    );
};

export default RestScreen;
