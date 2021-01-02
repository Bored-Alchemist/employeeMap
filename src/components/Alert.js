import React, { Fragment } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
const { height, width } = Dimensions.get('window');
import { reset } from '../action/toast';

const Alert = ({ toasts, reset }) => {
    return (
       <Fragment>
        {toasts && (
            toasts.length > 0 && (
                toasts.map(toast => (
                    <TouchableOpacity key={toast.id} style={{ backgroundColor: toast.type !== 'err' ? 'white' : 'white', paddingVertical: 20, paddingHorizontal: 20, position: 'absolute', top: 20, width: width * 0.9, marginHorizontal: 15, alignItems: 'flex-start', borderRadius:5, elevation:10, display:'flex',flexDirection:'row', alignContent:'center' }} onPress={() => {
                        reset(toast.id)
                        console.log(toast.login, 'islogin')
                       
                    } }>
                        { toast.type !== 'err' ? 
                        <Image source={require('../assets/success.png')} style={{width:40, height:40}} /> :
                        <Image source={require('../assets/error.png')} style={{width:40, height:40}} />
                     }
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color:toast.type !== 'err' ? 'green' : 'red',flex:1, justifyContent:'center', marginLeft:10, alignContent:'center', marginTop:10}}>
                          {toast.msg}
                        </Text>
                      </TouchableOpacity>  
                ))
            )
        )}
       </Fragment>
    )
}
       

const mapStateToProps = state => ({
    toasts: state.toast
})

export default connect(
    mapStateToProps, {
        reset
    }
) (Alert)

