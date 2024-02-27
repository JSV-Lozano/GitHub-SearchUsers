function UserLoader() {
  return (
    <section className="-white xl:w-[50%] h-full flex flex-col gap-5 animate-pulse">
      <picture className="w-full flex justify-center xl:justify-start">
        <img className="rounded-full bg-gray-300 w-[300px] h-[300px] xl:h-[300px] " />
      </picture>
      <div>
        <div className="text-4xl bg-gray-300 h-[20px] rounded-xl w-[80%] xl:w-[50%] mb-2"></div>
        <div className=" bg-gray-300 h-[20px] rounded-xl w-[50%] xl:w-[20%]"></div>
        <div className="mt-2 text-xl w-[60%] xl:w-[40%] h-[20px] rounded-xl bg-gray-300"></div>
      </div>
      <div className="bg-gray-300 xl:w-[70%] h-[40px] text-xl p-2 text-center rounded-xl flex justify-center items-center gap-2"></div>
      <section className="border-t-[1px] border-b-[1px] rounded-lg flex flex-col gap-2 xl:w-[70%]  xl:h-[10rem]">
        <div className="mt-3 flex  flex-col gap-3">
          <div className="bg-gray-300 h-[20px] rounded-xl w-[50%] xl:w-[80%]"></div>
          <div className="bg-gray-300 h-[20px] rounded-xl w-[80%] xl:w-[30%]"></div>
        </div>
        <div className="mb-3 flex flex-col gap-2">
          <div className="bg-gray-300 h-[20px] rounded-xl w-[70%] xl:w-[50%]"></div>
          <div className="bg-gray-300 h-[20px] rounded-xl w-[30%] xl:w-[70%]"></div>
          <div className="bg-gray-300 h-[20px] rounded-xl w-[70%] xl:w-[20%]"></div>
        </div>
      </section>
    </section>
  );
}

export { UserLoader };

function CardRepoLoader() {
  return (
    <>
      {Array.from({ length: 6 }, (_, index) => (
        <article
          key={index}
          className="bg-gray-300 xl:w-[30rem] rounded-xl flex flex-col overflow-hidden animate-pulse"
        >
          <section className="p-5">
            <div className="flex justify-between p-2">
              <div className="w-1/4 bg-[#55555581] p-2 rounded-xl h-[40px]"></div>
              <div className="w-1/4 bg-[#55555581] p-2 rounded-xl h-[40px]"></div>
            </div>
            <div className="w-full bg-[#55555581] p-2 rounded-xl h-8 mt-4"></div>
          </section>
          <div className="flex justify-between items-center w-full p-3 bg-[#55555556] mt-auto">
            <div className="flex gap-2 xl:gap-5">
              <div className="w-16 h-6 bg-[#55555581] rounded-xl"></div>
              <div className="w-16 h-6 bg-[#55555581] rounded-xl"></div>
              <div className="w-16 h-6 bg-[#55555581] rounded-xl"></div>
            </div>
            <div className="w-16 h-6 bg-[#55555581] rounded-xl"></div>
          </div>
        </article>
      ))}
    </>
  );
}

export { CardRepoLoader };

function CardFollowLoader() {
  return (
    <>
      {Array.from({ length: 6 }, (_, index) => (
        <article
          key={index}
          className="bg-gray-300 rounded-xl flex xl:flex-col gap-3 items-center w-full xl:w-[70%] xl:h-[290px] overflow-hidden p-5  animate-pulse"
        >
          <img className="w-[300px] h-[150px] xl:h-[500px] bg-gray-200 rounded-full" />
          <div className="w-full text-center flex flex-col h-[80%] items-center">
            <div className="w-2/3 h-6 bg-gray-200 rounded-md mb-2"></div>
            <div className="w-full h-[30px] bg-gray-200 rounded-md mt-auto"></div>
          </div>
        </article>
      ))}
    </>
  );
}

export { CardFollowLoader };
