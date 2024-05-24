import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Box, Button, Divider, Flex, Icon, Stack, Text, Textarea } from "@chakra-ui/react";
import { FaDollarSign } from "@react-icons/all-files/fa/FaDollarSign";
import { FaBtc } from "@react-icons/all-files/fa/FaBtc";
import { FaRupeeSign } from "@react-icons/all-files/fa/FaRupeeSign";
import { transform } from "framer-motion";
export default function Transaction() {
  const Transaction = [
    {
      icon: FaDollarSign,
      text: "INR Deposit",
      amount: "+$81000",
      timeStamps: "2022-06-09 7:15 PM",
    },
    {
      icon: FaBtc,
      text: "BTC Sell",
      amount: "-$12.32234 BTC",
      timeStamps: "2022-05-09 12:32 AM",
    },
    {
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+$81330",
      timeStamps: "2022-06-09 7:15 PM",
    },
  ];
  return (
    <CustomCard h={
        {
            lg:"full"
        }
    }>
      <Text mb="6" fontSize="sm" color={"black.40"}>
        Recent Transactions
      </Text>
      <Stack spacing={"4"}>
        {Transaction.map((item, index) => (
          <Fragment key={index} >
          {index!=0 && <Divider/>}
            <Flex gap={"4"}>
              <Flex
                boxSize={"40px"}
                borderRadius={"full"}
                bg="black.5"
                justify={"center"}
                align={"center"}
              >
                <Icon as={item.icon} />
              </Flex>
              <Flex justify={"space-between"} w="full">
                <Stack spacing={0}>
                  <Text textStyle={"h6"}>{item.text}</Text>
                  <Text fontSize={"sm"} color={"black.80"}>
                    {item.timeStamps}
                  </Text>
                </Stack>
                <Text textStyle={"h6"}>{item.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" colorScheme="gray" mt="6">
        View All
      </Button>
    </CustomCard>
  );
}
