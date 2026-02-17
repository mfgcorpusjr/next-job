import { Button } from "@/components/ui/button";

type DeleteJobButtonProps = {
  id: string;
};

export default function DeleteJobButton({ id }: DeleteJobButtonProps) {
  return (
    <Button variant="outline" size="sm" className="flex-1 cursor-pointer">
      Delete
    </Button>
  );
}
