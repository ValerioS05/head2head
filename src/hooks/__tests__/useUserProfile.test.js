import { render, screen, waitFor } from "@testing-library/react";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import useUserProfile from "../useUserProfile";

// Mocking fetch for the currentuser (global fetch simulate the fetching of the user )
global.fetch = jest.fn()
  .mockResolvedValueOnce({
    json: () => Promise.resolve({
      pk: 1,
      username: "valerios051",
      profile_id: 1,
    })
  }) // Mock the profile
  .mockResolvedValueOnce({
    json: () => Promise.resolve({
      owner: "valerios051",
      bio: "qwerty",
      profile_picture: "http://res.cloudinary.com/drsvdv8rb/image/upload/v1739122933/mrkqseib4hm3g1wt7p0r.png",
      location: "Italy",
      is_owner: true,
      favourites: [],
      is_staff: true,
    })
  });

// Test component
const TestComponent = () => {
  const { profileData, loading, error } = useUserProfile(1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return <div>{profileData?.owner}</div>;
};

describe("useUserProfile", () => {
  it("fetches and displays the user profile", async () => {
    render(
      <CurrentUserProvider>
        <TestComponent />
      </CurrentUserProvider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // Wait for the profile name (owner)
    await waitFor(() => expect(screen.getByText("valerios051")).toBeInTheDocument());
  });
});
