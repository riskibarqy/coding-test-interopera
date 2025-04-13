import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/src/components/ui/pagination";

export default function SalesUserList({ pagedDeals, allDeals, dealPage, dealsPerPage, setDealPage }) {
  if (!allDeals || allDeals.length === 0) {
    return <p>No sales deals found.</p>;
  }

  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-4">Deals</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rep</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pagedDeals.map((deal, i) => (
              <TableRow key={`${deal.rep}-${i}`}>
                <TableCell>{deal.rep}</TableCell>
                <TableCell>{deal.client}</TableCell>
                <TableCell>{deal.status}</TableCell>
                <TableCell className="text-right">
                  ${deal.value.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination for Deals */}
        <Pagination>
          <PaginationContent className="justify-center mt-4">
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setDealPage((p) => Math.max(p - 1, 0))}
                className={dealPage === 0 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            <PaginationItem>
              <span className="text-sm text-muted-foreground mt-1">
                Page {dealPage + 1}
              </span>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={() => {
                  if ((dealPage + 1) * dealsPerPage < allDeals.length) {
                    setDealPage((p) => p + 1);
                  }
                }}
                className={
                  (dealPage + 1) * dealsPerPage >= allDeals.length
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>

  );
}
