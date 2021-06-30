import React, { useEffect } from "react";
import Navbar from "../../components/atoms/Navbar";
import firebase from "../../configs/firebase";
import ButtonsRight from "../../components/atoms/ButtonsRight";
import TitleText from "../../components/atoms/TitleText";
import CardJumlahPasien from "../../components/molecules/CardJumlahPasien";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import users from "../../constants/api/users";

import Buttons from "../../components/atoms/ButtonsRight";

import Loading from "../../parts/Loading";
import EmptyState from "../../parts/EmptyState";

import {
  statusUser,
  fetchUsers,
  messageUser,
} from "../../store/actions/getUser";

export default function Dashboard({ history }) {
  const date = new Date();
  function handleInput() {
    history.push("/add-data-pasien");
  }

  const dispatch = useDispatch();
  const GETUSER = useSelector((state) => state.getUser);

  useEffect(() => {
    window.scroll(0, 0);

    

    dispatch(statusUser("loading"));
    users.get((data) => {
      data = data.val();
      var list = [];
      if (data) {
        Object.keys(data).map((val, key) => {
          var object = {
            uid : data[val].uid,
            fullName: data[val].fullName,
            nik: data[val].nik,
            email: data[val].email,
            isolasi: data[val].isolasi,
            gejala: data[val].gejala,
          };
          list.push(object);
        });
      }

      dispatch(fetchUsers(list));
    });
  }, [dispatch]);

  function handleLihat(id)
  { 
    history.push('/data-pasien/riwayat/'+id)
  }

  return (
    <>
      <Navbar></Navbar>
      <div>
        <div className="py-6 sm:px-6 lg:px-64 "></div>
        <TitleText title="Data Pasien" desc={moment(date).format("LLLL")} />

        {/* Button */}
        <div className="flex justify-end pr-14">
          <ButtonsRight onClick={handleInput} title="Input Manual" />
        </div>

        {/* Tabel Data Pasien */}
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-5 align-middle inline-block min-w-full sm:px-6 lg:px-20">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Nama Lengkap
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase  tracking-wider"
                      >
                        Alamat Isolasi
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        NIK
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Riwayat Gejala
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {GETUSER.status === "loading" && <Loading></Loading>}
                    {GETUSER.status === "error" && GETUSER.message}
                    {GETUSER.status === "ok" &&
                      (GETUSER.total > 0 ? (
                        <>
                          {Object.values(GETUSER.data)?.map?.((item, index) => {
                            return (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900"></div>
                                    </div>
                                  </div>
                                  {item.fullName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap flex text-gray-500">
                                  {item.isolasi}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {item.nik}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <Buttons
                                    title="Lihat"
                                    onClick={() => handleLihat(item.uid)}
                                  />
                                </td>
                              </tr>
                            );
                          })}
                        </>
                      ) : (
                        <div></div>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* End of Tabel Data Pasien */}

          <div>
            <h1 className="pt-24 text-3xl font-bold text-gray-900 sm:pl-6 lg:pl-14">
              Jumlah Pasien Isolasi Mandiri
            </h1>
            <h1 className="pt-2 text-1xl font-light text-gray-700 sm:pl-6 lg:pl-14">
              Februari 2021
            </h1>
          </div>

          {/* Card Jumlah */}
          <div className="py-1 ml-6 mt-3 sm:mt-8 px-1 sm:flex sm:justify-center lg:justify-start px-12">
            <h1 className="pt-1 text-2xl font-bold text-white-700">
              Pasien Isolasi{" "}
            </h1>
            <h1 className="ml-12 pt-1 text-2xl font-bold text-white-700">
              Pasien Sembuh{" "}
            </h1>
          </div>
          <CardJumlahPasien isolasi="15" sembuh="24" />
        </div>
      </div>
    </>
  );
}
