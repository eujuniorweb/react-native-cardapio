import {createStackNavigator, createAppContainer} from 'react-navigation';

import Main from "./screens/Main";

const Navigator = createStackNavigator({
    Main
    });

const AppContainer = createAppContainer(Navigator);
export default AppContainer;