export default function MoviesCard() {
  return (
    <>
      <div className="py-5 mx-5 mb-8 mt-16 lg:mt-24 lg:mx-20">
        <button className="text-white border-b-[1px] border-[#565f7e] pb-2 text-2xl lg:text-4xl font-bold">
          Now showing
        </button>
        <button className="text-[#8b93b0] text-2xl font-bold px-5 lg:text-4xl">
          Coming soon
        </button>
      </div>

      <div className="mx-5 lg:mx-20">
        <div>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/fa8e/3df2/bb6b2ca1d3939f5479e79f0e95b8db3a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pm5l3E9vcfOyErP1cY8eFGtQuEwHXYo7zlPFtskpVNL2cT4mw6m8DPrGdWf2pDFAMDKwi7YoMKzzBiikWEE5J0T-2L9YAwVA3JThgjhEpr~o4yeWZBD15sKMaWkeeGREZJA6aP8HCM4uzVtbT86McLKKAO4C8JhshdE1amdEiXkwnr9jOs4EnDY6iP0w~wTcEuO5EvDwojaAkXMoHZcovnsGsbA1MKa7Cy9KoA5tBxUP0TiEDaRNmUsDZ4oyQmFN6DQ3V1uInLQ0qq1KG4cyf8grqotwEw00Rn87Aqn2iYvpvlWIErlx3Ye7njjcJy0ROrNl7xiuxhJCHBtQGUFyuA__"
              className="Django Unchained rounded-lg"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <span className="text-[#8b93b0] text-xl">24 Jun 2024</span>
          <div className="flex items-center">
            <img src="/img/Star_fill.png" className="Rating-Star w-4 h-4" />
            <span className="text-[#8b93b0] pl-2 text-xl">4.6</span>
          </div>
        </div>

        <div>
          <p className="text-white text-2xl font-bold pt-1">Django Unchained</p>
        </div>

        <div className="flex gap-2 pt-3">
          <button className="text-[#8b93b0] p-2 px-4 bg-[#2a304f] rounded-md">
            Comedy
          </button>
          <button className="text-[#8b93b0] p-2 px-4 bg-[#2a304f] rounded-md">
            Drama
          </button>
          <button className="text-[#c8cedd] p-2 px-4 bg-[#2a304f] rounded-md">
            EN
          </button>
        </div>
      </div>
    </>
  );
}
