import { useEffect, useState } from "react";
import { MovieCard } from "./Movie-List-Card";
import { Tabledata } from "./Tabledata";
import { OrderForm } from "./orderForm";

export const BookForm = () => {
  const api = "https://api.jikan.moe/v4/anime/1/news";
  let [movieList, setMovieList] = useState([]);
  let [mondayList, setMondayList] = useState([]);
  let [tuesdayList, setTuesdayList] = useState([]);
  let [wednesdayList, setWednesdayList] = useState([]);
  let [thursdayList, setThursdayList] = useState([]);
  let [fridayList, setFridayList] = useState([]);
  let [saturdayList, setSaturdayList] = useState([]);
  let [sundayList, setSundayList] = useState([]);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [orderList, setOrderList] = useState([]);

  const nameOnchange = (event) => {
    setName(event.target.value);
    console.log(event);
  };
  const emailOnchange = (event) => {
    setEmail(event.target.value);
    console.log(event);
  };

  const insertDetail = (event) => {
    const obj = {
      name: name,
      email: email,
      orderList: [
        mondayList,
        tuesdayList,
        wednesdayList,
        thursdayList,
        fridayList,
        saturdayList,
        sundayList,
      ],
    };
    setOrderList([...orderList, obj]);
    setMondayList([]);
    setTuesdayList([]);
    setWednesdayList([]);
    setThursdayList([]);
    setFridayList([]);
    setSaturdayList([]);
    setSundayList([]);
    setName("");
    setEmail("");
    event.preventDefault();
  };

  const insertOrder = (id, day) => {
    movieList.forEach((item, i) => {
      if (item.mal_id === id) {
        inputDayArray(item, day);
      }
    });
  };
  useEffect(() => {
    console.log(orderList);
  }, [orderList]);

  const getrandomID = (length = 6) => {
    const str = "qwertyuiopsasdfghjklXVCNVMUYW";
    let strTemp = "";
    for (let i = 0; i < length; i++) {
      strTemp += str[Math.round(Math.random() * str.length - 1)];
    }
    return strTemp;
  };

  const inputDayArray = (item, day) => {
    let items = item;
    items.id = getrandomID();

    if (day === "monday") {
      setMondayList([...mondayList, items]);
    }
    if (day === "tuesday") {
      setTuesdayList([...tuesdayList, items]);
    }
    if (day === "wednesday") {
      setWednesdayList([...wednesdayList, items]);
    }
    if (day === "thursday") {
      setThursdayList([...thursdayList, items]);
    }
    if (day === "friday") {
      setFridayList([...fridayList, items]);
    }
    if (day === "saturday") {
      setSaturdayList([...saturdayList, items]);
    }
    if (day === "sunday") {
      setSundayList([...sundayList, items]);
    }
  };

  const deleteItem = (id, day) => {
    if (day === "monday") {
      const filter = mondayList.filter((item) => item.id !== id);
      setMondayList(filter);
    }
    if (day === "tuesday") {
      const filter = tuesdayList.filter((item) => item.id !== id);
      setTuesdayList(filter);
    }
    if (day === "wednesday") {
      const filter = wednesdayList.filter((item) => item.id !== id);
      setWednesdayList(filter);
    }
    if (day === "thursday") {
      const filter = thursdayList.filter((item) => item.id !== id);
      setThursdayList(filter);
    }
    if (day === "friday") {
      const filter = fridayList.filter((item) => item.id !== id);
      setFridayList(filter);
    }
    if (day === "saturday") {
      const filter = saturdayList.filter((item) => item.id !== id);
      setSaturdayList(filter);
    }
    if (day === "sunday") {
      const filter = sundayList.filter((item) => item.id !== id);
      setSundayList(filter);
    }
  };
  useEffect(() => {
    const fecthData = async () => {
      const fetc = await fetch(api);
      const toJson = await fetc.json();
      const JsonArray = toJson.data;
      JsonArray.forEach((item, i) => {
        let getRandomPrice = Math.floor(Math.random() * (10 - 5 + 1) + 5);
        if (i === 5)
          item.images.jpg.image_url =
            "https://m.media-amazon.com/images/M/MV5BMDI3ZDY4MDgtN2U2OS00Y2YzLWJmZmYtZWMzOTM3YWFjYmUyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg";
        if (i === movieList.length - 1)
          item.images.jpg.image_url =
            "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
        item.day = "";
        item.price = getRandomPrice;
      });
      setMovieList(JsonArray);
    };
    fecthData();

    console.log(mondayList);
    console.log(tuesdayList);
    console.log(wednesdayList);
    console.log(thursdayList);
    console.log(fridayList);
    console.log(saturdayList);
    console.log(sundayList);
    console.log(movieList);
  }, [
    mondayList,
    tuesdayList,
    wednesdayList,
    thursdayList,
    fridayList,
    saturdayList,
    sundayList,
  ]);

  return (
    <div className="p-4">
      <div className="row">
        <div className="col text-center">
          <h1>Movie</h1>
        </div>
      </div>
      <div className="row" id="animeCard">
        {movieList.map((item, i) => (
          <MovieCard
            key={i}
            id={item.mal_id}
            image={item.images.jpg.image_url}
            title={item.title}
            desc={item.excerpt}
            author={item.author_username}
            price={item.price}
            insertHandler={insertOrder}
          />
        ))}
      </div>

      <div className="row pt-5">
        <h3 className="text-center">Ticket Booked</h3>
        <div className="col-md-4" id="days">
          <h3 className="text-center">Monday</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Movie</td>
                <td>price</td>
              </tr>
            </thead>
            <tbody id="monday">
              {mondayList.map((item, i) => (
                <Tabledata
                  key={i}
                  id={item.id}
                  day="monday"
                  title={item.title}
                  price={item.price}
                  deleteitem={deleteItem}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <h3 className="text-center">Tuesday</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Movie</td>
                <td>price</td>
              </tr>
            </thead>
            <tbody id="tuesday">
              {tuesdayList.map((item, i) => (
                <Tabledata
                  key={i}
                  id={item.id}
                  day="tuesday"
                  title={item.title}
                  price={item.price}
                  deleteitem={deleteItem}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <h3 className="text-center">Wednesday</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Movie</td>
                <td>price</td>
              </tr>
            </thead>
            <tbody id="wednesday">
              {wednesdayList.map((item, i) => (
                <Tabledata
                  key={i}
                  id={item.id}
                  day="wednesday"
                  title={item.title}
                  price={item.price}
                  deleteitem={deleteItem}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h3 className="text-center">Thursday</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Movie</td>
                <td>price</td>
              </tr>
            </thead>
            <tbody id="thursday">
              {thursdayList.map((item, i) => (
                <Tabledata
                  key={i}
                  id={item.id}
                  day="thursday"
                  title={item.title}
                  price={item.price}
                  deleteitem={deleteItem}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <h3 className="text-center">Friday</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Movie</td>
                <td>price</td>
              </tr>
            </thead>
            <tbody id="friday">
              {fridayList.map((item, i) => (
                <Tabledata
                  key={i}
                  id={item.id}
                  day="friday"
                  title={item.title}
                  price={item.price}
                  deleteitem={deleteItem}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <h3 className="text-center">Saturday</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Movie</td>
                <td>price</td>
              </tr>
            </thead>
            <tbody id="saturday">
              {saturdayList.map((item, i) => (
                <Tabledata
                  key={i}
                  id={item.id}
                  day="saturday"
                  title={item.title}
                  price={item.price}
                  deleteitem={deleteItem}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <h3 className="text-center">Sunday</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Movie</td>
                <td>price</td>
              </tr>
            </thead>
            <tbody id="sunday">
              {sundayList.map((item, i) => (
                <Tabledata
                  key={i}
                  id={item.id}
                  day="sunday"
                  title={item.title}
                  price={item.price}
                  deleteitem={deleteItem}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {
        <OrderForm
          nameonchange={nameOnchange}
          emailonchange={emailOnchange}
          handleform={insertDetail}
          valueName={name}
          valueEmail={email}
        />
      }
    </div>
  );
};
