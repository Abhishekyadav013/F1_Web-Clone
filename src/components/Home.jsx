import React from "react";
import Header from "./Header";
import Hero from "../Pages/Hero";
import SearchByCategory from "../Pages/SearchByCategory";

const Home = ()=>{
    return(
        <>
          <div>
            <Header/>
          <Hero/>
          <SearchByCategory/>
          </div>
        </>
    )
}

export default Home;