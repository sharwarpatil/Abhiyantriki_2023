import { Component } from "solid-js";

const Home: Component = () => {
  return (
    <div id="home" class="hide flex min-h-screen items-center justify-center">
      <div class="m-auto h-[70vh] w-[90vw] items-center md:h-3/4 md:w-3/4 ">
        <img
          class=" h-[70vh] w-[90vw] md:h-3/4 md:pt-28"
          src="background.png"
          alt="image"
        />
        <div class="show m-auto -mt-10 flex -translate-x-2/4 -translate-y-[50vh] flex-col items-center justify-center gap-[50px] font-black md:mt-1 md:hidden md:-translate-y-2/4">
          <div>
            <img src="abhiyantriki2.png" alt="" />
          </div>
          <div class="hide">
            <img src="abhiyantriki3.png" alt="" />
          </div>
        </div>
        <div
          id="txt"
          class="show m-auto -mt-10 hidden -translate-x-2/4 -translate-y-[300px] flex-col items-center justify-center gap-[150px] text-center text-[40px] font-black md:mt-1 md:block md:-translate-y-[30vh] md:gap-[50px] md:text-[120px]"
        >
          <div
            id="txt1"
            class=" items-center justify-center border-slate-50 align-middle text-slate-900 opacity-50 outline-4  "
          >
            abhiyantriki
          </div>
          <div class="hide  -m-12">abhiyantriki</div>
          <div
            id="txt2"
            class="items-center justify-center border-slate-50 align-middle text-slate-900 opacity-50 outline-4"
          >
            abhiyantriki
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
