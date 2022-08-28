import Image from "next/image";
import React from "react";
import Button from "./Button";

function HighlightMovie() {
  const posterUrl = "https://whatsondisneyplus.com/wp-content/uploads/2020/10/88C7481B-E46D-4818-A357-487C478E1BEE-scaled.jpeg";
  return (
    <div className="relative w-full max-w-[1200px]">
      <div className=" relative h-[50vh] md:h-[600px] w-full overflow-clip">
        <Image className="h-full w-full " src={posterUrl} layout="responsive" width={1080} height={1920} />
        <div className="w-full px-[5%] absolute bottom-[10%] translate-y-[0%] flex flex-col space-y-4 z-40">
          <p className="w-[60%] max-w-[500px] text-3xl md:text-5xl font-[900] tracking-wide uppercase">Raya and the last dragon</p>
          <div className="flex items-center space-x-1">
            <Button label="Watch now" variant="filled" color="#F40612" />
            <Button label="Watch list" variant="outline" color="whitesmoke" />
          </div>
        </div>
      </div>
      <div className=" h-full w-full absolute top-0 right-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,1)] " />
    </div>
  );
}

export default HighlightMovie;
