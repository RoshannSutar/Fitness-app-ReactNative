import { StyleSheet, Text, View, Image, ScrollView, StatusBar,} from "react-native";
import React, {useContext} from "react";
import FitnessCards from "../components/FitnessCards";
import { SafeAreaView } from "react-native-safe-area-context";
import { FitnessItems } from "../Context";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from 'lottie-react-native';


const HomeScreen = () => {
    const {completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        SetMinutes,} = useContext(FitnessItems)
        
    return (
        <ScrollView style={{marginTop:27,backgroundColor:"#F8F0DF"}}>
        <StatusBar backgroundColor="#79B4B7" barStyle="light-content" />
                <View >
                    <View style={{
                    backgroundColor: "#79B4B7",
                    padding: 10,
                    height: 65,
                    width: "100%",
                    elevation:70,
                    
                    
                    }}>
                        <View style={{
                        flexDirection: "row"}}>
                        <Image
                            source={require('./logo.png')}// Replace with your image path
                            style={{ width: 50, height: 50 }} // Adjust width and height as needed
                        />
                        <Text style={{marginLeft:10, marginTop:6, fontSize:25,fontWeight:"bold",elevation:40,color:'black'}}>Fit.Bit</Text>
                        </View>
                        </View> 
                            
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20, margin:10}}>
                    <View
                    style={styles.circularView}>
                    
                        <Text style={styles.numberText}>{workout}</Text>
                        <Text style={{fontSize:14, fontWeight:"bold",color:'white'}}>WORKOUTS</Text>
                        
                    </View>
                    
                    <View style={styles.circularView}>
                        <Text style={styles.numberText}>{calories}</Text>
                        <Text style={{fontSize:14, fontWeight:"bold",color:'white'}}>KCAL</Text>
                    </View>
                    
                    <View style={styles.circularView}>
                        <Text style={styles.numberText}>{minutes}</Text>
                        <Text style={{fontSize:14, fontWeight:"bold",color:'white'}}>MINS</Text>
                    </View>
                      
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center',height:200,width:"94%",borderRadius:7 ,backgroundColor:"#FEFBF3",marginLeft:"3%",elevation:10, marginBottom:"3%"}}>
                    <LottieView 
                            autoPlay
                            loop
                            speed ={1.5} 
                            source={require('./wrorkout.json')}  style={{height:200 , width:200}}/>
                    
                            
                            <View style={{marginLeft:6}}>
                            <Text style={{fontSize:42, fontWeight:"bold" ,color:"#79B4B7"}}>I'm your </Text>
                            <Text style={{fontSize:32 ,fontWeight:"bold"}}> training </Text>
                            <Text style={{fontSize:32 ,fontWeight:"bold"}}> partner !</Text>
                            </View>
                    </View>
                    </View> 
                <ScrollView style={{width:"94%",marginLeft:"3%",backgroundColor:'#FEFBF3',borderRadius:7}}> 
                <FitnessCards/>
                
                </ScrollView>
                
                </ScrollView>    
        
    );
};
const styles = StyleSheet.create({
    
    circularView: {
    width: 100,
    height: 100,
    borderRadius: 50, // Half of width and height to make it circular
    backgroundColor: '#79B4B7', // Background color of the circular view
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:"white",
    borderWidth:3,
},
numberText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
},
});
export default HomeScreen;

const style = StyleSheet.create({});
