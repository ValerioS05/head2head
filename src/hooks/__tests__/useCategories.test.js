import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import useCategories from "../useCategories";

// Testing the fetching of the categories with a test component.
const TestComponent = () => {
  const { categories, loading, error } = useCategories();
// Mimicking the categories fetching
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (categories.length > 0) {
    return <div>{categories[0].name}</div>;
  }
  return null;
};

describe("useCategories", () => {
  it("fetches and displays a category", async () => {
    render(<TestComponent />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText("Fashion and Apparel")).toBeInTheDocument()
    );
  });
});
