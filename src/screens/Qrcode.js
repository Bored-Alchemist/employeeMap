import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ToastAndroid, BackHandler, ImageBackground, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { height, width } from '../assets/dimensions';
import Button from '../components/Button';
import { AntDesign } from '@expo/vector-icons'
import { feedbackapi } from '../action/auth';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SvgQRCode from 'react-native-qrcode-svg';

const Qrcode = ({ navigation, feedbackapi, route }) => {
    const [star, setstar] = useState(0)
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          backHandler.remove();
        };
      }, []);

      function handleBackButtonClick() {
        navigation.navigate('Home');
        return true;
    }

    const stars = (rating) => {
    const starel = (index, color) => {
        return(
            <TouchableOpacity key={index} onPress={() => setstar(index+1)}>
                <AntDesign name="star" size={40} color={color} key={index} />
            </TouchableOpacity>
        )
    };
        var represent = [];
        for(var i = 0; i < 5; i++){
            if(i < star){
                represent.push(starel(i, "#ffeb3b"))
            }else{
                represent.push(starel(i, "grey"))
            }
        }
        return(
            <View style={{flex: 1, flexDirection: "row", justifyContent: "space-around", marginTop: 20}}>
                {represent}
            </View>
        )
    }

    const submit = async () => {
        const user = JSON.parse(await AsyncStorage.getItem('user'));
        const data = {"orderid": "1", "userid": user.consumerid, "rating": star}
        const response = await feedbackapi(data);
        console.log(response)
        setstar(0)
    }
    return (
        <ScrollView style={{
            flex: 1, height: height
        }}>
            <Header image={true} navigation={navigation} />
        <View style={styles.mainContainer}>
            <View style={{justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: height*0.06, marginBottom:height*0.07}}>
                <SvgQRCode value={route.params.orderID} size={height*0.2} />
            </View>
            <View style={{flex:1, justifyContent:'center',alignItems:'center', paddingHorizontal:20, marginTop: 100}}>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "#a00030"}}>Please Rate Your Experience</Text>
                    {stars()}
            </View>
            
            <View style={{flex:1, paddingHorizontal:20}}>
                <Button label="Continue" bgColor="#B50019" textColor="white" clickEvent={()=>{
                        submit()
                        navigation.navigate('Home');
                    }} />
            </View>
            
        </View>
         </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height:height
    },
    logoContainer: {
        flex: 0.8,
        // height: height * 0.1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: height*0.25
    },
    formContainer: {
        flex: 1.7,
        // height: height * 0.45,
        paddingHorizontal: width * 0.05,
        justifyContent: 'flex-start',
        
    },
    text: {
        fontSize: 16,
        color: 'white',
        marginBottom: 8
    }
})


const mapStateToProps = state => ({

})

export default connect(
    mapStateToProps, {
        feedbackapi
    }
) (Qrcode)