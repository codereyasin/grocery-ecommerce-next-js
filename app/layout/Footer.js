import React from "react";
import FooterCrad from "../components/FooterCard";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
import { AiOutlineHome, AiOutlineMail, AiFillMail } from "react-icons/ai";
import Button from "../components/shared/Button";
const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container">
        <div className="flex justify-between space-y-4 my-5 flex-wrap pb-10 pt-8 border-b item-center">
          <FooterCrad
            image="/icons/f_1.svg"
            title="Free Shopping"
            subtitle="For all order over $220"
          />
          <FooterCrad
            image="/icons/f_2.svg"
            title="1 & 1 Returns"
            subtitle="Cancellation after 1 day"
          />
          <FooterCrad
            image="/icons/f_3.svg"
            title="100% Secure Payment"
            subtitle="Gurantee secure payments"
          />
          <FooterCrad
            image="/icons/f_4.svg"
            title="24/7 Dedicated Support"
            subtitle="Anywhere & anytime"
          />
          <FooterCrad
            image="/icons/f_5.svg"
            title="Daily Offers"
            subtitle="Discount up to 70% OFF"
          />
        </div>
        <div className="my-10 flex gap-10 flex-wrap justify-between">
          <div className="max-w-sm">
            <h2 className="text-lg font-bold mb-5 ">
              Farmart - Your Online Foods & Grocer
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              finibus viverra iaculis. Etiam vulputate et justo eget
              scelerisque.
            </p>
            <div className="mt-10 space-y-4">
              <span className="flex">
                <FiPhoneCall className="text-color mt-2 " />
                <div className="ml-4">
                  <p>Hotline 24/7: </p>
                  <h3 className="text-2xl font-bold ">(+880) 1785-504676</h3>
                </div>
              </span>
              <span className="flex !mt-7">
                <AiOutlineHome className="text-color mt-2 " />
                <address className="ml-4 text-color not-italic">
                  Jamalpur, Dhaka 2041, Bangladesh
                </address>
              </span>
              <span className="flex !mt-7">
                <AiOutlineMail className="text-color mt-2 " />
                <p className="ml-4">eyasindevofficial@gmail.com</p>
              </span>
            </div>
          </div>
          <div className="">
            <h2 className="text-lg mb-6 font-bold">Useful Links</h2>
            <ul className="space-y-5">
              <FooterLink href="/" text="About Us" />
              <FooterLink href="/" text="Contact" />
              <FooterLink href="/" text="Career" />
              <FooterLink href="/" text="Help Center" />
              <FooterLink href="/" text="Sitemap" />
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg mb-6 font-bold">Help Center</h2>
            <ul className="space-y-5">
              <FooterLink href="/" text="Payment" />
              <FooterLink href="/" text="Shipping" />
              <FooterLink href="/" text="Product Returns" />
              <FooterLink href="/" text="FAQ" />
              <FooterLink href="/" text="Checkout" />
            </ul>
          </div>
          <div className="lg:max-w-sm">
            <h2 className="text-xl font-bold mb-5 ">Farmart Newsletter</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              finibus viverra iaculis..
            </p>

            <div className="flex items-center mt-5">
              <div className="flex flex-1 items-center border p-4 rounded ">
                <AiFillMail className="text-title mt-2 " />
                <input
                  type="text"
                  placeholder="Your email..."
                  className="outline-none bg-transparent px-4 flex-1 "
                />
              </div>
              <Button title="Subscribe" className="self-stretch" />
            </div>
          </div>
        </div>
        <div className="py-8 flex flex-wrap space-y-3 justify-center lg:justify-between items-center bordwe-t">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://eyasinarafat.com"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Eyasin Arafat
            </a>
            . No Rights Reserved. Build for fun.
          </p>
          <img src="/images/footer-new-payment.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href = "#", text }) => (
  <li>
    <Link href={href}>
      <a href={href}>{text}</a>
    </Link>
  </li>
);

export default Footer;
