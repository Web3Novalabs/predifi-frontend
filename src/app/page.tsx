import Navigation from "@/components/ui/navigation";

export default function Home() {
  return (
    <div className="relative">
      {/* Sidebar */}
      <Navigation />

      {/* Main Content */}
      <div className="absolute top-0 left-0 right-0 bottom-0 p-10 z-10">
        <h1 className="text-3xl font-bold text-center mt-10">
          hello world
        </h1>
      </div>
    </div>
  );
}
