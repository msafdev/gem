import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gem, Gamepad } from "lucide-react";

export default function Home() {
  return (
    <main className="pad-x flex h-auto w-full grow flex-col items-center justify-center">
      <Badge icon={<Gamepad className="h-3.5 w-3.5" />}>
        1 game baru ditambahkan
      </Badge>
      <h1 className="max-w-xl text-balance text-center text-2xl font-bold md:text-4xl mt-3">
        Kumpulan game asik buat kamu yang lagi gabut
      </h1>
      <p className="mt-3 max-w-xl text-balance text-center text-sm text-muted-foreground md:text-base">
        Langsung mainin aja, gak perlu download, gak perlu install, gak perlu
        ribet!
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-3">
        <Button size="sm" className="">
          Kontribusi
        </Button>
        <Button size="sm" className="gap-x-2 bg-red-600 hover:bg-red-500 text-white">
          <Gem className="h-4 w-4" />
          Trakteer
        </Button>
      </div>
    </main>
  );
}
