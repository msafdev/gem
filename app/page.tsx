import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gem, Gamepad } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pad-x flex h-auto w-full grow flex-col items-center justify-center">
      <Badge icon={<Gamepad className="h-3.5 w-3.5" />}>
        1 game baru ditambahkan
      </Badge>
      <h1 className="mt-3 max-w-xl text-balance text-center text-2xl font-bold md:text-4xl">
        Kumpulan game asik buat kamu yang lagi gabut
      </h1>
      <p className="mt-3 max-w-xl text-balance text-center text-sm text-muted-foreground md:text-base">
        Langsung mainin aja, gak perlu download, gak perlu install, gak perlu
        ribet!
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-3">
        <Button size="sm" className="" asChild>
          <Link href={"https://github.com/msafdev/gem"} target="_blank">
            Kontribusi
          </Link>
        </Button>
        <Button
          size="sm"
          className="gap-x-2 bg-red-600 text-white hover:bg-red-500"
        >
          <Link href={"https://trakteer.id/msafdev"} target="_blank" className="flex gap-x-2 items-center">
            <Gem className="h-4 w-4" />
            Trakteer
          </Link>
        </Button>
      </div>
    </main>
  );
}
