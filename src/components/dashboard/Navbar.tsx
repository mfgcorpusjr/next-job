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
    <header className="flex h-16 w-full items-center justify-between border-b bg-background px-4 md:px-6">
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <LucideMenu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="p-0 w-72 bg-card">
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
