import { Separator } from "@/components/ui/separator";

type SectionTitleProps = {
  text: string;
};

export default function SectionTitle({ text }: SectionTitleProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold tracking-tight">{text}</h3>

      <Separator />
    </div>
  );
}
