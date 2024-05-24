import React from "react";
import DashboardLayout from "../../Component/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transaction from "./components/Transaction";
import InforCard from "./components/InforCard";
export default function Dashboard() {
  return (
    <DashboardLayout title="DashBoard">
      <Grid
        gap="6"
        gridTemplateColumns={{
          base: "repeat(1,fr)",
          xl: "repeat(2,1fr)",
        }}
      >
        <GridItem colSpan={{
          base:1,
          xl:2
        }}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transaction />
        </GridItem>
        <GridItem colSpan={1}>
          <InforCard
            imgUrl="/public/Shape1.png"
            text={
              "Learn more about our loan - the most flexible and affordable in the market"
            }
            tagText={"Loan"}
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InforCard
            imgUrl="/public/grid_bg.svg"
            tagText="Contact"
            text={
              "Contact us for more information on how to get started with our services"
            }
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
}
