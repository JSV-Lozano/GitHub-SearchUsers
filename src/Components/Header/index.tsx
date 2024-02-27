import { RiSearchLine } from "react-icons/ri";

type PropsHeader = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getData: () => void;
};
function Header({ handleChange, getData }: PropsHeader) {
  return (
    <header className="flex justify-between">
      <h1 className="text-3xl font-medium">
        Git<span className="text-red-600">Search</span>
      </h1>
      <div className="rounded-xl bg-white flex items-center text-black">
        <input
          onChange={handleChange}
          placeholder="Search"
          type="text"
          className="bg-transparent w-32 md:w-full h-full pl-1 "
        />
        <button onClick={getData}>
          <RiSearchLine />
        </button>
      </div>
    </header>
  );
}

export default Header;
