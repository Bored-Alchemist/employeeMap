import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, ProgressBarAndroid} from 'react-native';
import { width } from '../assets/dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {vendorDetail} from "../action/auth";
import { SliderBox } from "react-native-image-slider-box";
import { interpolate } from 'react-native-reanimated';
import ProgressCircle from 'react-native-progress-circle'

 const CategorySection = ({navigation, density, img}) => {
     const [org_name, setOrgName] = useState(null)
     const [vendorInfo, setVendorInfo] = useState(null)
    //  const [img, setImg] = useState(["http://data.thefooods.com/v1/corporate/images/first.jpg", "http://data.thefooods.com/v1/corporate/images/second.jpg", "http://data.thefooods.com/v1/corporate/images/third.jpg", 
    //                                 "http://data.thefooods.com/v1/corporate/images/fourth.jpg", "http://data.thefooods.com/v1/corporate/images/fifth.jpg"])
    // const [vendorDensity, setVendorDensity] = useState("")
     useEffect(()=>{
         fetchUserData();
     },[])

     const fetchUserData = async () => {
        const user = JSON.parse(await AsyncStorage.getItem('user'));
        setOrgName(user.customerorgname);
     }

    return (
        <View style={styles.main}>
            <View style={styles.slider}>
                <SliderBox
                    images={img}
                    sliderBoxHeight={175}
                    parentWidth={width*0.9}
                    onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
                    dotColor="#a40032"
                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={20}
                    autoplay
                    circleLoop
                    resizeMethod={'resize'}
                    resizeMode={'cover'}
                    paginationBoxStyle={{
                        position: "absolute",
                        bottom: 0,
                        padding: 0,
                        alignItems: "center",
                        alignSelf: "center",
                        justifyContent: "center",
                        paddingVertical: 10
                    }}
                    ImageComponentStyle={{borderRadius: 15}}
                    imageLoadingColor="#2196F3"
                    />
            </View>
            
                {/* <SliderBox
                    images={img}
                    sliderBoxHeight={300}
                    onCurrentImagePressed={index =>
                        console.warn(`image ${index} pressed`)
                    }
                    autoplay={true}
                    circleLoop={true}
                    paginationBoxStyle={{borderRadius: 15}}
                    ImageComponentStyle={{borderRadius: 15, marginTop: 5}}
                    
                /> */}
            
            <View>
                <View style={styles.card}>
                    <View style={{flexDirection: "column", alignContent: "space-around"}}>
                        <Text style={{textAlign:'center', color: 'black', fontSize:22, fontWeight: "bold"}}>
                            Cafeteria Density
                        </Text>
                        <Text style={{ color: 'black', fontSize:16}}>
                            Vendor-01
                        </Text>
                        <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} color="#a40032" progress={density ? density/100 : 0} />
                    </View>
                    <ProgressCircle
                        percent={density}
                        radius={45}
                        borderWidth={15}
                        color="#a40032"
                        shadowColor="#999"
                        bgColor="#fff"
                    >
                        <Text style={{textAlign:'center', color: 'black', fontSize:20, fontWeight: "bold"}}>{density ? density : 0}%</Text>
                    </ProgressCircle>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Venderlist')}>
                    <Text style={{textAlign:'center', color: 'black', fontSize:18, fontWeight: "bold"}}>
                        Live Menu
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
                        Meal Status
                    </Text>
                    <Image source={require('../assets/status.png')} resizeMode="contain" style={{width: 100}} />
                    </TouchableOpacity>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        backgroundColor: '#f0f0f0',
        alignItems: "center",
        marginTop: 15
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
        height: 95, 
        width: width * 0.9, 
        marginVertical: 10,
        borderRadius: 10 ,
        padding: 10,
        backgroundColor: '#f0f0f0',
        elevation: 2,
        paddingHorizontal: 25
    },
    slider: {
        display:'flex', 
        flexDirection:'row',
        justifyContent:'center', 
        alignItems:'center', 
        alignContent:'center',
        height: 175, 
        width: width * 0.9, 
        borderRadius: 15 ,
        backgroundColor: '#f0f0f0',
        elevation: 2,
    }
})

export default CategorySection;