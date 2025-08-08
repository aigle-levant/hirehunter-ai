import { ColumnDef } from "@tanstack/react-table";
import React from "react";

/** @type {import("@tanstack/react-table").ColumnDef<any, any>[]} */

export const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "company",
    header: "Last Company",
  },
  {
    accessorKey: "lastwork",
    header: "Role",
  },
  {
    accessorKey: "yoe",
    header: "Experience (Years)",
  },
  {
    accessorKey: "skills",
    header: "Skills",
    cell: ({ row }) => {
      const value = row.getValue("skills");
      return (
        <div className="max-w-[200px] truncate" title={value}>
          {value}
        </div>
      );
    },
  },
  {
    accessorKey: "score",
    header: "HireScore",
    cell: ({ row }) => {
      const score = row.getValue("score");
      const color =
        score >= 70
          ? "text-green-600"
          : score >= 40
          ? "text-yellow-600"
          : "text-red-600";

      return <span className={`font-semibold ${color}`}>{score} / 100</span>;
    },
  },
];
