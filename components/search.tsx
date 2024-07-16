import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Search() {
  return (
    <div className="flex flex-1 border w-[70vw] px-2 rounded-lg py-1 items-center justify-center space-x-3">
      <Image src="/examples/search.png" width={18} height={18} alt="search" />

      <Input
        type="search"
        placeholder="Search..."
        className="w-full border-none bg-transparent"
      />
    </div>
  );
}
