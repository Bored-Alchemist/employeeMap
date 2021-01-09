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
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../components/Button';

 const CategoryItems = ({ image, back, navigation, listOfFoods, route }) => {
     const [menus, setMenus] = useState([]);
     const [thali, setThali] = useState([]);
     const [menu, isMenu] = useState(true);
     const [loading, isLoading] = useState(true);
     const [item, setItem] = useState([]);
     const [option, setOption] = useState('Pure Veg')
     const [mar, setMar] = useState(0);
     const [subOption, setSubOption] = useState('mealbox')
     const [mar2, setMar2] = useState(0);

     useEffect(()=>{
         fetchItems()
     },[]);

     const fetchItems = async () => {
        const params = {"vendorlist": route.params.id}
        const response = await listOfFoods(params);
        if(response.success) {
            // success
            console.log(response);
            setMenus(response.menulist);
            setThali(response.thalilist);
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
            flex: 1, backgroundColor: "#f0f0f0", height: height * 0.9, marginBottom: height * 0.1
        }}>
            
        {!loading && <Header navigation={navigation} />}
       {!loading &&  
        <View style={{flex:1}}>
            <View style={{flex: 1, marginHorizontal: 20, marginVertical: 5}}>
                <Text style={{fontSize: 25, fontWeight: "bold"}}>{route.params.name}</Text>
            </View>
            <DropDownPicker
                items={[
                    {label: 'Pure Veg', value: 'Pure Veg'},
                    {label: 'Non-Veg', value: 'Non-veg'},
                ]}
                style={{
                    color: '#000',
                }}
                labelStyle={{
                    color: '#fff',
                }}
                defaultValue={option}
                onOpen={() => setMar(80)}
                onClose={() => setMar(0)}
                containerStyle={{marginBottom: mar,marginHorizontal: 20, marginVertical: 5}}
                style={{backgroundColor: "#a00030",  justifyContent: "center", alignItems: "center"}}
                dropDownStyle={{justifyContent: "center", alignItems: "center"}}
                itemStyle={{justifyContent: "flex-start"}}
                activeLabelStyle={{color: 'red'}}
                activeItemStyle={{color: "white"}}
                labelStyle={{fontWeight: "bold"}}
                onChangeItem={item => {setOption(item.value)}}
                placeholderStyle={{color: "white"}}
                selectedLabelStyle={{color: "white"}}
                arrowStyle={{borderWidth: 0.5, borderColor: "white", paddingHorizontal: 9, paddingVertical: 4, borderRadius: 3}}
                arrowColor="white"
            />
            <DropDownPicker
                items={[
                    {label: 'Meal Box', value: 'mealbox'},
                    {label: 'Main Course', value: 'main course'},
                    {label: 'Snacks', value: 'snacks'},
                    {label: 'Desserts', value: 'desserts'},
                    {label: 'Beverages', value: 'beverages'},
                    {label: 'DietA', value: 'dietA'},
                    {label: 'DietB', value: 'dietB'},
                ]}
                defaultValue={subOption}
                itemStyle={{justifyContent: "flex-start"}}
                onOpen={() => setMar2(150)}
                onClose={() => setMar2(0)}
                selectedLabelStyle={{color: "white"}}
                containerStyle={{marginBottom: mar2,marginHorizontal: 20, marginVertical: 5,}}
                style={{backgroundColor: "#a00030",  justifyContent: "center", alignItems: "center"}}
                dropDownStyle={{justifyContent: "center", alignItems: "center"}}
                activeLabelStyle={{color: 'red'}}
                labelStyle={{fontWeight: "bold"}}
                onChangeItem={item => {setSubOption(item.value)}}
                arrowStyle={{borderWidth: 0.5, borderColor: "white", paddingHorizontal: 9, paddingVertical: 4, borderRadius: 3}}
                arrowColor="white"
                selectedLabelStyle={{color: "white"}}
            />
            
            {!loading && <Menu type="menu" data={menus} status={option} subStatus={subOption} />}
        </View>
        }
        </ScrollView>}
        {!loading && <ScrollView style={{position:'absolute', backgroundColor:'white',width:width, top:'90%',elevation:2}}>
            <View style={{paddingVertical:20, marginBottom:20, padding: 10}}>
                <View style={{width: width, justifyContent: "center", paddingEnd: 20 }}>
                    <Button label="View Cart" bgColor="#a00030" textColor="white" clickEvent={()=>{navigation.navigate("Cart")}}  />
                </View>
            </View>
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