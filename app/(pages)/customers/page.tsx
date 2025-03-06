import AnalyticsCard from "@/components/dashboard/analytics-card";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Columns,  Customers } from "./columns"; // ✅ Import Customer type

async function getCustomers(): Promise<Customers[]> { // ✅ Now Customer is recognized
  const res = await fetch("https://67c7a173c19eb8753e7a3813.mockapi.io/s", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch customers");
  return res.json();
}

export default async function Page() {
  const data = await getCustomers();

  return (
    <div className="p-6">
      <AnalyticsCard title="Customers" subTitle="Showing all Customers With Orders">
        <Button className="mb-3">Add New Customer</Button>
        <DataTable columns={Columns} data={data} />
      </AnalyticsCard>
    </div>
  );
}
