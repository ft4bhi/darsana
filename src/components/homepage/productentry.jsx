

const ProductHomepage = () => {
  return (
      <section className="w-full relative overflow-hidden flex flex-col items-end justify-center text-left text-[72px] text-gray font-poppins">
          <div className="w-[1392px] relative h-[1007px] overflow-hidden shrink-0">
              <div className="absolute top-[58px] left-[0px] w-[526px] overflow-hidden flex flex-col items-end justify-center">
                  <div className="[backdrop-filter:blur(7px)] flex flex-col items-start justify-start">
                      <h1 className="m-0 w-[453px] relative text-inherit font-bold font-inherit inline-block">Discover the Magic of Locally Sourced Treasures!</h1>
                  </div>
              </div>
              <div className="absolute top-[623px] left-[0px] w-[333px] overflow-hidden flex flex-col items-end justify-center text-[24px] text-lavenderblush">
                  <div className="rounded-[36px] bg-steelblue overflow-hidden flex flex-row items-start justify-start py-6 px-12">
                      <h3 className="m-0 relative text-inherit leading-[18px] font-bold font-inherit">Explore</h3>
                  </div>
              </div>
              <div className="absolute top-[0px] left-[0px] w-[1322px] overflow-hidden flex flex-col items-end justify-center">
                  <div className="w-[724px] relative h-[656px]">
                      <img className="absolute top-[306px] left-[387px] rounded-3xl w-[337px] h-[350px] object-cover" alt="" src="product image home plant 3.png" />
                      <img className="absolute top-[306px] left-[9px] rounded-3xl w-[353px] h-[350px] object-cover" alt="" src="product home 2 flower.png" />
                      <img className="absolute top-[0px] left-[0px] rounded-3xl w-[724px] h-[259px] object-cover" alt="" src="product home 1.png" />
                  </div>
              </div>
          </div>
      </section>);
};

export default ProductHomepage;
