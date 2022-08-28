import ClickAwayListener from "react-click-away-listener";
import { useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";
import { RootState } from "redux/store";

export default function PopUp({ onClick }: { onClick: (event: Event) => void }) {
  const movie = useSelector((state: RootState) => state.selectedMovie);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    leave: { opacity: 0, duration: 0.3 },
    config: { duration: 0.3 },
  });
  return (
    <animated.div
      style={props}
      className="p-4 transition-all backdrop-blur-md fixed bottom-0 left-0 h-screen w-full flex flex-col justify-end z-[60] bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.4)]"
    >
      <ClickAwayListener onClickAway={onClick}>
        <div className="h-[80vh] w-full bg-[#161A18] rounded-lg p-4 ">
          <p>{movie.name}</p>
        </div>
      </ClickAwayListener>
    </animated.div>
  );
}
