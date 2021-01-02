import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { height, width } from '../assets/dimensions';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showToast, getOrders} from '../action/auth';
import Header from '../components/Header';
import SvgQRCode from 'react-native-qrcode-svg';

const Qrcode = ({ route, navigation}) => {
    return (
       <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
            <View style={{height: width * 0.9, width: width * 0.9}}>
                <SvgQRCode value={route.params.orderID} size={width*0.9} />
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    
})

const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {}
) (Qrcode)