import { createStackNavigator } from "react-navigation-stack";
import Messages from "../screens/messages/Messages";
import StoryDetail from "../screens/story/StoryDetail";
import styles from "../styles";

export default createStackNavigator({
  Stories: {
    screen: StoryDetail,
    navigationOptions: {
      headerBackTitle: " ",
      headerTintColor: styles.blackColor,
      title: "Messages"
    }
  },
});