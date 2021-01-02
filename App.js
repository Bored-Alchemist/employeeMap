import 'react-native-gesture-handler';
import React,{useState,useEffect, useReducer} from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { Provider } from "react-redux";
import store from "./src/store";
import Alert from './src/components/Alert';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userData = React.createContext()

const reducer = (initialState, action) => {
  switch(action.type){
    case 'add':
      return initialState + 1
    case 'substract':
      return initialState - 1
    default:
      return initialState
  }
}

const App = () => {
    const [loading, setLoading] = useState(false);
    const [isuser, setUser] = useState(false);
    const [cartItem, setCartItem] = useState(0);

    const [count, dispatch] = useReducer(reducer, 7);

    useEffect(() => {
        isLoggedIn();
    },[]);

    const isLoggedIn = async () => {
      const user = await AsyncStorage.getItem('user');
      if(user) {setUser(true);}
      setLoading(true);
    }

    const user = async () => {
      const okk = await AsyncStorage.getItem("cart");
      let quantity = 0;
      const strarray = JSON.parse(okk);
      strarray.map(item => {
        quantity = quantity + item.quantity
      })
      setCartItem(quantity)
    }

    useEffect(() => {
        user();
    }, [])
    
  return (
    <>
     <Provider store={store}>
       <userData.Provider value={{itemCount: count, itemDispatch: dispatch}} >
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
          <View style={{ flex: 1 }}>
            {loading && <Navigation isLoggedIn={isuser} />}
          <Alert />
          </View>
        </SafeAreaView>
       </userData.Provider>
    </Provider>
   </>
  );
};


export default App;
