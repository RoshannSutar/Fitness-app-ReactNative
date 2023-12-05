import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);
  const navigation = useNavigation();

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(
      () => (ring1padding.value = withSpring(ring1padding.value + hp(5))),
      100
    );
    setTimeout(
      () => (ring2padding.value = withSpring(ring2padding.value + hp(5.5))),
      300
    );
    setTimeout(()=> navigation.navigate('Home'),2500)
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#79B4B7",
        
      }}
    >
      <StatusBar style="auto" />
      <Animated.View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)", // White color with 20% opacity
          borderRadius: 999, // A large value to make a circle (rounded-full)
          padding: ring1padding,
        }}
      >
        <Animated.View
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)", // White color with 20% opacity
            borderRadius: 999, // A large value to make a circle (rounded-full)
            padding: ring2padding,
          }}
        >
          <Image
            source={require("./logo.png")}
            style={{ height: hp(20), width: hp(20) }}
          />
        </Animated.View>
      </Animated.View>
      <View style={{ marginTop: 20 }}>
        <Text style={{fontSize:40, fontWeight:"bold" ,color:"white"}}>FIT.BIT</Text>
        
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
