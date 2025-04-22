import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";

export default function index() {
  return (
    <View className="flex-1 bg-red-200">
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View className="relatif bg-lime-200 p-4 pb-14 rounded-b-[5rem] h-auto w-full">
        <Text className="font-bold text-2xl mt-14">
          Hi, Rayhan Izzuddin Nafiz
        </Text>
        <View className="aboslute top-0 bg-white w-full  rounded-t-[2rem] mt-8 p-4 gap-2">
          <View className="flex-col justify-center  w-full items-center mt-4">
            <Text className="text-2xl text-black font-bold">Jam Saat Ini</Text>
            <Text className=" text-blue-500 font-bold text-4xl">14.36</Text>
            <Text className="text-xl text-gray-500">Selasa, 22 April 2025</Text>
          </View>
          <View className=" h-[2px] w-full bg-lime-500" />
          <View className="flex flex-col justify-center items-center mt-4">
            <Text className=" font-bold text-black text-xl">Jam kerja</Text>
            <Text className=" font-bold text-black text-4xl">8.00-15.00</Text>
          </View>
          <View className=" flex flex-row justify-center gap-10  items-center mt-4 w-full">
            <TouchableOpacity className="bg-blue-400 py-3 px-6 rounded-xl">
              <Text className="text-xl">Absen Masuk</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-blue-400 py-3 px-6 rounded-xl">
              <Text className="text-xl">Absen Pulang</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="bg-white rounded-[2rem] p-4 mt-4 mx-4">
        <View className="flex flex-col py-8 gap-8 items-center">
          <View className="flex flex-row justify-between w-full px-4 items-center">
            <View>
              <Text className="text-3xl ">Jam Masuk : </Text>
              <Text className="text-center">ads</Text>
            </View>
            <View>
              <Text className="text-3xl">Jam Keluar :</Text>
              <Text className="text-center">ads</Text>
            </View>
          </View>

          <View>
            <View className="flex flex-col justify-between items-center mt-4">
              <Text className="text-3xl ">Total Jam Kerja : </Text>
              <Text>5 jam</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
