import PopUp from "components/PopUp";
import useMovieList from "./hook";

function MovieList() {
  const hook = useMovieList();
  return (
    <div className="max-w-[1200px] flex flex-col space-y-4 px-4 items-center w-full">
      <p className="text-xl font-[800]">Trending</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
        {(() => {
          const numberList = [];
          for (let index = 0; index < 10; index++) {
            numberList.push(index + 1);
          }

          return numberList.map((number) => (
            <div
              key={number}
              onClick={() => hook.handleCardClick({ id: number, name: `movie ${number} title` })}
              className="cursor-pointer rounded-lg flex flex-col items-center justify-center space-y-2 "
            >
              <div className="h-[300px] w-full grow bg-[#161A18] cursor-pointer rounded-lg flex items-center justify-center "></div>
              <div className="flex items-center justify-between w-full px-4">
                <p className="capitalize">movie {number} title</p>
              </div>
            </div>
          ));
        })()}
      </div>
      {hook.show && <PopUp onClick={hook.handlePopUpClose} />}
    </div>
  );
}

export default MovieList;
