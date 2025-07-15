import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

const Saved = () => {
  return (
    <View className="bg-primary flex-1 px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image className="size-10" source={icons.save} />
        <Text className="text-gray-500">Saved</Text>
      </View>
    </View>
  );
};

export default Saved;
