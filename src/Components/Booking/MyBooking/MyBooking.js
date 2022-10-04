import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import "./MyBooking.css";

const MyBooking = () => {
  const [myBookings, setMyBooking] = useState([]);
  const [emailBookings, setEmailBookings] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  // console.log(user.email);

  useEffect(() => {
    fetch("https://passage-to-peace-server-vercel.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => {
        setMyBooking(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (myBookings.length > 0) {
      const datas = myBookings.filter((mailId) => mailId.email === user.email);

      setEmailBookings(datas);
    } else {
      console.log("wait");
    }
  }, [myBookings]);

  const handleDeleteBooking = (id) => {
    const proceed = window.confirm("Are you sure, You want to delete ?");
    if (proceed) {
      const url = `https://passage-to-peace-server-vercel.vercel.app/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire("Delete Succssfully");
            const remainingUsers = myBookings.filter(
              (myBookings) => myBookings._id !== id
            );
            setMyBooking(remainingUsers);
          }
        });
    }
  };

  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center p-5">My Bookings List</h1>

        <hr />
        {/* {console.log(emailBookings)} */}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Package Id</TableCell>
                <TableCell align="left">name</TableCell>
                <TableCell align="left">Email Address</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">City</TableCell>
                <TableCell align="left">Mobile Number</TableCell>
                <TableCell align="left">time</TableCell>
                <TableCell align="left">Delete Button</TableCell>
              </TableRow>
            </TableHead>
            {emailBookings?.length > 0 ? (
              <>
                {emailBookings.map((myBooking) => (
                  <TableRow
                    key={myBooking._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {myBooking._id}
                    </TableCell>
                    <TableCell align="left">{myBooking.name}</TableCell>
                    <TableCell align="left">{myBooking.email}</TableCell>
                    <TableCell align="left">{myBooking.address}</TableCell>
                    <TableCell align="left">{myBooking.city}</TableCell>
                    <TableCell align="left">{myBooking.phone}</TableCell>
                    <TableCell align="left">{myBooking.date}</TableCell>
                    {/* <TableCell align="right">{<img src={allBooking.img} alt="" height={100} width={100} />}</TableCell> */}

                    <TableCell align="left">
                      <Stack direction="row" spacing={2}>
                        <Button
                          onClick={() => handleDeleteBooking(myBooking._id)}
                          variant="outlined"
                          color="error"
                          startIcon={<DeleteIcon />}
                        >
                          Delete Booking
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ) : (
              <>
                {
                  <TableBody>
                    {emailBookings.email ? (
                      <>
                        <TableRow
                          key={emailBookings._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {emailBookings._id}
                          </TableCell>
                          <TableCell align="left">
                            {emailBookings.name}
                          </TableCell>
                          <TableCell align="left">
                            {emailBookings.email}
                          </TableCell>
                          <TableCell align="left">
                            {emailBookings.address}
                          </TableCell>
                          <TableCell align="left">
                            {emailBookings.city}
                          </TableCell>
                          <TableCell align="left">
                            {emailBookings.phone}
                          </TableCell>
                          {/* <TableCell align="right">{<img src={allBooking.img} alt="" height={100} width={100} />}</TableCell> */}

                          <TableCell align="left">
                            <Stack direction="row" spacing={2}>
                              <Button
                                onClick={() =>
                                  handleDeleteBooking(emailBookings._id)
                                }
                                variant="outlined"
                                color="error"
                                startIcon={<DeleteIcon />}
                              >
                                Delete Booking
                              </Button>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      </>
                    ) : (
                      <>
                        <h4 className="d-flex justify-content-center p-5">
                          No Booking result Found
                        </h4>
                      </>
                    )}
                  </TableBody>
                }
              </>
            )}
          </Table>
        </TableContainer>

        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
          {isLoading && (
            <div class="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </Box>
      </div>
    </>
  );
};

export default MyBooking;
