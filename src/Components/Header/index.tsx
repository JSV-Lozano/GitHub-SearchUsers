import { RiSearchLine } from "react-icons/ri";
import { useGitHubContext } from "../../Context";

function Header() {
  const { getData, handleChange } = useGitHubContext();
  return (
    <header className="flex flex-col items-center xl:flex-row justify-between gap-3 sm:gap-0">
      <h1 className="text-3xl font-medium flex gap-1">
        GitHub<span className="text-red-600">Search</span>
      </h1>
      <form
        onSubmit={getData}
        className="overflow-hidden rounded-xl bg-white flex items-center text-black w-full sm:w-[50%] xl:w-[20%]"
      >
        <RiSearchLine
          size={25}
          className="ml-1"
        />
        <input
          onChange={handleChange}
          placeholder="Search"
          type="text"
          className="bg-transparent w-32 md:w-full h-full pl-1 "
        />
        <button
          className="bg-[#1e89b3] h-full text-white p-1 rounded-l-full ml-auto"
          onClick={getData}
          type="submit"
        >
          Search
        </button>
      </form>
    </header>
  );
}

export default Header;
