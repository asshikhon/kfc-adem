import Banner from "@/components/Banner";
import SideNav from "@/components/navaigation/SideNav";
import Offer from "@/components/Offer";
import Section from "@/components/restaurant/Section";
import React from "react";

const Restaurant = () => {
  return (
    <div className="flex justify-between pt-6">
      <section className="w-[25%] px-12 min-h-screen ">
        <SideNav />
      </section>
      <main className="w-[75%] pr-12 space-y-12">
        <Banner />
        <Offer />
        <Section id="about" />
        <Section id="service" />
        <Section id="contact" />
      </main>
    </div>
  );
};

export default Restaurant;
