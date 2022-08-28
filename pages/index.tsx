import Genres from "components/genres/Genres";
import HighlightMovie from "components/HighlightMovie";
import MovieList from "components/movir-list/MovieList";
import NavigationBar from "components/NavigationBar";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[#000] text-white relative">
      <Head>
        <title>React~Shifu | Movie-site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <div className="flex flex-col items-center space-y-10 w-full mb-[10vh]">
        <HighlightMovie />
        <Genres />
        <MovieList />
      </div>
    </div>
  );
};

export default Home;
