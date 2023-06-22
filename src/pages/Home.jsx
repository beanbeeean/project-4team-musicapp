import React, { useEffect } from "react";
import MainCharts from "../home_components/MainCharts";
import NewMusic from "../home_components/NewMusic";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
const Home = () => {
  const { loading } = useSelector((state) => state.home);
  return (
    <>
      <NewMusic />
      <MainCharts />
    </>
  );
};

export default Home;
