import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[#BF3131] shadow-md flex gap-10 py-4 px-12 justify-center">
      <Link href="/" className="text-[#EAD196] hover:text-white">
        Halaman Utama
      </Link>
      <Link href="/about" className="text-[#EAD196] hover:text-white">
        Tentang Kami
      </Link>
      <Link href="/about" className="text-[#EAD196] hover:text-white">
        Produk Kami
      </Link>
      <Link href="/about" className="text-[#EAD196] hover:text-white">
        Cabang Kami
      </Link>
    </div>
  );
}
