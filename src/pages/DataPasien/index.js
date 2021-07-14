import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { default as Buttons, default as ButtonsRight } from "../../components/atoms/ButtonsRight";
import InputIcon from "../../components/atoms/InputIcon";
import Navbar from "../../components/atoms/Navbar";
import users from "../../constants/api/users";
import Loading from "../../parts/Loading";
import {
  fetchUsers
} from "../../store/actions/getUser";



export default function DataPasien({ history }) {
  const date = new Date();
  const dispatch = useDispatch();
  const GETUSER = useSelector((state) => state.getUser);

  useEffect(() => {
    window.scroll(0, 0);
    users.get((data) => {
      data = data.val();
      console.log(data)
      var list = [];
      if (data && Object.keys(data).map.length > 0) {
        Object.keys(data).map((val, key) => {
          var object = {
            fullName: data[val].fullName,
            nik: data[val].nik,
            isolasi: data[val].isolasi,
            gejala: data[val].gejala,
            email: data[val].email,
            status: data[val].status,
            urgent: data[val].urgent,
            uid: val,
          };
          list.push(object);
        });
      }
      dispatch(fetchUsers(list));
    });
  }, [dispatch]);

  function handleLihat(id) {
    history.push("/data-pasien/" + id);
  }

  function handleChart()
  { 
    history.push('/chart-data-pasien')
  }

  return (
    <>
      <Navbar></Navbar>
      <div class="flex justify-between mt-24">
        <div>
          <h1 class="pt-5 text-3xl font-bold text-gray-900 sm:pl-6 lg:pl-14">
            Data Pasien Isolasi Mandiri
          </h1>
          <h1 class="pt-2 text-1xl font-light text-gray-700 sm:pl-6 lg:pl-14">
            {moment(date).format("LLLL")}
          </h1>
         
        </div>
       
        
       
        <div className="mr-14">
        <InputIcon />
        <ButtonsRight title="Lihat Chart" onClick={handleChart} />
       
        </div>
      </div>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-8 align-middle inline-block min-w-full sm:px-6 lg:px-20">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
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
                      Nama Lengkap
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tempat Isolasi
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Red Button
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Aksi
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
                                {item.nik}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap flex justify-center">
                                {item.fullName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {item.isolasi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {item.status}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {item.urgent}
                              </td>
                              <td>
                                <Buttons
                                  title="Lihat"
                                  onClick={() => handleLihat(item.uid)}
                                />
                                <Buttons
                                  title="Verifikasi"
                                  
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
      </div>
    </>
  );
}
