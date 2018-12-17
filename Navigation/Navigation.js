import { createStackNavigator, createAppContainer } from "react-navigation";
import * as screens from "../screens"



const AppNavigator = createStackNavigator({
    Home: {
      screen: screens.Login
    },
    Dashboard : {
      screen : screens.Dashboard
    }
  });
  
  const Navigation = createAppContainer(AppNavigator);
  
  export default Navigation;
  