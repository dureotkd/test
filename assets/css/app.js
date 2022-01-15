import styled from "styled-components/native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function StyledIcon({ name, theme, color, size }) {
  const resTheme = themeConfig[theme];
  const themeColor = color || resTheme.color;
  const themeSize = size || Number(resTheme.fontSize.substr(0, 2));

  return <Icon name={name} size={themeSize} color={resTheme?.color} />;
}

const themeConfig = {
  light: {
    baseBackground: "#fff",
    color: "#1b1b1b",
  },
  dark: {
    color: "white",
    bgColor: "#191919",
    fontSize: "14px",
  },
};

const defaultStyleConfig = {
  fontSize: {
    mini: "9px",
    small: "11px",
    base: "13px",
    big: "15px",
  },
  padding: {
    base: "12px",
  },
};

const Container = styled.View`
  display: flex;
  height: 100%;
  background-color: ${(props) => props?.theme?.baseBackground};
  padding: ${(props) => props?.padding || defaultStyleConfig.padding.base};
`;

const StyledView = styled.View`
  display: flex;
`;

const StyledText = styled.Text`
  font-size: ${(props) => props?.size || defaultStyleConfig.fontSize.base};
  color: ${(props) => props?.color || props?.theme?.color};
`;

export { Container, StyledText, StyledView, themeConfig, StyledIcon };
