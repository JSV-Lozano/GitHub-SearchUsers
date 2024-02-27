import Header from "../Components/Header";
import { useGetData } from "../Components/Hooks/useGetData";
import { UserDataInfo } from "../Components/userDataInfo";
import { UserOtherInfo } from "../Components/userOtherInfo";

function GeneralView(): JSX.Element {
  const { userData, handleChange, getData, repositories, loading, follows } =
    useGetData();
  return (
    <section className="text-white h-full p-5 md:p-16">
      <Header
        handleChange={handleChange}
        getData={getData}
      />

      {userData ? (
        <>
          <div className=" w-full flex flex-col xl:flex-row gap-10 mt-20">
            <UserDataInfo userData={userData} />
            <UserOtherInfo
              repositories={repositories}
              followers={follows}
              loading={loading}
            />
          </div>
        </>
      ) : (
        <section>
          <p>OPPS</p>
        </section>
      )}
    </section>
  );
}

export { GeneralView };
