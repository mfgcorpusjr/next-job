import { Metadata } from "next";

import UpsertJobForm from "@/features/job/components/UpsertJobForm";

export const metadata: Metadata = {
  title: "Create Job",
};

export default function CreateJobPage() {
  return <UpsertJobForm />;
}
