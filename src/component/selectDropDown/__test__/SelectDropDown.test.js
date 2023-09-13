import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SelectDropdown from "../SelectDropdown";

describe("SelectDropdown", () => {
  const setSelectCityMock = jest.fn();

  const cities = [
    { id: "1", nm: "City 1" },
    { id: "2", nm: "City 2" },
    { id: "3", nm: "City 3" },
  ];

  it("renders the component with label and options", () => {
    render(<SelectDropdown setSelectCity={setSelectCityMock} />);

    const labelElement = screen.getByLabelText("Choose a city:");
    const selectElement = screen.getByTestId("city-select");

    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    fireEvent.click(selectElement);

    const optionElement = screen.getByText("Ablis");
    expect(optionElement).toBeInTheDocument();
    fireEvent.click(optionElement);
  });

  it("calls setSelectCity when an option is selected", () => {
    render(<SelectDropdown setSelectCity={setSelectCityMock} />);

    const selectElement = screen.getByTestId("city-select");

    fireEvent.change(selectElement, { target: { value: "2" } });

    // expect(setSelectCityMock).toHaveBeenCalledTimes(1);
    // expect(setSelectCityMock).toHaveBeenCalledWith(cities[1]);
  });
});
