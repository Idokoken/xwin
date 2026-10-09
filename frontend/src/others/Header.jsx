import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "@/Responsive";
import brand from "../assets/brand.png";

const Wrapper = styled.div`
  .img-container {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .img-container img {
    width: 100%;
    height: 100%;
    object-fit-cover;
  }
    span{
    color: var(--primary-color);
    }
    a:hover{
    color: var(--primary-color);
    }
    // button{
    // background: var(--primary-color);
    // }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <nav className="w-full bg-white shadow-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center">
            <div className="img-container">
              <img src={brand} alt="brand" />
            </div>
            <span>Xwin</span>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="">
              Home
            </Link>

            <Link to="/about-us" className="">
              About
            </Link>

            <Link to="/services" className="">
              Services
            </Link>

            <Link to="/contact-us" className="">
              Contact
            </Link>

            <button className="rounded-md bg-(--primary-color) px-4 py-2 text-white">
              Get Started
            </button>
          </div>

          {/* Hamburger Button - Mobile Only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 hover:bg-gray-100"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navbar */}
        {isOpen && (
          <div className="md:hidden border-t bg-white px-4 py-5">
            <div className="flex flex-col gap-5">
              <Link to="/" className="">
                Home
              </Link>

              <Link to="/about-us" className="">
                About
              </Link>

              <Link to="/services" className="">
                Services
              </Link>

              <Link to="/contact-us" className="">
                Contact
              </Link>

              <button className="w-full rounded-md bg-(--primary-color) px-4 py-2 text-white">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </Wrapper>
  );
}

export default Header;
