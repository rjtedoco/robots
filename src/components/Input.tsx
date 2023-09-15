import { useState, Dispatch, SetStateAction } from "react";
import { Robot } from "../common/types";

interface InputProps {
  robots: Robot[];
  setRobots: Dispatch<SetStateAction<Robot[]>>;
}

const Input = ({ robots, setRobots }: InputProps) => {
  const [formData, setFormData] = useState<Robot>({
    id: "",
    name: "",
    purpose: "",
    seed: "",
  });

  function generateRandomSeed() {
    return Math.floor(Math.random() * 1000).toString();
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const indexId = (robots.length + 1).toString();
    setRobots([
      {
        id: indexId,
        name: formData.name,
        purpose: formData.purpose,
        seed: generateRandomSeed(),
      },
      ...robots,
    ]);
    setFormData({ id: "", name: "", purpose: "", seed: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form
        className="my-4 flex flex-col"
        onSubmit={(evt) => {
          handleSubmit(evt);
        }}
      >
        <input
          type="text"
          placeholder="Enter name here..."
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="py-1"
        />
        <input
          type="text"
          placeholder="Enter purpose here..."
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          className="py-1"
        />
        <button className="my-2">Add item</button>
      </form>
    </div>
  );
};

export default Input;
