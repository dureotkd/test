import {
  Container,
  SafeContainer,
  StyledText,
  themeConfig,
  StyledIcon,
} from "./assets/css/app";
import axios from "axios";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import Button from "./assets/component/button";
import { useState, useLayoutEffect } from "react";
import { createStore, combineReducers } from "redux";
import { ThemeProvider } from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AppIndex from "./view/appIndex/AppIndex";

export default function App() {
  const [loginUser, setLoginUser] = useState({
    name: "신성민",
    age: 28,
  });
  const [theme, setTheme] = useState("light");
  const resTheme = themeConfig[theme];

  const handleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  const loginUserRedux = (state = loginUser, action) => {
    switch (action.type) {
      case "doLogin":
        break;

      default:
        return state;
    }
  };

  const store = createStore(combineReducers({ loginUser: loginUserRedux }));

  return (
    <Provider store={store}>
      <ThemeProvider theme={resTheme}>
        <StatusBar auto={true} />
        <AppIndex />
      </ThemeProvider>
    </Provider>
  );
}
