import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/src/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";

export default function SalesUserList({ users, page, limit, setPage }) {
  const [selectedUser, setSelectedUser] = useState(null);

  if (!users || users.length === 0) {
    return <p>No sales reps found.</p>;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Region</TableHead>
            <TableHead className="w-[80px]">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.region}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedUser(user)}
                    >
                      View
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="md:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Deals - {selectedUser?.name}</DialogTitle>
                    </DialogHeader>
                    {selectedUser?.deals?.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Client</TableHead>
                            <TableHead>Industry</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Value</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {selectedUser.deals.map((deal, i) => {
                            const clientDetails = selectedUser.clients.find(
                              (client) => client.name === deal.client
                            );

                            return (
                              <TableRow key={i}>
                                <TableCell>{deal.client}</TableCell>
                                <TableCell>{clientDetails?.industry || "-"}</TableCell>
                                <TableCell>{clientDetails?.contact || "-"}</TableCell>
                                <TableCell>{deal.status}</TableCell>
                                <TableCell className="text-right">
                                  ${deal.value.toLocaleString()}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    ) : (
                      <p className="text-sm text-muted-foreground">No deals found.</p>
                    )}
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <Pagination>
        <PaginationContent className="justify-center mt-4">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              className={page === 0 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
          <PaginationItem>
            <span className="text-sm text-muted-foreground mt-1">
              Page {page + 1}
            </span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => {
                if (users.length === limit) {
                  setPage((p) => p + 1);
                }
              }}
              className={users.length < limit ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
