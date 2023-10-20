import { Component, JSXElement, Signal } from "solid-js";

export interface TabProps {
  label: string;
  selected: Signal<string>;
  onSelect?: (label: string) => void;
}

export const Tab: Component<TabProps> = ({
  label,
  selected,
  onSelect,
  ...rest
}) => {
  const [sel, setSel] = selected;

  const onClick = (label: string) => {
    onSelect?.(label);
    setSel(label);
  };

  return (
    <button
      class="mx-1 w-28 rounded-xl p-2 text-slate-300 duration-200 hover:text-slate-100"
      classList={{ "bg-slate-900": sel() === label }}
      onClick={[onClick, label]}
      {...rest}
    >
      {label}
    </button>
  );
};

export interface TabsProps {
  children: JSXElement;
}

export const Tabs: Component<TabsProps> = ({ children }) => {
  return (
    <div class="flex flex-col rounded-xl bg-slate-700 py-1 md:flex-row">
      {children}
    </div>
  );
};
