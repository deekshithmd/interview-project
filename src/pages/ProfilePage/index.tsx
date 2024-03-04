import { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/Modal";

export default function ProfilePage() {
  const [category, setCategory] = useState("");
  const [isSelectedForOutsource, setIsSelectedForOutsource] = useState(false);
  const { user } = useContext<any>(AuthContext);
  const { showModal, toggleModal } = useModal();

  useEffect(() => {
    toggleModal();
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      {showModal ? (
        <Modal>
          <div className="p-5 w-96 flex justify-center flex-col bg-white rounded-lg gap-y-2">
            <p className="text-lg font-medium">Select your category</p>
            <div>
              <input
                type="radio"
                value="DEVELOPER"
                name="category"
                className="mr-2"
                onChange={(e) => setCategory(e.target.value)}
              />
              Developer/Technical Expert
            </div>
            <div>
              <input
                type="radio"
                value="RECRUITER"
                name="category"
                className="mr-2"
                onChange={(e) => setCategory(e.target.value)}
              />
              HR/Recruiter
            </div>
            {category === "RECRUITER" && (
              <>
                <hr />
                <div>
                  <input
                    type="checkbox"
                    checked={isSelectedForOutsource}
                    onChange={() =>
                      setIsSelectedForOutsource(!isSelectedForOutsource)
                    }
                    className="mr-2"
                  />{" "}
                  Do you like to be outsource interviewer?
                </div>
              </>
            )}
            <div className="w-full flex items-center justify-end mt-5">
              <button
                className="bg-blue-700 text-white rounded-full px-5 py-1 w-fit"
                onClick={() => toggleModal()}
              >
                Proceed
              </button>
            </div>
          </div>
        </Modal>
      ) : (
        <div className="flex flex-col justify-start items-start mt-16 px-5 pt-5 w-full">
          <h1 className="text-xl font-semibold">Complete your profile</h1>
          <div className="flex flex-col justify-start items-start w-full gap-y-3 mt-5">
            <img src={user?.picture} className="h-20 w-20 rounded-full" />
            <label htmlFor="name">
              Name:{" "}
              <input
                type="text"
                name="name"
                onChange={() => {}}
                className="border border-black outline-none rounded-md px-2 py-1"
              />
            </label>
            <label htmlFor="email">
              Email:{" "}
              <input
                type="text"
                name="email"
                onChange={() => {}}
                className="border border-black outline-none rounded-md px-2 py-1"
              />
            </label>
            <label htmlFor="phone">
              Phone:{" "}
              <input
                type="text"
                name="phone"
                onChange={() => {}}
                className="border border-black outline-none rounded-md px-2 py-1"
              />
            </label>
            <div>Education:</div>
          </div>
        </div>
      )}
    </div>
  );
}
