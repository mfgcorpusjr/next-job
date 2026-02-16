"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LucideLayoutDashboard,
  LucideBriefcaseBusiness,
  LucideCirclePlus,
} from "lucide-react";

import Logo from "@/components/Logo";

import { cn } from "@/lib/utils";

const links = [
  { label: "Dashboard", href: "/dashboard", icon: LucideLayoutDashboard },
  { label: "Jobs", href: "/jobs", icon: LucideBriefcaseBusiness },
  { label: "Create Job", href: "/jobs/create", icon: LucideCirclePlus },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-card">
      <div className="flex h-16 items-center border-b px-6">
        <Logo />
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {links.map((link) => {
          const isActive = link.href === pathname;
          const className = isActive
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground";

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all",
                className,
              )}
            >
              <link.icon className="h-4 w-4" />

              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
