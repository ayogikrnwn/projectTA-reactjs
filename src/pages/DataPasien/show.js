import React, { useEffect } from "react";
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
import CardLarge from "../../components/molecules/CardLarge";
import NavBar from "../../components/atoms/Navbar";

export default function ShowPasien({ match, history }) {
  const dispatch = useDispatch();

  const GETUSER = useSelector((state) => state.getUser);

  useEffect(() => {
    window.scroll(0, 0);

    dispatch(statusUser("loading"));
    users.details(
      match.params.show,
      (data) => {
        dispatch(watchUser(data.val()));
      },
      (err) => {
        dispatch(messageUser(err?.response?.data?.message ?? "error"));
      }
    );
  }, [match.params.class, dispatch]);

  function handleDokumen() {
    return (
      <a href="#" class="underline text-2xl text-blue-600">
        Klik Untuk Melihat
      </a>
    );
  }

  function handleGejala() {
    return <div className="text-2xl">Riwayat Gejala</div>;
  }

  function handleButton(id) {
    history.push("/data-pasien/riwayat/" + id);
  }

  return (
    <>
      <NavBar></NavBar>
      {GETUSER.status === "loading" && <Loading></Loading>}
      {GETUSER.status === "error" && GETUSER.message}
      {GETUSER.status === "ok" && (
        <div className="flex-1">
          <div className="flex justify-center pt-10">
            <TitleText title="Data Pasien Isolasi Mandiri" />
          </div>
          <div className="px-96 mt-14">
            <CardLarge title="Nama" desc={GETUSER?.data?.fullName} />
            <CardLarge title="NIK" desc={GETUSER?.data?.nik} />
            <CardLarge title="Alamat Isolasi" desc={GETUSER?.data?.isolasi} />

            <CardLarge title="Dokumen" desc={handleDokumen} />
          </div>
          <div className="px-96 mt-14 mb-10">
            <Buttons
              title="Riwayat Gejala"
              onClick={() => handleButton(GETUSER.data.uid)}
            />
          </div>
        </div>
      )}
    </>
  );
}
