import { StatusBar } from "expo-status-bar";
import { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Container,
  SafeContainer,
  StyledText,
  themeConfig,
  StyledIcon,
} from "./assets/css/app";
import { ThemeProvider } from "styled-components/native";
import Button from "./assets/component/button";
import { Provider } from "react-redux";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [theme, setTheme] = useState("light");
  const resTheme = themeConfig[theme];

  const handleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={resTheme}>
      <SafeContainer>
        <Container>
          <StyledText color="red" size="50px">
            Hello !
          </StyledText>
          <StyledText>안녕하세요 CST 안녕하세요 aa입니다</StyledText>
        </Container>
        <StatusBar style={theme == "light" ? "dark" : "light"} />
      </SafeContainer>
    </ThemeProvider>
  );
}
