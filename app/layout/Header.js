import React from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "../components/Search";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
    <header className="bg-white py-7 border-b">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <a href="href='/'">
              <Image
                src="/logo.svg"
                width="150"
                height="55"
                objectFit="contain"
              />
            </a>
          </Link>
          {/* Search */}
          <Search />
          {/* Contact */}
          <div className="lg:flex flex-col hidden">
            <span className="text-2xl font-bold">8 800 322 65-66</span>
            <p className="self-end text-color">Support 24/7</p>
          </div>
          {/* Icons */}
          <div className="flex items-center gap-2">
            <Link href="/my-account">
              <a href="/my-account">
                <AiOutlineUser className="text-3xl text-title" />
              </a>
            </Link>
            <Link href="/crat">
              <a href="/cart" className="flex items-center gap-5">
                <div className="relative">
                  <AiOutlineShoppingCart className="text-3xl text-title" />
                  <span className="bg-primary rounded text-center absolute px-2 text-sm -right-3 -top-2 font-semibold">
                    0
                  </span>
                </div>
                <div className="hidden lg:block">
                  <span className="text-color text-sm">Your Cart</span>
                  <p className="text-title font-bold text-lg">$0.00</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
