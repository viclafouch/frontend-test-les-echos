import React from 'react'
import Image from 'next/image'
import UserButton from '@/components/Navbar/UserButton/UserButton'
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from '@nextui-org/react'

const Navbar = () => {
  return (
    <NextUiNavbar>
      <NavbarBrand as="a" href="/" className="flex gap-2">
        <Image alt="Les echos" src="/assets/logo.png" width={32} height={32} />
        <p className="font-bold text-inherit">Les echos</p>
      </NavbarBrand>
      <NavbarContent justify="center" />
      <NavbarContent justify="end">
        <NavbarItem>
          <UserButton />
        </NavbarItem>
      </NavbarContent>
    </NextUiNavbar>
  )
}

export default Navbar
