import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ToastAndroid, BackHandler, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { height, width } from '../assets/dimensions';
import Loader from '../components/Loader';
import {getDensity} from '../action/auth';

const CafeDensity = ({ navigation, getDensity }) => {

    const [density, setDensity] = useState(0);
    const [loading, isLoading] = useState(true);
    useEffect(()=>{
        fetchDensity()
    },[]);
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

    const fetchDensity = async () => {
        const user = JSON.parse(await AsyncStorage.getItem('user'));
        console.log({cust_id: user.cust_id, org_id: user.org_name});
        const response = await getDensity({cust_id: user.cust_id, org_id: user.org_name});
        if(response.success) {
            console.log(response);
            setDensity(response.data[0])
        } else {
            setDensity(0)
        }
        isLoading(false);
    }

    return (
        <>
        {loading && <Loader/>}
        {!loading && <ScrollView style={{
            flex: 1
        }}>
            <Header image={true} navigation={navigation} />
            <View style={{justifyContent:'center', alignContent:'center', alignItems:'center', marginTop:20}}>
                <Text style={{fontSize:24, fontWeight:'bold'}}>
                    Cafeteria Density
                </Text>
            </View>
            <View style={{borderRadius:10, borderWidth:1, borderColor:'lightgrey', marginHorizontal:20, marginVertical:20, justifyContent:'center', alignItems:'center', alignContent:'center'}}>
                <Text style={{paddingTop:60, paddingBottom:60, fontSize:100, color:'#A9A9A9'}}>
                    {density}
                </Text>
            </View>
            
        </ScrollView>}
        </>
       
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
        flex: 1.4,
        // height: height * 0.45,
        paddingHorizontal: width * 0.07,
        justifyContent: 'flex-start'
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
        getDensity
    }
) (CafeDensity);