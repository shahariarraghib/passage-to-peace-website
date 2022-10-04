import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PlaceShow from "../PlaceShow/PlaceShow";
import "./placeData.css";

const PlaceData = () => {
  const [placeDatas, setplaceData] = useState([]);
  useEffect(() => {
    fetch("https://passage-to-peace-server-vercel.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setplaceData(data));
  }, []);

  // const Item = styled(Paper)(({ theme }) => ({
  //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //     ...theme.typography.body2,
  //     padding: theme.spacing(2),
  //     textAlign: 'center',
  //     color: theme.palette.text.secondary,
  // }));
  return (
    <div>
      <div class="max-w-md mx-auto overflow-hidden md:max-w-5xl">
        <div class="md:flex ">
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-[#FFC107] font-semibold">
              SPECIAL OFFERS
            </div>

            <div>
              <span class="text-2xl font-black">POPULAR</span>
              <span class="text-2xl ml-2">DESTINATIONS</span>
              <hr class="a" />
            </div>

            <p class="text-gray-400 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              cupiditate vitae libero harum? Provident tempora expedita fugiat
              non, quibusdam voluptatum!
            </p>
          </div>
          <div class="md:shrink-0">
            <img
              class=""
              src="https://i.ibb.co/48spP3w/promo-1.png"
              alt="promo-1"
            />
          </div>
        </div>
      </div>

      {/* {
                placeDatas.map(PlaceData => <PlaceShow
                    key={PlaceData._id}
                    PlaceData={PlaceData}
                ></PlaceShow>)
            } */}

      <Box sx={{ flexGrow: 0, padding: 0 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 3 }}
        >
          {placeDatas.map((PlaceData) => (
            <Grid item xs={6} sm={5} md={1}>
              <PlaceShow key={PlaceData._id} PlaceData={PlaceData}></PlaceShow>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default PlaceData;
