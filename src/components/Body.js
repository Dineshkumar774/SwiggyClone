import { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";

const Body = () => {
  const [listresdata, setlistresdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const[data,setdata]=useState('');

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      const cards = json?.data?.cards;
      const restaurantCard = cards?.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length > 0
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants) {
        setlistresdata(restaurants.map((res) => res.info));
        setdata(restaurants.map((res) => res.info))
      }
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listresdata.filter(
              (res) => parseFloat(res.avgRating) > 4.4
            );
            setlistresdata(filteredlist);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="search-bar">
       <input 
       type="text"
       placeholder="Search restaurants"
       value={searchQuery}
       onChange={(e)=> setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
      if (e.key === 'Enter') {
        const filteredlist = data.filter((res) =>
          res.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setlistresdata(filteredlist);
      }
    }}
       />
       <button className="filter-btn"
       onClick={()=>{const filteredlist = data.filter(
              (res) => res.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setlistresdata(filteredlist);}}>Search</button>
      </div>
      <div className="restaurant-list">
        {listresdata.map((res) => (
          <RestaurantCards key={res.id} resdata={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
