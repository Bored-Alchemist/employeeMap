import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, BackHandler, ImageBackground, TouchableOpacity, ProgressBarAndroid } from 'react-native';
import Header from '../components/Header';
import {walletinfo} from '../action/auth';
import { height, width } from '../assets/dimensions';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
import Healthy from '../assets/icons/healthy';

const Wallet = ({ navigation, walletinfo }) => {
    const [wallet, setWallet] = useState(null)
    const [loading, isLoading] = useState(true);
    useEffect(()=>{
        fetchCalories()
    },[])

    const fetchCalories = async () => {
        const user = JSON.parse(await AsyncStorage.getItem('user'));
        const response = await walletinfo({"customerid": user.customerid});
        if(response.success){
            console.log(response);
            setWallet(response.menulist[0])
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
                    Wallet
                </Text>
            </View>
            <View style={{height: 210, justifyContent: "center", alignItems: "center", marginTop: 15}}>
            <Image source={require('../assets/wallet.png')} style={{height: 200}} resizeMode='contain' />
            </View>
            <View style={{justifyContent:'space-between', alignContent:'center',alignItems:'center'}}>
                <View>
                    <TouchableOpacity style={styles.card}>
                        <Text style={{textAlign:'center', color: 'black', fontSize:18, fontWeight: "bold"}}>Current Ballence</Text>
                        <Text style={{textAlign:'center', color: '#a40032', fontSize:30, fontWeight: "bold"}}>{wallet.balance}{`/-`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{justifyContent:'space-between', alignContent:'center',alignItems:'center'}}>
                <View>
                    <TouchableOpacity style={styles.card}>
                        <Text style={{textAlign:'center', color: 'black', fontSize:18, fontWeight: "100"}}>View History</Text>
                        <View style={{height: 20, width: 80, backgroundColor: "#a40032", borderRadius: 8, justifyContent: "center", alignItems: "center"}}>
                            <Text style={{fontSize: 14, fontWeight: "bold", color: "white", textAlign: "center"}}>view</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{justifyContent:'space-between', alignContent:'center',alignItems:'center'}}>
                <View>
                    <TouchableOpacity style={styles.card}>
                        <Text style={{textAlign:'center', color: 'black', fontSize:18, fontWeight: "100"}}>Recharge Wallet</Text>
                        <View style={{height: 20, width: 80, backgroundColor: "#a40032", borderRadius: 8, justifyContent: "center", alignItems: "center"}}>
                            <Text style={{fontSize: 14, fontWeight: "bold", color: "white", textAlign: "center"}}>pay now</Text>
                        </View>
                    </TouchableOpacity>
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
        marginTop: height*0.2
    },
    formContainer: {
        flex: 1.4,
        paddingHorizontal: width * 0.07,
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 16,
        color: 'white',
        marginBottom: 8
    },
    card: {
        display:'flex', 
        flexDirection:'row',
        justifyContent:'space-between', 
        alignItems:'center', 
        alignContent:'center',
        height: 85, 
        width: width * 0.9, 
        marginVertical: 2.5,
        borderRadius: 10 ,
        padding: 10,
        backgroundColor: '#f0f0f0',
        elevation: 2,
        paddingHorizontal: 25
    },
})


const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        walletinfo
    }
) (Wallet)