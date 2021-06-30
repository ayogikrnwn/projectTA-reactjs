import moment from "moment";
import React, { useEffect } from "react";
import TitleText from "../../components/atoms/TitleText";
import Navbar from "../../components/atoms/Navbar";
import { useDispatch, useSelector } from "react-redux";
import users from "../../constants/api/users";
import Loading from "../../parts/Loading";

import {
  statusCourses,
  watchCourse,
  messageCourse,
  messageUser,
  watchUser,
  statusUser,
  watchDetailUser,
} from "../../store/actions/getUser";

export default function RiwayatGejala({ match, history }) {
  const date = new Date();
  const dispatch = useDispatch();
  const GETDETAILUSER = useSelector((state) => state.getUser);

  useEffect(() => {
    window.scroll(0, 0);

    dispatch(statusUser("loading"));
    users.details(
      match.params.show,
      (data) => {
        dispatch(watchDetailUser(data.val()));
      },
      (err) => {
        dispatch(messageUser(err?.response?.data?.message ?? "error"));
      }
    );
  }, [match.params.class, dispatch]);
  const convertTime = (time) => {
    if (time && time.includes("-")) {
      var date = time.split(" ")[0];
      var newdate = date.split("-").reverse().join("-");

      return time;
    } else {
      return "-";
    }
  };
  const cekDataObj = (data) => {
    if (data) {
      return data;
    } else {
      return "-";
    }
  };
  return (
    <>
      <Navbar></Navbar>
      {GETDETAILUSER.status === "loading" && <Loading></Loading>}
      {GETDETAILUSER.status === "error" && GETDETAILUSER.message}
      {GETDETAILUSER.status === "ok" && (
        <>
          <div hidden={true} className="flex justify-center pt-10">
            <TitleText
              title="Riwayat Gejala Pasien Positif"
              desc={moment(date).format("LLLL")}
            />
          </div>
          <div className="pt-24">
            <TitleText title={GETDETAILUSER?.data?.fullName} />
            <TitleText title={GETDETAILUSER?.data?.nik} />
            <TitleText title={GETDETAILUSER?.data?.isolasi} />
          </div>
          <div className="flex flex-col">
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
                            Tanggal
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Kondisi
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Suhu
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Oksigen
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {GETDETAILUSER?.data?.gejala ? (
                          <>
                            {Object.keys(GETDETAILUSER?.data?.gejala).map(
                              (item, index) => {
                                const { gejala, tgl, oksigen, suhu, status } =
                                  GETDETAILUSER?.data?.gejala[item];
                                return (
                                  <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="flex items-center">
                                        <div className="ml-4">
                                          <div className="text-sm font-medium text-gray-900">
                                            {convertTime(tgl)}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="text-sm text-gray-900">
                                        {cekDataObj(gejala)}
                                      </div>
                                    </td>
                                    {/* new col */}
                                    <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="text-sm text-gray-900">
                                        {cekDataObj(suhu)}
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="text-sm text-gray-900">
                                        {cekDataObj(oksigen)}
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="text-sm text-gray-900">
                                        {cekDataObj(status)}
                                      </div>
                                    </td>
                                  </tr>
                                );
                              }
                            )}
                          </>
                        ) : (
                          <tr>
                            <td className="text-center" colSpan="4">
                              Empty
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
