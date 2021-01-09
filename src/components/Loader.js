

import React from 'react';
import { StyleSheet, View, Image, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

 const Loader = ({  }) => {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size={70} color="#a00030" animating />
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