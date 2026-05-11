"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  motion,
  AnimatePresence,
  Variants,
} from "framer-motion";

import {
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Portafolio",
      href: "/portafolio",
    },
    {
      name: "Sobre mí",
      href: "/sobre-mi",
    },
  ];

  // =========================================
  // CLOSE MENU ON ROUTE CHANGE
  // =========================================

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // =========================================
  // LOCK SCROLL MOBILE
  // =========================================

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "unset";
  }, [isOpen]);

  // =========================================
  // SCROLL EFFECT
  // =========================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
      {/* ========================================= */}
      {/* NAVBAR */}
      {/* ========================================= */}

      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          top-0
          left-0
          z-50
          w-full
          px-4
          pt-4
        "
      >
        <div
          className={`
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            rounded-2xl
            border
            px-6
            transition-all
            duration-500

            ${
              scrolled
                ? `
                  border-white/10
                  bg-black/50
                  backdrop-blur-2xl
                  shadow-[0_0_40px_rgba(0,0,0,0.35)]
                `
                : `
                  border-transparent
                  bg-transparent
                `
            }
          `}
        >

          {/* ========================================= */}
          {/* LOGO */}
          {/* ========================================= */}

          <Link
            href="/"
            className="
              group
              relative
              z-50
              flex
              items-center
              gap-3
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                -left-3
                top-1/2
                h-10
                w-10
                -translate-y-1/2
                rounded-full
                bg-cyan-400/20
                blur-2xl
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Brand */}
            <div
              className="
                relative
                text-2xl
                font-black
                tracking-[-0.08em]
                text-white
              "
            >
              miranda

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                "
              >
                .
              </span>
            </div>
          </Link>

          {/* ========================================= */}
          {/* DESKTOP NAV */}
          {/* ========================================= */}

          <div className="hidden md:flex items-center gap-3">

            {navLinks.map((link) => {
              const isActive =
                pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    relative
                    overflow-hidden
                    rounded-full
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                  "
                >

                  {/* Background */}
                  <div
                    className={`
                      absolute inset-0 rounded-full transition-all duration-300

                      ${
                        isActive
                          ? `
                            border border-cyan-400/20
                            bg-cyan-500/10
                            backdrop-blur-xl
                          `
                          : `
                            border border-transparent
                            hover:border-white/10
                            hover:bg-white/[0.03]
                          `
                      }
                    `}
                  />

                  {/* Glow */}
                  {isActive && (
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-cyan-400/10
                        blur-xl
                      "
                    />
                  )}

                  {/* Text */}
                  <span
                    className={`
                      relative z-10

                      ${
                        isActive
                          ? "text-cyan-300"
                          : "text-slate-300 hover:text-white"
                      }
                    `}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/contacto"
              className="
                group
                relative
                ml-3
                overflow-hidden
                rounded-full
                bg-cyan-400
                px-6
                py-3
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
              "
            >

              {/* Shine */}
              <div
                className="
                  absolute
                  inset-0
                  translate-x-[-120%]
                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent
                  transition-transform
                  duration-1000
                  group-hover:translate-x-[120%]
                "
              />

              <span className="relative z-10">
                Hablemos
              </span>
            </Link>
          </div>

          {/* ========================================= */}
          {/* MOBILE BUTTON */}
          {/* ========================================= */}

          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="
              relative
              z-50
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:bg-cyan-500/10
              md:hidden
            "
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">

              <motion.div
                key={isOpen ? "close" : "menu"}
                initial={{
                  opacity: 0,
                  rotate: -90,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                {isOpen ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* ========================================= */}
      {/* MOBILE MENU */}
      {/* ========================================= */}

      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(20px)",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              inset-0
              z-40
              flex
              items-center
              justify-center
              bg-black/70
              md:hidden
            "
          >

            {/* Background glow */}
            <div
              className="
                absolute
                top-[20%]
                left-1/2
                h-[400px]
                w-[400px]
                -translate-x-1/2
                rounded-full
                bg-cyan-500/10
                blur-3xl
              "
            />

            {/* Menu */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                flex
                w-[90%]
                max-w-sm
                flex-col
                items-center
                gap-6
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.03]
                px-8
                py-12
                backdrop-blur-3xl
              "
            >

              {/* Links */}
              {navLinks.map(
                (link, index) => {
                  const isActive =
                    pathname === link.href;

                  return (
                    <motion.div
                      key={link.name}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay:
                          0.1 + index * 0.08,
                      }}
                    >
                      <Link
                        href={link.href}
                        className={`
                          text-3xl
                          font-black
                          tracking-tight
                          transition-all

                          ${
                            isActive
                              ? `
                                text-cyan-300
                              `
                              : `
                                text-white/80
                                hover:text-white
                              `
                          }
                        `}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                }
              )}

              {/* Divider */}
              <div className="my-2 h-px w-full bg-white/10" />

              {/* CTA */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                }}
              >
                <Link
                  href="/contacto"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-cyan-400
                    px-8
                    py-4
                    font-semibold
                    text-black
                    transition-all
                    hover:scale-105
                    hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
                  "
                >
                  Iniciar conversación
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}