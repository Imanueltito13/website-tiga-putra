import Head from "next/head";
import { Metadata } from "next";

export const metadata = {
  title: "Halaman Utama",
  description: "Deskripsi halaman utama",
};

export default function Home() {
  return (
    <div className="px-6 sm:px-24">
      <div className="py-12 text-3xl font-normal text-[#BF3131]">
        Jadi Juragan Pentol mulai dari Rp500.000
      </div>
    </div>
  );
}
