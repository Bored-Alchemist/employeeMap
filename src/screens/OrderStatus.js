import React, { useEffect,useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ToastAndroid, BackHandler, ImageBackground } from 'react-native';
import Header from '../components/Header';
import { height, width } from '../assets/dimensions';
import Button from '../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, {PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import GetLocation from 'react-native-get-location'

const OrderStatus = ({ navigation }) => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    //     return () => {
    //       backHandler.remove();
    //     };
    //   }, []);

      useEffect(()=>{
          getGeoLocation()
      },[])

      const getGeoLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            console.log(location);
            setLatitude(location.latitude);
            setLongitude(location.longitude);
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })
      }

      function handleBackButtonClick() {
        navigation.goBack();
        return true;
    }
    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor:'#E5E5E5'
        }}>
            <Header image={true} navigation={navigation} />
        

            <View style={styles.orderContainer}>
                <Text style={{fontWeight:'bold', fontSize:20, marginTop:20,}}>
                    Your order is being prepared
                </Text>
                <Text style={{letterSpacing:2, fontSize:16, marginBottom:10}}>
                    Arriving in 30 mins
                </Text>
                <Image source={require('../assets/line.png')} style={{marginBottom:20}} />
            </View>
            {longitude && <MapView  style={{flex: 1,height:height*0.4, width:width,}}  region={{ latitude: latitude,longitude: longitude,latitudeDelta: 0.0922,longitudeDelta: 0.0421 }} showsUserLocation={true}
            zoomEnabled={true}
            provider={PROVIDER_GOOGLE}
             >
{/* {this.state.markers.map(marker => ( */}
    <Marker
      coordinate={{latitude: latitude,longitude: longitude}}
      title={'hi'}
      description={'marker.description'}
    />
  {/* ))} */}

             </MapView>}
            {/* <Image source={require('../assets/map.png')} style={{height:height*0.4, width:width,}} /> */}
            <View style={styles.userContainer}>
                <View style={{display:'flex', flexDirection:'row', padding:20}}>
                    <View style={{flex:0.4}}>
                        <Image source={require('../assets/user.png')} />
                    </View>
                    <View style={{flex:1, justifyContent:'center', alignItems:'flex-start' ,alignContent:'flex-start'}}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>
                            Jiurhiuv
                        </Text>
                        <Text>
                            Your Delivery Man
                        </Text>
                    </View>
                    <View style={{flex:0.6,justifyContent:'center'}}>
                        <Button label="Call" bgColor="#B50019" textColor="white" />
                    </View>
                </View>
            </View>
            <View style={styles.timeEstimationContainer}>
                <Text style={{fontWeight:'bold', fontSize:18}}>
                    Estimated Delivery Time
                </Text>
                <Text>
                    35 mins
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Report')}>
                    <Text style={{fontWeight:'bold', fontSize:16, color:'#B50019', }}>
                        View Order Details
                    </Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity>
                <Text style={{fontWeight:'bold', fontSize:16, color:'#B50019'}}>
                    View Receipt
                </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height:height
    },
    logoContainer: {
        flex: 0.8,
        // height: height * 0.1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: height*0.25
    },
    formContainer: {
        flex: 1.7,
        // height: height * 0.45,
        paddingHorizontal: width * 0.05,
        justifyContent: 'flex-start',
        
    },
    text: {
        fontSize: 16,
        color: 'white',
        marginBottom: 8
    },
    orderContainer: {
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:20,
        justifyContent:'center',
        paddingLeft:40
    },
    userContainer: {
        backgroundColor:'white',
        borderBottomWidth:1,
        borderBottomColor:'lightgrey'
    },
    timeEstimationContainer: {
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:20
    },
    buttonContainer: {
        display:'flex',
        flexDirection:'row',
        paddingHorizontal:20,
        paddingVertical:35,
        backgroundColor:'white',
    }
})


const mapStateToProps = state => ({

})


export default OrderStatus