import Link from 'next/link';

const ScholarshipApplyNowButton = () => {
    return (
        <Link href="/apply">
            <a className="w-full relative block h-[141px] text-center text-[32px] text-white font-roboto">
                <div className="absolute w-[75.68%] top-[0%] left-[24.32%] text-[15px] leading-[150%] font-medium text-gray text-left inline-block">Click here to apply for the scholarship</div>
                <div className="absolute h-[70.92%] w-[83.05%] top-[29.08%] right-[16.95%] bottom-[0%] left-[0%]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-royalblue" />
                    <div className="absolute h-[57.8%] w-[92%] top-[29.22%] left-[4%] font-semibold inline-block">APPLY NOW</div>
                </div>
            </a>
        </Link>
    );
};

export default ScholarshipApplyNowButton;
