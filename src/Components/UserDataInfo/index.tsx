import { useGitHubContext } from "../../Context";
import { Anchor } from "../Anchor";
import { FaLocationArrow } from "react-icons/fa6";
import { BsBuilding } from "react-icons/bs";
import { FaTwitter, FaUserFriends } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
function UserDataInfo() {
  const { userData } = useGitHubContext();
  return (
    <section className="text-white xl:w-[50%] h-full flex flex-col gap-5">
      <picture className="w-full flex justify-center xl:justify-start">
        <img
          className="rounded-full w-[50%]"
          src={userData?.avatar_url}
          alt="user avatar"
        />
      </picture>
      <div>
        <h2 className="text-4xl">{userData?.name}</h2>
        <a
          className="text-blue-400 text-2xl"
          target="_blank"
          href={userData?.html_url}
        >
          {userData?.login}
        </a>
        <p className="mt-2 text-xl xl:w-[70%]">{userData?.bio}</p>
      </div>
      <Anchor
        css="bg-[#1e89b37e] xl:w-[70%] text-xl p-2 text-center rounded-xl flex justify-center items-center gap-2"
        textButton="View profile on GitHub"
        hrfe={userData?.html_url}
        icon={<FaLocationArrow />}
      />
      <section className="border-t-[1px] border-b-[1px] rounded-lg flex flex-col  gap-2 xl:w-[70%]">
        <div className="mt-3 flex flex-col gap-3">
          {userData?.company && (
            <p className="text-xl flex items-center gap-2">
              <BsBuilding color="#DC2626" />
              {userData?.company}
            </p>
          )}
          {userData?.twitter_username && (
            <p className="text-xl flex items-center gap-2">
              <FaTwitter color="#DC2626" />
              {`@${userData?.twitter_username}`}
            </p>
          )}
        </div>
        <div className="mb-3 flex flex-col gap-1">
          <p className="text-lg text-gray-300 flex items-center gap-2">
            <RiGitRepositoryLine color="#DC2626" />
            {userData?.public_repos} Repos
          </p>
          <p className="text-lg text-gray-300 flex items-center gap-2">
            <FaUserFriends color="#DC2626" />
            {userData?.followers} Followers
          </p>
          <p className="text-lg text-gray-300 flex items-center gap-2">
            <FaUserFriends color="#DC2626" />
            {userData?.following} Following
          </p>
        </div>
      </section>
    </section>
  );
}

export { UserDataInfo };
