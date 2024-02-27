import { ErrorPage } from "../Components/Error";
import Header from "../Components/Header";
import { UserLoader } from "../Components/Loaders";
import { UserDataInfo } from "../Components/UserDataInfo";
import { UserOtherInfo } from "../Components/UserOtherInfo";
import { useGitHubContext } from "../Context";

function GeneralView(): JSX.Element {
  const { loading, error } = useGitHubContext();
  console.log(error);
  return (
    <section className="text-white h-full p-5 md:p-16">
      <Header />
      {error?.getDataError ? (
        <ErrorPage textError="Hubo un problema al obtener los datos" />
      ) : (
        <>
          <div className=" w-full flex flex-col xl:flex-row gap-10 mt-20">
            {loading ? <UserLoader /> : <UserDataInfo />}
            <UserOtherInfo />
          </div>
        </>
      )}
    </section>
  );
}

export { GeneralView };
