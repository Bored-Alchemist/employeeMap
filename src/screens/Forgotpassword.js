import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Modal, BackHandler, ImageBackground, TouchableHighlight } from 'react-native';
import { red } from '../assets/colors';
import Input from '../components/Input';
import Button from '../components/Button';
import { height, width } from '../assets/dimensions';
import { connect } from 'react-redux';
import { forgotpassword } from '../action/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';

const ForgotPassword = ({ navigation, forgotpassword }) => {
    const [ form, setForm ] = useState({
        username: ''
    });
    const [loading, isLoading] = useState(false);
    const changeInput = (e, name) => {
        setForm({
            ...form, [name]: e
        })
    }
    
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          backHandler.remove();
        };
      }, []);

      function handleBackButtonClick() {
        navigation.goBack();
        return true;
    }

    const loginUser = async () => {
      isLoading(true);
        const response = await forgotpassword(form);
        if(response.success) {
          setForm({
                username: ''
            });
            navigation.navigate('Login')
        }
        isLoading(false);
    }

    const {username} = form;
    return (
        <>
        {loading && <Loader />}
          {!loading && <View style={{
              flex: 1
          }}>
          <View style={{...styles.mainContainer}}>
              <View style={styles.logoContainer}>
                  <Image source={require('../assets/pngs/Logo02.png')} style={{height: 40}} resizeMode='contain' />
              </View>
                  <View style={styles.formContainer}>
                    <View style={{marginVertical: 5}}>
                      <Input changeInput={changeInput} value={username} name='username' placeholder="Email" />
                    </View>
                      
                  <View style={{marginVertical: 5}}>
                  <Button label="Sent Reset Link" bgColor={red} textColor="white" clickEvent={()=>loginUser()}  />
                  </View>
              </View>
              <View style={{justifyContent:'center', alignItems:'center', alignContent:'center', height: height * 0.45, backgroundColor: "#f0f0f0"}}>
                  <Image source={require('../assets/forgot.png')} style={{width: width * 0.7}} resizeMode='contain' />
              </View>
          </View>
           </View>}
           </>
      )
}

const styles = StyleSheet.create({
    mainContainer: {
        height:height,
        backgroundColor: '#f0f0f0'
    },
    logoContainer: {
        height: height * 0.15,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10
    },
    formContainer: {
        height: height * 0.25,
        paddingHorizontal: width * 0.07,
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 16,
        color: 'white',
        marginBottom: 8
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
})


const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        forgotpassword
    }
) (ForgotPassword)