type ErrorPageProps = {
  textError: string;
};
function ErrorPage({ textError }: ErrorPageProps) {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-10 mt-10">
      <div className="flex justify-center w-full">
        <p className="xl:w-[30%]">
          ⣿⣿⡿⣫⣾⠏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣀⣀⣀⠄⠄⠄⠄⠄⠄ ⣿⡇⠱⠉⠁⠄⠄⠄⠄⠄⠄⢀⣀⣤⣶⣶⣿⣿⣿⣿⣿⣿⣿⣦⠄⠄⠄⠄⠄
          ⣿⡇⠄⠄⠄⠄⠄⢀⣠⣛⡩⣩⣭⡹⣿⣿⣿⣿⠞⣛⣛⣛⡲⣿⡇⠄⠄⠄⠄ ⣿⡇⠄⠄⠄⡾⣡⣾⣿⣷⣹⣿⣿⡿⣪⡻⠟⣱⣿⣿⣿⣿⣿⣷⡹⠄⠄⠄⠄
          ⣿⡇⠄⠄⣼⡇⣿⣻⣿⠟⡛⢿⣿⣾⣿⡇⢰⣍⢻⡿⠛⢿⣿⡭⣿⣷⠄⠄⠄ ⣿⣧⣄⡀⣿⡇⣮⣽⣿⣮⣉⣾⣿⣿⣿⣇⡸⣿⣿⣆⠛⣰⣿⣾⡿⣿⠄⠄⠄
          ⣿⣇⡼⣄⣿⣿⡄⠙⢿⣏⣿⣿⡮⠁⣉⣾⣷⡈⠃⢿⣿⣬⡭⠝⣀⣿⠄⠄⠐ ⡆⡇⣹⣿⣿⣿⣿⡿⠓⠛⣉⣉⣉⣉⣙⣛⠓⠾⣟⢿⣿⣿⣿⣿⣿⣿⣿⠇⠄⠙
          ⠁⡇⣞⣿⡿⠋⠁⠄⠄⠈⠉⠙⠛⠛⠻⠿⠿⠿⣶⣌⠻⣿⣿⣿⣿⣿⢗⢴⣆⢣ ⠸⣇⡻⠈⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢻⣷⡌⢿⣿⣿⣿⢸⠼⣣⣾
          ⣦⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠄⠄⠄⠄⠄⠄⠄⠄⠙⠛⠈⣿⡫⡼⢠⣾⣿⣿ ⣿⣇⠄⣀⣠⡀⠄⠄⠴⠾⠿⠿⠶⠶⣦⣤⡀⠄⠄⠄⠄⠄⠄⢨⠯⢁⣿⣿⣿⣿
          ⣿⣿⣦⢒⠤⣅⡶⣶⣶⣾⣿⣿⣿⣷⣶⣮⣍⠢⠄⠄⠄⠄⠄⠐⢠⣾⣿⣿⣿⣿ ⣿⣿⣿⣧⡐⠫⣉⡿⣬⡞⢿⣿⢯⠽⣶⡽⢟⣛⢖⣨⣛⠛⢃⣴⣿⣿⣿⣿⣿⣿
        </p>
      </div>
      <p className=" text-xl xl:text-7xl text-red-500 text-center">
        {textError}
      </p>
    </section>
  );
}

export { ErrorPage };
