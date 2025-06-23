import Icon from "@/components/Icon.tsx";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
    if (isScrolled && open) {
      setOpen(false);
    }
  }, [open]);

  const handleResize = useCallback(() => {
    if (open) {
      setOpen(false);
    }
  }, [open]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [handleScroll, handleResize]);

  const toggleMenu = () => setOpen((prev) => !prev);
  const handleLinkClick = () => setOpen(false);

  const navClassName = `absolute top-0 w-full z-40 transition-all duration-300 ${
    open
      ? "bg-black/10 backdrop-blur-md h-screen"
      : "bg-transparent backdrop-blur-none h-16"
  } md:bg-transparent md:h-16 md:backdrop-blur-none`;

  const openIconClassName = `absolute inset-0 w-8 h-8 text-white transition-opacity duration-300 ${
    open ? "opacity-0" : "opacity-100"
  }`;

  const closeIconClassName = `absolute inset-0 w-8 h-8 text-white transition-opacity duration-300 ${
    open ? "opacity-100" : "opacity-0"
  }`;

  const mobileNavClassName = `text-lg absolute inset-0 top-16 md:hidden transition-opacity duration-300 ${
    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`;

  const sections = [
    { id: "portfolio", title: "Portafolio" },
    { id: "services", title: "Servicios" },
    { id: "about", title: "Acerca" },
    { id: "reviews", title: "Reseñas" },
    { id: "contact", title: "Contacto" },
  ];

  return (
    <nav className={navClassName}>
      <div className="w-full px-4 max-w-screen-lg mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <button
              className="w-8 h-8 relative md:hidden cursor-pointer"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              aria-expanded={open}
            >
              <Menu className={openIconClassName} />
              <X className={closeIconClassName} />
            </button>
            <a href="/" className="flex items-center gap-2">
              <Icon className="w-10 h-10 text-white" />
              <span className="hidden sm:inline text-xl font-bold text-white">
                DJ Cen
              </span>
            </a>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#cost"
            className="bg-white hover:bg-black text-black hover:text-white border hover:border-white px-6 py-2 rounded-full transition-colors ease-in-out"
          >
            Cotizar Ahora
          </a>
        </div>
      </div>

      <ul className={mobileNavClassName}>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              onClick={handleLinkClick}
              href={`#${section.id}`}
              className="block px-4 py-2 text-white hover:bg-black/20 transition-colors"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
