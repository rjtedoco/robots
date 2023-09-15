import { CSSProperties, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import EditModal from "./EditModal";
import { getAvatar } from "../util/util";
import { Robot } from "../common/types";

interface ListItemProps {
  style: CSSProperties;
  robot: Robot;
  onDelete: () => void;
}

const ListItem = ({ style, robot, onDelete }: ListItemProps) => {
  const { name, purpose } = robot;
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  function openEditModal() {
    setShowModal(false);
    setShowEditModal(true);
  }

  return (
    <>
      <div
        className="cursor-pointer hover:bg-slate-100 flex justify-between items-center"
        style={style}
        onClick={() => setShowModal(true)}
      >
        <div className="flex">
          <img
            src={getAvatar(robot.seed)}
            alt="Avatar"
            width={32}
            height={32}
          />
          <p>
            <span className="font-bold">{name}</span> {purpose}
          </p>
        </div>

        <button className="h-4/5 bg-red-500" onClick={onDelete}>
          <p className="text-white">Delete</p>
        </button>
      </div>
      <div>
        {showModal &&
          createPortal(
            <Modal
              onClose={() => setShowModal(false)}
              robot={robot}
              openEditModal={openEditModal}
            />,
            document.body
          )}
        {showEditModal &&
          createPortal(
            <EditModal onClose={() => setShowEditModal(false)} robot={robot} />,
            document.body
          )}
      </div>
    </>
  );
};

export default ListItem;
