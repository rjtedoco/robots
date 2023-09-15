import { useState } from "react";
import { getAvatar, getRobots, saveRobots } from "../util/util";
import { Robot } from "../common/types";

interface ModalProps {
  onClose: () => void;
  robot: Robot;
}

export default function Modal({ onClose, robot }: ModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    purpose: "",
  });

  const handleSubmit = () => {
    const storedRobots = getRobots();
    storedRobots.forEach((item: Robot) => {
      if (item.id === robot.id) {
        item.name = formData.name;
        item.purpose = formData.purpose;
      }
      return item;
    });
    saveRobots(storedRobots);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className=" bg-slate-100/[0.8] z-1 absolute w-full h-full flex">
      <div className="flex p-10 m-auto bg-slate-200 rounded-lg gap-x-2">
        <img src={getAvatar(robot.seed)} alt="Avatar" width={64} height={64} />
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-1 ">
          <p>Edit name:</p>
          <input
            type="text"
            placeholder={robot.name}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <p>Edit purpose:</p>
          <input
            type="text"
            placeholder={robot.purpose}
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
          />
          <div className="flex gap-x-2 mt-2">
            <button className="bg-slate-100" type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="bg-green-500" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
