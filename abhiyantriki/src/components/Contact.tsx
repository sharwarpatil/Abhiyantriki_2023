import { Component } from "solid-js";

const Contact: Component = () => {
  return (
    <footer class="mt-2">
      <div class=" flex items-center justify-center align-middle ">
        <div class=" md:bg gap-28 md:flex md:items-center md:justify-center">
          <div class=" mt-6 h-[312px] border-2 border-red-600 p-3 md:ml-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.787265412665!2d72.89808588654978!3d19.07308871368872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c627a20bcaa9%3A0xb2fd3bcfeac0052a!2sK.+J.+Somaiya+College+of+Engineering!5e0!3m2!1sen!2sin!4v1534429674930"
              width="280"
              height="280"
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>

          <div class="gap-12 p-2 text-center">
            <div>
              <h3 class=" mt-8 text-4xl text-red-600">Reach Us</h3>
              <div class="dark:bg-white-700 m-auto my-4 h-1 w-10/12 rounded border-0 bg-gray-100 "></div>
            </div>
            <ul class=" text-[15px]">
              <li class=" text-xl ">
                <a href="#">KJSCE Students’ Council 23-24</a>
              </li>
              <li class="mt-2">
                <a
                  href="mailto:kjsceabhiyantriki@somaiya.edu"
                  class=" hover:text-zinc-500"
                >
                  kjsceabhiyantriki@somaiya.edu
                </a>
              </li>
              <li class=" mt-8">
                <a href="#" class="text-xl">
                  Public Relations
                </a>
              </li>
              <li class="mt-2">
                <a class=" hover:text-zinc-500" href="tel:+91-982-036-9740">
                  <span>Fiyoni Paradia </span>
                  +91 9820369750
                </a>
              </li>
              <li class="mt-8 text-xl">
                <a href="#">Marketing</a>
              </li>
              <li class="mt-2">
                <a class=" hover:text-zinc-500" href="tel:+91-730-487-3998">
                  <span>Anwesh Bharadwaj </span>
                  +91 7304873998
                </a>
              </li>
              <li class="mt-2">
                <a class=" hover:text-zinc-500" href="tel:+91-810-892-8819">
                  <span>Smit Malde </span>
                  +91 8108928819
                </a>
              </li>
            </ul>
          </div>

          <div class=" text-center">
            <h3 class="text-3xl text-red-600">Follow Us On</h3>
            <div class="dark:bg-white-700 m-auto my-4 h-1 w-10/12 rounded border-0 bg-gray-100 "></div>
          </div>
          <div class=" flex w-0">
            <a
              class=" hover:text-red-500"
              href=" https://www.instagram.com/kjscelive/"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              class="hover:text-red-500"
              href="https://www.facebook.com/kjsceabhiyantriki/?ref=br_rs"
            >
              <i class="fab fa-facebook"></i>
            </a>
            <a
              class="hover:text-red-500"
              href=" https://twitter.com/kjsabhiyantriki?lang=en"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              class="hover:text-red-500"
              href="https://www.youtube.com/channel/UC7Z32X4uNZ8c31NteK3065g"
            >
              <i class="fa fa-youtube-play"></i>
            </a>
          </div>
        </div>
      </div>

      <div class=" dark:bg-white-700 m-auto my-8 h-1 w-10/12 rounded border-0 bg-gray-100 "></div>
    </footer>
  );
};

export default Contact;
