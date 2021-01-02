import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { height, width } from '../assets/dimensions';
import Input from '../components/Input';

 const TitleContainer = ({ image, back, navigation }) => {
    return (
       
        <View style={styles.main}>
            <View style={{flex:1,borderColor:'lightgrey',borderWidth:2, borderTopLeftRadius:6,borderTopRightRadius:6}}>
                <ImageBackground source={require('../assets/Mask.png')} style={{height:height*0.2}} imageStyle={{borderTopLeftRadius:6, borderTopRightRadius:6}}></ImageBackground>
            </View>
            <View style={{paddingLeft:10,paddingTop:10,borderColor:'lightgrey',borderBottomWidth:2, borderBottomLeftRadius:6,borderLeftWidth:2,borderRightWidth:2, borderBottomRightRadius:6,}}>
                <Text style={{fontSize:18, color:'black', fontWeight:'bold'}}>
                    Abcolrem Restuarant
                </Text>
                <Text style={{fontSize:14, color:'grey'}}>
                    cnskdjvbskbakjdvskvbjfadjskb
                </Text>
                <View style={{display:'flex', flexDirection:'row', marginTop:10,paddingBottom:10}}>
                    <View>
                        <Text style={{backgroundColor:'#FAECD7', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight:10}}>
                            10-15 min
                        </Text>
                    </View>

                    <View style={{marginLeft:5}}>
                        <Text style={{backgroundColor:'#FAECD7', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight:10}}>
                            Rs 100 Delivery
                        </Text>
                    </View>

                    <View style={{marginLeft:5}}>
                        <Text style={{backgroundColor:'#FAECD7', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight:10}}>
                            10-15 min
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        paddingHorizontal: width * 0.04,
        backgroundColor: 'white',
        elevation: 4,
        paddingVertical: height * 0.015,
        
        
    },
    start: {
        alignItems: 'flex-start',
        flex: 0.3,
        justifyContent:'center'
    },
    end: {
        alignItems: 'flex-end',
        flex: 2
    }
})

export default TitleContainer;