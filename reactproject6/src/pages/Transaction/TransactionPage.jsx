import { Button, Card, Flex, HStack, Icon, InputGroup, InputLeftElement, Tag } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../Component/DashboardLayout";
import { IoMdDownload } from "@react-icons/all-files/io/IoMdDownload";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {FaSearch} from "@react-icons/all-files/fa/FaSearch"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import TransactionTable from "./component/TransactionTable";
export default function TransactionPage() {
  const tabs = [
    {
      name: "All",
      count: 34,
    },
    {
      name: "Deposit",
      count: 32,
    },
    {
      name: "Withdraw",
      count: 2,
    },
    {
      name: "Trade",
      count: 0,
    },
  ];
  return (
    <DashboardLayout>
      <Flex justify={"end"} mt={6} mb="3">
        <Button leftIcon={<Icon as={IoMdDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius={"16px"}>
        <Tabs>
        
          <TabList pt="4" display={"flex"} justifyContent={"space-between"}>
          <HStack>
            {tabs.map((tab, index) => (
              <Tab display="flex" gap="2" key={index}  pb="4">
                {tab.name}{" "}
                <Tag colorScheme="gray" borderRadius={"full"}>
                  {tab.count}
                </Tag>
              </Tab>
            ))}
            </HStack>
            <InputGroup maxW={"200px"} pr="6">
              <InputLeftElement pointerEvents="none">
              <FaSearch color='gray.300' />
              </InputLeftElement>
              <Input type="tel" placeholder="Search" />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
}
