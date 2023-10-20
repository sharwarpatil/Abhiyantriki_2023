import { Component, For, createMemo, createSignal } from "solid-js";
import { EventInfo, events } from "./data";
import { TbArrowLeft, TbArrowRight } from "solid-icons/tb";
import { getKeys } from "../../util";
import { Tab, Tabs } from "../next/Tabs";

const EVENTS_PER_VIEW = 3;

const Events: Component = () => {
  const [selected, setSelected] = createSignal("Tech");
  const [selectedPage, setSelectedPage] = createSignal(0);

  const paginateEvents = (events: EventInfo[]) => {
    const chunks: EventInfo[][] = [];
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

  let selectedEvents = createMemo(() => events[selected()]);

  return (
    <div
      id="events"
      class="hide align-midd flex min-h-screen flex-col items-center justify-center gap-5"
    >
      <Tabs>
        <For each={getKeys(events)}>
          {(name) => (
            <Tab
              label={name}
              selected={[selected, setSelected]}
              onSelect={() => setSelectedPage(0)}
            />
          )}
        </For>
      </Tabs>

      <div class="flex items-center justify-center gap-5 ">
        <button
          class="duration-500 hover:text-slate-500"
          onClick={prevButtonOnClick}
        >
          <TbArrowLeft size={30} />
        </button>

        <div class=" group mt-12 flex h-[90vh] w-[73vw] content-center items-start justify-start gap-24 overflow-auto px-4  py-5 md:w-[80vw]  md:justify-center md:gap-5">
          {(() => {
            const pages = paginateEvents(selectedEvents());
            // If the currently selected page is the first page and the previous button is clicked (negative index), change the selected page to the last page.
            if (selectedPage() === -1) {
              setSelectedPage(pages.length - 1);
            }
            // If the currently selected page is the last page and the next button is clicked, change the selected page to the first page.
            if (selectedPage() === pages.length) {
              setSelectedPage(0);
            }

            return paginateEvents(selectedEvents())[selectedPage()].map(
              ({
                title,
                description,
                entryFee,
                prize,
                members,
                contactNo,
                imageSlug,
              }) => (
                <div class="mt-10 h-[32rem] w-[60vw] rounded-3xl bg-slate-700 p-3 duration-500 hover:scale-110 hover:bg-slate-500 hover:!opacity-100 hover:!blur-0 group-hover:opacity-50 group-hover:blur md:w-[20vw]">
                  <p>
                    <img
                      src={imageSlug}
                      class="m-auto -mt-11 w-24 content-center self-center"
                    ></img>
                  </p>
                  <h1 class="items-center text-center text-2xl font-bold">
                    {title}
                  </h1>
                  <div class="no-scrollbar h-[110px] overflow-auto overflow-y-scroll">
                    <p class="mb-2 mt-5 items-center text-center text-[15px]">
                      {description}
                    </p>
                  </div>
                  <div class=" flex flex-col items-center justify-center gap-2">
                    <div class="flex h-10 w-60 items-center justify-center text-center text-sm">
                      <img
                        class=" h-12 items-center gap-6"
                        src="entry.png"
                      ></img>
                      {entryFee}
                    </div>
                    <div class=" flex h-10 w-60 justify-center text-center  text-sm ">
                      <img class="h-8 gap-6" src="prize.png" />
                      {prize}
                    </div>
                    <div class=" flex h-10 w-60 justify-center text-center  text-sm">
                      <img class="h-5 gap-6" src="member.png" />
                      {members}
                    </div>
                    <div class="flex h-10 w-60 justify-center text-center  text-sm">
                      <img class="h-6 gap-6" src="call.png" />
                      {contactNo}
                    </div>
                    <div>
                      <a
                        href="#_"
                        class="group relative inline-flex h-[32px] items-center justify-center overflow-hidden rounded-full p-4 px-5 py-3 font-medium text-green-600 shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-white"
                      >
                        <span class="absolute inset-0 h-full w-full bg-gradient-to-br from-green-600 via-green-600 to-green-700"></span>
                        <span class="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-green-500 opacity-30 transition duration-500 group-hover:rotate-90"></span>
                        <span class="relative text-white">Register</span>
                      </a>
                    </div>
                  </div>
                </div>
              ),
            );
          })()}
        </div>

        <button
          class="duration-500 hover:text-slate-500"
          onClick={nextButtonOnClick}
        >
          <TbArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Events;
