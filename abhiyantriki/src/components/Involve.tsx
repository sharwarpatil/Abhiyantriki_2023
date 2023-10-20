import { Component } from "solid-js";

const Involve: Component = () => {
  return (
    <div
      id="getinvolved"
      class="hide flex min-h-screen flex-col items-center justify-center gap-10"
    >
      <div class="flex flex-col items-center justify-center gap-20 p-20 text-center ">
        <div class="mx-auto text-2xl">
          Do you know someone with the potential to build something that pawns
          over the technology being displayed in Abhiyantriki and will leave the
          audience awestruck? If yes, feel free to add their details in the form
          below and we’ll reach out to them!
        </div>
        <div>
          <a
            href="#_"
            class=" group relative flex items-center rounded-lg px-6 py-3 text-center font-bold text-white "
          >
            <span class="0 ease absolute inset-0 h-full w-full -translate-x-1 -translate-y-1 transform bg-purple-800 opacity-80 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 md:h-full md:w-full"></span>
            <span class="ease absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-pink-800 opacity-80 mix-blend-screen transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 md:h-full md:w-full"></span>
            <span class="relative items-center justify-center text-center text-sm">
              NOMINATE AN EXHIBITOR
            </span>
          </a>
        </div>
        <div class="mx-auto text-2xl ">
          Sponsors and Partners are a key component that helps make Abhiyantriki
          a fest worthy of all the praise and acclaim it has been garnered over
          the ages. Along with monetary support, you can feel free to help us
          out in any other way possible. Fill out the form below to get in touch
          with us:
        </div>
        <div>
          <a
            href="#_"
            class="group relative flex rounded-lg px-6 py-3 font-bold text-white"
          >
            <span class="ease absolute inset-0 h-full w-full -translate-x-1 -translate-y-1 transform items-center justify-center bg-purple-800 opacity-80 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 "></span>
            <span class="ease absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform items-center justify-center bg-pink-800 opacity-80 mix-blend-screen transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 md:h-full md:w-full"></span>
            <span class="relative items-center justify-center">
              PARTNER WITH US
            </span>
          </a>
        </div>
        {/* <div class="bg-blue-500 text-xl w-1/4  hover:bg-blue-700 text-white font-bold py-2 rounded-full">
          <a href="#">PARTNER WITH US</a>
        </div> */}
      </div>
    </div>
  );
};

export default Involve;
