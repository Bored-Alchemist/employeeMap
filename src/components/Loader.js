

import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { connect } from 'react-redux';

 const Loader = ({  }) => {
    return (
        <View style={styles.loaderContainer}>
            <Image source={require('../assets/logo.png')} style={{
                    height: 70, width: 70
                }} />
                <Text>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        height: 50,
        width: 50
    },
    loaderContainer: {
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        flex:1
    }
})

export default Loader