import { useState } from "react";
import { UserRepositories } from "../Repositories";
import { UserFollowers } from "../Followers";



function UserOtherInfo(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>("Repositories");

  const handleClickTab =
    (tab: string): React.MouseEventHandler<HTMLButtonElement> =>
    () => {
      setActiveTab(tab);
    };
  return (
    <section className="w-full flex flex-col items-center xl:gap-14">
      <nav className="xl:w-[50%] xl:text-xl">
        <ul className="flex w-full gap-20 items-center justify-center border-b-2 border-[#aaaaaa86] p-2">
          <li
            className={`transition-all duration-200 ease-in-out ${
              activeTab === "Repositories"
                ? "border-b-2 border-red-700 border-opacity-100"
                : "border-opacity-0  border-red-700 "
            }`}
          >
            <button onClick={handleClickTab("Repositories")}>
              Repositores
            </button>
          </li>
          <li
            className={`transition-all duration-200 ease-in-out ${
              activeTab === "Followers"
                ? "border-b-2 border-red-700 border-opacity-100"
                : "border-opacity-0  border-red-700 "
            }`}
          >
            <button onClick={handleClickTab("Followers")}>Followers</button>
          </li>
        </ul>
      </nav>
      <section>
        {activeTab === "Repositories" && <UserRepositories />}
        {activeTab === "Followers" && <UserFollowers />}
      </section>
    </section>
  );
}

export { UserOtherInfo };
