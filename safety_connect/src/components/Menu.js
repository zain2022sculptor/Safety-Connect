import { FiHome, FiList, FiSearch } from "react-icons/fi";
import { BiBandAid } from "react-icons/bi";
import { AiOutlineAudit, AiOutlineProject } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { BsBook, BsGraphUp } from "react-icons/bs";

const Menu = () => {
  return (
    <div className="mt-20 ml-4 p-4 bg-white rounded-md">
      <h2 className="text-center text-md text-[#112565] font-medium">
        Welcome!
      </h2>
      <h1 className="text-center text-xl text-[#112565] font-bold">Jon Doe</h1>
      <button className="bg-[#112565] w-full mt-4 mb-4 h-12 rounded-md text-white font-semibold">
        Create New
      </button>
      <div className="text-[#727272]">
        <a
          href="#home"
          className="flex w-full pt-2 pb-2 pl-2 hover:bg-[#EDF2F6] rounded-md"
        >
          <FiHome className="w-6 h-6" />
          <p className="hidden lg:block pl-4">Home</p>
        </a>
        <a
          href="#home"
          className="flex w-full pt-2 pb-2 pl-2 hover:bg-[#EDF2F6] rounded-md"
        >
          <FiList className="w-6 h-6" />
          <p className="hidden lg:block pl-4">My Responsibilites</p>
        </a>
        <a
          href="#home"
          className="flex w-full pt-2 pb-2 pl-2 hover:bg-[#EDF2F6] rounded-md"
        >
          <FiSearch className="w-6 h-6" />
          <p className="hidden lg:block pl-4">Observation and Feedback</p>
        </a>
        <a
          href="#home"
          className="flex w-full pt-2 pb-2 pl-2 hover:bg-[#EDF2F6] rounded-md"
        >
          <BiBandAid className="w-6 h-6" />
          <p className="hidden lg:block pl-4">Incident Management</p>
        </a>
        <a
          href="#home"
          className="flex w-full pt-2 pb-2 pl-2 hover:bg-[#EDF2F6] rounded-md"
        >
          <AiOutlineAudit className="w-6 h-6" />
          <p className="hidden lg:block pl-4">Audit Inspection</p>
        </a>
        <a
          href="#home"
          className="flex w-full pt-2 pb-2 pl-2 hover:bg-[#EDF2F6] rounded-md"
        >
          <CgDanger className="w-6 h-6" />
          <p className="hidden lg:block pl-4">Risk Management</p>
        </a>
        <a
          href="#home"
          className="flex w-full pt-2 pb-2 pl-2 hover:bg-[#EDF2F6] rounded-md"
        >
          <BsBook className="w-6 h-6" />
          <p className="hidden lg:block pl-4">Learning Management</p>
        </a>
        <a
          href="#home"
          className="flex w-full pt-2 pb-2 pl-2 hover:bg-[#EDF2F6] rounded-md"
        >
          <BsGraphUp className="w-6 h-6" />
          <p className="hidden lg:block pl-4">Performance Analytics</p>
        </a>
      </div>
      <div className="mt-4 pl-2">
        <p className="text-[#112565]">Your Projects</p>
        <div className="pt-2 flex">
          <AiOutlineProject className="w-6 h-6" />
          <span className="text-[#727272] pl-4">Alpha Project</span>
        </div>
        <div className="pt-2 flex">
          <AiOutlineProject className="w-6 h-6" />
          <span className="text-[#727272] pl-4">Beta Project</span>
        </div>
      </div>
      <div className="mt-4 pl-2">
        <p className="text-[#112565]">Team Members</p>
        <div className="flex justify-end">
          <div className="w-8 h-8 rounded-full bg-[#4BA735] mt-4">
            <p className="text-white text-center pt-1">3</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#112565] mt-4 ml-2">
            <p className="text-white text-center text-lg">+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
