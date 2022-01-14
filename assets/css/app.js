import styled from "styled-components/native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const themeConfig = {
  light: {
    color: "black",
    bgColor: "white",
    fontSize: "14px",
  },
  dark: {
    color: "white",
    bgColor: "#191919",
    fontSize: "14px",
  },
};

function StyledIcon({ name, theme, color, size }) {
  const resTheme = themeConfig[theme];
  const themeColor = color || resTheme.color;
  const themeSize = size || Number(resTheme.fontSize.substr(0, 2));

  return <Icon name={name} size={themeSize} color={resTheme?.color} />;
}

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

export { Container, SafeContainer, StyledText, themeConfig, StyledIcon };
