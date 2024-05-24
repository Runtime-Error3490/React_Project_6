import React from "react";
import DashboardLayout from "../../../Component/DashboardLayout";
import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FaMailchimp } from "@react-icons/all-files/fa/FaMailchimp";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
export default function SupportCard() {
  return (
    <Flex gap={6} flexDir={{
        base:"column",
        xl:"row"
    }}>
      <Stack maxW={"24rem"}>
        <Icon as={FaMailchimp} boxSize={6} color={"p.purple"} />
        <Text as="h1" textStyle={"h1"} fontWeight={"medium"}>
          Contact Us
        </Text>
        <Text fontSize={"sm"} color={"black.60"}>
          For any inquiries, please contact us!!
        </Text>
      </Stack>
      <Card p="6" borderRadius={"16px"} flexGrow={1}>
        <Stack spacing={6}>
          <Text fontWeight={"medium"} fontSize={"sm"}>
            You will Recieve responses within 24 hours of time of submit.
          </Text>
          <HStack flexDir={{
            base:"column",
            md:"row"
          }}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="Enter Your First Name" />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Enter Your Second Name" />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter Your Email" />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Enter Your Message" />
          </FormControl>
          <Checkbox defaultChecked>
            <Text fontSize={"xs"}>
              I agree with{" "}
              <Box as="span" color={"p.purple"}>
                Terms and Conditions
              </Box>
            </Text>
          </Checkbox>
          <Stack>
            <Button fontSize={"sm"}>Send A Message</Button>
            <Button fontSize={"sm"} colorScheme="gray">Book A Meeting</Button>
          </Stack>
        </Stack>
      </Card>
    </Flex>
  );
}
