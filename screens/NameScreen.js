import React from "react";
import { View } from "react-native";

class NameScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Привет, ${navigation.getParam("name")}!`,
      headerTintColor: "green",
      headerTitleStyle: {
        textAlign: "center",
        alignSelf: "center",
        flexGrow: 1
      }
    };
  };

  render() {
    return <View />;
  }
}

export default NameScreen;
