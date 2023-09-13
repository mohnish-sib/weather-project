import React from "react";
import style from "./SelectDropDown.module.css";
import "../../css/weathericons.css";
import cities from "../../utils/cities-fr.json";

const SelectDropdown = (props) => {
  const { setSelectCity } = props;

  const onCitySelect = (e) => {
    const val = e.target.value;
    // console.log("##", e.target.value);

    const selected = cities?.filter((item) => {
      return item.id?.toString() === val;
    });
    setSelectCity(selected[0]);
  };

  return (
    <div className={style.dropdownContainer}>
      <label htmlFor="city-select" className={style.label}>
        Choose a city:
      </label>

      <select
        name="city"
        id="city-select"
        onChange={onCitySelect}
        className={style.dropdown}
        data-testid="city-select"
      >
        {cities?.map((city) => {
          return (
            <option key={city.id} value={city.id}>
              {city.nm}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectDropdown;
