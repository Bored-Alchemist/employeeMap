import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, BackHandler, TouchableHighlight, Alert, Modal } from 'react-native';
import { red } from '../assets/colors';
import Header from '../components/Header';
import CategorySection from '../components/CategorySection';
import { height, width } from '../assets/dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {vendorDetail} from '../action/auth';
import { connect } from 'react-redux';

const Home = ({ route, navigation, vendorDetail }) => {
  const [item, setItem] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [img, setImg] = useState([]);
  const [vendorDensity, setVendorDensity] = useState(null)
  useEffect(() => {
    function handleBackButtonClick() {
      setModalVisible(true);
      return true;
    }
      const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
      return () => {
        backHandler.remove();
      };
    }, []);
    useEffect(()=>{
          showCart();
      }, [item])

      const showCart = async () => {
          const isExist = await AsyncStorage.getItem('cart');
          if(JSON.parse(isExist) && JSON.parse(isExist).length > 0) {
              setItem(JSON.parse(isExist));
          } else {
              setItem([]);
          }
      }
    
    useEffect(() => {
        vendorImg();
    }, [])

    const vendorImg = async () => {
       const cusid = JSON.parse(await AsyncStorage.getItem('user')).customerid;
       const response = await vendorDetail({"customerid": cusid});
       console.log(response.success, "okk")
       if(response.success){
         setVendorDensity(response.cafedensity)
         var okkk = []
         response.offerimages.map(item => {
           okkk = [...okkk, item.offerimage]
         })
         console.log(okkk, "okcc")
         setImg(okkk)
       }
     }

    return (
        <>
        <ScrollView style={{
            flex: 1,
            backgroundColor: "#f0f0f0"
        }}>
            <Header navigation={navigation} />
            <CategorySection navigation={navigation} density={parseInt(vendorDensity)} img={img} />
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false)
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Are you sure you want to close this application?</Text>

                  <View style={{justifyContent:'center',alignContent:'center',alignItems:'center', display:'flex',flexDirection:'row'}}>
                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#4caf50" }}
                    onPress={() => {
                      setModalVisible(false);
                    }}
                  >
                    <Text style={styles.textStyle}>No</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#f44336" }}
                    onPress={() => {
                      BackHandler.exitApp();
                      setModalVisible(false);
                    }}
                  >
                    <Text style={styles.textStyle}>Yes</Text>
                  </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height:height,
        backgroundColor: "#f0f0f0"
    },
    logoContainer: {
        flex: 0.8,
        // height: height * 0.1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: height*0.25
    },
    formContainer: {
        flex: 1.4,
        // height: height * 0.45,
        paddingHorizontal: width * 0.07,
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 16,
        color: 'white',
        marginBottom: 8
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        flex:1,
        margin:10
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})


const mapStateToProps = state => ({
})


export default connect(
  mapStateToProps, {
      vendorDetail
  }
) (Home)