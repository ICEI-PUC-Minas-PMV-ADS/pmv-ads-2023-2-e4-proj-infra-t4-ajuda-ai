import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { theme } from "../theme";

const Home = ({ setPage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>ajuda | aí</Text>
        <View style={{ width: "100%", display: "flex", gap: 10 }}>
          <Button
            mode="contained"
            onPress={() => setPage("registro")}
            buttonColor={theme.colors.secondary}
            textColor={theme.colors.onSecondary}
            theme={theme}
          >
            Cadastre-se
          </Button>
          <Button
            mode="outlined"
            onPress={() => setPage("login")}
            textColor={theme.colors.secondary}
            theme={theme}
          >
            Login
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: theme.colors.background,
  },
  main: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 40,
    color: theme.colors.primary,
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
