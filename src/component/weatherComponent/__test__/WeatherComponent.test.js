import { render, screen } from "@testing-library/react";
import WeatherComponent from "../WeatherComponent";

describe("Weather component testing", () => {
  test("Loading component testing", () => {
    render(
      <WeatherComponent weatherData={{}} forcastData={{}} isLoading={true} />
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
  test("Loading componen testing", () => {
    render(
      <WeatherComponent
        weatherData={{
          main: { temp: 22 },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
        }}
        forcastData={{
          list: [
            { main: { temp_min: 16.72, temp_max: 18.48 } },
            { main: { temp_min: 1, temp_max: 18 } },
          ],
        }}
        isLoading={false}
      />
    );
    expect(screen.getByText("18°")).toBeInTheDocument();
  });
});
