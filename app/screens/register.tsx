import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Register = () => {
    const router = useRouter()

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text>Register</Text>
      <TouchableOpacity onPress={() => router.replace("./logregpage.tsx")}>kembali</TouchableOpacity>
    
    
      <View className='border-1 rounded-xl border-black px-6 py-3 '><Text >nama</Text></View>
      <View className='border-1 rounded-xl border-black px-6 py-3 '><Text >no telephone</Text></View>
      <View className='border-1 rounded-xl border-black px-6 py-3 '><Text >no password</Text></View>
        <View className='border-1 rounded-xl border-black px-6 py-3 '><Text >konfirmasi password</Text></View>
        <TouchableOpacity className='bg-lime-500 rounded-xl px-4 py-2'><Text className='text-lg font-semibold'>Daftar</Text></TouchableOpacity>
    </View>
  )
}

export default Register