import Form from "./form";

export default function Khodam() {
  return (
    <main className="pad-x flex h-auto w-full grow flex-col items-center justify-center">
      <h1 className="max-w-xl text-balance text-center text-2xl font-bold md:text-3xl">
        Cek Khodam Kamu Hari Ini
      </h1>
      <Form />
    </main>
  );
}
