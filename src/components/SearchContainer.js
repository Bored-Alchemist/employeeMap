import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { height, width } from '../assets/dimensions';
import Input from '../components/Input';

 const SearchContainer = ({ image, back, navigation }) => {
    return (
        <>
        <View style={styles.main}>
            <View style={styles.start}>
                <TouchableOpacity>
                    <Image source={require('../assets/hamBurger.png')} style={{
                        height: 30, width: 30
                    }} />
                </TouchableOpacity>
            </View>
             <View style={styles.end} >
             <TouchableOpacity style={{flex:1}} onPress={()=>navigation.navigate('Search')} >
           
           
                <Input placeholder="Search for a restuarant" suffix_icon="search" backgroundColor="#F1F2F6" elevation={1} />
            
            
            </TouchableOpacity>
            </View>
        </View>
        <View style={{...styles.main,borderBottomColor:'lightgrey',
        borderBottomWidth:2}}>
        <View style={{flex:1, justifyContent:'center', alignContent:'center',alignItems:'center'}}>
            <Text>
                Lorem Ipsum
            </Text>
        </View>
        <View style={{flex:1, justifyContent:'center', alignContent:'center',alignItems:'center'}}>
            <Text>
                Lorem 
            </Text>
        </View>
        <View style={{flex:1, justifyContent:'center', alignContent:'center',alignItems:'center'}}>
            <Text>
                Ipsum
            </Text>
        </View>
        <View style={{flex:1, justifyContent:'center', alignContent:'center',alignItems:'center'}}>
            <Text style={{backgroundColor:'#ED2124', paddingTop:5,paddingBottom:5, paddingEnd:15, paddingStart:15, borderRadius:200, color:'white'}}>
                Lorem
            </Text>
        </View>
    </View>
    </>
    )
}

const styles = StyleSheet.create({
    main: {
        // display:'flex',
        flexDirection: 'row',
        paddingHorizontal: width * 0.04,
        backgroundColor: 'white',
        // elevation: 4,
        paddingVertical: height * 0.015,
        // flex:1,
    },
    start: {
        alignItems: 'flex-start',
        flex: 0.3,
        justifyContent:'center'
    },
    end: {
        // alignItems: 'flex-end',
        flex: 2
    }
})

export default SearchContainer;