import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api', credentials: 'include' }),
    tagTypes:['product','cart'],
    endpoints: (builder) => {
        return {
            postProduct: builder.mutation({
                query: (data) => {
                    return {
                        url: `/product/upload`,
                        method: 'POST',
                        body:data
                    }
                },
                invalidatesTags:['product']
            }),
            getProduct: builder.query({
                query: ({ rating, limit }) => {
                    return {
                        url: `/product/get-product?rating=${rating}&limit=${limit}`,
                        method: 'GET'
                    }
                },
                providesTags: ['product']
            }),
            getSingleProduct: builder.query({
                query: (id) => {
                    return {
                        url: `/product/single-product/${id}`,
                        method:'GET'
                    }
                },
                providesTags:['product']
            }),

            addCart: builder.mutation({
                query: (payload) => {
                    return {
                        url: '/cart/addcart',
                        method: 'POST',
                        body:payload
                    }
                },
                invalidatesTags:['cart']
            }),

            getCartdata: builder.query({
                query: () => {
                    return {
                        url: '/cart/getcart',
                        method:'GET'
                    }
                },
                providesTags:['cart']
            })
            
        }
    }
})

export const {usePostProductMutation,useGetProductQuery,useGetSingleProductQuery,useAddCartMutation, useGetCartdataQuery} = baseApi