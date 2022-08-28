import { useEffect, useState } from "react";
import { SelectedMovieStateI } from "redux/slices/selected-movie";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedMovie } from "redux/slices/selected-movie";

export default function useMovieList() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "scroll";
  }, [show]);

  function handleCardClick(props: SelectedMovieStateI) {
    dispatch(setSelectedMovie(props));
    setShow(true);
  }

  function handlePopUpClose() {
    dispatch(setSelectedMovie({ id: null, name: "" }));
    setShow(false);
  }
  return { show, handleCardClick, handlePopUpClose };
}
