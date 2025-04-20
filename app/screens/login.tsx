import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Login = () => {
    const router = useRouter()
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => router.replace("./logregpage")}>
        <Text>Kembali</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace("./logregpage")}>
        <Text>Kembali</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace("./logregpage")}>
        <Text>Kembali</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace("./logregpage")}>
        <Text>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login