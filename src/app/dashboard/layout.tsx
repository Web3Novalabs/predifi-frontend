import Navigation from "@/components/ui/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative bg-[#09090B]">
      <Navigation>
        <div className="bsolute top-0 left-0 right-0 bottom-0 p-5 z-10">
          {children}
        </div>
      </Navigation>
    </div>
  );
}
