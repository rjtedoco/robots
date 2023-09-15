import { Robot } from "../common/types";
import { getAvatar } from "../util/util";

interface ModalProps {
  onClose: () => void;
  openEditModal: () => void;
  robot: Robot;
}

export default function Modal({ onClose, openEditModal, robot }: ModalProps) {
  return (
    <div className=" bg-slate-100/[0.8] z-1 absolute w-full h-full flex">
      <div className="flex p-10 justify-center m-auto bg-slate-200 rounded-lg gap-x-2">
        <img src={getAvatar(robot.seed)} alt="Avatar" width={64} height={64} />
        <div>
          <p>Name of Robot: {robot.name}</p>
          <p>Purpose: {robot.purpose}</p>
          <div className="flex flex-1 py-2 gap-x-2 items-between">
            <button onClick={onClose}>Close</button>
            <button onClick={openEditModal}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
