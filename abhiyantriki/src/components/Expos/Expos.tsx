import { Component, createMemo, createSignal } from "solid-js";
import { ExpoInfo, expos as data } from "./data";
import { TbArrowLeft, TbArrowRight } from "solid-icons/tb";
import { Tab, Tabs } from "../next/Tabs";
import { Dynamic } from "solid-js/web";

const EVENTS_PER_VIEW = 3;

const TechExpo: Component = () => {
  return (
    <div class="mt-5 animate-fade-in">
      <h1 class="text-2xl font-bold tracking-widest md:hidden">TECH EXPO</h1>
      <div class="relative hidden md:block">
        <img class="relative" src="components/Expos/banner.png" alt="banner" />
        <img
          class="absolute left-0 top-2"
          src="components/Expos/overlay.png"
          alt="overlay"
        />
        <img
          class="absolute left-96 top-2"
          src="components/Expos/tech/satellite.png"
          alt="satellite"
        />

        <h1 class="absolute left-20 top-16 text-8xl font-extrabold tracking-wider opacity-70">
          <span class="block">TECH</span>
          <span class="block">EXPO</span>
        </h1>

        <p class="absolute left-[50rem] top-28 w-[30rem] text-sm opacity-70">
          Tech Expo is a unique exhibition and the most anticipated event at
          Abhiyantriki. With innovative technologies from all over the country,
          the Tech Expo contains exhibits from well-known organisations namely
          DRDO, ISRO, IMD, DAE and innovations ranging from speed-defying drones
          to humanoid robots with intellect on par with a human being.
        </p>
      </div>
    </div>
  );
};

const InternshipExpo: Component = () => {
  return (
    <div class="mt-5 animate-fade-in">
      <h1 class="text-2xl font-bold tracking-widest md:hidden">
        INTERNSHIP EXPO
      </h1>
      <div class="relative hidden md:block">
        <img class="relative" src="components/Expos/banner.png" alt="banner" />
        <img
          class="absolute left-0 top-2"
          src="components/Expos/overlay.png"
          alt="overlay"
        />

        <h1 class="absolute left-[40rem] top-16 text-right text-8xl font-extrabold tracking-wider opacity-70">
          <span class="block">INTERNSHIP</span>
          <span class="block">EXPO</span>
        </h1>

        <p class="absolute left-10 top-56 w-[50rem] text-sm opacity-70">
          Internship expo is one of the major events at Abhiyantriki. The main
          objective of this expo is to provide students with a diverse range of
          internship opportunities. These internships help the students acquaint
          with a lot of new skills and give them the required work experience.
          Internships play an essential role in magnifying the morale of the
          students.
        </p>
      </div>
    </div>
  );
};

const SpeakersExpo: Component = () => {
  return (
    <div class="mt-5 animate-fade-in">
      <h1 class="text-2xl font-bold tracking-widest md:hidden">TECH EXPO</h1>
      <div class="relative hidden md:block">
        <img class="relative" src="components/Expos/banner.png" alt="banner" />
        <img
          class="absolute left-0 top-2"
          src="components/Expos/overlay.png"
          alt="overlay"
        />
        <img
          class="absolute left-[38rem] top-32"
          src="components/Expos/speakers/abhiyantriki.png"
          alt="logo"
        />

        <h1 class="absolute left-20 top-32 text-6xl font-extrabold tracking-wider opacity-70">
          <span class="block">SPEAKERS</span>
        </h1>

        <p class="absolute left-[50rem] top-28 w-[30rem] text-sm opacity-70">
          The Speaker Sessions held during Abhiyantriki are bound to leave one
          in awe and inspired. It provides a platform for many great
          personalities to share their thoughts and views with the audience
          about their experiences in their fields, be it technical, financial,
          management, administration etc. Eminent figures including Dr A P J
          Abdul Kalam, Dr Raghuram Rajan, His Holiness The Dalai Lama, Zakir
          Hussain, Dr Jayant Narlikar and many others have honoured us at
          Abhiyantriki.
        </p>
      </div>
    </div>
  );
};

const PanelExpo: Component = () => {
  return <div></div>;
};

const expos = {
  Tech: TechExpo,
  Internship: InternshipExpo,
  Speakers: SpeakersExpo,
  Panel: PanelExpo,
};

const Expos: Component = () => {
  const [selected, setSelected] = createSignal<keyof typeof expos>("Tech");
  const [selectedPage, setSelectedPage] = createSignal(0);

  const paginateExpos = (events: ExpoInfo[]) => {
    const chunks: ExpoInfo[][] = [];
    for (let i = 0; i < events.length; i += EVENTS_PER_VIEW) {
      chunks.push(events.slice(i, i + EVENTS_PER_VIEW));
    }

    return chunks;
  };

  const prevButtonOnClick = () => {
    setSelectedPage((page) => page - 1);
  };

  const nextButtonOnClick = () => {
    setSelectedPage((page) => page + 1);
  };

  let selectedExpos = createMemo(() => data[selected()]);

  return (
    <div
      id="expos"
      class="hide flex min-h-screen flex-col items-center justify-center gap-5"
    >
      <Tabs>
        {Object.keys(expos).map((name) => (
          <Tab label={name} selected={[selected, setSelected as any]} />
        ))}
      </Tabs>

      <Dynamic component={expos[selected() as keyof typeof expos]} />

      <div class="flex items-center justify-center gap-5">
        <button
          class="duration-200 hover:text-slate-500"
          onClick={prevButtonOnClick}
        >
          <TbArrowLeft size={30} />
        </button>

        {(() => {
          const pages = paginateExpos(selectedExpos());
          // If the currently selected page is the first page and the previous button is clicked (negative index), change the selected page to the last page.
          if (selectedPage() === -1) {
            setSelectedPage(pages.length - 1);
          }
          // If the currently selected page is the last page and the next button is clicked, change the selected page to the first page.
          if (selectedPage() === pages.length) {
            setSelectedPage(0);
          }

          return paginateExpos(selectedExpos())[selectedPage()].map(
            ({ title, description, imageSlug }) => (
              <div class="mt-20 h-[30rem] w-80 rounded-3xl bg-slate-950 p-3 text-center duration-500 hover:scale-110 hover:bg-slate-700 hover:!opacity-100 hover:!blur-0 group-hover:opacity-50 group-hover:blur">
                <img
                  src={imageSlug}
                  class="m-auto -mt-20 w-96 content-center self-center"
                ></img>

                <h1 class="m-auto -mt-10 p-5 text-center text-4xl font-bold">
                  {title}
                </h1>
                <p class="m-auto mt-5 text-center text-xs ">{description}</p>

                <button class="mt-10 rounded-full bg-gray-600 p-2 text-center uppercase text-white duration-200 hover:bg-gray-800">
                  View More
                </button>
              </div>
            ),
          );
        })()}

        <button
          class="duration-200 hover:text-slate-500"
          onClick={nextButtonOnClick}
        >
          <TbArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Expos;
