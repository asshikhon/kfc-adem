import Banner from "@/components/Banner";
import Cart from "@/components/Cart";
import SideNav from "@/components/navaigation/SideNav";
import Offer from "@/components/Offer";
import Section from "@/components/restaurant/Section";
import React from "react";

const Restaurant = () => {

const items1 = [
  {
    "name": "Water Asu 0.5",
    "image": "https://i.ibb.co.com/xfS7Yf2/asu.jpg",
    "price": 400,
    "stock": "in"
  },
  {
    "name": "Pepsi 0.5 bottle",
    "image": "https://i.ibb.co.com/4Ny5jcT/pepsi.jpg",
    "price": 650,
    "stock": "out"
  },
  {
    "name": "Juice Da-DA 0.2",
    "image": "https://i.ibb.co.com/C8mtCcj/dada.jpg",
    "price": 450,
    "stock": "in"
  },
  {
    "name": "Cold Tea Lipton Ice-Tea 0.5",
    "image": "https://i.ibb.co.com/HY3XNBf/coldtea.jpg",
    "price": 650,
    "stock": "in"
  },
  {
    "name": "Pepsi 0.5 bottle",
    "image": "https://i.ibb.co.com/4Ny5jcT/pepsi.jpg",
    "price": 650,
    "stock": "out"
  },

]
const items2 = [
  {
    "name": "Cheese",
    "image": "https://i.ibb.co.com/9snrKBM/chese.jpg",
    "price": 150,
    "stock": "in"
  },
  {
    "name": "Bun",
    "image": "https://i.ibb.co.com/DKmQ9Qs/bun.jpg",
    "price": 200,
    "stock": "in"
  },
  {
    "name": "Barbecue sauce",
    "image": "https://i.ibb.co.com/ZLpdD35/barbecue.jpg",
    "price": 165,
    "stock": "in"
  },
  {
    "name": "Cheese sauce",
    "image": "https://i.ibb.co.com/ckSJ382/sauce.jpg",
    "price": 165,
    "stock": "in"
  },
  {
    "name": "Ketchup sauce",
    "image": "https://i.ibb.co.com/8xTQKB0/sauce2.jpg",
    "price": 165,
    "stock": "out"
  },
  {
    "name": "Garlic sauce",
    "image": "https://i.ibb.co.com/gS1H9Fm/garlic.jpg",
    "price": 165,
    "stock": "in"
  },
  {
    "name": "Teriyaki sauce",
    "image": "https://i.ibb.co.com/0CyHZQL/teriyaki.jpg",
    "price": 165,
    "stock": "in"
  },
  {
    "name": "Sweet and sour sauce",
    "image": "https://i.ibb.co.com/JpS5XVR/sweet.jpg",
    "price": 165,
    "stock": "in"
  },
  {
    "name": "Beef Slice",
    "image": "https://i.ibb.co.com/9Y1WWMF/beef.png",
    "price": 250,
    "stock": "out"
  },
  {
    "name": "Jalapeno",
    "image": "https://i.ibb.co.com/BnT9ND8/jalapeno.png",
    "price": 150,
    "stock": "in"
  }


]

  return (
    <div className="flex justify-between pt-6">
      <section className="w-[20%] px-12 min-h-screen ">
        <SideNav />
      </section>
      <main className="w-[60%] pr-12 space-y-12">
        <Banner />
        <Offer />
        <Section  id="drinks" items={items1} />
        <Section items={items2} id="additionally" />
        {/* <Section id="contact" /> */}
      </main>
      <section className="w-[20%] min-h-screen ">
       <Cart />
      </section>
    </div>
  );
};

export default Restaurant;
