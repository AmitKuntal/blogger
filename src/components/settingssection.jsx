import React from "react";

export default function SettingSection(props) {
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
        <>
                <div className="w-full lg:p-2 flex-col">
                    <span className="font-bold text-2xl">Email Setttings </span>
                    <ColoredLine color="black" margin="1vw" />
                    <div className="flex flex-row mt-4 mb-4 justify-between items-center">
                        <div class="flex flex-col">
                            <span className="font-bold text-lg">Your email</span>
                            <span className="text-md mt-4">email@gmail.com</span>
                        </div>
                        <div className="flex flex-col">
                            <button className="bg-white border border-gray-400 p-2 rounded"><span>Edit Email</span></button>
                        </div> 
                    </div>
                    <ColoredLine color="black" margin="1vw" />

                    
                </div>
    </>
  );
}