import App from "../App";
import { waitFor, screen, render } from "@testing-library/react";

describe("App component testing", () => {
  test("ConfirmationPage component snapshot", async () => {
    render(<App />);
    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-wait-for-snapshot
      expect(screen).toMatchSnapshot();
    });
  });
});
