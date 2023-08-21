'use client';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import CTPLogo from '../assets/ctp-logo-square.png';

export default function NavbarWithDropdown() {
    return (
        <Navbar fluid rounded className="flex items-center justify-center py-4 bg-gray-100">
            <Navbar.Brand href="">
                <img
                    alt=""
                    className="place-items-start ml-24 rounded-md mr-3 h-14"
                    src={CTPLogo}
                />
            </Navbar.Brand>
            <div className="flex items-center justify-center space-x-4">
                <Navbar.Collapse>
                    <Navbar.Link active href="#" className = " ml-8 text-l">
                        <p>Home</p>
                    </Navbar.Link>
                    <Navbar.Link target="_blank" rel="noreferrer noopener" href="https://discord.gg/GTTECFWRvQ" className = "text-l">
                        Discord
                    </Navbar.Link>
                    <Navbar.Link target="_blank" rel="noreferrer noopener" href="https://ctp-arts-tech-hackathon.devpost.com/?preview_token=MstTTyUmDrxRNEOiczOlkaI5njCCrsCqBbZCdW7v234%3D" className = "text-l">
                        DevPost
                    </Navbar.Link>
                    <Navbar.Link href="https://cunytechprep.org/" className = "text-l">
                        Main CTP Site
                    </Navbar.Link>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
