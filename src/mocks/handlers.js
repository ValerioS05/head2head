import { rest } from "msw";

const baseURL = "https://drf-api-head2head-be132ded7692.herokuapp.com/";

export const handlers = [
  // Mock handler for user authentication
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 1,
        username: "valerios051",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 1,
      })
    );
  }),

  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  // Mock handler for categories
  rest.get(`${baseURL}categories/`, (req, res, ctx) => {
    console.log("Intercepted categories request...");
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            id: 11,
            name: "Fashion and Apparel",
            description: "Clothing, Accessories, and Footwear.",
            image: "image/upload/v1738611639/mjs2hbu96bjcvv2efchf.jpg",
          },
        ],
      })
    );
  }),

  // Mock handler for profile data
  rest.get(`${baseURL}profiles/1/`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        owner: "valerios051",
        bio: "qwerty",
        profile_picture:
          "http://res.cloudinary.com/drsvdv8rb/image/upload/v1739122933/mrkqseib4hm3g1wt7p0r.png",
        location: "Italy",
        is_owner: true,
        favourites: [],
        is_staff: true,
      })
    );
  }),
];
