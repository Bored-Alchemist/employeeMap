import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, BackHandler, Image, Modal, TouchableHighlight} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { getVenderlist } from '../action/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import DrawerContext from '../../App';
import { Buffer } from "buffer";

const apikey = "apikey";
const thefooods = "thefooods"

const token = Buffer.from(`${apikey}:${thefooods}`, 'utf8').toString('base64')

const Venderlist =  ({navigation, getVenderlist}) => {
    const [companies, setCompanies] = useState([]);

    useEffect(()=>{
        getComapnies();
    },[]);

    const getComapnies = async () => {
        const orgID = JSON.parse(await AsyncStorage.getItem('user')).customerorgid;
        const ok = {"orgid": orgID}
        const response = await axios.post(`http://data.thefooods.com/v1/corporate/customer/getvendors.php`, ok , {headers: {'Authorization': `Basic ${token}`}});
        console.log(response.data)
        if(response.data.success) {
            setCompanies(response.data.vendorlist)
            console.log(companies)
        }
    }

    const redirectToVendors = (company) => {
        const id = company.vendorid;
        navigation.navigate('CategoryItems', {id: id, name: company.vendorname});
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <Header image={true} navigation={navigation} />
            <View style={styles.card}>
                    <Text style={styles.title}>
                        LIST OF VENDORS
                    </Text>

    {companies ? companies.map((company, index) =>
    <TouchableOpacity key={index} style={{...styles.list, justifyContent: "space-between"}} onPress={() => redirectToVendors(company)}>
        <View style={{width: 15, backgroundColor: "green", height: 70,borderRadius: 3, justifyContent: "center", padding: 3}}>
          <Text style={{color: "white", textAlign: 'center', fontSize: 10}}>{company.vendortype}</Text>
        </View>
        <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "flex-start"}}>
          <Text style={{...styles.comapnies, fontWeight: "bold"}}>
            {company.vendorname}
          </Text>
          <Text style={{textAlign: "center"}}>
            Address :- {company.cafename}
          </Text>
          <Text style={{}}>
            Contact No :- {company.vendornumber}
          </Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',alignContent:'center', flexDirection: 'row'}}>
          <View style={{height: 30, width: 30, backgroundColor: company.cafedensity < 50 ? "#f44336" :"#00c853", justifyContent:'center',alignItems:'center', borderRadius: 15}}>
            <Text style={{color: "white", fontSize: 10}}>{company.cafedensity}</Text>
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
        padding:3,
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
    }
 });


 const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        getVenderlist
    }
) (Venderlist)