import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/product', credentials: 'include' }),
    tagTypes:['product'],
    endpoints: (builder) => {
        return {
            postProduct: builder.mutation({
                query: (data) => {
                    return {
                        url: `/upload`,
                        method: 'POST',
                        body:data
                    }
                },
                invalidatesTags:['product']
            }),
            getProduct: builder.query({
                query: () => {
                    return {
                        url: `/get-product`,
                        method:'GET'
                    }
                },
                providesTags:['product']
            }),
            getRatingProduct: builder.query({
                query: (query) => {
                    return {
                        url: `/get-product?rating=${query}&limit=4`,
                        method:'GET'
                    }
                },
                providesTags : ['product']
            })
        }
    }
})

export const {usePostProductMutation,useGetProductQuery,useGetRatingProductQuery} = baseApi