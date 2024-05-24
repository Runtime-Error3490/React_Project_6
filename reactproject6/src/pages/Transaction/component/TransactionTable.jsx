import React from "react";
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
  Text,
  Stack,
  Tag,
} from "@chakra-ui/react";
export default function TransactionTable() {
  const tableData = [
    {
      id: 1,
      date: "2021-09-01",
      time: "12:00 PM",
      type: "Deposit",
      amount: 100,
      status: "Success",
    },
    {
      id: 2,
      date: "2021-09-02",
      time: "12:00 PM",
      type: "Withdraw",
      amount: 50,
      status: "Success",
    },
    {
      id: 3,
      date: "2021-09-03",
      time: "12:00 PM",
      type: "Trade",
      amount: 50,
      status: "Failed",
    },
    {
      id: 4,
      date: "2021-09-04",
      time: "12:00 PM",
      type: "Deposit",
      amount: 100,
      status: "Success",
    },
    {
      id: 5,
      date: "2021-09-05",
      time: "12:00 PM",
      type: "Withdraw",
      amount: 50,
      status: "Success",
    },
    {
      id: 6,
      date: "2021-09-06",
      time: "12:00 PM",
      type: "Trade",
      amount: 50,
      status: "Failed",
    },
  ];
  //agar undefined ho to data.types?.tag
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Types</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody color={"p.black"}>
          {tableData.map((data, index) => (
            <Tr key={index}>
              <Td>{data.id}</Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize={"sm"} fontWeight={"medium"}>
                    {data.date}
                  </Text>
                  <Text fontSize={"xs"} color={"black.60"}>
                    {data.time}
                  </Text>
                </Stack>
              </Td>
              <Td fontSize={"sm"} fontWeight={"medium"}>
                {data.type}
              </Td>
              <Td fontSize={"sm"} fontWeight={"medium"}>
                {data.amount}
              </Td>
              <Td fontSize={"sm"} fontWeight={"medium"}>
                <Tag bg={data.status === "Success" ? "green" : "red"} color={"white"} rounded={"full"}>
                  {data.status}
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
