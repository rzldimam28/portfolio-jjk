const Hero = () => {
  return (
    <div>
      <section className="flex w-full flex-wrap my-12 justify-center">
        <div className="w-2/3 mb-8 m-auto lg:w-1/2">
          <img
            src="src/assets/prison-realm-2.png"
            alt="prison-realm"
            className="lg:ml-36 lg:w-2/3"
          />
          {/* to do list: add btn */}
          {/* <p className="font-comic text-center w-full">#Salama_laleng_kaburu</p> */}
        </div>
        <div className="w-2/3 m-auto text-center lg:text-left lg:w-1/2 lg:pr-10 xl:pr-32 lg:pl-12 ">
          <h1 className="font-jjk text-5xl font-bold bg-gradient-to-r from-purple-900 to-black text-transparent bg-clip-text lg:text-8xl">
            UNLIMITED
            <span className="font-jetbrains text-sm">public static</span> <br />
            VOID
            <span className="font-jetbrains text-sm">main(String args[])</span>
          </h1>
          <h2 className="font-comic text-xl bg-gradient-to-r from-purple-900 to-black text-white text-center p-1 mt-3">
            Imam Rizaldi | Software Engineer
          </h2>
          <p className="mt-3 font-comic text-sm">
            I am a Back End Developer with over a year of experience in the
            technology industry. Currently, I am focused on deepening my
            knowledge in Front End Development and Cloud Engineering as a
            growing Software Engineer. Please click the icon in the navbar to
            contact me.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
