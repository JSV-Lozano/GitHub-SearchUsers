import { Followers } from "../../types/GitHubApiTypes";
import { CardFollowers } from "../CardFollowers";

type FollowersProps = {
  followers: Followers | undefined;
  loading: boolean;
};
function UserFollowers({ followers, loading }: FollowersProps) {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-4 gap-3 mb-2 mt-5 xl:mt-0">
      {loading ? (
        <p>Loading</p>
      ) : (
        Array.isArray(followers) &&
        followers.map((follows: Followers) => (
          <CardFollowers
            key={follows.id}
            avatar={follows.avatar_url}
            name={follows.login}
            githubUrl={follows.html_url}
          />
        ))
      )}
    </section>
  );
}

export { UserFollowers };
