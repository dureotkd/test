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
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function AppIndex({ loginUser }) {
  return (
    <SafeAreaView>
      <Container>
        <StyledText>AppIndex !</StyledText>
        <StyledText>안녕하세요 제 이름은 {loginUser.name} 입니다</StyledText>
      </Container>
    </SafeAreaView>
  );
}

function ChangeState({ loginUser }) {
  return {
    loginUser: loginUser,
  };
}

export default connect(ChangeState)(AppIndex);
