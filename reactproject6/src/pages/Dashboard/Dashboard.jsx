import React from "react";
import DashboardLayout from "../../Component/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
export default function Dashboard() {
  return (
    <DashboardLayout title="DashBoard">
    <Grid   gap="6" gridTemplateColumns={{
      base:"repeat(1,fr)",
      md:"repeat(2,1fr)"
    } }
  >
      <GridItem colSpan={2}>
      <PortfolioSection/>
      </GridItem>
      <GridItem colSpan={1}>
      <PriceSection/>
      </GridItem>
    </Grid>
    </DashboardLayout>
  );
}
