import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, BackHandler, ImageBackground, TouchableOpacity, ProgressBarAndroid } from 'react-native';
import Header from '../components/Header';
import {getCalories} from '../action/auth';
import { height, width } from '../assets/dimensions';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
import Healthy from '../assets/icons/healthy';

const Health = ({ navigation, getCalories }) => {
    const [cal, setCal] = useState(null)
    const [loading, isLoading] = useState(true);
    useEffect(()=>{
        fetchCalories()
    },[])

    const fetchCalories = async () => {
        const user = JSON.parse(await AsyncStorage.getItem('user'));
        const response = await getCalories({customerid: user.customerid});
        if(response.success) {
            const calarious = response.menulist[0];
            const indexofdot = calarious.calories.indexOf('.');
            setCal(calarious)
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
            <Image source={require('../assets/health.png')} style={{height: 200}} resizeMode='contain' />
            </View>
            <View style={{justifyContent:'center', alignContent:'center',alignItems:'center'}}>
                <View>
                    <TouchableOpacity style={{...styles.card}}>
                        <View style={{flexDirection: "row", alignContent: "space-around", flex: 1, width: width * 0.8}}>
                            <View style={styles.innerCard} >
                                <Text style={styles.innerCardFont}>{cal ? cal.calories : 0}{` `} </Text>
                            </View>
                            <Text style={{color: 'black', fontSize:20, fontWeight: "bold"}}>
                                Calories
                            </Text>
                        </View>
                        <View style={{flex: 1, justifyContent: "flex-end"}}>
                            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} color="#a40032" progress={cal ? parseInt(cal.calories)/2500 : 0} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{justifyContent:'center', alignContent:'center',alignItems:'center'}}>
            <View>
                    <TouchableOpacity style={{...styles.card}}>
                        <View style={{flexDirection: "row", alignContent: "space-around", flex: 1, width: width * 0.8}}>
                            <View style={styles.innerCard} >
                                <Text style={styles.innerCardFont}>{cal ? cal.carbs : 0}{`g`} </Text>
                            </View>
                            <Text style={{color: 'black', fontSize:20, fontWeight: "bold"}}>
                                Carbs
                            </Text>
                        </View>
                        <View style={{flex: 1, justifyContent: "flex-end"}}>
                            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} color="#a40032" progress={cal ? parseInt(cal.carbs)/2500 : 0} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{justifyContent:'center', alignContent:'center',alignItems:'center'}}>
            <View>
                    <TouchableOpacity style={{...styles.card}}>
                        <View style={{flexDirection: "row", alignContent: "space-around", flex: 1, width: width * 0.8}}>
                            <View style={styles.innerCard} >
                                <Text style={styles.innerCardFont}>{cal ? cal.fats : 0}{`g`} </Text>
                            </View>
                            <Text style={{color: 'black', fontSize:20, fontWeight: "bold"}}>
                                Total Fats
                            </Text>
                        </View>
                        <View style={{flex: 1, justifyContent: "flex-end"}}>
                            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} color="#a40032" progress={cal ? parseInt(cal.fats)/2500 : 0} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{justifyContent:'center', alignContent:'center',alignItems:'center'}}>
            <View>
                    <TouchableOpacity style={{...styles.card}}>
                        <View style={{flexDirection: "row", alignContent: "space-around", flex: 1, width: width * 0.8}}>
                            <View style={styles.innerCard} >
                                <Text style={styles.innerCardFont}>{cal ? cal.proteins : 0}{`g`} </Text>
                            </View>
                            <Text style={{color: 'black', fontSize:20, fontWeight: "bold"}}>
                                Proteins
                            </Text>
                        </View>
                        <View style={{flex: 1, justifyContent: "flex-end"}}>
                            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} color="#a40032" progress={cal ? parseInt(cal.proteins)/2500 : 0} />
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
        flexDirection:'column',
        justifyContent: "center",
        height: 80, 
        width: width * 0.9, 
        marginVertical: 2.5,
        borderRadius: 10 ,
        padding: 10,
        backgroundColor: '#f0f0f0',
        elevation: 2,
        paddingHorizontal: 15
    },
    innerCard: {
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 3, 
        marginRight: 15, 
        padding: 2,
        borderWidth: 1,
        borderColor: "#bdbdbd",
        width: 80
    },
    innerCardFont: {
        textAlign:'center', 
        color: 'black', 
        fontSize:16, 
        fontWeight: "200"
    }
})


const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        getCalories
    }
) (Health)