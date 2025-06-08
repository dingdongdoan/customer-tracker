let customers = [
  {
    name: "Kimmy Anh",
    email: "kimmy.anh@example.com",
    purchases: ["Hydration Pack", "Bike Gloves"]
  },
  {
    name: "Tuan Dinh",
    email: "tuan.dinh@example.com",
    purchases: ["Bike Helmet"]
  },
  {
    name: "Alex Cheng",
    email: "alex.cheng@example.com",
    purchases: ["Cycling Shoes", "Handlebar Bag"]
  }
];

customers.push({
  name: "Mika Chen",
  email: "mika.chen@example.com",
  purchases: ["Chain Lock"]
});

customers.shift();

customers[0].email = "tuan.d@example.com";

customers[1].purchases.push("Water Bottle Cage");

customers.forEach((customer) => {
  console.log(`Name: ${customer.name}`);
  console.log(`Email: ${customer.email}`);
  console.log(`Total Purchases: ${customer.purchases.length}`);
  console.log("------------");
});