import Head from "next/head";
import { Metadata } from "next";
import FloatingNavbar from "@/components/FloatingNavbar";

export const metadata = {
  title: "Halaman Utama",
  description: "Deskripsi halaman utama",
};

const allMenu = [
  {
    _id: "1",
    image: "image/pentol.jpeg",
    menu: "Pentol",
    description:
      " Pentol Kasar adalah jajanan khas yang terbuat dari campuran daging sapi atau ayam dengan tepung tapioka, menghasilkan tekstur yang lebih padat dan kenyal dibandingkan bakso biasa",
    price: "Rp. 10.000",
  },
  {
    _id: "2",
    image: "image/pentol.jpeg",
    menu: "Tahu",
    description:
      " Pentol Kasar adalah jajanan khas yang terbuat dari campuran daging sapi atau ayam dengan tepung tapioka, menghasilkan tekstur yang lebih padat dan kenyal dibandingkan bakso biasa",
    price: "Rp. 10.000",
  },
  {
    _id: "3",
    image: "image/pentol.jpeg",
    menu: "Tahu",
    description:
      " Pentol Kasar adalah jajanan khas yang terbuat dari campuran daging sapi atau ayam dengan tepung tapioka, menghasilkan tekstur yang lebih padat dan kenyal dibandingkan bakso biasa",
    price: "Rp. 10.000",
  },
  {
    _id: "4",
    image: "image/pentol.jpeg",
    menu: "Tahu",
    description:
      " Pentol Kasar adalah jajanan khas yang terbuat dari campuran daging sapi atau ayam dengan tepung tapioka, menghasilkan tekstur yang lebih padat dan kenyal dibandingkan bakso biasa",
    price: "Rp. 10.000",
  },
];

export default function Home() {
  return (
    <div className=" px-12 py-12 bg-[#F2F2F2]">
      <div className="text-[#00001F] font-bold text-xl">Categories</div>
      <div className="flex items-center gap-3  py-3 my-2 rounded-xl shadow-lg bg-white px-6 ">
        <div className="text-white bg-blue-500 px-4 py-2 rounded-md">
          All Items
        </div>
        <div className="text-slate-700 border border-slate-200 rounded-md px-4 py-2 ">
          Pentol
        </div>
        <div className="text-slate-700 border border-slate-200 rounded-md px-4 py-2 ">
          Tahu
        </div>
        <div className="text-slate-700 border border-slate-200 rounded-md px-4 py-2 ">
          Siomay
        </div>
      </div>
      <div className="text-[#00001F] font-bold text-xl mt-12 mb-4">
        All Items
      </div>
      <div className="grid grid-cols-4 gap-4">
        {allMenu.map((item, index) => (
          <div key={item._id} className="bg-white rounded-md shadow-lg">
            <div>
              <img
                className="w-full h-48 object-cover rounded-t-md"
                src={item.image || ""}
              />
              <div className="text-[#00001F] text-lg font-semibold px-3 pt-3">
                {item.menu || ""}
              </div>
              <div className="text-[#00001F] text-sm font-light px-3 py-2">
                {item.description || ""}
              </div>
              <div className="text-[#00001F] text-sm font-light px-3 py-2">
                {item.price || ""}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
