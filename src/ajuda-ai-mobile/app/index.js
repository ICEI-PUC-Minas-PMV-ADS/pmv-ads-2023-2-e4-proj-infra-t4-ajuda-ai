import { PaperProvider, IconButton, Icon } from "react-native-paper";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { QueryClientProvider } from "react-query";
import { theme } from "./theme";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./components/home";
import Login from "./components/login";
import Registro from "./components/registro";
import { StatusBar } from "react-native";
import Inicio from "./components/inicio";
import MinhasInformacoes from "./components/minhas-informacoes";
import { queryClient } from "./services/queryClient";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Perfil from "./components/perfil";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);
const Drawer = createDrawerNavigator();

export default function Page() {
  const [isLogged, setIsLogged] = useState(false);
  const [page, setPage] = useState("home");
  const navigation = useNavigation();

  const checkLogin = async () => {
    const login = await AsyncStorage.getItem("@login");
    if (login) {
      setIsLogged(true);
      setPage("");
      navigation.navigate("home-screen");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem("@login");
    setIsLogged(false);
    setPage("login");
  };

  if (!isLogged && page === "home") {
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.background}
        />
        <Home setPage={setPage} />
      </>
    );
  } else if (!isLogged && page === "login") {
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.background}
        />
        <Login setPage={setPage} setIsLogged={setIsLogged} />
      </>
    );
  } else if (!isLogged && page === "registro") {
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.background}
        />
        <Registro setPage={setPage} setIsLogged={setIsLogged} />
      </>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.primary}
        />
        <Drawer.Navigator
          initialRouteName="home-screen"
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: "#fff",
            drawerActiveBackgroundColor: theme.colors.primary,
            drawerActiveTintColor: "#fff",
            drawerInactiveTintColor: theme.colors.primary,
            drawerType: "back",
            drawerLabelStyle: {
              fontSize: 15,
            },
          }}
          drawerContent={(props) => {
            return (
              <>
                <SafeAreaView />
                <DrawerContentScrollView {...props}>
                  <DrawerItemList {...props} />
                </DrawerContentScrollView>
                <DrawerItem
                  label="Sair"
                  onPress={() => {
                    logout();
                    setIsLogged(false);
                    setPage("login");
                  }}
                  icon={() => (
                    <IconButton
                      icon="logout"
                      size={20}
                      iconColor={theme.colors.primary}
                    />
                  )}
                />
              </>
            );
          }}
        >
          <Drawer.Screen
            name="home-screen"
            component={Inicio}
            options={{
              title: "Início",
            }}
          />
          <Drawer.Screen
            name="minhas-informacoes"
            component={() => (
              <MinhasInformacoes setPage={setPage} setIsLogged={setIsLogged} />
            )}
            options={{
              title: "Minhas informações",
            }}
          />
          <Drawer.Screen
            name="perfil"
            component={Perfil}
            options={{
              title: "",
              drawerItemStyle: { display: "none" },
            }}
            initialParams={{ id: "" }}
          />
        </Drawer.Navigator>
      </PaperProvider>
    </QueryClientProvider>
  );
}
