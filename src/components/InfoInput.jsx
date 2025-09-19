import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const InfoInput = ({ content, onRemove }) => {
  // logic
  const {id, label, text } = content;

  // const onRemove = () => {
  //   console.log("재료 삭제하기");
  // };

  // view
  return (
    <div className="py-2 first:pt-0 last:pb-0 ">
      <div className="relative">
        <label
          htmlFor={label}
          className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                      absolute"
        >
          {text}
        </label>
        <input
          type={"text"}
          id={label}
          name={label}
          placeholder={"남은 재료를 입력해주세요"}
          className="border placeholder-gray-400 focus:outline-none
                      focus:border-black w-full pt-4 pr-9 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      border-chef-gray-200 rounded-2xl placeholder:text-chef-gray-200"
        />
        <button
          type="button"
          className="absolute right-3 inset-y-0 flex items-center px-1"
          onClick={() => onRemove(id)}//인자가 있는경우 () => 추가해줘야함
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default InfoInput;
