import { PaperProvider, IconButton, Icon } from "react-native-paper";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { QueryClientProvider } from "react-query";
import { theme } from "./theme";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./components/home";
import Login from "./components/login";
import Registro from "./components/registro";
import { StatusBar } from "react-native";
import Inicio from "./components/inicio";
import MinhasInformacoes from "./components/minhas-informacoes";
import { queryClient } from "./services/queryClient";

const Drawer = createDrawerNavigator();

export default function Page() {
  const [isLogged, setIsLogged] = useState(false);
  const [page, setPage] = useState("home");

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

            // drawerCol,
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
            name="favorite-pets"
            component={MinhasInformacoes}
            options={{
              title: "Minhas informações",
            }}
          />
        </Drawer.Navigator>
      </PaperProvider>
    </QueryClientProvider>
  );
}
