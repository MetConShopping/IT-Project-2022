import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { NavLink, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";


const Edit = () => {
  const [supid, setSupid] = useState("");
  const [fullname, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [itempurchesed, setItemPurchesed] = useState("");
  const [loading, setLoading] = useState(false); //additional

  const { id } = useParams();

  useEffect(() => {
    //component mount
    const getData = async () => {
      await fetch(`/assistant/get/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setName(json.supid);
          setAge(json.fullname);
          setGender(json.address);
          setAddress(json.experience);
          setPhone(json.itempurchesed);
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
          supid,
          fullname,
          address,
          experience,
          itempurchesed
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        alert("Success! Updated 😘");
        setSupid("");
        setFullName("");
        setAddress("");
        setExperience("");
        setItemPurchesed("");
        window.location.reload();
      }, 5000); //5seconds timeout
    } catch (error) {
      alert(error);
        setSupid("");
        setFullName("");
        setAddress("");
        setExperience("");
        setItemPurchesed("");
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
                label="Supid"
                variant="outlined"
                type="text"
                value={supid}
                onChange={(e) => setSupid(e.target.value)}
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
                label="FullName"
                variant="outlined"
                type="text"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                Gender
              </h1>
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
                label="Experience"
                variant="outlined"
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
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
                label="itempurchesed"
                variant="outlined"
                type="text"
                value={itempurchesed}
                onChange={(e) => setItemPurchesed(e.target.value)}
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