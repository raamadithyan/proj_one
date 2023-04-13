'use client';

import Container from "../Container"
import Logo from "./Logo";
import Search from "./Search";
import Login from "./Login";
function Navbar() {
  return (
    <div className="fixed w-full  z-10 shadow-md bg-white  ">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center  justify-between lg:gap-16 sm:gap-8" >
            <Logo />
            <Search />
            <Login />
          </div>
        </Container>

      </div>

    </div>
  )
}

export default Navbar