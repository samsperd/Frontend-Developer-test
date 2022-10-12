import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const artsHeaders = {
    'Content-Type': 'application/json'
};

const baseUrl = 'https://api.artic.edu/api/v1';

const createRequest = (url) => ({
    url,
    headers: artsHeaders
});

export const artsApi = createApi({
    reducerPath: 'artsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getArts: builder.query({
            query: () => createRequest(`/artworks?limit=6`)
        }),
        getArtDetails: builder.query({
            query: ({ id }) => createRequest(`/artworks/${id}`)
        }),
        getArtsSearch: builder.query({
            query: ({q, page}) => {
                return createRequest(`/artworks/search?q=${q}&limit=9&page=${page}`)
            }
        })
    })
})

export const { useGetArtsQuery, useGetArtsSearchQuery, useGetArtDetailsQuery } = artsApi;