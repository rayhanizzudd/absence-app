import { View, Text, StatusBar } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View>
      <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="dark-content"
            />
      <View className='flex-1 justify-center items-center bg-lime-200 p-4 rounded-b-[5rem] absolute top-0 h-[10rem] w-full'>
        <Text className='font-bold text-2xl'>Selamat Datang di Halaman berandaa</Text>
      </View>
    </View>
  );
}