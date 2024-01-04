import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import CardContainer from "../components/CardContainer/CardContainer";
import Card from "../components/Card/Card";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <CardContainer />
      <Card />
    </div>
  );
}
