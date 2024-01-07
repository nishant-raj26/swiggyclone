"use client";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./components/navbar/RestaurantCard";
import ShimmerUI from "./components/navbar/shimmer";

const Page = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9314583&lng=77.6299858&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3440997&lng=85.309562&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div>
      <div className="ml-5 mt-5  ">
        <button
          className="border bg-blue-400 p-1 rounded-xl ml-5"
          onClick={() => {
            let filteredListOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>

        <input
          className="border bg-blue-400 p-1 rounded-xl ml-5"
          placeholder="Enter your search"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        {/* <button
          className="border bg-blue-400 p-1 rounded-xl ml-5"
          onClick={() => {
            console.log(searchText);
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res?.info?.name.includes(searchText)
            );
            setListOfRestaurants(filteredRestaurant);
          }}
        > */}
        <button
          className="border bg-blue-400 p-1 rounded-xl ml-5"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setListOfRestaurants(filteredRestaurant)
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-10 m-10  ">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;
