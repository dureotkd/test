import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const ButtonComponent = styled.TouchableOpacity`
  width: 50px;
  height: 30px;
  border-radius: 13px;
  margin: ${(props) => props?.mt};
  background-color: ${(props) => props?.color};
  display: ${(props) => (props.toggle == "hide" ? "none" : "flex")};
  align-items: center;
  justify-content: center;
`;

export default function Button({ title, color, toggle, onPress , mt }) {
  return (
    <ButtonComponent color={color} onPress={onPress} toggle={toggle} mt={mt}>
      <Text style={{ color: "white" }}>{title}</Text>
    </ButtonComponent>
  );
}
