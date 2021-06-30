import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  statusCourses,
  watchCourse,
  messageCourse,
  messageUser,
  watchUser,
  statusUser,
} from "../../store/actions/getUser";

import users from "../../constants/api/users";

import Loading from "../../parts/Loading";
import Buttons from "../../components/atoms/Buttons";
import TitleText from "../../components/atoms/TitleText";
import NavBar from "../../components/atoms/Navbar";
import { Button, TextField } from "@material-ui/core";
import useForm from "../../helpers/hooks/useForm";

export default function EditPasien({ match, history }) {
  const dispatch = useDispatch();

  const GETUSER = useSelector((state) => state.getUser);

  const [{ fullName, email, isolasi }, setState] = useState({
    fullName: "",
    email: "",
    isolasi: "",
  });

  useEffect(() => {
    window.scroll(0, 0);

    dispatch(statusUser("loading"));

    users.details(
      match.params.show,
      (data) => {
        setState(data.val());
        dispatch(watchUser(data.val()));
      },
      (err) => {
        dispatch(messageUser(err?.response?.data?.message ?? "error"));
      }
    );
  }, [match.params.class, dispatch]);

  function handleButton(id) {
    users.edit(id, { email, fullName, isolasi });
    history.push('/data-pasien')
  }

  return (
    <>
      <NavBar></NavBar>
      {GETUSER.status === "loading" && <Loading></Loading>}
      {GETUSER.status === "error" && GETUSER.message}
      {GETUSER.status === "ok" && (
        <div className="flex-1">
          <div className="flex justify-center pt-10">
            <TitleText title="Edit Pasien Isolasi Mandiri" />
          </div>
          <div className="px-96 mt-14">
            <TextField
              value={fullName}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Nama Pasien"
              name="fullName"
              autoFocus
              onChange={(e) =>
                setState({
                  email: email,
                  isolasi: isolasi,
                  fullName: e.target.value,
                })
              }
            ></TextField>
            <TextField
              value={email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              onChange={(e) =>
                setState({
                  email: e.target.value,
                  isolasi: isolasi,
                  fullName: fullName,
                })
              }
            ></TextField>
            <TextField
              value={isolasi}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="isolasi"
              label="Tempat Isolasi"
              name="isolasi"
              onChange={(e) => setState({
                email: email,
                isolasi: e.target.vaue,
                fullName: fullName,
              })}
            ></TextField>
          </div>
          <div className="px-96 mt-14">
            <Buttons
              title="Edit Data Pasien"
              onClick={() => handleButton(GETUSER.data.uid)}
            />
          </div>
        </div>
      )}
    </>
  );
}
