import { Component } from "solid-js";

const Loader: Component = () => {
  return (
    <div class="flex h-screen  w-screen  justify-center">
      <img src="loader.gif" alt="Loading..." />
    </div>
  );
};

export default Loader;
