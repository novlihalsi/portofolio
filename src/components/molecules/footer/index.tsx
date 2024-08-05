import routes from "app/constants/routes";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Footer() {
  return (
    <>
      <footer className="w-full text-center py-4 text-sm text-gray-400 border-t border-gray-900 bg-black">
        <b>2024</b> — Built by Ahmad Noveliansyah
      </footer>
    </>
  );
}
