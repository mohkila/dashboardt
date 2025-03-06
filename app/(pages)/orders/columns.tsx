"use client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
 
export type Orders = {
  id: string | number;
  orderNumber: string;
  totalAmount: number; // Fix spelling
  date: number;
};


export const Columns: ColumnDef<Orders>[] = [
  {
    accessorKey: "orderNumber",
    header: "OrderNumber",
  },
  {
    accessorKey: "totalAmount",
    header: "TotalAmount",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Order Details</DropdownMenuItem>
            <DropdownMenuItem>Delete Order</DropdownMenuItem>
            <DropdownMenuItem>View Customer</DropdownMenuItem>
            <DropdownMenuItem>View Payment Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
