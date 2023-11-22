import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ReviewDetails from '../screens/reviewDetails';
import Home from '../screens/home';

const screens = {
    Home: {
        screen: Home,
        navigationsOptions: {
            title: 'HomePage',
            
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationsOptions:{
            title: 'ReviewDetails',
            
        }
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: 'yellow'}
    }
     }

    );

export default HomeStack;