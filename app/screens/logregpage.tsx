import { View, Text, TouchableOpacity, Image, Dimensions, StatusBar } from 'react-native'
import { images } from "@/constants/images";
import React from 'react'
const { width } = Dimensions.get("window");
import { useRouter, Link } from "expo-router";

const Logregpage = () => {
  const router = useRouter()
  return (
    <View className="flex-1 justify-center items-center bg-lime-100">
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View className="absolute -top-32 -left-26 w-[450px] h-[500px] bg-lime-300 rounded-full scale-x-200" />
      <Text className="absolute top-52 text-3xl font-bold text-blue-900">
        Selamat datang!
      </Text>

      <Text className="absolute top-60 text-gray-600">Tempe Ayu Absence</Text>

      <View className=" w-full px-4 absolute bottom-20">
        <TouchableOpacity>
          <Link
            href="./login"
            className="w-full bg-lime-500 p-4 rounded-lg mt-4 text-center text-blue-500"
          >
            Login
          </Link>
        </TouchableOpacity>

        <TouchableOpacity>
          <Link
            href="./register"
            className="w-full bg-lime-500 p-4 rounded-lg mt-4 text-center text-blue-500"
          >
            Register
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Logregpage