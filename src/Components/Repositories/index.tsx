import { useGitHubContext } from "../../Context";
import { Repositories } from "../../types/GitHubApiTypes";
import { CardRepos } from "../CardRepos";
import { ErrorPage } from "../Error";
import { CardRepoLoader } from "../Loaders";

function UserRepositories(): JSX.Element {
  const { repositories, loading, error } = useGitHubContext();
  return (
    <section
      className={`${
        !error?.getRepositoriesError && "grid xl:grid-cols-2 gap-10"
      } mb-2 mt-5 xl:mt-0`}
    >
      {loading ? (
        <CardRepoLoader />
      ) : (
        <>
          {error?.getRepositoriesError ? (
            <section className="w-full">
              <ErrorPage textError="Error al obtener repositorios" />
            </section>
          ) : (
            <>
              {Array.isArray(repositories) && repositories.length > 0 ? (
                repositories.map((repo: Repositories) => (
                  <CardRepos
                    key={repo.id}
                    name={repo.name}
                    visibility={repo.visibility}
                    description={repo.description}
                    language={repo.language}
                    forks={repo.forks}
                    stars={repo.stargazers_count}
                    repoUrl={repo.html_url}
                  />
                ))
              ) : (
                <p className="text-2xl">No tiene repositorios :C</p>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}

export { UserRepositories };
