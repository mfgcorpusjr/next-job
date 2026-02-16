"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import FormInputText from "@/components/form/FormInputText";
import FormSelect from "@/components/form/FormSelect";
import SubmitButton from "@/components/form/SubmitButton";

import { Job } from "@/generated/prisma/client";
import {
  UpsertJobFormData,
  upsertJobSchema,
} from "@/features/job/utils/schemas";
import { upsertJob } from "@/features/job/utils/actions";
import { statuses, types } from "@/features/job/utils/constants";

type UpsertJobFormProps = {
  job?: Job;
};

export default function UpsertJobForm({ job }: UpsertJobFormProps) {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const { control, handleSubmit } = useForm<UpsertJobFormData>({
    resolver: zodResolver(upsertJobSchema),
    defaultValues: {
      position: job?.position ?? "",
      company: job?.company ?? "",
      location: job?.location ?? "",
      status: job?.status ?? "Pending",
      type: job?.type ?? "Full-Time",
    },
  });

  const handleUpsertJob = async (formData: UpsertJobFormData) => {
    startTransition(async () => {
      const { status, message } = await upsertJob({ id: job?.id, formData });

      if (status === "SUCCESS") {
        toast.success(message);
        router.push("/jobs");
      } else {
        toast.error(message);
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{job ? "Edit Job" : "Create Job"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleUpsertJob)} className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <FormInputText name="position" control={control} label="Position" />

            <FormInputText name="company" control={control} label="Company" />

            <FormInputText name="location" control={control} label="Location" />

            <FormSelect
              name="status"
              control={control}
              label="Job Status"
              items={statuses.map((s) => ({ label: s, value: s }))}
            />

            <FormSelect
              name="type"
              control={control}
              label="Job Type"
              items={types.map((t) => ({ label: t, value: t }))}
            />
          </div>

          <SubmitButton isLoading={isPending}>Submit</SubmitButton>
        </form>
      </CardContent>
    </Card>
  );
}
