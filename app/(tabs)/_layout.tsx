import React from "react";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

function TabIcon({ focused, icon, title }: any) {
  return (
    <View className="flex items-center flex-1 mt-2">
      <FontAwesome5
        name={icon}
        size={22}
        color={focused ? "#90C67C" : "white"}
      />
      <Text
        className={`text-xs mt-1 w-full ${
          focused ? "text-Green font-bold" : "text-white"
        }`}
      >
        {title}
      </Text>
    </View>
  );
}

const TabsNavigasi = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#BBD8A3",
          height: 64,
          position: "absolute",
          bottom: 0,
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="beranda/index"
        options={{
          title: "Beranda",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon focused={focused} icon="home" title="Beranda" />
          ),
        }}
      />

      <Tabs.Screen
        name="riwayat/index"
        options={{
          title: "Riwayat",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon focused={focused} icon="history" title="Riwayat" />
          ),
        }}
      />

      <Tabs.Screen
        name="profil/index"
        options={{
          title: "Profil",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon focused={focused} icon="user-circle" title="Profil" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsNavigasi;
