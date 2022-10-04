import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePlaceInfo = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = `https://passage-to-peace-server-vercel.vercel.app/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleUpdateUser = (event) => {
    const url = `https://passage-to-peace-server-vercel.vercel.app/users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Update Succssfully");
          setUser({});
        }
      });

    event.preventDefault();
  };

  const handleNameChanage = (event) => {
    const updateName = event.target.value;
    const updateUser = {
      name: updateName,
      description: user.description,
      price: user.price,
      img: user.img,
    };
    setUser(updateUser);
  };

  const handleDescriptionChanage = (event) => {
    const updateDescription = event.target.value;
    const updateUser = {
      description: updateDescription,
      name: user.name,
      price: user.price,
      img: user.img,
    };
    setUser(updateUser);
  };

  const handlePriceChanage = (event) => {
    const updatePrice = event.target.value;
    const updateUser = {
      price: updatePrice,
      name: user.name,
      description: user.description,
      img: user.img,
    };
    setUser(updateUser);
  };

  const handleImgChanage = (event) => {
    const updateImg = event.target.value;
    const updateUser = {
      img: updateImg,
      price: user.price,
      name: user.name,
      description: user.description,
    };
    setUser(updateUser);
  };
  return (
    <div style={{ height: "100vh" }}>
      <section class="input-content mt-12">
        <h2>Update Package Info (ID:{id})</h2>

        <form onSubmit={handleUpdateUser}>
          <div class="input-content-wrap">
            <dl class="inputbox">
              <dt class="inputbox-title">Place Name</dt>
              <dd class="inputbox-content">
                <input
                  id="input0"
                  type="text"
                  onChange={handleNameChanage}
                  value={user.name || ""}
                  placeholder="Name"
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
                  onChange={handleDescriptionChanage}
                  value={user.description || ""}
                  placeholder="Description"
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
                  onChange={handlePriceChanage}
                  value={user.price || ""}
                  placeholder="Price"
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
                  onChange={handleImgChanage}
                  value={user.img || ""}
                  placeholder="Image Url"
                />
                <label for="input0">Image Url</label>
                <span class="underline"></span>
              </dd>
            </dl>

            <div class="btns">
              <button class="btn btn-confirm">
                <input type="submit" value="Update" />
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdatePlaceInfo;
