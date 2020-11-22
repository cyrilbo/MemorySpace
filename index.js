import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from '@root/App';
import { name as appName } from '@root/app.json';

AppRegistry.registerComponent(appName, () => App);
