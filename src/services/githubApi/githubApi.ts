import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/search/",
  }),
  endpoints: (builder) => ({
    getGithubUserByName: builder.query<
      any,
      { page: number; per_page: number; q: string }
    >({
      query: ({ page, per_page, q }) => {
        return {
          url: "users",
          params: { page, per_page, q },
        };
      },
      transformResponse: (response: any) =>
        response.items.map((user: any) => ({
          id: user.id,
          description: "",
          name: `@${user.login}`,
          logo: user.avatar_url,
        })),
    }),
    getGithubUserByLogin: builder.query<any, { login: string }>({
      query: ({ login }) => {
        return {
          url: "users",
          params: { login },
        };
      },
      transformResponse: (response: any) => ({
        id: response.id,
        description: "",
        name: `@${response.login}`,
        logo: response.avatar_url,
        public_repos: response.public_repos,
        followers: response.followers,
        following: response.following,
      }),
    }),
  }),
  keepUnusedDataFor: 600,
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetGithubUserByNameQuery,
  useLazyGetGithubUserByNameQuery,
  useGetGithubUserByLoginQuery,
} = githubApi;

// export const useLazyGetPokemonByNameQuery =
// pokemonApi.endpoints.getPokemonByName.useLazyQuerySubscription();
