import { Button, Flex, HStack, Icon, Image, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { HiOutlineInformationCircle } from "@react-icons/all-files/hi/HiOutlineInformationCircle";
import { FaArrowAltCircleRight } from "@react-icons/all-files/fa/FaArrowAltCircleRight";
import {FaPlus} from "@react-icons/all-files/fa/FaPlus"
import {FaMinus} from "@react-icons/all-files/fa/FaMinus"
export default function PriceSection() {

    const timeStamp=["7:15 PM","7:20 PM","7:25 PM","7:30 PM","7:35 PM"]
  return (
    <CustomCard>
      <Flex justify={"space-between"} align={"start"}>
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"sm"}>Wallete Balance</Text>
          </HStack>
          <HStack>
            <HStack>
              <Text textStyle={"h2"} fontWeight={"bold"}>
                22.394010000
              </Text>
              <HStack fontWeight={"medium"} color={"green.500"}>
                <Icon as={FaArrowAltCircleRight} />
                <Text fontSize={"sm"} fontWeight={"bold"}>
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button fontSize={"12px"}>
            <Icon as={FaPlus} margin={"5px"} />
            Buy
          </Button>
          <Button fontSize={"12px"}>
            <Icon as={FaMinus} margin={"5px"} />
            Sell
          </Button>
        </HStack>
      </Flex>
      <Image w="100%" src="public/Graph.svg"/>
    </CustomCard>
  );
}
