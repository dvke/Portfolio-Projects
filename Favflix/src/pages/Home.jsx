import React, { useEffect } from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";
import Footer from "../components/Footer";
import MovieModal from "../components/MovieModal";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div>
        <Main />
        <Row title="UpComing" fetchURL={requests.requestUpcoming} />
        <Row title="Popular" fetchURL={requests.requestPopular} />
        <Row title="Trending" fetchURL={requests.requestTrending} />
        <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
