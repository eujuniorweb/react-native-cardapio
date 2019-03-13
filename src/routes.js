import {createStackNavigator, createAppContainer} from 'react-navigation';

import Main from "./screens/Main";

const AppNavigator = createStackNavigator({
    Main:{
        screen:Main
    }
    },{
    defaultNavigationOptions:{
        header:null
    }
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;