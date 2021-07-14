
import React, { Component } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import Navbar from "../../components/atoms/Navbar";

class chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
 
  render() {
    

    return (
        <>
        <Navbar></Navbar>
        <div style={{ marginLeft: 250, marginTop: 70}}>
        <div className="row">
        <div className="flex flex-col mb-4">
        <label className="text-lg mb-2">Kecamatan</label>
            <select className="flex justify-between cursor-pointer bg-white focus:outline-none transition-all duration-200 border px-4 py-3 w-full">
            <option  value="">Pilih Kecamatan</option>
              </select>
          </div>
          <div className="mixed-chart">
          <Chart
    options={this.state.options}
    series={this.state.series}
    type="line"
    width="800"
  />
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default chart;