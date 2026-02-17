import { LucideSearchAlert } from "lucide-react";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

type EmptyListProps = {
  title: string;
  description?: string;
  content?: React.ReactNode;
};

export default function EmptyList({
  title,
  description = "No data found",
  content,
}: EmptyListProps) {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <LucideSearchAlert className="size-6" />
        </EmptyMedia>

        <EmptyTitle className="text-md">{title}</EmptyTitle>

        <EmptyDescription className="text-sm">{description}</EmptyDescription>
      </EmptyHeader>

      {content && <EmptyContent>{content}</EmptyContent>}
    </Empty>
  );
}
