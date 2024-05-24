import {
  Box,
  HStack,
  Heading,
  Icon,
  Stack,
  StackDivider,
  StackItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdDashboard } from "@react-icons/all-files/md/MdDashboard";
import { GrTransaction } from "@react-icons/all-files/gr/GrTransaction";
import { MdHelpOutline } from "@react-icons/all-files/md/MdHelpOutline";
export default function Sidenav() {
  const navLinks = [
    {
      icon: MdDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack
     bg={"white"}
      userSelect={"none"}
      boxShadow={{
        base:"none",
        lg:"2px"
      }}
      w={{
        base:"full",
        lg:"16rem"
      }}
      minHeight={"100vh"}
      justify={"space-between"}
    >
      <Box>
        <Heading fontSize="20px" pt={"14"} textAlign={"center"}>
          Shaleen Shukla
        </Heading>
        <Box mt={6} mx={"3"}>
          {navLinks.map((nav) => (
            <HStack
              key={nav.text}
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
              borderRadius={"10px"}
              fontSize={"14px"}
              mb={"2"}
              py={"3"}
              px="4"
              _hover={{
                bg: "#F3F3F7",
              }}
            >
              <Icon as={nav.icon} />
              <Text
                fontWeight={"medium"}
                color={"#797E82"}
                _hover={{
                  color: "#171717",
                }}
              >
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box
        mx={"3"}
        mb={"6"}
        p={"6px"}
        alignItems={"center"}
        color={"#171717"}
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
        borderRadius={"10px"}
        fontSize={"16px"}
      >
        <HStack>
          <Icon as={MdHelpOutline} />
          <Text
            _hover={{
              color: "#797E82",
            }}
          >
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
}
