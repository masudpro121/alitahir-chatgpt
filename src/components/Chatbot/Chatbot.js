import React, { useContext, useState } from "react";
import styles from "./chatbot.module.css";
import { RiSendPlane2Fill } from "react-icons/ri";
import { IoReaderOutline } from "react-icons/io5";
import { MyContext } from "@/pages";
import BotImg from "@/assets/bot.jpg";
import UserImg from "@/assets/user.jpg";
import Image from "next/image";
function Chatbot() {
  
  const [input, setInput] = useState("");
  const { showSidebar, setShowSidebar, messages, setMessages } = useContext(MyContext);
  const handleInput = (value) => {
    setInput(value);
  };
  const handleSubmit = () => {
    setInput("");
    setMessages([...messages, "##input##" + input, 'Typing...']);
    fetch(window.location.origin + "/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((result) => {
        setMessages([...messages, "##input##" + input, result]);
        
      });
  };

  return (
    <div
      className={`${
        showSidebar && "ml-[250px]"
      } bg-[#343541] w-full  text-white`}
    >
      <div className="h-full">
        {!showSidebar && (
          <div className="fixed top-0">
            <div
              onClick={() => setShowSidebar(!showSidebar)}
              className={`${styles["toggle-btn2"]} inline-block m-3 cursor-pointer border-solid border-[1px] border-gray-600 rounded-md p-2`}
            >
              <IoReaderOutline className="text-[20px]" />
            </div>
          </div>
        )}
        {messages.length < 1 && (
          <div className=" min-h-[90vh] flex justify-center items-center">
            <div>
            <h3 className="text-3xl font-bold text-center mt-10">Polus AI</h3>
            <div className="   mb-14 mt-10  flex  justify-center items-center">
              <div className="flex flex-col lg:flex-row lg:justify-center text-center gap-10 px-10">
              <div>
                  <h3 className="text-[18px] font-semibold">Examples</h3>
                  <div>
                    <p
                      className="cursor-pointer bg-[#3e3f4b] rounded-md mt-2 p-2 lg:max-w-xs"
                      onClick={(e) => handleInput(e.target.innerText)}
                    >
                      What is PLS?
                    </p>
                    <p
                      className="cursor-pointer bg-[#3e3f4b] rounded-md mt-2 p-2 lg:max-w-xs"
                      onClick={(e) => handleInput(e.target.innerText)}
                    >
                      What does Polus AI do?
                    </p>
                    <p
                      className="cursor-pointer bg-[#3e3f4b] rounded-md mt-2 p-2 lg:max-w-xs"
                      onClick={(e) => handleInput(e.target.innerText)}
                    >
                      How can we earn from PLS AI?
                    </p>
                    <p
                      className="cursor-pointer bg-[#3e3f4b] rounded-md mt-2 p-2 lg:max-w-xs"
                      onClick={(e) => handleInput(e.target.innerText)}
                    >
                      What are the predictions for PLS in future?
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold">Capabilities</h3>
                  <div>
                    <p className="bg-[#3e3f4b] rounded-md mt-2 p-2 lg:max-w-xs">
                      Remembers what user said earlier in the conversation
                    </p>
                    <p className="bg-[#3e3f4b] rounded-md mt-2 p-2 lg:max-w-xs">
                      Allows user to provide follow-up corrections
                    </p>
                    <p className="bg-[#3e3f4b] rounded-md mt-2 p-2 lg:max-w-xs">
                      Trained to decline inappropriate requests
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-[18px] font-semibold">Limitations</h3>
                  <div>
                    <p className="bg-[#3e3f4b] rounded-md mt-2 p-2 lg:max-w-xs">
                      May occasionally generate incorrect information
                    </p>
                    <p className="bg-[#3e3f4b] rounded-md mt-2 p-2 lg:max-w-xs">
                      May occasionally produce harmful instructions or biased
                      content
                    </p>
                    <p className="bg-[#3e3f4b] rounded-md mt-2 p-2 lg:max-w-xs">
                      Limited knowledge of world and events after 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        )}
        {messages.length > 0 && (
          <div>
            <div className=" mb-8 mt-16">
              {messages.map((msg, id) => {
                return msg.includes("##input##") ? (
                  <div
                    className="w-[80%] md:w-[60%] m-auto my-5 py-2"
                    key={msg + id}
                  >
                    <div className="flex gap-5">
                      <div className="w-[50px]">
                        <Image
                          className="rounded-full"
                          src={UserImg}
                          width="35"
                          height="35"
                          alt="user"
                        />
                      </div>
                      <div className="w-full">
                        {msg.replace("##input##", "")}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="bg-[#444654] m-auto py-5 my-2 rounded-md"
                    key={msg + id}
                  >
                    <div className="w-[80%] md:w-[60%] m-auto">
                      <div className="flex gap-5">
                        <div>
                          <Image
                            className="rounded-full"
                            src={BotImg}
                            width="35"
                            height="35"
                            alt="user"
                          />
                        </div>
                        <div className="w-full">
                          <pre  className="text-[#cbcbd3] font-sans break-words whitespace-pre-wrap">{msg}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div
          className={`flex justify-center fixed bottom-0  bg-[#343541] pt-3 ${
            showSidebar ? "w-[calc(100%-250px)]" : "w-full"
          }`}
        >
          <div className="flex justify-between bg-white w-[70%] md:w-[50%] m-auto mb-3 p-1 md:p-2 rounded-md ">
            <input
              className="text-black w-full outline-none"
              value={input}
              onChange={(e) => handleInput(e.target.value)}
              onKeyDown={(e) => {
                e.code == "Enter" && handleSubmit();
              }}
              type="text"
              placeholder="Type your message"
            />
            <RiSendPlane2Fill
              className={`cursor-pointer p-1 ${
                input
                  ? "bg-[#19c37d]  text-2xl rounded-md"
                  : "text-2xl text-gray-500"
              }`}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
