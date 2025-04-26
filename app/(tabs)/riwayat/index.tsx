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