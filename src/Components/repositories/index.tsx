import { Repositories } from "../../types/GitHubApiTypes";
import { CardRepos } from "../CardRepos";

type UserRepositoriesProps = {
  repositories: Repositories | undefined;
  loading: boolean;
};

function UserRepositories({
  repositories,
  loading,
}: UserRepositoriesProps): JSX.Element {
  return (
    <section className="grid xl:grid-cols-2 gap-10 mb-2 mt-5 xl:mt-0">
      {loading ? (
        <>
          <p>Cargando</p>
        </>
      ) : (
        Array.isArray(repositories) &&
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
      )}
    </section>
  );
}

export { UserRepositories };
