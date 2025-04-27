import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import Background from "../../components/background";
import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { images } from "@/constants/images";
// import Settings from "@/components/settings";
// import { ImageProvider, useImage } from "@/components/picker/imagepicker";
// import axios from "axios";
// import * as SecureStore from "expo-secure-store";
import { Ionicons } from "@expo/vector-icons";

interface User {
  nama_dokter: string;
  username_dokter: string;
  email_dokter: string;
  spesialis_dokter: string;
  str_dokter: string;
  notlp_dokter: string;
  rating_dokter: string;
  foto_profil_dokter: string | null;
}

// export default function ProfileScreen() {
//   return (
//     <ImageProvider>
//       <App />
//     </ImageProvider>
//   );
// }

function App() {
  const [userData, setUserData] = useState<User | null>(null);
  const [passwordLama, setPasswordLama] = useState("");
  const [passwordBaru, setPasswordBaru] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  // const fetchUserData = async () => {
  //   try {
  //     const userId = await SecureStore.getItemAsync("userId");
  //     const cleanedUserId = userId?.replace(/"/g, "");
  //     if (cleanedUserId) {
  //       const response = await axios.get(
  //         `https://mjk-backend-five.vercel.app/api/dokter/getbyid/${cleanedUserId}`
  //       );
  //       setUserData(response.data);
  //     }
  //   } catch (error) {
  //     console.error("Gagal mengambil data profil:", error);
  //   }
  // };

  if (!userData) {
    return (
      <Background>
        <View className="flex-1 justify-center items-center">
          <Text className="text-skyDark text-xl font-bold">
            Memuat profil...
          </Text>
        </View>
      </Background>
    );
  }

  // const handleGantiPassword = async () => {
  //   try {
  //     const token = await SecureStore.getItemAsync("userToken");

  //     if (!token) {
  //       return Alert.alert(
  //         "Gagal",
  //         "Token tidak ditemukan, silakan login ulang"
  //       );
  //     }

  //     const res = await axios.patch(
  //       "https://mjk-backend-five.vercel.app/api/dokter/ubah-password",
  //       {
  //         password_lama: passwordLama,
  //         password_baru: passwordBaru,
  //         konfirmasi_password_baru: konfirmasiPassword,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     Alert.alert("Berhasil", res.data.message);
  //     setPasswordLama("");
  //     setPasswordBaru("");
  //     setKonfirmasiPassword("");
  //   } catch (error: any) {
  //     const msg =
  //       error.response?.data?.message ||
  //       "Terjadi kesalahan saat mengubah password";
  //     Alert.alert("Gagal", msg);
  //   }
  // };

  return (
    <Background>
      <View className="flex-1">
        {/* <Navbar /> */}
        <ScrollView>
          {/* Header */}
          <View className="relative pt-12 bg-skyLight rounded-b-[50px] py-28">
            <View className="absolute inset-0 flex items-center justify-between flex-row px-12">
              <Text className="text-skyDark text-2xl font-bold">Profile</Text>
              <Image
                className="h-10 w-12"
                source={images.logo}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Foto Profil */}
          <View className="absolute top-28 left-1/2 -translate-x-1/2">
            {userData.foto_profil_dokter ? (
              <Image
                source={{ uri: userData.foto_profil_dokter }}
                className="w-32 h-32 rounded-full border-4 border-skyDark"
              />
            ) : (
              <View className="w-32 h-32 rounded-full border-4 border-skyDark items-center justify-center bg-gray-200">
                <Ionicons name="person" size={64} color="#0C4A6E" />
              </View>
            )}
          </View>

          {/* Card Profil */}
          <View
            className="bg-white rounded-xl mx-10 mt-28 p-6"
            style={{
              shadowOffset: { width: 0, height: -20 },
              shadowOpacity: 0.2,
              shadowRadius: 11,
              elevation: 15,
            }}
          >
            <Text className="font-bold text-lg text-skyDark">Nama</Text>
            <Text className="text-gray-700">{userData.nama_dokter}</Text>

            <Text className="font-bold text-lg text-skyDark mt-2">
              Username
            </Text>

            <Text className="text-gray-700">{userData.username_dokter}</Text>

            <Text className="font-bold text-lg text-skyDark mt-2">Email</Text>
            <Text className="text-gray-700">{userData.email_dokter}</Text>

            <Text className="font-bold text-lg text-skyDark mt-2">
              Nomor Telepon
            </Text>
            <Text className="text-gray-700">{userData.notlp_dokter}</Text>

            <Text className="font-bold text-lg text-skyDark mt-2">
              Spesialis
            </Text>
            <Text className="text-gray-700">{userData.spesialis_dokter}</Text>

            {/* Ganti Password */}
            <Text className="font-bold text-lg text-skyDark mt-4">
              Ganti Password
            </Text>
            <View className="w-full h-[2px] bg-skyDark" />
            <View className="flex flex-col items-center">
              <Text className="w-full pl-1 text-base font-semibold text-skyDark pt-2">
                Kata Sandi Lama
              </Text>
              <TextInput
                placeholder="Masukkan Kata Sandi Lama"
                secureTextEntry
                value={passwordLama}
                onChangeText={setPasswordLama}
                className="border-2 rounded-xl border-gray-400 p-2 w-full"
                placeholderTextColor="#888"
              />
              <Text className="w-full pl-1 text-base font-semibold text-skyDark pt-2">
                Kata Sandi Baru
              </Text>
              <TextInput
                placeholder="Masukkan Kata Sandi Baru"
                secureTextEntry
                value={passwordBaru}
                onChangeText={setPasswordBaru}
                className="border-2 rounded-xl border-gray-400 p-2 w-full"
                placeholderTextColor="#888"
              />
              <Text className="w-full pl-1 text-base font-semibold text-skyDark pt-2">
                Konfirmasi Kata Sandi Baru
              </Text>
              <TextInput
                placeholder="Masukkan Konfirmasi Kata Sandi Baru"
                secureTextEntry
                value={konfirmasiPassword}
                onChangeText={setKonfirmasiPassword}
                className="border-2 rounded-xl border-gray-400 p-2 w-full"
                placeholderTextColor="#888"
              />
              <TouchableOpacity
                className="p-2 rounded-xl w-2/4 mt-6 bg-skyDark"
                // onPress={handleGantiPassword}
              >
                <Text className="text-white text-center font-bold">Simpan</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Card Settings  */}
          {/* <Settings /> */}
        </ScrollView>
      </View>
    </Background>
  );
}
