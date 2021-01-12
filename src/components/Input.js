import React from 'react';
import { TextInput, StyleSheet,View } from 'react-native';
import { Entypo, FontAwesome } from "@expo/vector-icons"

 const Input = ({  changeInput, value, secureTextEntry, name, color, mar, placeholder , textColor, icon, library}) => {
    return (
        <View style={{...styles.inputContainer,
            backgroundColor: "#eceff1"}}>
            <View style={{flex:1,flexDirection: "row", alignItems: "center"}}>
                <View style={{height: 20, width: 30, marginLeft: 10, }}>
                    {library === "Entypo" && <Entypo name={icon} size={22} color="#a40032" /> }
                    {library === "FontAwesome" && <FontAwesome name={icon} size={22} color="#a40032" /> }
                </View>
                <TextInput secureTextEntry={secureTextEntry} placeholder={placeholder} value={value} name={name} onChangeText={(e) => changeInput(e, name)} 
                style={{ ...styles.input, marginVertical: mar ? 6 : 0,  
                 color: textColor ? textAlign : 'black' }} placeholderTextColor={textColor?textColor:'black'} >
                     
                 </TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#eceff1',
        
    },
    inputContainer: {
        display:'flex',
        flexDirection:'row',
        borderRadius: 7,
        height: 40,
        borderWidth: 1,
        borderColor: "#b0bec5"
    }
})

export default Input