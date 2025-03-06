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
 

export type Products = {
  id: string | number;
  name: string;
  price: number;
  revenue: number;
  image: string;
};

export const Columns: ColumnDef<Products>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("image") as string;
      return (
        <Image
          src={ "/avatar-image.avif"}
        //   src={imageUrl || "/avatar-image.avif"}
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
      const customers = row.original;
      const customerId = customers.id;

      if (!customerId) {
        return null;
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem  >
              Delete Product
            </DropdownMenuItem>
            <DropdownMenuItem  >
             Edit Product
            </DropdownMenuItem>
            <DropdownMenuItem  >
              View Product
            </DropdownMenuItem>
            <DropdownMenuItem  >
              View Payment Details
            </DropdownMenuItem>  
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  }, 
];
