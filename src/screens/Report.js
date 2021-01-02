import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ToastAndroid, BackHandler, ImageBackground } from 'react-native';
import { red } from '../assets/colors';
import Header from '../components/Header';
import Button from '../components/Button';
import { height, width } from '../assets/dimensions';
import Input from '../components/Input';

const Report = ({ navigation }) => {
    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    //     return () => {
    //       backHandler.remove();
    //     };
    //   }, []);

    //   function handleBackButtonClick() {
    //     navigation.navigate("Venderlist");
    //     return true;
    // }

    return (
        <>
        <ScrollView style={{
            flex: 1,
            backgroundColor:'white'
        }}>
            <Header image={true} navigation={navigation} />
                <View style={{paddingVertical:0, paddingHorizontal:20, marginTop: 10}}>
                    <Text style={{fontSize:18, fontWeight:'bold'}}>
                        Report
                    </Text>
                </View>
                <View style={{height: width* 0.7, justifyContent: "center", alignItems: "center"}}>
                <Image source={require('../assets/pngs/Image06.png')} resizeMode="contain" style={{height: width* 0.7}} />
            </View>
        <View style={styles.inputContainer}>
            <View style={{marginTop:20}}>
                    <Input name='password' secureTextEntry={false} placeholder="How can we help you"  />
            </View>
            <View style={{marginTop:20}}>
                    <Input name='password' secureTextEntry={false} placeholder="Name"  />
            </View>
            <View style={{marginTop:20}}>
                    <Input name='password' secureTextEntry={false} placeholder="Email"  />
            </View>
            <View style={{marginTop:20}}>
                    <Input name='password' secureTextEntry={false} placeholder="Phone Number"  />
            </View>
            <View style={{marginTop:20}}>
                    <Input name='password' secureTextEntry={false} placeholder="Message"  />
            </View>
            <View style={{marginTop:20}}>
                <Button label="Send Message" bgColor="#B50019" textColor="white" clickEvent={()=>navigation.navigate('Home')} />
            </View>
        </View>


        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height:height
    },
    deliveryAddress: {
        backgroundColor:'white',
        paddingVertical:0,
        paddingHorizontal:10,
        elevation:4,
        margin:20,
        borderRadius:6
    },
    deliveryDurationContainer: {
        display:'flex',
        flexDirection:'row',
        paddingVertical:5,
        paddingHorizontal:20,
    },
    inputContainer: {
        paddingHorizontal:20,
        paddingVertical:0
    }
})


const mapStateToProps = state => ({

})


export default Report