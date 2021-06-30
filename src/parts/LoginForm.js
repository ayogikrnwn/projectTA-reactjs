import React from "react";

import { ReactComponent as Logo } from "../assets/icon/iconlogo.svg";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import users from "../constants/api/users";
import { populateProfile } from "../store/actions/users";
import { Button, TextField } from "@material-ui/core";
import Buttons from "../components/atoms/Buttons";

import useForm from "../helpers/hooks/useForm";

function LoginForm({ history }) {
  const dispatch = useDispatch();
  const [{ email, password }, setState] = useForm({
    email: "",
    password: "",
  });

  function LoginKuy() {
    users.login(
      { email, password },
      (data) => {
        users.getAdmin(
          data.user.uid,
          (response) => {
            if (response.val()) {
              const dataUser = {
                fullName : response.val().name,
                email: data.user.email,
                uid: data.user.uid,
                emailVerified: data.user.emailVerified,
                refreshToken: data.user.refreshToken,
              };

              dispatch(populateProfile(dataUser));
              localStorage.setItem(
                "KHASMA:token",
                JSON.stringify({
                  ...dataUser,
                  email: email,
                })
              );

            

              history.push("/");
            } else {
              alert("Username / passsword salah")
            }
          },
          (errorResponse) => {}
        );
      },
      (err) => {
        console.log("err", err.message);
      }
    );
  }

  return (
    <>
      <div className="bg-white-100">
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-white-100">
          <div className="max-w-md w-full space-y-8">
            <Logo className="mx-auto" width="200px" height="200px"></Logo>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              APEL KHASMA
            </h2>
            <p className="mt-2 text-center text-sm font-extrabold ">
              <p className="font-medium break-words text-gray-500">
                Website ini digunakan khusus untuk Satgas Covid-19 Kabupaten
                Sumedang
              </p>
              <p className="font-medium break-words text-gray-500">
                Dilarang keras menyebarkan data pasien kepada orang yang tidak
                berwenang
              </p>
            </p>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <TextField
                  value={email}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={setState}
                  autoFocus
                />
                <TextField
                  value={password}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={setState}
                  autoComplete="current-password"
                />

                <Buttons className="btn" title="Login" onClick={LoginKuy} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(LoginForm);
