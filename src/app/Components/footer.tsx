import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mb-0 bg-[#0d1e1e] text-white py-8 px-6 rounded-tr-[40px] rounded-tl-[40px] shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <Image src="/Logo.png" alt="" width={124} height={67} />
          </div>

          <div className="flex items-center md:space-x-4 space-x-10 space-y-5 md:space-y-0">
            <Link
              href="#"
              className="w-8 h-8 rounded-full flex items-center justify-center"
              aria-label="Telegram"
            >
              <Image src="/Telegram.svg" alt="" width={32} height={32} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full flex items-center justify-center"
              aria-label="Reddit"
            >
              <Image src="/Reddit.svg" alt="" width={32} height={32} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full flex items-center justify-center"
              aria-label="Twitter"
            >
              <Image src="/X-Twitter.svg" alt="" width={32} height={32} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full flex items-center justify-center"
              aria-label="Discord"
            >
              <Image src="Discord.svg" alt="" width={32} height={32} />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-400 border-t border-slate-700 pt-6">
          <div>©copyright2025</div>
          <div>Designed by Zyrick</div>
        </div>
      </div>
    </footer>
  );
}
