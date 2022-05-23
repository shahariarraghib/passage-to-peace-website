import React, { useEffect, useState } from 'react';


import { useForm } from "react-hook-form";
import axios from 'axios';
import { Button, Paper, Stack, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Table } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';

const AddPlace = () => {
    const [users, setUsers] = useState([]);


    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://passage-to-peace-23-05-2022.herokuapp.com/users', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert("Add SuccessFully")
                    reset();
                }
            })
    }


    useEffect(() => {
        fetch('https://passage-to-peace-23-05-2022.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])



    // Delete an items
    const handleDeleteUser = id => {
        const proceed = window.confirm("Are you sure, You want to delete ?");
        if (proceed) {
            const url = `https://passage-to-peace-23-05-2022.herokuapp.com/users/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete SuccessFullu')
                        const remainingUsers = users.filter(user => user._id !== id)
                        setUsers(remainingUsers);
                    }
                })
        }
    }


    return (
        <>
            <div>

                <h1 className='d-flex justify-content-center p-5'>Total Package Number:{users.length}</h1>
                <hr />
                <h4 className='d-flex justify-content-center p-2'>Here You can Add Package</h4>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex justify-content-center p-5'>
                    <input {...register("name", { required: true, maxLength: 200 })} placeholder="Place Name" />
                    <textarea {...register("description")} placeholder="Package Description" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("img")} placeholder="Image Url" />
                    <input type="submit" />
                </form>

                <hr />



                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Package Id</TableCell>
                                <TableCell align="left">name</TableCell>
                                <TableCell align="left">Description</TableCell>
                                <TableCell align="left">price</TableCell>
                                <TableCell align="left">img Url</TableCell>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">Delete Button</TableCell>
                                <TableCell align="left">Update Button</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow
                                    key={user._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {user._id}
                                    </TableCell>
                                    <TableCell align="left">{user.name}</TableCell>
                                    <TableCell align="left">{user.description}</TableCell>
                                    <TableCell align="left">{user.price}</TableCell>
                                    <TableCell align="left">{user.img}</TableCell>
                                    <TableCell align="left">{<img src={user.img} alt="" height={100} width={100} />}</TableCell>
                                    <TableCell align="left"> <a href={`/update/${user._id}`}>
                                        <Stack direction="row" spacing={2}>
                                            <Button variant="contained" color="success">Update</Button></Stack></a>

                                    </TableCell>
                                    <TableCell align="right">
                                        <Stack direction="row" spacing={2}>
                                            <Button onClick={() => handleDeleteUser(user._id)} variant="outlined" color="error" startIcon={<DeleteIcon />}>
                                                Delete
                                            </Button>

                                        </Stack>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
};

export default AddPlace;