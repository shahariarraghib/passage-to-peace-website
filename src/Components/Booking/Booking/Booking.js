import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
const Booking = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const [date, setDate] = React.useState(new Date());

  const onSubmit = (data) => {
    fetch("https://passage-to-peace-server-vercel.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Order Process Successfully");

          reset();
        }
      });
    console.log(data);
  };

  return (
    <div style={{ height: "100vh" }}>
      <section class="input-content mt-12">
        <h2>Order place</h2>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div class="input-content-wrap">
            <dl class="inputbox">
              <dt class="inputbox-title">Package ID</dt>
              <dd class="inputbox-content">
                <input
                  id="input0"
                  type="text"
                  defaultValue={id}
                  {...register("productId")}
                />
                <label for="input0">Package ID</label>
                <span class="underline"></span>
              </dd>
            </dl>

            <dl class="inputbox">
              <dt class="inputbox-title">Package ID</dt>
              <dd class="inputbox-content">
                <input
                  id="input0"
                  type="text"
                  defaultValue={date}
                  {...register("date")}
                />
                <label for="input0">Package ID</label>
                <span class="underline"></span>
              </dd>
            </dl>

            <dl class="inputbox">
              <dt class="inputbox-title">Place Name</dt>
              <dd class="inputbox-content">
                <input
                  id="input0"
                  type="text"
                  defaultValue={user.displayName}
                  {...register("name", { required: true })}
                />
                <label for="input0">Name</label>
                <span class="underline"></span>
              </dd>
            </dl>

            <dl class="inputbox">
              <dt class="inputbox-title">Gmail</dt>
              <dd class="inputbox-content">
                <input
                  id="input0"
                  type="text"
                  defaultValue={user.email}
                  {...register("email", { required: true })}
                />
                <label for="input0">Gmail</label>
                <span class="underline"></span>
              </dd>
            </dl>

            <dl class="inputbox">
              <dt class="inputbox-title">Address</dt>
              <dd class="inputbox-content">
                <input
                  id="input0"
                  type="text"
                  defaultValue=""
                  {...register("address", { required: true })}
                />
                <label for="input0">Address</label>
                <span class="underline"></span>
              </dd>
            </dl>

            <dl class="inputbox">
              <dt class="inputbox-title">City</dt>
              <dd class="inputbox-content">
                <input
                  id="input0"
                  type="text"
                  defaultValue=""
                  {...register("city", { required: true })}
                />
                <label for="input0">City</label>
                <span class="underline"></span>
              </dd>
            </dl>

            <dl class="inputbox">
              <dt class="inputbox-title">Phone number</dt>
              <dd class="inputbox-content">
                <input
                  id="input0"
                  type="text"
                  defaultValue=""
                  {...register("phone", { required: true })}
                />
                <label for="input0">Phone number</label>
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
  );
};

export default Booking;
