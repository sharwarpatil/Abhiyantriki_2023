import { Component, For, Setter, createSignal } from "solid-js";
import { getKeys } from "../util";
import { Tab, Tabs } from "./next/Tabs";

const YEARS = {
  "2019": [
    "Accessories_Partner",
    "Audio_Partner",
    "Banking_Partner",
    "Beverages_Partner",
    "Bike_Expo_Partner",
    "Cab_Partner",
    "Codebase_Partner",
    "Coffee_Partner",
    "Communications_Partner",
    "Crackathon_Partner",
    "Crunch_Partner",
    "Entertainment_Partner",
    "Equipment_Partner",
    "Experience_Partner",
    "Gadget_Partner",
    "Gifting_Partner",
    "Hindi_Print_Media_Partner",
    "Holiday_Partner",
    "Iced_Tea_Partner",
    "Informals_Partner",
    "Insurance_Print_Media_Partner",
    "Laser_Tag_Partner",
    "Marathi_Print_Media_Partner",
    "Muching_Partner",
    "Music_Partner",
    "Online_Media_Partner_1",
    "Online_Media_Partner_10",
    "Online_Media_Partner_11",
    "Online_Media_Partner_12",
    "Online_Media_Partner_13",
    "Online_Media_Partner_2",
    "Online_Media_Partner_3",
    "Online_Media_Partner_4",
    "Online_Media_Partner_5",
    "Online_Media_Partner_6",
    "Online_Media_Partner_7",
    "Online_Media_Partner_8",
    "Online_Media_Partner_9",
    "Other_Partner_1",
    "Other_Partner_2",
    "Other_Partner_3",
    "Other_Partner_4",
    "Other_Partner_5",
    "Photography_Gear_Partner",
    "Productivity_Partner",
    "SMS_Partner",
    "VR_Cricket_Partner",
    "Wafer_Partner",
  ],
  "2020": [
    "Brought_To_You_By",
    "Career_Partner",
    "Delivery_Partner",
    "Doodle_Partner",
    "Enigma_Partner",
    "Esports_Partner",
    "Gifting_Partner",
    "Hindi_Print_Media_Partner",
    "Instagram_Filter_Partner",
    "Knowledge_Partner_1",
    "Knowledge_Partner_2",
    "Knowledge_Partner_3",
    "Knowledge_Partner_4",
    "Marathi_Print_Media_Partner",
    "Online_Course_Partner",
    "Online_Education_Partner",
    "Pixel_Partner",
    "Powered_By",
    "Radio_Partner",
    "Robotics_Title_Partner",
    "Social_Media_Partner",
    "Sustainable_Gift_Partner",
    "Tech_Partner_1",
    "Tech_Partner_2",
    "Tech_Wizard_Partner",
    "Technology_Partner",
    "Travel_Partner",
  ],
  "2021": [
    "Title_Sponsor",
    "Programming_Partner",
    "Coding_Partner",
    "Codeclan_Partner",
    "Community_Partner",

    "Accessories_Partner",
    "Hindi_Print_Media_Partner",
    "Consulting_Partner",
    "Consulting_Partner_2",
    "Education_Partner",
    "Other_Partner",
    "Other_Partner_2",
    "Savings_Partner",
    "Tech_Accessories_Partner",
    "Marathi_Print_Media_Partner",
    "Opr_Partner",
    "Online_Media_Partner_",
    "Online_Media_Partner_2",
    "Online_Media_Partner_3",
    "Online_Media_Partner_4",
    "Online_Media_Partner_5",
    "Online_Media_Partner_6",
    "Online_Media_Partner_7",
    "Online_Media_Partner_8",
    "Online_Media_Partner_9",
    "Online_Media_Partner_10",
    "Online_Media_Partner_11",
  ],
} as const;

const Sponsors: Component = () => {
  const [selected, setSelected] = createSignal<keyof typeof YEARS>("2019");

  return (
    <div
      id="sponsors"
      class="hide flex min-h-screen flex-col items-center justify-center gap-10"
    >
      <div class="flex items-center">
        <Tabs>
          <For each={getKeys(YEARS)}>
            {(year) => (
              <Tab
                label={year}
                selected={[selected, setSelected as Setter<string>]}
              />
            )}
          </For>
        </Tabs>
      </div>

      <div class=" gap-30 m-4 mx-20 grid h-[30rem] w-[70vw] grid-cols-3 items-center justify-items-center overflow-y-scroll md:grid-cols-4 md:gap-10">
        <For each={YEARS[selected()]}>
          {(slug) => (
            <div class="  m-2 items-center justify-center">
              <img
                src={`components/Sponsors/${selected()}/${slug}.png`}
                alt={slug}
              />
              <h1 class="my-5 text-center text-xs font-bold ">
                {slug.replace(/_/g, " ")}
              </h1>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default Sponsors;
