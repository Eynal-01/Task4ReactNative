import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Header } from "@/components/Header";

import { useColorScheme } from "@/hooks/useColorScheme";
import { View, FlatList, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/components/Style";
import Card from "@/components/Cards/Card1";
import { Image } from 'expo-image';
import { Toggle } from "@/components/Toggle";
import { Name } from "@/components/Name";
import { Footer } from "@/components/Footer";
import Card2 from "@/components/Cards/Card2";
import { RateApp } from "@/components/RateApp";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const cards = Array.from({ length: 12 }).map((_, index) => ({
    id: index.toString(),
    title: `Card ${index + 1}`,
  }));

  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <Card title={item.title}/>
  );

  // const hotDealsData = Array.from({ length: 12 }).map((_, index) => ({
  //   id: index.toString(),
  //   title: `HotDeals${index + 1}`,
  // }));

  // const renderHotDealsItem = ({
  //   item,
  // }: {
  //   item: { id: string; title: string };
  // }) => <HotDeals title={item.title} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
     
      {/* BIG CARDS */}
      {/* <Header></Header>
      <Name/>
      <Toggle/>
        <View style={{marginTop:470}}>
      <ScrollView>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
      </ScrollView>
        </View>
      <Footer/> */}


      {/* LITTLE CARDS */}
      {/* <Header></Header>
      <Name/>
      <Toggle/>
        <View style={{marginTop:470}}>
      <ScrollView>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </ScrollView>
        </View>
      <Footer/> */}

      {/* RATE APP PAGE */}
      <RateApp></RateApp>
    </SafeAreaView>
  );
}