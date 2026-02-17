"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import DeleteDialog from "@/components/DeleteDialog";

import { deleteJob } from "@/features/job/utils/actions";

type DeleteJobButtonProps = {
  id: string;
};

export default function DeleteJobButton({ id }: DeleteJobButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleDeleteJob = async () => {
    startTransition(async () => {
      const { status, message } = await deleteJob(id);

      if (status === "SUCCESS") {
        toast.success(message);
      } else {
        toast.error(message);
      }
    });
  };

  return (
    <DeleteDialog
      trigger={
        <Button variant="outline" size="sm" className="flex-1 cursor-pointer">
          Delete
        </Button>
      }
    >
      <Button
        variant="destructive"
        disabled={isPending}
        onClick={handleDeleteJob}
      >
        {isPending && <Spinner data-icon="inline-start" />}
        Delete
      </Button>
    </DeleteDialog>
  );
}
