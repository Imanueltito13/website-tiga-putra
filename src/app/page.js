"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faFire,
  faAward,
  faStar,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  {
    _id: "1",
    image: "image/pentol.jpeg",
    menu: "Pentol Original",
    category: "Pentol",
    isBestSeller: true,
    description:
      "Pentol premium dengan daging sapi pilihan, diracik dengan 18 bumbu rahasia keluarga. Tekstur kenyal dan cita rasa yang bikin ketagihan!",
    price: "Rp 12.000",
  },
  {
    _id: "2",
    image: "image/pentol.jpeg",
    menu: "Pentol Pedas",
    category: "Pentol",
    isBestSeller: false,
    description:
      "Pentol daging sapi premium dengan tambahan cabai khas Tiga Putra. Pedasnya nendang tapi tetap bikin nagih!",
    price: "Rp 15.000",
  },
  {
    _id: "3",
    image: "image/pentol.jpeg",
    menu: "Tahu Isi Bakso",
    category: "Tahu",
    isBestSeller: true,
    description:
      "Tahu premium diisi dengan adonan bakso spesial, digoreng dengan minyak pilihan hingga keemasan. Renyah di luar, lembut di dalam!",
    price: "Rp 10.000",
  },
  {
    _id: "4",
    image: "image/pentol.jpeg",
    menu: "Siomay Ayam",
    category: "Siomay",
    isBestSeller: false,
    description:
      "Siomay dengan daging ayam cincang berkualitas, dibungkus kulit tipis dan dikukus sempurna. Cocok disantap dengan saus kacang spesial.",
    price: "Rp 15.000",
  },
  {
    _id: "5",
    image: "image/pentol.jpeg",
    menu: "Batagor Mini",
    category: "Goreng",
    isBestSeller: false,
    description:
      "Bakso tahu goreng mini dengan tekstur renyah di luar, lembut di dalam. Nikmati dengan saus kacang atau sambal spesial Tiga Putra.",
    price: "Rp 18.000",
  },
  {
    _id: "6",
    image: "image/pentol.jpeg",
    menu: "Pentol Keju",
    category: "Pentol",
    isBestSeller: true,
    description:
      "Pentol spesial dengan isian keju mozzarella yang meleleh di dalam. Sensasi berasa keju yang lumer di mulut bikin pengen nambah terus!",
    price: "Rp 18.000",
  },
  {
    _id: "7",
    image: "image/pentol.jpeg",
    menu: "Tahu Bakso",
    category: "Tahu",
    isBestSeller: false,
    description:
      "Tahu pong diisi dengan bakso sapi premium. Disajikan dengan kuah kaldu gurih dan taburan bawang goreng renyah.",
    price: "Rp 12.000",
  },
  {
    _id: "8",
    image: "image/pentol.jpeg",
    menu: "Pentol Goreng Crispy",
    category: "Goreng",
    isBestSeller: false,
    description:
      "Pentol dibalut dengan tepung renyah khas Tiga Putra, digoreng garing. Cocok disantap dengan saus sambal atau mayones.",
    price: "Rp 15.000",
  },
];

