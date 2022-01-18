import {
  Container,
  SafeContainer,
  StyledText,
  themeConfig,
  StyledIcon,
  StyledView,
} from "../../assets/css/app";
import { connect } from "react-redux";
import { useState, useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../main/Main";

function AppIndex({ loginUser }) {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="홈" component={Main} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function ChangeState({ loginUser }) {
  return {
    loginUser: loginUser,
  };
}

export default connect(ChangeState)(AppIndex);
