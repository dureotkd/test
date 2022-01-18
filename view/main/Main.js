import {
  Container,
  SafeContainer,
  StyledText,
  themeConfig,
  StyledIcon,
  StyledView,
} from "../../assets/css/app";
import { connect } from "react-redux";
import { useState, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import BottomSheet from "../../assets/component/BottomSheet";
import { SafeAreaView } from "react-native-safe-area-context";

function RenderContent() {
  return (
    <Container
      style={{
        backgroundColor: "white",
        padding: 16,
        borderRadius: 15,
      }}
    >
      <StyledText>바텀 모달 버튼 1</StyledText>
    </Container>
  );
}
function RenderContent2() {
  return (
    <Container
      style={{
        backgroundColor: "white",
        padding: 16,
      }}
    >
      <StyledText>바텀 모달 버튼 2</StyledText>
    </Container>
  );
}

function Main({ loginUser, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible2] = useState(false);

  return (
    <Container>
      <StyledText>안녕하세요 {loginUser.name}입니zz다</StyledText>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 30,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <StyledText>모달버튼</StyledText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible2(true)}>
          <StyledText>모달버튼2</StyledText>
        </TouchableOpacity>
      </View>

      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        renderContent={RenderContent}
      />
      <BottomSheet
        modalVisible={modalVisible1}
        setModalVisible={setModalVisible2}
        renderContent={RenderContent2}
      />
    </Container>
  );
}

function ChangeState({ loginUser }) {
  return {
    loginUser: loginUser,
  };
}

export default connect(ChangeState)(Main);
