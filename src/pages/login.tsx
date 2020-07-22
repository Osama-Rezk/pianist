import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../actions/user";
import { RootState } from "../reducers";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";
import { loginUrl } from "../constants/config";
export const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const location = useLocation();

  const dispatch = useDispatch();

  const history = useHistory();

  const { id } = useSelector((state: RootState) => state.user);

  const value = queryString.parse(location.search);

  useEffect(() => {
    if (value.code) {
      signMeIn();
    }
  }, [value.code]);

  const signMeIn = async () => {
    try {
      setLoading(true);
      await dispatch(signIn(value.code, history));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErr("login failed please try again");
    }
  };

  useEffect(() => {
    if (id) history.replace("/home");
  }, [id]);

  return loading ? (
    <Loader />
  ) : err ? (
    <>
      <Error message={err} />
      <a href={loginUrl}>Try Again</a>
    </>
  ) : (
    <div>this is login page</div>
  );
};
