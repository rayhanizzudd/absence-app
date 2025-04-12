import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Logregpage = () => {
  return (
    <View className="flex-1 justify-center items-center bg-Warm">
      <Text className="text-3xl font-bold text-blue-900">Logreg Page</Text>
      <Text className="text-gray-600">Halaman untuk login dan register</Text>
      <View className=' w-full px-4 absolute bottom-20'>
        <TouchableOpacity className="w-full bg-lime-500 p-4 rounded-lg mt-4">
          <Text className=" text-blue-500">Login</Text>
        </TouchableOpacity>

        <TouchableOpacity className=" w-full bg-lime-500 p-4 rounded-lg mt-4">
          <Text className=" text-blue-500">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Logregpage