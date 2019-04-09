import React from "react";

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Platform,
  TouchableNativeFeedback
} from "react-native";

const Button = props => {
  const content = (
    <View style={[styles.container, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );

  if (props.disabled) return content;
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, { backgroundColor: props.color }]}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 5,
    padding: 10
  },
  text: {
    color: "white",
    alignSelf: "center"
  }
});

export default Button;
