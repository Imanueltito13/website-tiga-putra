import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faQrcode,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-[#F2F2F2] py-4 px-12 ">
      <div>
        <div className="text-[#0C0530] text-lg font-semibold">
          Pentol Tiga Putra
        </div>
        <div className="text-[#0C0530] font-normal text-xs">
          Jl. Dinoyo Alun-Alun II No 36C
        </div>
      </div>
      <div className="text-[#0C0530] text-sm  font-normal border rounded-md px-3 py-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-fw" /> Search
        Product or Items <FontAwesomeIcon icon={faQrcode} className="fa-fw" />
      </div>
    </div>
  );
}