export default function Home() {
  const [activeTag, setActiveTag] = useState("All Items");
  const tagList = ["All Items", "Pentol", "Tahu", "Siomay", "Goreng"];
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleTag = (tag) => {
    setActiveTag(tag);
  };

  const addToCart = (item) => {
    const itemInCart = cartItems.find((cartItem) => cartItem._id === item._id);
    if (itemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const filteredMenu =
    activeTag === "All Items"
      ? menuItems
      : menuItems.filter((item) => item.category === activeTag);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('image/hero-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Pentol Bakso Tiga Putra
          </h1>
          <p className="text-xl text-center max-w-2xl">
            Kelezatan Tradisional Sejak 2010 • Rahasia Bumbu 3 Generasi
          </p>
          <div className="grid grid-cols-1 sm:flex gap-4 mt-6">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center">
              <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
              Pesan Sekarang
            </button>
            <button className="bg-transparent hover:bg-white hover:text-orange-600 text-white font-bold py-3 px-6 rounded-full border-2 border-white transition duration-300">
              Lihat Menu
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Tentang Kami
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Pentol Bakso Tiga Putra hadir sejak 2010 dengan komitmen menyajikan
            pentol bakso berkualitas premium. Kami menggunakan daging sapi segar
            pilihan dan bumbu rahasia keluarga yang diwariskan dari tiga
            generasi. Setiap gigitan pentol kami menawarkan cita rasa autentik
            yang tak terlupakan.
          </p>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Kategori Menu
          </h2>
          <div className="flex flex-wrap items-center gap-4 p-6 rounded-xl shadow-lg bg-white">
            {tagList.map((tag, index) => (
              <button
                key={index}
                onClick={() => handleTag(tag)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTag === tag
                    ? "bg-orange-600 text-white shadow-md transform -translate-y-1"
                    : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{activeTag}</h2>
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-orange-600 text-xl"
                />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </span>
                )}
              </button>

              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl z-10">
                  <div className="p-4 border-b">
                    <h3 className="font-bold text-gray-800">
                      Keranjang Belanja
                    </h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto p-4">
                    {cartItems.length === 0 ? (
                      <p className="text-gray-500 text-center py-4">
                        Keranjang Anda kosong
                      </p>
                    ) : (
                      cartItems.map((item) => (
                        <div
                          key={item._id}
                          className="flex items-center gap-3 mb-3 pb-3 border-b"
                        >
                          <div className="w-12 h-12 rounded-md overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.menu}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium">{item.menu}</h4>
                            <div className="flex justify-between">
                              <p className="text-xs text-gray-500">
                                {item.quantity} x {item.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="p-4 border-t">
                    <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 rounded-md transition duration-300">
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMenu.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.menu}
                  />
                  {item.isBestSeller && (
                    <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 rounded-br-lg font-medium text-sm flex items-center">
                      <FontAwesomeIcon icon={faFire} className="mr-1" />
                      Bestseller
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.menu}
                    </h3>
                    <span className="font-bold text-orange-600">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FontAwesomeIcon
                            key={star}
                            icon={faStar}
                            className="text-yellow-400 text-xs mr-0.5"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">5.0</span>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-orange-600 hover:bg-orange-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Apa Kata Pelanggan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                  BR
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-slate-700">Budi Raharjo</h4>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FontAwesomeIcon
                        key={star}
                        icon={faStar}
                        className="text-yellow-400 text-xs mr-0.5"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Pentol baksonya juara! Teksturnya pas, bumbunya meresap
                sempurna. Sudah langganan 2 tahun dan nggak pernah kecewa.
                Rekomendasi buat yang suka kuliner street food berkualitas."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                  RN
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-slate-700">Rina Novianti</h4>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FontAwesomeIcon
                        key={star}
                        icon={faStar}
                        className="text-yellow-400 text-xs mr-0.5"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Pentol Keju favoritku! Kejunya meleleh sempurna, bener-bener
                bikin nagih. Tempatnya juga bersih dan pelayanannya ramah. Worth
                it banget dengan harganya."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                  AS
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-slate-700">Agus Santoso</h4>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FontAwesomeIcon
                        key={star}
                        icon={faStar}
                        className="text-yellow-400 text-xs mr-0.5"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Tahu Isi Baksonya the best! Baru nyobain minggu lalu dan
                langsung jadi favorit keluarga. Cocok banget buat ngemil sore
                atau buka puasa. Bakalan jadi langganan nih!"
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Hubungi Kami
            </h2>
            <p className="text-gray-600">
              Pesan untuk acara spesial atau tanya-tanya tentang menu kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-gray-800 mb-4">Lokasi Kami</h3>
              <p className="text-gray-600 mb-2">
                Jl. Dinoyo Alun-ALun II no 36C
              </p>
              <p className="text-gray-600 mb-2">
                Buka Setiap Hari: 10.00 - 21.00 WIB
              </p>
              <p className="text-gray-600 mb-6">Telp: 0858 5282 1544</p>
              <div className="h-40 bg-gray-200 rounded-lg"></div>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-4">Kirim Pesan</h3>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Pesan"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Pentol Bakso Tiga Putra
              </h3>
              <p className="text-gray-400">
                Kelezatan tradisional dengan kualitas premium sejak 2010.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Menu</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Pentol
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Tahu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Siomay
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Goreng
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  Jl. Dinoyo Alun-Alun II no 36C
                </li>
                <li className="text-gray-400">Telp: 085852821544</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Jam Operasional</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Senin - Jumat: 10.00 - 21.00</li>
                <li className="text-gray-400">Sabtu - Minggu: 09.00 - 22.00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Pentol Bakso Tiga Putra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
