import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { NavLink, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";


const Edit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); //additional

  const { id } = useParams();

  useEffect(() => {
    //component mount
    const getData = async () => {
      await fetch(`/assistant/get/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setName(json.name);
          setAge(json.age);
          setGender(json.gender);
          setAddress(json.address);
          setPhone(json.phone);
          setEmail(json.email);
        })
        .catch((err) => alert(err));
    };
    getData();
  }, []);

  const editHandler = async (e) => {
    // create handler for saving data to the db
    e.preventDefault();

    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        //use axios API
        `/assistant/update/${id}`,
        {
          name,
          age,
          gender,
          address,
          phone,
          email
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        alert("Success! Updated 😘");
        setName("");
        setAge("");
        setGender("");
        setAddress("");
        setPhone("");
        setEmail("");
        window.location.reload();
      }, 5000); //5seconds timeout
    } catch (error) {
      alert(error);
        setName("");
        setAge("");
        setGender("");
        setAddress("");
        setPhone("");
        setEmail("");
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        <Box
          sx={{
            px: 20,
            py: 4,
            color: "red",
            border: 1,
            borderColor: "primary.main",
          }}
        >
          <div className=" inline-flex  mx-auto">
            <div className=" mt-2 -translate-x-8">
              <NavLink to="/view">
                <Button variant="contained" color="primary">
                  Back
                </Button>
              </NavLink>
            </div>
          </div>
        </Box>
        <div className=" text-4xl text-center mt-10">
          Update Assistant <br />
        </div>
        <form onSubmit={editHandler}>
          <div class="container px-36 py-24 mx-auto  mt-4">
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                Name
              </h1>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                Age
              </h1>
              <TextField
                id="outlined-basic"
                label="Age"
                variant="outlined"
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                Gender
              </h1>
              <TextField
                id="outlined-basic"
                label="Gender"
                variant="outlined"
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              </div>
             <br />
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                Address
              </h1>
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              </div>
              <br/>
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                Phone
              </h1>
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              </div>
              <br/>
               <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                Email
              </h1>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
          </div>
          </div>
          <div className=" text-center mx-auto">
            <div className=" -translate-y-10">
              <Button
                variant="contained"
                color="success"
                type="submit"
                disabled={loading}
              >
                <h6 style={{ marginLeft: "5px" }}> </h6>{" "}
                {loading ? "Updating..." : "Update"}
              </Button>
            </div>
          </div>
        </form>
        <br />
        <br />
      </div>
    </>
  );
};

export default Edit;