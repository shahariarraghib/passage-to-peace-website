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
const AllBookings = () => {
  const [allBookings, setAllBooking] = useState([]);
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://passage-to-peace-server-vercel.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => {
        // for (let i = 1; i < data.length; i++) {
        //     console.log(data[i].email)
        //     console.log(user.email)

        //     if (data[i].email === user.email) {

        setAllBooking(data);
        setIsLoading(false);
        // const remainingUsers = allBookings.filter(allBookings => allBookings._id !== id)
        // setallBooking(remainingUsers);
        // }
        // }
      });
  }, []);

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
            const remainingUsers = allBookings.filter(
              (allBookings) => allBookings._id !== id
            );
            setAllBooking(remainingUsers);
          }
        });
    }
  };
  return (
    <>
      <div style={{ height: " 100vh" }}>
        <h1 className="d-flex justify-content-center p-5">All Bookings List</h1>

        <hr></hr>

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
            <TableBody>
              {allBookings.map((allBooking) => (
                <TableRow
                  key={allBooking._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {allBooking._id}
                  </TableCell>
                  <TableCell align="left">{allBooking.name}</TableCell>
                  <TableCell align="left">{allBooking.email}</TableCell>
                  <TableCell align="left">{allBooking.address}</TableCell>
                  <TableCell align="left">{allBooking.city}</TableCell>
                  <TableCell align="left">{allBooking.phone}</TableCell>
                  <TableCell align="left">{allBooking.date}</TableCell>
                  {/* <TableCell align="right">{<img src={allBooking.img} alt="" height={100} width={100} />}</TableCell> */}

                  <TableCell align="left">
                    <Stack direction="row" spacing={2}>
                      <Button
                        onClick={() => handleDeleteBooking(allBooking._id)}
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
            </TableBody>
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

export default AllBookings;
