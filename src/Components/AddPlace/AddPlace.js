import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Stack } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import "./Addplace.css";

const AddPlace = () => {
  const [users, setUsers] = useState([]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://passage-to-peace-server-vercel.vercel.app/users", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          Swal.fire("Package Add Succssfully");
          reset();
        }
      });
  };

  useEffect(() => {
    fetch("https://passage-to-peace-server-vercel.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // Delete an items
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure, You want to delete ?");
    if (proceed) {
      const url = `https://passage-to-peace-server-vercel.vercel.app/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire("Delete Succssfully");
            const remainingUsers = users.filter((user) => user._id !== id);
            setUsers(remainingUsers);
          }
        });
    }
  };

  return (
    <>
      <div>
        <div>
          <section class="input-content mt-12">
            <h2>Here You can Add Package</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="input-content-wrap">
                <dl class="inputbox">
                  <dt class="inputbox-title">Place Name</dt>
                  <dd class="inputbox-content">
                    <input
                      id="input0"
                      type="text"
                      {...register("name", { required: true, maxLength: 200 })}
                    />
                    <label for="input0">Place Name</label>
                    <span class="underline"></span>
                  </dd>
                </dl>

                <dl class="inputbox">
                  <dt class="inputbox-title">Package Description</dt>
                  <dd class="inputbox-content">
                    <input
                      id="input0"
                      type="text"
                      {...register("description", {
                        required: true,
                        maxLength: 500,
                      })}
                    />
                    <label for="input0">Package Description</label>
                    <span class="underline"></span>
                  </dd>
                </dl>

                <dl class="inputbox">
                  <dt class="inputbox-title">Price</dt>
                  <dd class="inputbox-content">
                    <input
                      id="input0"
                      type="Number"
                      {...register("price", { required: true, maxLength: 200 })}
                    />
                    <label for="input0">Price</label>
                    <span class="underline"></span>
                  </dd>
                </dl>

                <dl class="inputbox">
                  <dt class="inputbox-title">Image Url</dt>
                  <dd class="inputbox-content">
                    <input
                      id="input0"
                      type="text"
                      {...register("img", { required: true, maxLength: 2000 })}
                    />
                    <label for="input0">Image Url</label>
                    <span class="underline"></span>
                  </dd>
                </dl>

                <div class="btns">
                  <button class="btn btn-confirm">
                    <input type="submit" />
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
        <hr />

        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Description</th>
                <th>price</th>
                <th>img Url</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {users.map((user) => (
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle  h-12">
                          <img
                            src={user.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td class="w-3/4">
                    <p class="whitespace-normal">{user.description}</p>
                    <br />
                  </td>
                  <td>{user.price}</td>
                  <td class="w-3/4">
                    <p class="whitespace-normal">{user.img}</p>
                  </td>

                  <th>
                    {" "}
                    <Button
                      onClick={() => handleDeleteUser(user._id)}
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </th>
                  <th>
                    <a href={`/update/${user._id}`}>
                      <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="success">
                          Update
                        </Button>
                      </Stack>
                    </a>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddPlace;
