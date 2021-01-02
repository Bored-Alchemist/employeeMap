import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, BackHandler, Image, Modal, TouchableHighlight} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { getVenderlist } from '../action/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import DrawerContext from '../../App';

const Venderlist =  ({navigation, getVenderlist}) => {
    const [companies, setCompanies] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const drawer = useContext(DrawerContext)
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
        getComapnies();
    },[]);

    const getComapnies = async () => {
        console.log('api called');
        const orgID = JSON.parse(await AsyncStorage.getItem('user')).org_name;
        const ok = {"org_id": orgID}
        const response = await axios.post(`http://food.breeur.in/api/listofcompanyvendor.php`, ok );
        console.log(response.data)
        if(response.data.success) {
            setCompanies(response.data.data)
            console.log(companies)
        }
    }

    const redirectToVendors = (company) => {
        const id = company.split('-');
        navigation.navigate('Home', {id: id[1]});
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <Header image={true} navigation={navigation} />
            <View style={styles.card}>
                    <Text style={styles.title}>
                        LIST OF VENDORS
                    </Text>

    {companies ? companies.map((company, index) =>
    <TouchableOpacity key={index} style={styles.list} onPress={() => redirectToVendors(company)}>
        <Text style={styles.comapnies}>
        {company.split('-')[0]}
        </Text>
        <View style={{justifyContent:'center',alignItems:'center',alignContent:'center'}}>
          <View style={{height: 25, width: 60, backgroundColor: "#a00030", justifyContent:'center',alignItems:'center', borderRadius: 3}}>
            <Text style={{color: 'white'}}>Select</Text>
          </View>
        </View>
    
    </TouchableOpacity>
    ) : <TouchableOpacity style={styles.list}>
            <Text style={styles.comapnies}>
            There is no company to find here!!!
            </Text>
        </TouchableOpacity>
        }
            </View>
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
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor:'#F0F0F0',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20
    },
    card: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        margin:10,
        padding:20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:10
    },
    comapnies: {
        fontSize:22,
        marginHorizontal:15,
        padding:7,
        flex:1
    },
    list: {
        backgroundColor:'#f0f0f0',
        borderRadius: 3,
        marginTop: 10,
        marginBottom: 10,
        display:'flex',
        flexDirection:'row',
        elevation: 2,
        padding:5
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
 });


 const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        getVenderlist
    }
) (Venderlist)