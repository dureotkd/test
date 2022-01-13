import { StatusBar } from "expo-status-bar";
import { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Container, SafeContainer, StyledText } from "./assets/css/app";
import { ThemeProvider } from "styled-components/native";
import Button from "./assets/component/button";

export default function App() {
  const [theme, setTheme] = useState("light");
  const themeConfig = {
    light: {
      color: "black",
      bgColor: "#90caf9",
      fontSize: "16px",
    },
    dark: {
      color: "white",
      bgColor: "#757575",
      fontSize: "11px",
    },
  };
  const resTheme = themeConfig[theme];

  const handleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  const handleTest = () => {
    alert("Test");
  };

  return (
    <ThemeProvider theme={resTheme}>
      <SafeContainer>
        <Container>
          <StyledText color="red" size="50px">
            Hello !
          </StyledText>
          <StyledText>안녕하세요 성민 입니다</StyledText>
          <Button
            title={theme == "light" ? "어둡게" : "밝게"}
            color="blue"
            toggle="show"
            onPress={handleTheme}
          />
        </Container>
        <StatusBar style="auto" />
      </SafeContainer>
    </ThemeProvider>
  );
}
