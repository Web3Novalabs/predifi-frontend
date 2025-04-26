import PoolForm from "@/components/pool-creation/pool-form";
import { PoolCreationProvider } from "@/contexts/pool-creation-context";

export default function CreatePool() {
  return (
    <PoolCreationProvider>
      <PoolForm />
    </PoolCreationProvider>
  );
}
