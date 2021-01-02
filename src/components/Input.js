import React from 'react';
import { TextInput, StyleSheet,View } from 'react-native'

 const Input = ({  changeInput, value, secureTextEntry, name, color, mar, placeholder , textColor, prefix_icon, suffix_icon, icon_flex, elevation, backgroundColor}) => {
    return (
        <View style={{...styles.inputContainer,
            backgroundColor: "#eceff1"}}>
            <View style={{flex:1, justifyContent: "center", padding: 10}}>
                <TextInput secureTextEntry={secureTextEntry} placeholder={placeholder} value={value} name={name} onChangeText={(e) => changeInput(e, name)} 
                style={{ ...styles.input, marginVertical: mar ? 6 : 0,  
                 color: textColor ? textAlign : 'black' }} placeholderTextColor={textColor?textColor:'black'} />
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