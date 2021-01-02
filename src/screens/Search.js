import React,{useEffect} from 'react';
import { View, StyleSheet, Image, Text, BackHandler } from 'react-native';
import { height, width } from '../assets/dimensions';
import Input from '../components/Input';
import { ScrollView } from 'react-native-gesture-handler';

 const TitleContainer = ({ image, back, navigation }) => {

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          backHandler.remove();
        };
      }, []);

      function handleBackButtonClick() {
        navigation.goBack();
        return true;
    }

    return (
       
        <View style={styles.main}>
            
                <Image source={require('../assets/map.png')} style={{height:height, width:width}} imageStyle={{borderTopLeftRadius:6, borderTopRightRadius:6}} />
            
            <ScrollView style={{flex:1,position:'absolute', backgroundColor:'white', height:height*0.4,width:width-1, borderTopRightRadius:20, borderTopLeftRadius:20, top:'60%',}}>
                {/* <ScrollView style={{}}> */}
                    <View style={{display:'flex', flexDirection:'row',flex:1, borderBottomColor:'lightgrey',marginLeft:20, borderBottomWidth:1, marginRight:20 }}>
                        <View style={{paddingHorizontal:10,paddingVertical:10,}}>
                            <Image source={require('../assets/food.png')} style={{height:60, width:60, borderRadius:10}} />
                        </View>
                        <View style={{flex:1, marginLeft:20,paddingHorizontal:10,paddingVertical:10,}}>
                            <Text style={{fontWeight:'bold'}}>
                                Order Placed
                            </Text>
                            <Text>
                                kjgchgvhgkuj
                            </Text>
                            <Text>
                                kjgchgvhgkujnjbhbkjb
                            </Text>
                        </View>
                    </View>





                    <View style={{display:'flex', flexDirection:'row',flex:1, borderBottomColor:'lightgrey',marginLeft:20, borderBottomWidth:1, marginRight:20 }}>
                        <View style={{paddingHorizontal:10,paddingVertical:10,}}>
                            <Image source={require('../assets/food.png')} style={{height:60, width:60, borderRadius:10}} />
                        </View>
                        <View style={{flex:1, marginLeft:20,paddingHorizontal:10,paddingVertical:10,}}>
                        <Text style={{fontWeight:'bold'}}>
                                Order Placed
                            </Text>
                            <Text>
                                kjgchgvhgkuj
                            </Text>
                            <Text>
                                kjgchgvhgkujnjbhbkjb
                            </Text>
                        </View>
                    </View>





                    <View style={{display:'flex', flexDirection:'row',flex:1, borderBottomColor:'lightgrey',marginLeft:20, borderBottomWidth:1, marginRight:20 }}>
                        <View style={{paddingHorizontal:10,paddingVertical:10,}}>
                            <Image source={require('../assets/food.png')} style={{height:60, width:60, borderRadius:10}} />
                        </View>
                        <View style={{flex:1, marginLeft:20,paddingHorizontal:10,paddingVertical:10,}}>
                        <Text style={{fontWeight:'bold'}}>
                                Order Placed
                            </Text>
                            <Text>
                                kjgchgvhgkuj
                            </Text>
                            <Text>
                                kjgchgvhgkujnjbhbkjb
                            </Text>
                        </View>
                    </View>

                    <View style={{display:'flex', flexDirection:'row',flex:1, borderBottomColor:'lightgrey',marginLeft:20, borderBottomWidth:1, marginRight:20 }}>
                        <View style={{paddingHorizontal:10,paddingVertical:10,}}>
                            <Image source={require('../assets/food.png')} style={{height:60, width:60, borderRadius:10}} />
                        </View>
                        <View style={{flex:1, marginLeft:20,paddingHorizontal:10,paddingVertical:10,}}>
                        <Text style={{fontWeight:'bold'}}>
                                Order Placed
                            </Text>
                            <Text>
                                kjgchgvhgkuj
                            </Text>
                            <Text>
                                kjgchgvhgkujnjbhbkjb
                            </Text>
                        </View>
                    </View>


                    <View style={{display:'flex', flexDirection:'row',flex:1, borderBottomColor:'lightgrey',marginLeft:20, borderBottomWidth:1, marginRight:20 }}>
                        <View style={{paddingHorizontal:10,paddingVertical:10,}}>
                            <Image source={require('../assets/food.png')} style={{height:60, width:60, borderRadius:10}} />
                        </View>
                        <View style={{flex:1, marginLeft:20,paddingHorizontal:10,paddingVertical:10,}}>
                        <Text style={{fontWeight:'bold'}}>
                                Order Placed
                            </Text>
                            <Text>
                                kjgchgvhgkuj
                            </Text>
                            <Text>
                                kjgchgvhgkujnjbhbkjb
                            </Text>
                        </View>
                    </View>
                {/* </ScrollView> */}
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        backgroundColor: 'white',
        elevation: 4,
    },
    start: {
        alignItems: 'flex-start',
        flex: 0.3,
        justifyContent:'center'
    },
    end: {
        alignItems: 'flex-end',
        flex: 2
    }
})

export default TitleContainer;