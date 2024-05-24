import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

export default function InforCard({ imgUrl, text, tagText, inverted }) {
  return (
    <CustomCard
      bgImage={imgUrl}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgColor={!inverted ? "white" : "p.purple"}
    >
      <Tag
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purple" : "white"}
        borderRadius={"full"}
      >
        {tagText}
      </Tag>
      <Text
        mt="4"
        fontWeight="medium"
        textStyle={"h5"}
        color={!inverted ? "black" : "white"}
      >
        {text}
      </Text>
    </CustomCard>
  );
}
