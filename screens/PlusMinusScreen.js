import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Button from "../components/Button";

class PlusMinusScreen extends React.Component {
  state = {
    count: 0
  };
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      borderBottomWidth: 0,
      borderBottomColor: "transparent",
      elevation: 0,
      shadowOpacity: 0
    }
  });
  increment = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };
  decrement = () => {
    this.setState(prevState => {
      if (prevState.count === 0) return;
      return { count: prevState.count - 1 };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: "600"}}>Count : {this.state.count}</Text>
        <Button text="Increment" color="green" onPress={this.increment} />
        <Button text="Decrement" color="red" onPress={this.decrement} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  }
});

export default PlusMinusScreen;
