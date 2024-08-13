import { memo } from "react";
import Link from "next/link";


const Footer = memo(() => {
  return (
    <footer className="w-[1387px] bg-www-equalopp-org-1349x593-default-nero flex flex-row items-start justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full shrink-0 gap-[20px] text-left text-base text-black font-h3 mq1350:flex-wrap mq1350:pl-5 mq1350:pr-5 mq1350:box-border">
      <div className="h-[88px] w-[1387px] relative bg-www-equalopp-org-1349x593-default-nero hidden max-w-full" />
      <div className="h-11 w-[361px] flex flex-col items-start justify-start max-w-full">
        <div className="w-[138.5px] h-11 relative z-[1] flex items-center justify-center">
          <img
            className="w-full h-full z-[1] object-contain absolute left-[4px] top-[0px] [transform:scale(1.364)]"
            alt="Darsana Logo"
            src="/divlogo1@2x.png"
          />
        </div>
      </div>
      <div className="w-[582.5px] flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq800:flex-wrap">
          <span className="relative inline-block min-w-[77px] cursor-pointer">
            <Link href="/contact-us-final">Contact us</Link>
          </span>
          <span className="relative inline-block min-w-[64px]">
            <Link href="../aboutus">About Us</Link>
          </span>
          <span className="relative inline-block min-w-[69px] cursor-pointer">
            <Link href="/initiatives">Initiatives</Link>
          </span>
          <span className="relative inline-block min-w-[65px] cursor-pointer">
            <Link href="/chapters">Chapters</Link>
          </span>
          <span className="relative inline-block min-w-[99px]">
            Eye magazine
          </span>
        </div>
      </div>
      <div className="w-[174px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-[13.1px] h-[22px] relative z-[1]"
              alt="Social Icon"
              src="/social.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-6 h-[22px] relative object-cover z-[1]"
              alt="Social Icon"
              src="/social1@2x.png"
            />
          </div>
          <img
            className="self-stretch w-[33.8px] relative max-h-full overflow-hidden shrink-0 min-h-[24px] z-[1]"
            alt="Social Icon"
            src="/social11.svg"
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-[25.1px] h-[22px] relative object-cover z-[1]"
              alt="Social Icon"
              src="/social2@2x.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
