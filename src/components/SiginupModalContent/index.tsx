import { FaLinkedin } from "react-icons/fa";
import { Modal } from "../Modal";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { PROFILE_TYPES } from "../../utils/constant";

export const SignupModalContent = () => {
  const { handleLogin, profileType, setProfileType } =
    useContext<any>(AuthContext);
  return (
    <Modal>
      {profileType === "" && (
        <div className="h-64 w-96 bg-white rounded-md flex flex-col items-center justify-center gap-y-3">
          <p className="text-xl font-normal">Select the type of account</p>
          <button
            className="px-5 py-1.5 border border-blue-700 rounded-sm w-40"
            onClick={() => setProfileType(PROFILE_TYPES.INDIVIDUAL)}
          >
            Individual
          </button>
          <button
            className="px-5 py-1.5 border border-blue-700 rounded-sm w-40"
            onClick={() => setProfileType(PROFILE_TYPES.ORGANIZATION)}
          >
            Organization
          </button>
        </div>
      )}
      {profileType === PROFILE_TYPES.INDIVIDUAL && (
        <div className="h-64 w-96 bg-white rounded-md flex flex-col items-center justify-center gap-y-3">
          <p className="text-xl font-normal">Signup with Linkedin</p>
          <div
            className="flex gap-x-3 items-center cursor-pointer border-2 rounded-md border-blue-500 p-3 shadow-sm text-xl"
            onClick={() => handleLogin()}
          >
            <FaLinkedin className="text-blue-500 text-4xl" />
            Linkedin
          </div>
        </div>
      )}
      {profileType === PROFILE_TYPES.ORGANIZATION && (
        <div className="h-64 w-96 bg-white rounded-md flex flex-col items-center justify-center gap-y-3">
          <p className="text-xl font-normal">Organization Signup</p>
          <button className="px-5 py-1.5 border border-blue-700 rounded-sm">
            signup
          </button>
        </div>
      )}
    </Modal>
  );
};
