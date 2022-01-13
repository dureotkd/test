import styled from "styled-components/native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${(props) => props?.theme?.bgColor};
`;

const SafeContainer = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${(props) => props?.theme?.bgColor};
`;

const StyledText = styled.Text`
  font-size: ${(props) => props?.size || props?.theme?.fontSize};
  color: ${(props) => props?.color || props?.theme?.color};
`;

export { Container, SafeContainer, StyledText };
