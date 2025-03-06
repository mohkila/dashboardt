"use client";

import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define Customers Type
export type Customers = {
  id: string;
  name: string;
  email: string;
  orders: number;
  image: string;
};

// Use the correct type in ColumnDef<Customers>
export const Columns: ColumnDef<Customers>[] = [
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
      const imageUrl = row.getValue("image") as string;
      return (
        <Image
          src={  "/avatar-image.avif"}
          width={50}
          height={50}
          alt="Customer Avatar"
          className="border-2 border-primary rounded-2xl"
          unoptimized
        />
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const customer = row.original;
      const customerId = customer.id;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => console.log("Delete Customer", customerId)}>
              Delete Customer
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("Edit Customer", customerId)}>
              Edit Customer
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("View Customer", customerId)}>
              View Customer
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("View Payment Details", customerId)}>
              View Payment Details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
