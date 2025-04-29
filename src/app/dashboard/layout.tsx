import Navigation from "@/components/ui/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative bg-[#09090B]">
      <Navigation>
        <div className="z-10">
          {children}
        </div>
      </Navigation>
    </div>
  );
}
