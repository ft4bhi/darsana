import { memo } from "react";

const featured = memo(() => {
  return (
    <section className="flex flex-row items-start justify-start pt-0 pb-16 pr-9 pl-[27px] box-border max-w-full shrink-0">
      <div className="flex flex-row items-end justify-center gap-[49.6px] max-w-full mq800:gap-[25px] mq1350:flex-wrap">
        <img
          className="h-[105px] w-6 relative overflow-hidden shrink-0 object-contain z-[1]"
          alt=""
          src="/article-column@2x.png"
        />
        <div className="h-[147px] w-[265.1px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-0.5 box-border z-[1]">
          <div className="self-stretch flex-1 flex flex-row items-center justify-end py-0 px-0">
            <img
              className="h-[98px] w-[208.3px] relative object-cover"
              alt=""
              src="/oip-1@2x.png"
            />
            <div className="self-stretch w-[265.1px] rounded-8xs bg-www-equalopp-org-1349x593-default-nero shadow-[0px_0px_14px_rgba(0,_0,_0,_0.16)] overflow-hidden shrink-0 flex flex-row items-center justify-center py-5 px-[75px] box-border z-[1] ml-[-145px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="self-stretch flex-1" />
            </div>
          </div>
        </div>
        <div className="w-[266px] rounded-8xs bg-www-equalopp-org-1349x593-default-nero shadow-[0px_0px_14px_rgba(0,_0,_0,_0.16)] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[15.5px] px-[64.2px] box-border z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="h-[114px] flex-1 max-w-full overflow-hidden object-cover"
            alt=""
            src="/malayala-0-1@2x.png"
          />
        </div>
        <div className="h-[147px] w-[264.9px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 px-[11.1px] box-border gap-[468.1px] z-[1] mq800:gap-[117px] mq1125:gap-[234px]">
          <img
            className="self-stretch w-[241.5px] relative max-h-full object-contain min-h-[145px] shrink-0 [debug_commit:1de1738]"
            loading="lazy"
            alt=""
            src="/1113957-1@2x.png"
          />
          <div className="self-stretch w-[264.9px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <div className="self-stretch flex-1 rounded-8xs bg-www-equalopp-org-1349x593-default-nero shadow-[0px_0px_14px_rgba(0,_0,_0,_0.16)] overflow-hidden shrink-0 [debug_commit:1de1738]" />
          </div>
        </div>
        <div className="h-[145px] w-[265px] rounded-8xs bg-www-equalopp-org-1349x593-default-nero overflow-hidden shrink-0 flex flex-col items-center justify-center bg-[url('/empty-column@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
          <div className="self-stretch h-[145px] rounded-8xs bg-www-equalopp-org-1349x593-default-nero shadow-[0px_0px_14px_rgba(0,_0,_0,_0.16)] overflow-hidden shrink-0 hidden" />
        </div>
        <img
          className="h-[105px] w-[25px] relative overflow-hidden shrink-0 object-contain"
          alt=""
          src="/article-column1@2x.png"
        />
      </div>
    </section>
  );
});

export default featured;
