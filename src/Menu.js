import React from "react";
function Menu() {
    return (
        <div >
            <ul className=" lg:hidden font-bold text-gray-500  ">
                <li className="px-5 mt-1.5  "><a className="" href="">Home</a></li>
                <li className="px-5 mt-1.5  "><a className="" href="">About</a></li>
                <li className="px-5 mt-1.5  "><a className="" href="">Service</a></li>
                <li className="px-5 mt-1.5  "><a className="" href="">Portifolio</a></li>
                <li className="px-5 mt-1.5  "><a className="" href="">Contact</a></li>
            </ul>
        </div>
    );
}
export default Menu;