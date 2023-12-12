import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { navigation } from "./navigation";
import { Link } from "react-router-dom";

function Menu() {
    const [pageTitle, setPageTitle] = useState('Home'); // State để lưu trạng thái tiêu đề/logo

    const handleMenuClick = (title:string) => {
        setPageTitle(title); // Cập nhật tiêu đề/logo khi một mục menu được nhấp
    }

    return (
        <>
            <div className="container flex justify-between text-center">
                    <h1 className="text-white mt-2">{pageTitle}</h1> {/* Hiển thị tiêu đề/logo tương ứng */}
                <div className='flex justify-center items-center'>

                    <ul className='flex gap-x-6 text-lg items-center	'>
                        {
                            navigation.map((item) => (
                                <li className='group relative font-bold pt-3 ' key={item.id} >
                                    <Link
                                        className='no-underline text-[White] text-lg hover:text-black'
                                        to={item.url}
                                        onClick={() => handleMenuClick(item.name)} // Gọi hàm khi một mục menu được nhấp
                                    >
                                        {item.name}
                                    </Link>
                                    {item.child && item.child.length > 0 ? (
                                        <div className='sub_child hidden group-hover:flex group-hover:flex-col text-slate-900 absolute z-50 bg-white w-44 py-2  font-normal	'>
                                            {
                                                item.child.map((child) => (
                                                    <Link
                                                        key={child.id}
                                                        to={child.url}
                                                        className='no-underline hover:bg-slate-200 text-[Black] pb-1 ml-1'
                                                        onClick={() => handleMenuClick(child.name)} // Cập nhật tiêu đề/logo khi một mục con được nhấp
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    ) : null}
                                </li>
                            ))
                        }
                        <div className="pt-[20px]">
                            <div className="flex border-2 rounded-lg bg-white  items-center px-[10px] ">
                                <FaShoppingCart /> <span className="ml-[5px]">0</span>
                            </div>
                        </div>
                    </ul>


                </div>

            </div>

        </>
    )
}
export default Menu
