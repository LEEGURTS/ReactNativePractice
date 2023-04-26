/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import DrawNavigator from './components/screens/DrawNavigator';

AppRegistry.registerComponent(appName, () => DrawNavigator);
