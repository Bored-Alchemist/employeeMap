import React,{useState,useEffect} from 'react';
import { View, StyleSheet, Image, Text, ImageBackground, ScrollView, BackHandler } from 'react-native';
import { height, width } from '../assets/dimensions';
import Menu from '../components/Menu';
import Header from '../components/Header';
import {listOfFoods} from '../action/auth';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const CategoryItems = ({ image, back, navigation, listOfFoods }) => {
     const [menus, setMenus] = useState([]);
     const [thali, setThali] = useState([]);
     const [menu, isMenu] = useState(true);
     const [loading, isLoading] = useState(true);
     const [item, setItem] = useState([]);

    //  useEffect(() => {
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    //     return () => {
    //       backHandler.remove();
    //     };
    //   }, []);

    //   function handleBackButtonClick() {
    //     navigation.goBack();
    //     return true;
    // }

     useEffect(()=>{
         fetchItems()
     },[]);

     const fetchItems = async () => {
         const user = await AsyncStorage.getItem('user');
        const params = {"cust_id": JSON.parse(user).cust_id, "org_id" : JSON.parse(user).org_name}
        const response = await listOfFoods(params);
        if(response.success) {
            // success
            console.log(response);
            setMenus(response.menudata);
            setThali(response.thalidata);
            isLoading(false);
        }
     }

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

    return (
        <>
        {loading && <Loader />}
        {!loading &&  <ScrollView style={{
            flex: 1, backgroundColor: "#f0f0f0"
        }}>
            
            {!loading && 
            <Header navigation={navigation} />
 }
       {!loading &&   <View style={{// display:'flex',
        flexDirection: 'row',
        // paddingHorizontal: width * 0.04,
        backgroundColor: '#f0f0f0',
        // elevation: 4,
        paddingVertical: height * 0.015,
        borderBottomColor:'lightgrey',
        borderBottomWidth:2}}>
        <View style={{flex:1, justifyContent:'center', alignContent:'center',alignItems:'center', }}>
        <TouchableOpacity onPress={()=>isMenu(true)} style={{width: width * 0.5, justifyContent:'center', alignContent:'center',alignItems:'center'}} >
        <Text style={{color:menu ? '#ED2124' : 'black', paddingTop:5,paddingBottom:5, paddingEnd:15, paddingStart:15, borderRadius:200,}}>
                Menu
            </Text>
        </TouchableOpacity>
        </View>
        <View style={{flex:1, justifyContent:'center', alignContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>isMenu(false)} style={{ width: width * 0.5, justifyContent:'center', alignContent:'center',alignItems:'center'}} >
            <Text style={{color:!menu ? '#ED2124' : 'black'}}>
                Thali 
            </Text>
        </TouchableOpacity>
        </View>
    </View>

 }
    {menu &&  !loading && <Menu type="menu" data={menus} />}

    
    {!menu && !loading && <Menu type="thali" data={thali} />}
 
        </ScrollView>}
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        paddingHorizontal: width * 0.04,
        backgroundColor: '#FCF8F8',
        // elevation: 4,
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
        listOfFoods
    }
) (CategoryItems)