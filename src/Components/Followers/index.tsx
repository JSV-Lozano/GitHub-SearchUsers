import { useGitHubContext } from "../../Context";
import { Followers } from "../../types/GitHubApiTypes";
import { CardFollowers } from "../CardFollowers";
import { ErrorPage } from "../Error";
import { CardFollowLoader } from "../Loaders";

function UserFollowers() {
  const { loading, follows: followers, error } = useGitHubContext();
  return (
    <section
      className={`${
        !error?.getFollowersError && "grid grid-cols-1 xl:grid-cols-4 gap-3"
      }mb-2 mt-5 xl:mt-0`}
    >
      {loading ? (
        <CardFollowLoader />
      ) : (
        <>
          {error?.getFollowersError ? (
            <section className="w-full">
              <ErrorPage textError="Hubo un problema al obtener los seguidores" />
            </section>
          ) : (
            <>
              {Array.isArray(followers) && followers.length > 0 ? (
                followers.map((follows: Followers) => (
                  <CardFollowers
                    key={follows.id}
                    avatar={follows.avatar_url}
                    name={follows.login}
                    githubUrl={follows.html_url}
                  />
                ))
              ) : (
                <p className="text-2xl">No tiene seguidores :c</p>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}

export { UserFollowers };
