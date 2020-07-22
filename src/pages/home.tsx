import React, { useEffect, useState } from "react";
import { GenreList } from "../components/GenreList";
import { useDispatch } from "react-redux";
import { getGenres } from "../actions/genres";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";
export const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getAllGeners();
  }, []);

  const getAllGeners = async () => {
    try {
      setLoading(true);

      await dispatch(getGenres());
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErr("some thing bad happend");
    }
  };

  return (
    <div>
      <Header />
      {loading ? <Loader /> : err ? <Error message={err} /> : <GenreList />}
    </div>
  );
};
