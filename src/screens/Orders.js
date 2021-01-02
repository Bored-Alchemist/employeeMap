import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity , BackHandler} from 'react-native';
import { height, width } from '../assets/dimensions';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showToast, getOrders} from '../action/auth';
import Header from '../components/Header';
import SvgQRCode from 'react-native-qrcode-svg';

const Orders = ({ type, navigation, getOrders }) => {
    const [orders, setOrders] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(()=>{
        fetchOrder()
    },[])
    const fetchOrder = async () => {
        const user = await AsyncStorage.getItem('user');
        console.log(user)
        const param = {"cust_id": JSON.parse(user).cust_id, "org_id": JSON.parse(user).org_name};
        console.log(param)
        const response = await getOrders(param);
        console.log(response.data)
        if(response.success) {
            setOrders(response.data)
        }
    }
    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    //     return () => {
    //       backHandler.remove();
    //     };
    //   }, []);

    //   function handleBackButtonClick() {
    //     navigation.goBack();
    //     return true;
    // }

    return (
       <>
        <ScrollView style={{
            flex: 1
        }}>
            <Header image={true} navigation={navigation} />

            <View style={{paddingHorizontal:30, paddingVertical:30}}>
                <Text style={{fontSize:24, fontWeight:'500', letterSpacing:1}}>Orders</Text>
            </View>
            {orders && orders.length > 0 && orders.map((item,index) =>
                <View key={index} style={styles.card}>
                <View style={{display:'flex', borderRadius: 10, flexDirection:'row',flex:1, borderBottomColor:'lightgrey',borderBottomWidth:1,backgroundColor:'white',elevation:4, padding:20 }}>
                    <View style={{flex: 1, justifyContent:"space-between"}}>
                        <View style={{flex: 1, marginBottom: 5}}>
                            <Text style={{fontWeight:'bold', flex:1.5}}>
                                {item.itemname}
                            </Text>
                            <Text style={{flex:1}}>
                                {item.delivery_address}
                            </Text>
                            <Text style={{flex:1}}>
                                {item.cr_date}
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{flex:1, fontWeight: 'bold'}}>
                                Rs. {item.amount*item.itemcount}/-
                            </Text>
                            <Text style={{flex:1}}>
                                Order#: {item.order_id}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Qrcode', {orderID: item.order_id})}>
                            <SvgQRCode value={item.order_id} />
                    </TouchableOpacity>
                </View>
            </View>
            
            )}

    {orders && orders.length <= 0 && 
        <Text style={{fontSize:18, paddingHorizontal:0, textAlign:'center', paddingVertical:40, fontWeight:'bold',letterSpacing:1}}>
            No Orders Found!
        </Text>}
            </ScrollView>
       
    </>
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
    },
    card: {
        
        paddingHorizontal: 20,
        paddingVertical: 5
    }
})

const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        showToast, getOrders
    }
) (Orders)