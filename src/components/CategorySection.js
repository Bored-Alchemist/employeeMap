import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { height, width } from '../assets/dimensions';
import Input from '../components/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Diet from '../assets/icons/diet';
import Online from '../assets/icons/online';
import Order from '../assets/icons/order';

 const CategorySection = ({ image, back, navigation }) => {
     const [org_name, setOrgName] = useState(null)
     useEffect(()=>{
         fetchUserData()
     },[])

     const fetchUserData = async () => {
        const user = JSON.parse(await AsyncStorage.getItem('user'));
        setOrgName(user.org_name);
     }
    return (
        <View style={styles.main}>
            <View >
                <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('CategoryItems')}>
                <Text style={{textAlign:'center', color: 'black', fontSize:18, fontWeight: "bold"}}>
                        Live & Menu
                    </Text>
                    <Image source={require('../assets/pngs/Image07.png')} resizeMode="contain" style={{width: 100}} />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Cart')}>
                <Text style={{textAlign:'center', color: 'black',fontSize:18, fontWeight: "bold"}}>
                        Order Food
                    </Text>
                    <Image source={require('../assets/pngs/Image08.png')} resizeMode="contain" style={{width: 100}} />
                </TouchableOpacity>
            </View>

            <View >
                <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Orders')}>
                <Text style={{textAlign:'center', color: 'black',fontSize:18, fontWeight: "bold"}}>
                        Meal tracker
                    </Text>
                    <Image source={require('../assets/pngs/Image09.png')} resizeMode="contain" style={{width: 100}} />
                    </TouchableOpacity>
                {/* <ImageBackground source={require('../assets/brownBox.png')} style={{ height:80,justifyContent:'center', alignItems:'center', alignContent:'center', padding:5, margin:5,width:width/3.5,elevation:4}} imageStyle={{borderRadius:6}}>
                <TouchableOpacity onPress={()=>navigation.navigate('CafeDensity')}>
                    <Text style={{textAlign:'center', color: 'white',fontSize:18}}>
                        {org_name == '1'  ? 'Order Food Subscription' : 'Cafeteria Density'}
                    </Text>
                    </TouchableOpacity>
                    </ImageBackground> */}
                {/* <ImageBackground source={require('../assets/purpleBox.png')} style={{ height:80,justifyContent:'center', alignItems:'center', alignContent:'center', padding:5, margin:5,width:width/3.5,elevation:4}} imageStyle={{borderRadius:6}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Report')}>
                    <Text style={{textAlign:'center', color: 'white',fontSize:18}}>
                        Report
                    </Text>
                    </TouchableOpacity>
                    </ImageBackground> */}
                {/* <ImageBackground source={require('../assets/lightPurpleBox.png')} style={{ height:80,width:width/3.5, justifyContent:'center', alignItems:'center', alignContent:'center',padding:5, margin:5,elevation:4}} imageStyle={{borderRadius:6}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Health')}>
                <Text style={{textAlign:'center', color: 'white', fontSize:18}}>
                        Health & Tracker
                    </Text>
                    </TouchableOpacity>
                </ImageBackground> */}
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        backgroundColor: '#f0f0f0',
        alignItems: "center"
    },
    start: {
        alignItems: 'flex-start',
        flex: 0.3,
        justifyContent:'center'
    },
    end: {
        alignItems: 'flex-end',
        flex: 2
    },
    card: {
        display:'flex', 
        flexDirection:'row',
        justifyContent:'space-between', 
        alignItems:'center', 
        alignContent:'center',
        height: 100, 
        width: width * 0.9, 
        marginVertical: 10,
        borderRadius: 10 ,
        padding: 10,
        backgroundColor: '#f0f0f0',
        elevation: 2,
        paddingHorizontal: 25

    }
})

export default CategorySection;