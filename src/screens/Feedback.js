import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ToastAndroid, BackHandler, ImageBackground } from 'react-native';
import Header from '../components/Header';
import { height, width } from '../assets/dimensions';
import Button from '../components/Button';

const Feedback = ({ navigation }) => {
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
    return (
        <ScrollView style={{
            flex: 1
        }}>
            <Header image={true} navigation={navigation} />
        <View style={styles.mainContainer}>
            <View style={{ustifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: height*0.06, marginBottom:height*0.07}}>
                <Image source={require('../assets/pngs/Image04.png')} resizeMode="contain" style={{height: height*0.3}} />
            </View>
            <View style={{flex:1, justifyContent:'center',alignItems:'center', paddingHorizontal:20}}>
                    <Text style={{fontSize:30, letterSpacing:2, fontWeight:'bold', color: '#a00030'}}>
                        Thank You
                    </Text>
                    <Text style={{fontSize:16,marginTop:20, textAlign:'center', color: '#a00030'}}>
                        Your order will be safely and successfully delivered
                    </Text>
            </View>
            
            <View style={{flex:1, paddingHorizontal:20}}>
                <Button label="Continue" bgColor="#B50019" textColor="white" clickEvent={()=>navigation.navigate('Home')} />
                
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


export default Feedback