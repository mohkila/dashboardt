import AnalyticsCard from "@/components/dashboard/analytics-card";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
 
 
 
import { ProductsDummyData } from "@/constants/data";
import { Columns } from "./columns";
 
 

 function page() {
   
  return (
    <div className="p-6  ">
        <AnalyticsCard title= "Products" 
        subTitle="Showing all Products"
        >
         <Button>Add New Product</Button>
         <DataTable columns={Columns} data={ProductsDummyData}/>

        </AnalyticsCard>
    </div>
  )
}

export default page