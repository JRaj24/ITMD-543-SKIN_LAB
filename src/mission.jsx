export default function Mission() {
  return (
    <div id="About">
      <div className="bg-[#f2c48b]  flex flex-col justify-around  md:flex-row">
        <div>
          <h1 className="text-4xl mt-16 md:text-7xl text-center font-normal uppercase text-black md:max-w-xl italic mx-auto">
            More things that
          </h1>
          <h1 className="text-4xl  md:text-7xl text-center uppercase text-[#594024] md:max-w-xl font-semibold mx-auto">
            you can fix.
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center mt-8 md:mt-20">
          <p className="max-w-sm text-center md:text-left font-medium text-lg mb-10">
          Our Mission: Prevent the production of ONE BILLION POUNDS of plastic.
          Healthy self-care routines shouldn’t harm our planet.
          By making thoughtful choices in our daily habits,
          we can create a lasting and significant positive impact on the environment.

          
          </p>

          
        </div>
      </div>
      <img src="/images/footer.png" alt="" />
    </div>
  );
}
