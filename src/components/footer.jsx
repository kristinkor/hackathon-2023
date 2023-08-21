'use client';

import { Footer } from 'flowbite-react';
import logo from "../assets/ctp-logo-square.png";

export default function FooterWithLogo() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            alt="CTP Logo"
            href=""
            name="CTP"
            src={logo}
          />
          <Footer.LinkGroup>
            <Footer.Link href="https://twitter.com/cunytechprep?lang=en">
              Twitter
            </Footer.Link>
            <Footer.Link href="https://www.instagram.com/cuny_tech_prep/?hl=en">
              Instagram
            </Footer.Link>
            <Footer.Link href="https://www.linkedin.com/company/cuny-tech-prep/">
              LinkedIn
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          by="CUNY Tech Prep"
          href="#"
          year={20233}
        />
      </div>
    </Footer>
  )
}