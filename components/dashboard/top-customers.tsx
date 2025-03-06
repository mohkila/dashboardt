"use client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { DataTable } from "../ui/data-table";
import AnalyticsCard from "./analytics-card";

// Use the same `Customer` type for consistency
export type Customer = {
  id: string;
  name: string;
  email: string;
  orders: number;
  image?: string;
};

type TopCustomersProps = {
  data: Customer[];
};

export const topCustomersColumns: ColumnDef<Customer>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "orders",
    header: "Orders",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("image") as string | undefined;
      return (
        <Image
          src={ "/avatar-image.avif"}
          width={50}
          height={50}
          alt="Customer Avatar"
          className="border-2 border-primary rounded-2xl"
          unoptimized
        />
      );
    },
  },
];

export const TopCustomers = ({ data }: TopCustomersProps) => {
  return (
    <AnalyticsCard title="Top Customers" subTitle="Showing Most Active Customers">
      <DataTable columns={topCustomersColumns} data={data} />
    </AnalyticsCard>
  );
};
