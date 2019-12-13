import React, { Component } from "react";
import Axios from "axios";
import { APIURL } from "../suport/apiUrl";
import Swal from "sweetalert2";
import { Modal, ModalHeader, ModalFooter, Button } from "reactstrap";

class Register extends Component {
  state = {
    register: false,
    regsiteradd: false,
    modalkelogin: false
  };

  btnRegister = () => {
    var username = this.refs.user.value;
    var password = this.refs.pass.value;
    var confpassword = this.refs.confPass.value;
    var role = "user";
    var newUser = { username, password, role };
    if (username === "" || password === "" || confpassword === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Data Gaboleh Ada Yang Kosong!"
      });
    } else {
      Axios.get(`${APIURL}users?username=${username}`)
        .then(res1 => {
          console.log(res1);
          if (res1.data.length === 0) {
            if (password !== confpassword) {
              // Swal.fire({
              //   icon: "error",
              //   title: "Oops...",
              //   text: "Password must match"
              // });
            } else {
              Axios.post(`${APIURL}users`, newUser)
                .then(res => {
                  // Swal.fire({
                  //   icon: "success",
                  //   title: "Success!",
                  //   text:
                  //     "Anda Telah berhasil Register. Silahkan untuk Login :)"
                  // });
                  this.props.history.push("login");
                })
                .catch(err1 => {
                  console.log(err1);
                });
            }
          } else {
            // Swal.fire({
            //   icon: "error",
            //   title: "Oops...",
            //   text: `"${username}" Tidak Tersedia, Try Using Another Username :)`
            // });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    if (this.state.register && this.state.modalkelogin) {
      return (
        <Modal isOpen={this.state.modalkelogin}>
          <ModalHeader>Anda Berhasil Register</ModalHeader>
          <ModalFooter>
            
            <Button>Oke</Button>
          </ModalFooter>
        </Modal>
      );
    }

    return (
      <div>
        <div className="mt-3 d-flex justify-content-center">
          <div
            style={{ width: "500px", border: "1px solid black" }}
            className="rounded p-2"
          >
            <h1>Register</h1>{" "}
            <div className="p-1" style={{ borderBottom: "1px solid black" }}>
              <input
                type="text"
                style={{
                  border: "transparent",
                  width: "100%",
                  fontSize: "20px"
                }}
                ref="user"
                placeholder="Username"
              />
            </div>
            <div className="p-1" style={{ borderBottom: "1px solid black" }}>
              <input
                type="password"
                style={{
                  border: "transparent",
                  width: "100%",
                  fontSize: "20px"
                }}
                ref="pass"
                placeholder="Password"
              />
            </div>
            <div className="p-1" style={{ borderBottom: "1px solid black" }}>
              <input
                type="password"
                style={{
                  border: "transparent",
                  width: "100%",
                  fontSize: "20px"
                }}
                ref="confPass"
                placeholder="Confirm Password"
              />
            </div>
            <div>
              <input type="checkbox" className="mt-3" /> I agree to the Terms
              and Conditions
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary mt-3"
                onClick={this.btnRegister}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
