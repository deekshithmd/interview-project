import { useModal } from "../../hooks/useModal";
import { SignupModalContent } from "../SiginupModalContent";

export const Navbar = () => {
  const { showModal, toggleModal } = useModal();

  return (
    <nav className="w-full h-16 px-5 bg-blue-200 flex items-center justify-between fixed top-0 right-0 left-0">
      <div>
        <span className="text-2xl font-semibold cursor-pointer text-blue-700">
          Interview
        </span>
      </div>
      <div className="flex items-center gap-x-5">
        <button
          className="border border-blue-700 rounded-full px-5 py-1.5 flex items-center text-blue-700 font-medium hover:bg-blue-700 hover:text-white"
          onClick={() => toggleModal()}
        >
          Login
        </button>
        <button className="border border-blue-700 rounded-full px-5 py-1.5 flex items-center text-white font-medium bg-blue-700 hover:text-white">
          Signup
        </button>
      </div>
      {showModal && <SignupModalContent />}
    </nav>
  );
};
