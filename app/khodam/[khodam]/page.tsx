import Reveal from "./reveal";

export default function Result({
  params,
  searchParams,
}: {
  params: { khodam: string };
  searchParams: { name: string };
}) {
  return (
    <main className="flex h-auto w-full grow flex-col items-center justify-center gap-y-2 md:gap-y-3">
      <h1 className="max-w-xl text-balance text-center text-lg font-semibold md:text-2xl">
        Khodam <span className="font-bold">{searchParams.name}</span> hari ini
        adalah{" "}
      </h1>
      <Reveal khodam={decodeURIComponent(params.khodam)} />
    </main>
  );
}
