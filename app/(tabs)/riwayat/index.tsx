// // import { View, Text } from "react-native";
// // import React from "react";
// import React, { Component } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import CalendarPicker from "react-native-calendar-picker";

// export default function index() {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedStartDate: null,
//     };
//     this.onDateChange = this.onDateChange.bind(this);
//   }

//   onDateChange(date) {
//     this.setState({
//       selectedStartDate: date,
//     });
//   }
//   render() {
//     const { selectedStartDate } = this.state;
//     const startDate = selectedStartDate ? selectedStartDate.toString() : "";

//   return (
//     <View className="flex-1 bg-red-200">
//       <View className="pt-14 flex flex-row bg-lime-300 p-4  h-auto w-full justify-between">
//         <Text>back</Text>
//         <Text>halaman Riwayat</Text>
//         <Text>halaman Riwayat</Text>
//       </View>
//       <Text>Riwayat Kehadiran</Text>
//       <Text>Rabu, 23 April 2025</Text>
//       <View>
//         <View style={styles.container}>
//         <CalendarPicker onDateChange={this.onDateChange} />

//         <View>
//           <Text>SELECTED DATE:{startDate}</Text>
//         </View>
//       </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//     marginTop: 100,
//   },
// });

import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import DatePickerComponent from "@/components/datetimepicker";

export default function Index() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  return (
    <ScrollView>
      <View className="relative bg-lime-200 py-12">
        <View className="absolute inset-0 flex items-center justify-between flex-row px-12 mt-5">
          <Text className="text-[#4d7c0f] text-2xl font-bold">Riwayat</Text>
          <Image
            className="h-22 w-28"
            source={images.logo}
            resizeMode="contain"
          />
        </View>
      </View>
      <View className=" flex flex-col justify-center items-center">
        <DatePickerComponent
          label="Tanggal Terpilih"
          onDateChange={(date) => setSelectedDate(date)}
        />
      </View>
    </ScrollView>
  );
}

