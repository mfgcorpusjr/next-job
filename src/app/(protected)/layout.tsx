import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="hidden md:block w-72 border-r shrink-0 sticky top-0 h-screen">
        <Sidebar />
      </aside>

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 bg-muted/30 p-4 md:p-8">
          <div className="mx-auto max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
