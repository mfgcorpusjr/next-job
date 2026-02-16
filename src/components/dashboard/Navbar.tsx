import { LucideMenu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/dashboard/Sidebar";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";

export default function Navbar() {
  return (
    <header className="h-16 w-full border-b bg-background px-4 md:px-6 flex items-center justify-between">
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <LucideMenu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-72 bg-card p-0">
            <SheetHeader>
              <SheetTitle />

              <SheetDescription />
            </SheetHeader>

            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />

        <UserButton />
      </div>
    </header>
  );
}
