import React from "react";
import Daily from "./Daily";

const List = () => {
  const fetchWeather = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=Yerevan&units=metric&appid=14ca610487746041595c5f39ee261b14"
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        return myJson.list;
      });
  };

  let data = [];
  React.useEffect(() => {
    data = fetchWeather();
  }, []);

  return (
    <>
      <main style={{ display: "flex", justifyContent: "space-around" }}>
        {data.map(list => {
          return (
            <Daily
              temp={list.main.temp}
              description={list.weather[0].description}
              day={list.dt_txt}
            />
          );
        })}
        <div></div>
      </main>
    </>
  );
};

export default List;
