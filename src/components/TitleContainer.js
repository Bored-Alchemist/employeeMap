import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { height, width } from '../assets/dimensions';
import Input from '../components/Input';

 const TitleContainer = ({ image, back, navigation }) => {
    return (
       
        <View style={styles.main}>
            <View style={{flex:1}}>
                <Text style={{fontSize:20, color:'black'}}>
                    Trending
                </Text>
            </View>
            <View>
                <Text style={{fontSize:16, color:'grey'}}>
                    View all >
                </Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
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