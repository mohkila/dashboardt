import { BarGraph } from "@/components/dashboard/bar-chart";
import { HorizontalGraph } from "@/components/dashboard/horizontal-bar-chart";
import { PieGraph } from "@/components/dashboard/pie-chart";
import { RadarGraph } from "@/components/dashboard/radar-chart";
import Summary from "@/components/dashboard/summary";
import { TopCustomers } from "@/components/dashboard/top-customers";
import { TopProducts } from "@/components/dashboard/top-products";

// Define the type for customers
export type Customer = {
  id: string;
  name: string;
  email: string;
  orders: number;
  image?: string;
};

async function getCustomers(): Promise<Customer[]> {
  const res = await fetch(`https://67c7a173c19eb8753e7a3813.mockapi.io/s`);
  if (!res.ok) throw new Error("Failed to fetch customers");
  return res.json();
}

export default async function Home() {
  const data = await getCustomers();

  // Explicitly define types for `a` and `b` in sorting
  const topCustomers = data
    .filter((customer) => customer.orders > 0) // Ensure valid customers
    .sort((a: Customer, b: Customer) => b.orders - a.orders)
    .slice(0, 6);

  return (
    <div className="p-4 grid gap-5">
      <Summary />
      <div className="grid lg:grid-cols-2">
        <BarGraph />
        <RadarGraph />
      </div>
      <div className="grid lg:grid-cols-2">
        <TopProducts />
        <PieGraph />
      </div>
      <div className="grid lg:grid-cols-2">
        <HorizontalGraph />
        <TopCustomers data={topCustomers} />
      </div>
    </div>
  );
}
