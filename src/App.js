
import {Router ,Route, Switch } from "react-router-dom";
import {createBrowserHistory} from 'history'
import './assets/css/style.css'

import MemberRoute from './components/Routes/MemberRoute'
import GuestRoute from './components/Routes/GuestRoute'


import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import LiveChat from './pages/LiveChat'
import DataPasien from './pages/DataPasien'
import ShowPasien from './pages/DataPasien/show'
import TambahPasien from './pages/DataPasien/tambah'
import ChartPasien from './pages/DataPasien/chart'
import EditPasien from './pages/DataPasien/edit'
import HapusPasien from './pages/DataPasien/hapus'
import RiwayatGejala from './pages/DataPasien/riwayat'

import Logout from './pages/Logout'
import NotFound from './pages/404'
import PetaIsolasi from "./pages/PetaIsolasi";
import PetaFaskes from './pages/PetaFaskes';

function App() {
  const history = createBrowserHistory({basename: process.env.PUBLIC_URL})

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login}></GuestRoute>
          <MemberRoute exact path="/" component={Dashboard}></MemberRoute>
          <MemberRoute exact path="/live-chat/:uid?/" component={LiveChat}></MemberRoute>
          <MemberRoute exact path="/data-pasien" component={DataPasien}></MemberRoute>
          <MemberRoute exact path="/data-pasien/:show" component={ShowPasien}></MemberRoute>
          <MemberRoute exact path="/add-data-pasien" component={TambahPasien}></MemberRoute>
          <MemberRoute exact path="/chart-data-pasien" component={ChartPasien}></MemberRoute>
          <MemberRoute exact path="/data-pasien/edit/:show/" component={EditPasien}></MemberRoute>
          <MemberRoute exact path="/data-pasien/riwayat/:show/" component={RiwayatGejala}></MemberRoute>
          <MemberRoute exact path="/data-pasien/hapus/:show/" component={HapusPasien}></MemberRoute>
          <MemberRoute exact path="/peta-isolasi" component={PetaIsolasi}></MemberRoute>
          <MemberRoute exact path="/peta-faskes" component={PetaFaskes}></MemberRoute>
          <MemberRoute exact path="/logout" component={Logout}></MemberRoute>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
