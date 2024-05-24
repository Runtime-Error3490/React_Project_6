import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { HiOutlineInformationCircle } from "@react-icons/all-files/hi/HiOutlineInformationCircle";
import { SiDependabot } from "@react-icons/all-files/si/SiDependabot";
import { BiMoney } from "@react-icons/all-files/bi/BiMoney";
export default function PortfolioSection() {
  //hstack mei row
  //stack mei column
  return (
    <HStack
      bg="white"
      borderRadius={"xl"}
      p="6"
      spacing={16}
      justifyContent={"space-between"}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      align={{
        base: "flex-start",
        xl: "center",
      }}
    >
      <HStack
        spacing={{
          base:0,
          xl:16
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
      >
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"sm"}>Total Portfolio Value</Text>
            <Icon as={HiOutlineInformationCircle} />
          </HStack>
          <Text textStyle={"h2"} fontWeight={"bold"}>
            $112312.24
          </Text>
        </Stack>
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"sm"}>Wallete Balance</Text>
          </HStack>
          <HStack>
            <HStack>
              <Text textStyle={"h2"} fontWeight={"bold"}>
                22.394010000
              </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle={"h2"} fontWeight={"bold"}>
                $1300.00
              </Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button fontSize={"12px"}>
          <Icon as={SiDependabot} margin={"5px"} />
          Deposit
        </Button>
        <Button fontSize={"12px"}>
          <Icon as={BiMoney} margin={"5px"} />
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
}
