import { useState } from "react";
import { UserRepositories } from "../repositories";
import { Followers, Repositories } from "../../types/GitHubApiTypes";
import { UserFollowers } from "../Followers";

type OtherInfo = {
  repositories: Repositories | undefined;
  followers: Followers | undefined;
  loading: boolean;
};

function UserOtherInfo({
  repositories,
  followers,
  loading,
}: OtherInfo): JSX.Element {
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
        {activeTab === "Repositories" && (
          <UserRepositories
            repositories={repositories}
            loading={loading}
          />
        )}
        {activeTab === "Followers" && (
          <UserFollowers
            followers={followers}
            loading={loading}
          />
        )}
      </section>
    </section>
  );
}

export { UserOtherInfo };
