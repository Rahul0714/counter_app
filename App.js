import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function App() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const calculateTopSegments = (time) => {
    const switchTime = time > 12 ? time - 12 : time;
    switch (switchTime) {
      case 1:
        return "border-r-4";
      case 2:
        return "border-t-4 border-r-4 border-b-4";
      case 3:
        return "border-t-4 border-r-4 border-b-4";
      case 4:
        return "border-l-4 border-r-4 border-b-4";
      case 5:
        return "border-t-4 border-l-4 border-b-4";
      case 6:
        return "border-t-4 border-l-4 border-b-4";
      case 7:
        return "border-t-4 border-r-4";
      case 8:
        return "border-t-4 border-l-4 border-r-4 border-b-4";
      case 9:
        return "border-t-4 border-l-4 border-r-4 border-b-4";
      case 0:
        return "border-t-4 border-r-4 border-l-4";
      default:
        return "";
    }
  };

  const calculateBottomSegments = (time) => {
    const switchTime = time > 12 ? time - 12 : time;
    switch (switchTime) {
      case 1:
        return "border-r-4";
      case 2:
        return "border-l-4 border-b-4";
      case 3:
        return "border-r-4 border-b-4";
      case 4:
        return "border-r-4";
      case 5:
        return "border-r-4 border-b-4";
      case 6:
        return "border-l-4 border-b-4 border-r-4";
      case 7:
        return "border-r-4";
      case 8:
        return "border-b-4 border-l-4 border-r-4";
      case 9:
        return "border-r-4";
      case 0:
        return "border-b-4 border-r-4 border-l-4";
      default:
        return "";
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setHour(new Date().getHours());
      setMinute(new Date().getMinutes());
      setSecond(new Date().getSeconds());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <SafeAreaView style={tw`flex items-center h-full bg-gray-200`}>
      <View style={tw`h-24 w-72 border flex flex-row p-2 mt-24`}>
        <View style={tw` h-full w-1/3 flex flex-row p-2`}>
          {hour < 10 && (
            <View style={tw`flex w-1/2 px-2`}>
              <View style={tw`h-1/2 ${calculateTopSegments(0)}`}></View>
              <View style={tw`h-1/2 ${calculateBottomSegments(0)}`}></View>
            </View>
          )}
          {hour
            ?.toString()
            ?.split("")
            ?.map((num, index) => (
              <View style={tw`flex w-1/2 px-2`} key={index}>
                <View style={tw`h-1/2 ${calculateTopSegments(+num)}`}></View>
                <View style={tw`h-1/2 ${calculateBottomSegments(+num)}`}></View>
              </View>
            ))}
        </View>
        <Text style={tw`flex items-center m-auto text-4xl font-bold`}>:</Text>
        <View style={tw` h-full w-1/3 flex flex-row p-2`}>
          {minute < 10 && (
            <View style={tw`flex w-1/2 px-2`}>
              <View style={tw`h-1/2 ${calculateTopSegments(0)}`}></View>
              <View style={tw`h-1/2 ${calculateBottomSegments(0)}`}></View>
            </View>
          )}
          {minute
            .toString()
            .split("")
            .map((num, index) => (
              <View style={tw`flex w-1/2 px-2`} key={index}>
                <View style={tw`h-1/2 ${calculateTopSegments(+num)}`}></View>
                <View style={tw`h-1/2 ${calculateBottomSegments(+num)}`}></View>
              </View>
            ))}
        </View>
        <Text style={tw`flex items-center m-auto text-4xl font-bold`}>:</Text>
        <View style={tw` h-full w-1/3 flex flex-row p-2`}>
          {second < 10 && (
            <View style={tw`flex w-1/2 px-2`}>
              <View style={tw`h-1/2 ${calculateTopSegments(0)}`}></View>
              <View style={tw`h-1/2 ${calculateBottomSegments(0)}`}></View>
            </View>
          )}
          {second
            .toString()
            .split("")
            .map((num, index) => (
              <View style={tw`flex w-1/2 px-2`} key={index}>
                <View style={tw`h-1/2 ${calculateTopSegments(+num)}`}></View>
                <View style={tw`h-1/2 ${calculateBottomSegments(+num)}`}></View>
              </View>
            ))}
        </View>
      </View>
      <View
        style={[
          tw`mt-10 border rounded-full w-72 h-72 absolute top-52`,
          // {console.log(`180+${second}deg`)},
          { transform: [{ rotate: `${180 + minute * 6}deg` }] },
        ]}
      >
        <View style={tw` border w-1 h-28 mt-36 ml-36`}></View>
      </View>
      <View
        style={[
          tw`mt-10 border rounded-full w-72 h-72 absolute top-52`,
          // {console.log(`180+${second}deg`)},
          { transform: [{ rotate: `${180 + hour * 30}deg` }] },
        ]}
      >
        <View style={tw` border w-1 h-24 mt-36 ml-36`}></View>
      </View>
      <View
        style={[
          tw`mt-10 border rounded-full w-72 h-72 absolute top-52`,
          // {console.log(`180+${second}deg`)},
          { transform: [{ rotate: `${180 + second * 6}deg` }] },
        ]}
      >
        <View style={tw` border w-1 h-32 mt-36 ml-36`}></View>
      </View>
      <View
        style={[
          tw`mt-10 border rounded-full w-72 h-72 absolute top-52`,
          // {console.log(`180+${second}deg`)},
        ]}
      >
        <View
          style={[
            tw` border w-6 rounded-full h-6 bg-gray-300 absolute bottom-32 left-32`,
          ]}
        ></View>
      </View>
    </SafeAreaView>
  );
}
