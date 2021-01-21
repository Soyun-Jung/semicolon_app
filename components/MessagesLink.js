import React from "react";
import styled from "styled-components/native";
import { withNavigation } from "react-navigation";
//import { View, TouchableOpacity } from "react-native";
//import { createBottomTabNavigator } from 'react-navigation-tabs';

const Container = styled.TouchableOpacity``;
const Text = styled.Text``;

export default withNavigation(({ navigation }) => (
  <Container onPress={() => navigation.navigate("MessageNavigation")}>
    <Text>Messages</Text>
  </Container>
));