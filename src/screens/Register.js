import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ToastAndroid, BackHandler, ImageBackground } from 'react-native';
import { red } from '../assets/colors';
import Input from '../components/Input';
import Button from '../components/Button';
import { height, width } from '../assets/dimensions';
import { connect } from 'react-redux';
import { register } from '../action/auth';
import Loader from '../components/Loader';
import Eating from '../assets/icons/Eating';

const Register = ({ navigation, register }) => {
const [loading, isLoading] = useState(false);
    const [ form, setForm ] = useState({
        email: '', password: '', firstname: '', lastname: '', Repassword: '', mobile: ''
    });

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


    const [registerForm, setRegisterForm] = useState(true);
    const changeInput = (e, name) => {
        setForm({
            ...form, [name]: e
        })
    }

    const submit = async () => {
        isLoading(true);
        const response = await register({...form, name: firstname+' '+lastname })
        if(response.success) {
            setRegisterForm(false);
            setTimeout(()=>{
                navigation.navigate('Login');
            }, 3000);
        }
        isLoading(false);
    }



    const { email, password, firstname, lastname, Repassword, mobile } = form;
    return (
        <>
        {loading && <Loader />}
        {!loading && <View style={{
            flex: 1
        }}>
        {registerForm && <ScrollView style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/pngs/Logo04.png')} style={{height: 40, marginBottom: 25}} resizeMode='contain' />
                <Image source={require('../assets/pngs/Image02.png')} style={{height: height*0.3}} resizeMode='contain' />
            </View>
            <View style={styles.formContainer}>
                <View style={{marginTop:10}}>
                    <Input changeInput={changeInput} value={firstname} name='firstname' placeholder="First Name" prefix_icon="user"  />
                </View>
                <View style={{marginTop:10}}>
                    <Input changeInput={changeInput} value={lastname} name='lastname' placeholder="Last Name" prefix_icon="user"  />
                </View>
                <View style={{marginTop:10}}>
                        <Input changeInput={changeInput} value={mobile} name='mobile' placeholder="Mobile" prefix_icon="mobile" />
                    </View>
                <View style={{marginTop:10}}>
                        <Input changeInput={changeInput} value={email} name='email' secureTextEntry={false} placeholder="Email ID" prefix_icon="envelope" />
                    </View>
                    <View style={{marginTop:10}}>
                        <Input changeInput={changeInput} value={password} name='password' secureTextEntry={true} placeholder="Password" prefix_icon="lock" />
                    </View>
                <View style={{marginTop:10, marginBottom: 10}}>
                        <Input changeInput={changeInput} value={Repassword} name='Repassword' secureTextEntry={true} placeholder="Confirm Password" prefix_icon="lock" />
                    </View>

                <Button label="Sign Up" bgColor={red} textColor="white" clickEvent={()=>submit()} />

            </View>
        </ScrollView>}
        
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
        flex: 1,
        // height: height * 0.1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40
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
        register
    }
) (Register)