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
    <div className="h-full flex flex-col bg-card">
      <div className="h-16 border-b px-6 flex items-center">
        <Logo />
      </div>

      <nav className="flex-1 px-4 py-8">
        <div className="space-y-4">
          <p className="px-2 text-[10px] text-muted-foreground/70 font-semibold uppercase tracking-wider">
            Main Menu
          </p>

          <div className="space-y-2">
            {links.map((link) => {
              const isActive = link.href === pathname;
              const className = isActive
                ? "bg-primary text-white"
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
                  <link.icon className="size-4" />

                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
