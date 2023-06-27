'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

function Logo() {
const route = useRouter()


  return (
    <>
      <div >
        < Image alt="Logo" src="/images/logo.png" width="100" height="100"
          className="ml-4 md:ml-8 lg:ml-16" />
      </div>

    </>
  )
}

export default Logo