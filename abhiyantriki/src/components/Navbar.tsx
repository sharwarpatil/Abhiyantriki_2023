import { TbMenu2, TbX } from "solid-icons/tb";
import { Component, JSX, Setter, Show, createSignal } from "solid-js";

interface NavbarItemProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  setOpen: Setter<boolean>;
}

const NavbarItem: Component<NavbarItemProps> = ({
  label,
  setOpen,
  ...rest
}) => {
  return (
    <a
      class="mx-4 my-4 duration-500 hover:text-slate-500 active:text-slate-700"
      onClick={() => setOpen((open) => (open ? !open : false))}
      {...rest}
    >
      {label.toUpperCase()}
    </a>
  );
};

const Navbar: Component = () => {
  const [open, setOpen] = createSignal(false);

  return (
    <header class="fixed top-0 z-10 w-full bg-slate-900">
      <nav class="flex items-center justify-between p-2">
        <div class="h-16 w-64">
          <img src="logo.png" alt="Logo" />
        </div>

        <div class="hidden md:flex">
          <NavbarItem setOpen={setOpen} href="#home" label="home" />
          <NavbarItem setOpen={setOpen} href="#events" label="events" />
          <NavbarItem
            setOpen={setOpen}
            href="#expos"
            label="Expos & Speakers"
          />
          <NavbarItem
            setOpen={setOpen}
            href="#getinvolved"
            label="Get Involved"
          />
          <NavbarItem setOpen={setOpen} href="#sponsors" label="Sponsors" />
          <NavbarItem setOpen={setOpen} href="#contact" label="Contact" />
        </div>

        <div class="cursor-pointer duration-500 hover:text-slate-500 active:text-slate-700 md:hidden">
          <Show
            when={!open()}
            fallback={
              <TbX onClick={() => setOpen((open) => !open)} size={25} />
            }
          >
            <TbMenu2 onClick={() => setOpen((open) => !open)} size={25} />
          </Show>
        </div>
      </nav>

      <div
        id="mobile-menu"
        class="flex flex-col items-center duration-500"
        classList={{ hidden: !open() }}
      >
        <NavbarItem setOpen={setOpen} href="#home" label="home" />
        <NavbarItem setOpen={setOpen} href="#events" label="events" />
        <NavbarItem setOpen={setOpen} href="#expos" label="Expos & Speakers" />
        <NavbarItem
          setOpen={setOpen}
          href="#getinvolved"
          label="Get Involved"
        />
        <NavbarItem setOpen={setOpen} href="#sponsers" label="Sponsors" />
        <NavbarItem setOpen={setOpen} href="#contact" label="Contact" />
      </div>

      <hr class="border-slate-600" />
    </header>
  );
};

export default Navbar;
