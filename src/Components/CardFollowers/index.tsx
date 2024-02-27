import { Anchor } from "../Anchor";
import { FiGithub } from "react-icons/fi";

type CardFollowersProps = {
  avatar: string;
  name: string;
  githubUrl: string;
};

function CardFollowers({
  avatar,
  name,
  githubUrl,
}: CardFollowersProps): JSX.Element {
  return (
    <article className="bg-[#0b15278f] rounded-xl flex xl:flex-col gap-3 items-center w-full xl:w-[70%] xl:h-[290px] overflow-hidden p-5 border-2">
      <img
        className="rounded-full w-[30%] xl:w-full"
        src={avatar}
        alt={name}
      />
      <div className="w-full text-center flex flex-col  h-full">
        <h2 className="text-xl">{name}</h2>
        <Anchor
          css="bg-[#1e89b37e] p-[5px] rounded-xl flex items-center justify-center gap-1 mt-auto"
          hrfe={githubUrl}
          textButton="View Profile"
          icon={<FiGithub />}
        />
      </div>
    </article>
  );
}

export { CardFollowers };
