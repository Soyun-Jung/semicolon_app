import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import SelectPhoto from "../screens/photo/SelectPhoto";
import TakePhoto from "../screens/photo/TakePhoto";
import UploadPhoto from "../screens/photo/UploadPhoto";
import styles from "../styles";

const PhotoTabs = createMaterialTopTabNavigator(
    {
        Select: {
            screen: SelectPhoto,
            navigationOptions: {
                tabBarLabel: "Select"
            }
        },
        Take: {
            screen: TakePhoto,
            navigationOptions: {
                tabBarLabel: "Take"
            }
        }
    },
    {
       tabBarPosition: "bottom",
        tabBarOptions: {
            
            indicatorStyle: {
                backgroundColor: styles.navyColor,
                marginBottom: 48
            },
            labelStyle: {
            color: styles.navyColor,
            fontWeight: "600"
            },
            style: {
                //paddingBottom: 20,
                backgroundColor: styles.searchColor
            }
        }
    }
);

export default createStackNavigator(
    {
        PhotoTabs: {
            screen:PhotoTabs,
            navigationOptions: {
                //headerShown:false,
                headerBackTitle: " ",
                headerTintColor: styles.blackColor,
                title:"Recents Photos"
            }
        },
        UploadPhoto: {
            screen:UploadPhoto,
            navigationOptions: {
                headerBackTitle: " ",
                headerTintColor: styles.blackColor,
                title:"UploadPhoto"
            }
        }
        
    },
    {
        mode:"modal"
    }
);
