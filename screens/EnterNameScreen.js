import React from "react";

import { View, TextInput, StyleSheet } from "react-native";

import Button from "../components/Button";

class EnterNameScreen extends React.Component {
  state = {
    name: null
  };
  static navigationOptions = {
    header: null
  };

  ChangeInput = val => {
    this.setState({
      name: val
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={val => this.ChangeInput(val)}
          value={this.state.name}
          style={styles.input}
          placeholder="Твое имя"
          textAlign={"center"}
        />
        <Button
          disabled={this.state.name ? this.state.name.length < 3 : true}
          text="Переход на 2 экран"
          color="red"
          onPress={() =>
            this.props.navigation.navigate("Name", {
              name: this.state.name
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    width: 200,
    height: 50
  }
});

export default EnterNameScreen;
