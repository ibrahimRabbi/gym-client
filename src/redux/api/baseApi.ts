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
                query: ({ rating, limit }) => {
                    return {
                        url: `/get-product?rating=${rating}&limit=${limit}`,
                        method: 'GET'
                    }
                },
                providesTags: ['product']
            }),
            getSingleProduct: builder.query({
                query: (id) => {
                    return {
                        url: `/single-product/${id}`,
                        method:'GET'
                    }
                },
                providesTags:['product']
            })
            
        }
    }
})

export const {usePostProductMutation,useGetProductQuery,useGetSingleProductQuery} = baseApi