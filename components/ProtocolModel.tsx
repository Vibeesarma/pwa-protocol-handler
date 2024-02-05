"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

type ProtocolModelProps = {
  qr_data?: string;
};

export default function ProtocolModel({ qr_data }: ProtocolModelProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (qr_data) {
      console.log(qr_data);
      setOpen(true);
    }
  }, [qr_data]);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Hello World
              {JSON.stringify(qr_data)}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4"></div>
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div>
          <DialogFooter>Footer</DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
