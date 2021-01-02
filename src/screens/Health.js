import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, BackHandler, ImageBackground } from 'react-native';
import Header from '../components/Header';
import {getCalories} from '../action/auth';
import { height, width } from '../assets/dimensions';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
import Healthy from '../assets/icons/healthy';

const Health = ({ navigation, getCalories }) => {
    const [cal, setCal] = useState(0)
    const [loading, isLoading] = useState(true);
    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    //     return () => {
    //       backHandler.remove();
    //     };
    //   }, []);

    //   function handleBackButtonClick() {
    //     navigation.navigate('Venderlist');
    //     return true;
    // }
    useEffect(()=>{
        fetchCalories()
    },[])

    const fetchCalories = async () => {
        const user = JSON.parse(await AsyncStorage.getItem('user'));
        console.log({cust_id: user.cust_id, org_id: user.org_name});
        const response = await getCalories({cust_id: user.cust_id});
        if(response.success) {
            console.log(response);
            const calarious = response.data[0];
            const indexofdot = calarious.indexOf('.');
            setCal(calarious.slice(0, indexofdot+2))
        }
        isLoading(false);
    }
    return (
        <>
        {loading && <Loader />}
        {!loading && <ScrollView style={{
            flex: 1, backgroundColor: "#f0f0f0"
        }}>
            <Header image={true} navigation={navigation} />
            <View style={{justifyContent:'flex-start', alignContent:'flex-start', alignItems:'flex-start'}}>
                <Text style={{fontSize:24, fontWeight:'300', marginLeft:30, marginTop: 15}}>
                    Health Tracker
                </Text>
            </View>
            <View style={{height: 210, justifyContent: "center", alignItems: "center", marginTop: 15}}>
                <Healthy />
            </View>
            <View style={{justifyContent:'center', alignContent:'center',alignItems:'center'}}>
                <View style={{justifyContent:'center', alignContent:'center',alignItems:'center', 
                height: width * 0.8 , width: width * 0.8, backgroundColor: "#7c4dff", marginTop: 50, borderRadius: width * 0.4}}>
                    <Text style={{color: 'white', fontSize: 40}}>Calories</Text>
                    <Text style={{color:'white', fontSize:45, fontWeight:'bold'}}>
                        {cal ? cal : 0}
                    </Text>
                </View>
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
        getCalories
    }
) (Health)