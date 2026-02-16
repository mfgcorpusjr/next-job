import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <aside className="hidden md:block w-72 h-screen border-r shrink-0 sticky top-0">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 bg-muted/30 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
