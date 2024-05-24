import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Flex,
  Container,
  Heading,
  Button,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine";
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle";
import { IoIosMenu } from "@react-icons/all-files/io/IoIosMenu";
export default function TopNav({ title, onOpen }) {
  return (
    <Box boxShadow={"xl"} px={"4px"} bg={"white"}>
      <HStack
        maxW={"70rem"}
        h={"64px"}
        justify={"space-between"}
        mx="auto"
        fontWeight={"medium"}
      >
        <Icon as={IoIosMenu} onClick={onOpen} display={{
                base: "block",
                md:"none",
                lg: "none",
              }}/>
        <Heading fontSize={"28px"}>{title}</Heading>
        <Menu>
          <MenuButton as={Button} bg={"white"}>
            <Icon
              as={FaRegUserCircle}
              fontSize={"xl"}
              color={"black"}
            />
          </MenuButton>
          <MenuList>
            <MenuItem>LogOut</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}
