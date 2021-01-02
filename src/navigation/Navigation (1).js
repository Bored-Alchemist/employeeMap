import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


// importing screens
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Cart from '../screens/Cart';
import OrderSuccess from '../screens/OrderSuccess';
import Feedback from '../screens/Feedback';
import OrderStatus from '../screens/OrderStatus';
import Report from '../screens/Report';
import CategoryItems from '../screens/CategoryItems';
import CafeDensity from '../screens/CafeDensity';
import Health from '../screens/Health';
import Orders from '../screens/Orders';
import Venderlist from '../screens/Venderlist';


const UiStack = createStackNavigator();
const UiDrawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => (
    <UiDrawer.Navigator initialRouteName="Home">
        <UiDrawer.Screen name="Venderlist" component={Venderlist} />
        <UiDrawer.Screen name='Health' component={Health} />
        <UiDrawer.Screen name='Home' component={Home} />
    </UiDrawer.Navigator>
)

const UiNavigator = ({ navigation, isLoggedIn }) => isLoggedIn ? (
    <UiStack.Navigator headerMode='none'>
        <UiStack.Screen name="Home" component={DrawerNavigator} />
        <UiStack.Screen name='Venderlist' component={Venderlist} />
        <UiStack.Screen name='Login' component={Login} />
        <UiStack.Screen name='Register' component={Register} />
        <UiStack.Screen name='Search' component={Search} />
        <UiStack.Screen name='Cart' component={Cart} />
        <UiStack.Screen name='OrderSuccess' component={OrderSuccess} />
        <UiStack.Screen name='Feedback' component={Feedback} />
        <UiStack.Screen name='OrderStatus' component={OrderStatus} />
        <UiStack.Screen name='CategoryItems' component={CategoryItems} />
        <UiStack.Screen name='CafeDensity' component={CafeDensity} />
        <UiStack.Screen name='Orders' component={Orders} />
    </UiStack.Navigator>
) : (
    <UiStack.Navigator headerMode='none'>
        <UiStack.Screen name='Login' component={Login} />
        <UiStack.Screen name='Register' component={Register} />
    </UiStack.Navigator>
)

const Navigation = ({isLoggedIn}) => (
    <NavigationContainer>
        <UiNavigator isLoggedIn={isLoggedIn} />
    </NavigationContainer>
    )
    
  
    
export default Navigation