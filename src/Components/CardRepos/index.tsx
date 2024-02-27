import { FaCode, FaCodeBranch, FaStar } from "react-icons/fa";
import { Anchor } from "../Anchor";
type CardRepoProps = {
  name: string | null;
  visibility: string | null;
  description: string | null;
  language: string | null;
  forks: number | null;
  stars: number | null;
  repoUrl: string;
};
function CardRepos({
  name,
  visibility,
  description,
  language,
  forks,
  stars,
  repoUrl,
}: CardRepoProps): JSX.Element {
  return (
    <article className="bg-[#0b15278f] rounded-xl flex flex-col overflow-hidden">
      <section className="p-5">
        <div className="flex justify-between p-2">
          <p className="text-xl md:text-2xl text-red-600">{name}</p>
          <p className="bg-[#55555581] p-2 rounded-xl uppercase h-[40px]">
            {visibility}
          </p>
        </div>
        {description && <p className="w-full opacity-50">{description}</p>}
      </section>
      <div className="flex justify-between items-center w-full p-3 bg-[#55555556] mt-auto">
        <div className="flex gap-2 xl:gap-5">
          {language && (
            <p className="flex items-center gap-1 xl:text-lg">
              <FaCode /> {language}
            </p>
          )}
          {forks !== null && forks > 0 && (
            <p className="flex items-center xl:gap-1">
              <FaCodeBranch />
              {forks}
            </p>
          )}

          {stars !==null && stars > 0 && (
            <p className="flex items-center xl:gap-1">
              <FaStar color="yellow" />
              {stars}
            </p>
          )}
        </div>
        <Anchor
          css="bg-[#1e89b37e] p-[5px] rounded-xl text-center text-xs xl:text-lg"
          hrfe={repoUrl}
          textButton="View Repository"
        />
      </div>
    </article>
  );
}

export { CardRepos };
