'use client'

import { Navbar, Dropdown } from 'flowbite-react'

const Nav = () => {
  return (
    <Navbar fluid rounded className='bg-transparent text-white'>
      <Navbar.Brand href='http://github.com/yeldynov'>
        <span className='self-center whitespace-nowrap text-3xl font-bold text-white'>
          Blogr
        </span>
      </Navbar.Brand>

      <Navbar.Collapse>
        <Dropdown arrowIcon={true} inline label={'Product'}>
          <Dropdown.Item>
            <Navbar.Link href='#'>Overview</Navbar.Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Navbar.Link href='#'>Pricing</Navbar.Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Navbar.Link href='#'>Marketplace</Navbar.Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Navbar.Link href='#'>Features</Navbar.Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Navbar.Link href='#'>Integrations</Navbar.Link>
          </Dropdown.Item>
        </Dropdown>
        <Dropdown arrowIcon={true} inline label={'Company'}>
          <Dropdown.Item>
            <Navbar.Link href='#'>About</Navbar.Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Navbar.Link href='#'>Team</Navbar.Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Navbar.Link href='#'>Blog</Navbar.Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Navbar.Link href='#'>Careers</Navbar.Link>
          </Dropdown.Item>
        </Dropdown>
        <Dropdown arrowIcon={true} inline label={'Connect'}>
          <Dropdown.Item>
            <Navbar.Link href='#'>Contact</Navbar.Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Navbar.Link href='#'>Newsletter</Navbar.Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Navbar.Link href='#'>Linkedin</Navbar.Link>
          </Dropdown.Item>
        </Dropdown>
      </Navbar.Collapse>

      <div className='flex md:order-2'>
        <Navbar.Collapse>
          <Navbar.Link className='text-white' href='#'>
            Login
          </Navbar.Link>
          <Navbar.Link href='#'>
            <span className='rounded-3xl px-5 py-3 hover:bg-opacity-30 hover:text-white bg-white text-red-400 font-semibold'>
              Sign Up
            </span>
          </Navbar.Link>
        </Navbar.Collapse>
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}

export default Nav
