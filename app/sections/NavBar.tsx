"use client";
import Link from "next/link";
import Container from "../components/container/Container";
import React from "react";

const NAV_ITEMS = [
    { href: "home", label: "HOME" },
    { href: "about", label: "ABOUT" },
    { href: "work", label: "DEMO" },
    { href: "contact", label: "CLONE" }
] as const;

const NavBar = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href.split("#")[1];
        window.scrollTo({
            top: document.getElementById(href)?.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <nav className="nowrap fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 px-1 py-1 text-[#e4ded7] sm:w-[383.3px] md:p-2 lg:w-[391.3px]">
            <Container
                width="100%"
                height="50px"
                color="rgba(255, 255, 255, 0.1)"
                borderRadius={10}
                top="0px"
                left="0px"
                angle={0}
            >
                <nav className="nowrap fixed bottom-30 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 rounded-lg px-1 py-1 text-[#e4ded7] sm:w-[383.3px] md:p-2 lg:w-[391.3px]">
                    {NAV_ITEMS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={`#${href}`}
                            data-blobity-magnetic="false"
                            onClick={handleScroll}
                            aria-label={`Scroll to ${label} Section`}
                        >
                            <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                                {label}
                            </h4>
                        </Link>
                    ))}
                </nav>
            </Container>
        </nav>
    );
};

export default NavBar;
