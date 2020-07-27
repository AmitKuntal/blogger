import React from 'react';
import TopStories from './topstories';

function SettingsSideNav() {

    const ColoredLine = ({ color, margin }) => (
        <hr
            style={{
                color: color,
                height: .2,
                marginTop:margin
            }}
        />
    );

    return ( 
    <div className="w-1/4 hidden sm:hidden md:hidden lg:flex flex-row flex-wrap justify-center mainbackgroundcolor">
      <div className= "w-full container flex flex-col items-left justify-between h-full sm:text-md">
            <a className="font-bold text-2xl mb-4">Settiings</a>       
            <a className="mt-4">Email Settings</a>
            <a className="mt-4">Connections</a>
            <a className="mt-4">Account</a>
            <a className="mt-4">Membership</a>
            <a className="mt-4">Security</a>
            <ColoredLine color="gray" margin="2rem" />
            <ul className="mt-8 flex flex-row flex-wrap justify-start text-sm text-gray-600 font-normal" >
                    <li className="mr-4">
                        <a href="#">Help</a>
                    </li>
                    <li className="mr-4">
                        <a href="#">Status</a>
                    </li>
                    <li className="mr-4">
                        <a href="#">Writers</a>
                    </li>
                    <li className="mr-4">
                        <a href="#">Blog</a>
                    </li>
                    <li className="mr-4">
                        <a href="#">Careers</a>
                    </li>
                    <li className="mr-4">
                        <a href="#">Privacy</a>
                    </li>
                    <li className="mr-4">
                        <a href="#">Terms</a>
                    </li>
                    <li className="mr-4">
                        <a href="#">About</a>
                    </li>
                    
                </ul>
      </div>
  </div>
  );
}

export default SettingsSideNav;
