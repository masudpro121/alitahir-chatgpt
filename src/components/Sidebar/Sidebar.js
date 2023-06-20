import React, { useContext, useState } from "react";
import styles from "./sidebar.module.css";
import { MyContext } from "@/pages";
import {IoReaderOutline} from 'react-icons/io5'
import {AiOutlinePlus} from 'react-icons/ai'
import {BiMessageSquareDots} from 'react-icons/bi'

function Sidebar() {
  const {showSidebar, setShowSidebar, setMessages} = useContext(MyContext)
  const handleToggle = () => {
    setShowSidebar(!showSidebar);
  };

  const newChatHandler = () => {
    setMessages([])
  }
  return (
    <div className={styles.sbar}>
      <div className={`${styles.sidebar} ${showSidebar ? styles.open : "close"}`}>
        {showSidebar && (
          <>
          <div className="flex items-center justify-between gap-3 mx-2 my-4">
            <div onClick={newChatHandler} className="cursor-pointer flex items-center border-solid border-[1px] border-gray-600 rounded-md p-2 w-full gap-3">
              <AiOutlinePlus />
              <p>New Chat</p>
            </div>
            <div onClick={handleToggle} className="cursor-pointer border-solid border-[1px] border-gray-600 rounded-md p-2">
              <IoReaderOutline className="text-[20px]"  />
            </div>
          </div>
           <ul className="mt-7 px-4">
            <li className="flex items-center gap-2 my-4 cursor-pointer"><BiMessageSquareDots />Write a paragraph</li>
            <li className="flex items-center gap-2 my-4 cursor-pointer"><BiMessageSquareDots />Web development</li>
            <li className="flex items-center gap-2 my-4 cursor-pointer"><BiMessageSquareDots />30 best practice</li>
            <li className="flex items-center gap-2 my-4 cursor-pointer"><BiMessageSquareDots />Make a daily routine</li>
         </ul>
          </>
        )}
       
      </div>
      
    </div>
  );
}

export default Sidebar;
