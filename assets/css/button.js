import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const ButtonComponent = styled.TouchableOpacity`
  width: 50px;
  height: 30px;
  border-radius: 3px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { ButtonComponent };
