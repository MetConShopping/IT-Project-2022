import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import jsPDF from "jspdf";
import "./report.css";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";

export default class IReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReportData: [],
    };
  }
  printDocument() {
    const input = document.getElementById("pdfdiv");
    html2canvas(input).then((canvas) => {
      var img = new Image();
      const doc = new jsPDF("p", "mm", "a4");
      doc.setTextColor(255, 0, 0);
      doc.setFontSize(28);
      doc.text(85, 10, "Inventory");
      doc.setTextColor(0, 0, 255);
      doc.setFontSize(16);
      doc.text(10, 70, "Stock Management");
      doc.setTextColor(0, 255, 0);
      doc.setFontSize(12);
      doc.text(145, 85, "Signature :");
      //Date
      var m_names = new Array(
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      );

      var today = new Date();
      var seconds = today.getSeconds();
      var minutes = today.getMinutes();
      var hours = today.getHours();
      var curr_date = today.getDate();
      var curr_month = today.getMonth();
      var curr_year = today.getFullYear();

      today =
        m_names[curr_month] +
        " " +
        curr_date +
        "/ " +
        curr_year +
        " | " +
        hours +
        "h : " +
        minutes +
        "min : " +
        seconds +
        "sec";
      var newdat = today;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(130, 93, newdat);
      var imgHeight = (canvas.height * 200) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "JPEG", 5, 100, 200, imgHeight);
      const date = Date().split(" ");
      // we use a date string to generate our filename.
      const dateStr =
        "StockManagement_" + date[0] + date[1] + date[2] + date[3] + date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  }

  componentDidMount() {
    axios.get("http://localhost:8070/inventory").then((response) => {
      console.log(response?.data);
      this.setState({
        ReportData: response?.data,
      });
    });
  }
  render() {
    console.log(this.state?.CustomerData);
    return (
      <div>
        <TableContainer id="pdfdiv" className="txt" component={Paper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Item Id</TableCell>
                <TableCell align="right">Item Name</TableCell>
                <TableCell align="right">Stock</TableCell>
                <TableCell align="right">Stock In</TableCell>
                <TableCell align="right">Stock Out</TableCell>
                <TableCell align="right">Unit Price</TableCell>
                <TableCell align="right">photo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state?.ReportData?.map((p, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="right">{p.itemId}</TableCell>
                    <TableCell align="right">{p.itemName}</TableCell>
                    <TableCell align="right">{p.stock}</TableCell>
                    <TableCell align="right">{p.stockIn}</TableCell>
                    <TableCell align="right">{p.stockOut}</TableCell>
                    <TableCell align="right">{p.unitPrice}</TableCell>
                    <TableCell align="right"><img src={"images/" + p.photo}  style={{width:"100px" , height:"100px"}}/></TableCell> 
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>{"MetCon Shopping"}
        <br />
        <br />
        <center>
          <div>
            <button
              className="info__button"
              onClick={this.printDocument}
              variant="contained"
              color="primary"
            >
              <i class="fa fa-file-pdf-o" aria-hidden="true"></i> Download PDF
            </button>
            <br />

            <Link
              to={"/view"}>
              <button
                variant="contained"
                color="primary"
                style={{ float: "right", background: "lightgreen" }}
              >
                <i class="fa fa-reply" aria-hidden="true"></i> Go Back
              </button>
            </Link>
          </div>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
          <br />
          <span style={{ color: "white" }}>{"Copyright © "}</span>
          <span style={{ color: "lightcoral" }}></span>
          <span style={{ color: "white" }}>
            {" " + new Date().getFullYear() + " . "}
          </span>
        </center>
      </div>
    );
  }
}