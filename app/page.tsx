import Image from "next/image";
import LogoIcon from "./components/logo-icon";
import footer from "@/public/footer.png";
import footerMobile from "@/public/footer-mobile.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#FEFCF9] h-screen flex justify-center items-center">
      <Image
        src={footer}
        alt="footer"
        className="absolute bottom-0 max-sm:hidden"
      />
      <Image
        src={footerMobile}
        alt="footer"
        className="absolute bottom-0 sm:hidden _w-full"
      />
      <div className="flex items-center flex-col max-w-88.25 sm:max-w-149 z-10 w-full text-center gap-8">
        <LogoIcon size="56" className="max-sm:hidden" />
        <LogoIcon size="48" className="sm:hidden" />
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-[#212121] text-[2rem]/10 sm:text-[56px]/16 font-sans-serif">
            Guest lists & invitations, made effortless
          </h1>
          <p className="text-[#575554] leading-6 sm:text-xl/7 -tracking-[0.02em] font-inter">
            Collect guest details, send beautiful invitations, and track
            responses — all in one calm, organized place.
          </p>
          <Link
            href={"https://invia-rosy.vercel.app/auth/sign-up"}
            className="text-white bg-[#479FFD] cursor-pointer w-max text-xl/7 active:scale-95 transition-transform -tracking-[0.02em] py-3 sm:py-4 px-5 sm:px-6 rounded-[99px] font-medium"
          >
            Try for free!
          </Link>
        </div>
      </div>
    </div>
  );
}
