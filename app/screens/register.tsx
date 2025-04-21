import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router";

const Register = () => {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
      // keyboardVerticalOffset={10} // kamu bisa sesuaikan offset ini
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="justify-center items-center flex-1 relative">
          <Image
            source={require("./../../assets/images/logo.png")}
            className="h-48 w-96 absolute top-10"
            resizeMode="contain"
          />
          <View className="mt-auto bg-lime-200 flex flex-col justify-center items-center gap-3 w-full p-8 rounded-t-[5rem]">
            <Text className="text-3xl font-bold text-start ">Daftar Akun</Text>
            <Text className="text-lg font-semibold text-start mb-14">
              Daftar untuk mendapatkan akses ke semua fitur
            </Text>

            <View className="flex w-full flex-col gap-6">
              {/* Input Nama */}
              <View className="flex flex-col items-start">
                <Text className="text-start ml-3 mb-1 font-medium">Nama</Text>
                <TextInput
                  className="border-2 rounded-xl border-black px-6 py-4 w-full"
                  placeholder="Nama"
                />
              </View>
              {/* Input No HP */}
              <View className="flex flex-col items-start">
                <Text className="text-start ml-3 mb-1 font-medium">No HP</Text>
                <TextInput
                  className="border-2 rounded-xl border-black px-6 py-4 w-full"
                  placeholder="no telephone"
                  keyboardType="phone-pad"
                />
              </View>
              {/* Input Password */}
              <View className="flex flex-col items-start">
                <Text className="text-start ml-3 mb-1 font-medium">
                  Kata Sandi
                </Text>
                <TextInput
                  className="border-2 rounded-xl border-black px-6 py-4 w-full"
                  placeholder="password"
                  secureTextEntry
                />
              </View>
              {/* Input Konfirmasi */}
              <View className="flex flex-col items-start">
                <Text className="text-start ml-3 mb-1 font-medium">
                  Konfirmasi Kata Sandi
                </Text>
                <TextInput
                  className="border-2 rounded-xl border-black px-6 py-4 w-full"
                  placeholder="konfirmasi password"
                  secureTextEntry
                />
              </View>
            </View>

            <TouchableOpacity className="bg-lime-500 w-2/5 rounded-xl px-4 py-2 mt-6">
              <Text className="text-lg font-semibold text-center">Daftar</Text>
            </TouchableOpacity>
            <Text className="text-lg font-semibold text-center mt-4">
              Sudah punya akun?{" "}
              <TouchableOpacity onPress={() => router.replace("./login")}>
                <Text className="text-lime-500">Masuk</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
