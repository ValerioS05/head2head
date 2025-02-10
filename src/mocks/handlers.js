import { rest } from "msw";

const baseURL = "https://drf-api-head2head-be132ded7692.herokuapp.com/";

export const handlers = [
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
];
