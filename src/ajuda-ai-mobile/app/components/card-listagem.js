import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";
import { theme } from "../theme";
import { useNavigation } from "@react-navigation/native";

const CardListagem = ({ dados }) => {
  const navigation = useNavigation();

  return (
    <View
      style={styles.constainer}
      onStartShouldSetResponder={() =>
        navigation.navigate("perfil", { id: dados._id })
      }
    >
      <Icon source="account" size={30} color={theme.colors.primary} />
      <View>
        <Text>Nome: {dados?.nome}</Text>
        <Text>Profissão: {dados?.profissao[0]}</Text>
        <Text>Descrição: {dados?.descricao}</Text>
      </View>
    </View>
  );
};

export default CardListagem;

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
  },
});
