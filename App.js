import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function App() {
  const increment = () => {
    setNumber((prev) => prev + 1);
  };

  const printName = () => {
    alert(name);
    setName("");
  };

  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  return (
    <View style={tw`flex items-center m-auto`}>
      <Text style={tw`font-bold text-xl`}>Hello World!</Text>
      <Text style={tw`font-bold text-xl`}>{number}</Text>
      <TouchableOpacity
        onPress={increment}
        style={tw`p-2 border rounded-md my-2`}
      >
        <Text>+</Text>
      </TouchableOpacity>
      <TextInput
        style={tw`border px-10`}
        value={name}
        onChangeText={(e) => setName(e)}
        onSubmitEditing={printName}
      />
    </View>
  );
}
