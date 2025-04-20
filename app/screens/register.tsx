import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { useRouter, Link } from "expo-router";

const Register = () => {
    const router = useRouter()

  return (
    <View className="flex-1 justify-center items-center px-4 bg-white">
      <Image
                    source={require("./../../assets/images/logo.png")}
                    className="h-48 w-96 absolute top-10"
                    resizeMode="contain"
                  />
      {/* <TouchableOpacity onPress={() => router.back()}>
        <Text> kembali</Text>
        </TouchableOpacity> */}
        <Text className='text-3xl font-bold text-start'>Daftar Akun</Text>
      <View className="absolute bottom-32  flex flex-col justify-center items-center gap-3 w-full p-4 rounded-xl">
        <TextInput
          className="border-2 rounded-xl border-black px-6 py-3 w-full"
          placeholder="Nama"
        >
          {/* <Text>nama</Text> */}
        </TextInput>
        <TextInput
          className="border-2 rounded-xl border-black px-6 py-3 w-full"
          placeholder="no telephone"
        >
          {/* <Text>no telephone</Text> */}
        </TextInput>
        <TextInput
          className="border-2 rounded-xl border-black px-6 py-3 w-full"
          placeholder="password"
        >
          {/* <Text>no password</Text> */}
        </TextInput>
        <TextInput
          className="border-2 rounded-xl border-black px-6 py-3 w-full"
          placeholder="konfirmasi password"
        >
          {/* <Text>konfirmasi password</Text> */}
        </TextInput>
        <TouchableOpacity className="bg-lime-500 w-2/5 rounded-xl px-4 py-2 mt-10">
          <Text className="text-lg font-semibold text-center">Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register