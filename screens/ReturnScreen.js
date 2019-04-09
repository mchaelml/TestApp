import React from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
      borderBottomColor: "transparent",
      elevation: 0,
      shadowOpacity: 0
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          text="Вернутся на 1 экран"
          color="blue"
          onPress={() => this.props.navigation.navigate("EnterName")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
