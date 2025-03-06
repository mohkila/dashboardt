import AnalyticsCard from "@/components/dashboard/analytics-card";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
 
 
import { Columns } from "./columns";
import { ordersDummyData } from "@/constants/data";
 
 

 

//  async function getCustomers(): Promise<Customers[]> {
//   const res = await fetch(
//     "https://66a6d52223b29e17a1a39127.mockapi.io/Customers",
//     { cache: "no-store" }
//   );
//   const data = await res.json();
//   return data;
// }

 

 function page() {
   
  return (
    <div className="p-6  ">
        <AnalyticsCard title= "Orders" 
        subTitle="Showing all Orders"
        >
         <Button>Create New Order</Button>
        <DataTable columns={Columns} data={ordersDummyData}/>

        </AnalyticsCard>
    </div>
  )
}

export default page