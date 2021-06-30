import React, { useEffect , useState } from "react";
import Buttons from "../../components/atoms/Buttons";
import Navbar from "../../components/atoms/Navbar";
import TitleText from "../../components/atoms/TitleText";
import InputForm from "../../components/molecules/InputForm";
import useForm from "../../helpers/hooks/useForm";
import { TextField } from "@material-ui/core";
import users from "../../constants/api/users";
import Select from "../../components/Form/Select";
import Input from "../../components/Form/Input";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/actions/getUser";

export default function TambahPasien({ history }) {
  const [{  gejala }, setstate] = useForm({
    gejala: "",
  });

  const [{uid}, setUid] = useState({uid : ''})

  const dispatch = useDispatch();
  const GETUSER = useSelector((state) => state.getUser);

  useEffect(() => {
    window.scroll(0, 0);
    users.get((data) => {
      data = data.val();
      var list = [];
      if (data && Object.keys(data).map.length > 0) {
        Object.keys(data).map((val, key) => {
          var object = {
            fullName: data[val].fullName,
            uid: val,
          };
          console.log(list);
          list.push(object);
        });
      }

      dispatch(fetchUsers(list));
    });
  }, [dispatch]);

  function tambah() {
    users.tambah({ uid , gejala }, (data) => {
      if (data) {
        console.log("error");
      } else {
        history.push("/");
      }
    });
  }

  const pilihPasien = (e) => {
    setUid({uid : e.target.value})
  }

  

  return (
    <>
      <Navbar></Navbar>
      <div className="grid justify-items-center mt-12">
        <TitleText title="Input Pasien Manual" />
      </div>
      <div className="rounded-md shadow-sm -space-y-px mx-56 my-8">
        <div className="mx-auto">
        <div className="flex flex-col mb-4">
        <label className="text-lg mb-2">Data Pasien</label>
            <select className="flex justify-between cursor-pointer bg-white focus:outline-none transition-all duration-200 border px-4 py-3 w-full" onChange={pilihPasien}>
            <option  value="">Pilih Pasien</option>
            {GETUSER.status === "error" && GETUSER.message}
            {GETUSER.status === "ok" &&
              (GETUSER.total > 0 ? (
                <>
                  {Object.values(GETUSER.data)?.map?.((item, index) => {
                    return (
                      <option key={index} value={item.uid}>
                        {item.fullName}
                      </option>
                    );
                  })}
                </>
              ) : (
                <option></option>
              ))}
              </select>
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-lg mb-2">Gejala</label>
            <input
              name="gejala"
              onChange={setstate}
              type="text"
              className="bg-white focus:outline-none border w-full px-6 py-3 w-1/2 focus:border-teal-500 border-gray-600 text-gray-600"
              value={gejala}
              placeholder="gejala"
            />
          </div>
          <div className="mt-16">
            <Buttons title="Simpan" onClick={tambah} />
          </div>
        </div>
      </div>
    </>
  );
}
