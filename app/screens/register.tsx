import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Register = () => {
    const router = useRouter()
  return (
    <View>
      <Text>Register</Text>
      <TouchableOpacity onPress={() => router.replace("./logregpage.tsx")}>kembali</TouchableOpacity>
    </View>
  )
}

export default Register