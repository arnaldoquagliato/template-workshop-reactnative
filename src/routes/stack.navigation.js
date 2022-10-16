import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Views from '../view';

const MainStack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <MainStack.Navigator
      initialRouteName='InitProject'
      screenOptions={{ headerShown: false }}
    >
        <MainStack.Screen name='InitProject' component={Views.InitProject} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default Navigation;
