import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api',
        credentials: 'include',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('accessToken')
            headers.set('authorization', token as string)
        }
    }),
    tagTypes: ['product', 'cart', 'user'],
    endpoints: (builder) => {
        return {
            
            getProduct: builder.query({
                query: ({ rating, limit, search }) => {
                    
                    return {
                        url: `/product/get-product?search=${search}&rating=${rating}&limit=${limit}`,
                        method: 'GET'
                    }
                },
                providesTags: ['product']
            }),
            getSingleProduct: builder.query({
                query: (id) => {
                    return {
                        url: `/product/single-product/${id}`,
                        method: 'GET'
                    }
                },
                providesTags: ['product']
            }),

            addCart: builder.mutation({
                query: (payload) => {
                    return {
                        url: '/cart/addcart',
                        method: 'POST',
                        body: payload
                    }
                },
                invalidatesTags: ['cart']
            }),

            getCartdata: builder.query({
                query: (email) => {
                    console.log(email)
                    return {
                        url: `/cart/getcart?email=${email}`,
                        method: 'GET'
                    }
                },
                providesTags: ['cart']
            }),

            createUser: builder.mutation({
                query: (payload) => {
                    return {
                        url: '/user/create-user',
                        method: 'POST',
                        body: payload
                    }
                },
                invalidatesTags: ['user']
            }),
            signin: builder.mutation({
                query: (payload) => {
                    return {
                        url: '/user/sign-in',
                        method: 'POST',
                        body: payload
                    }
                },
                invalidatesTags:['user']
            }),
            getUser: builder.query({
                query: () => {
                    return {
                        url: '/user/get-user',
                        method: 'GET',
                    }
                },
                providesTags: ['user']
            }),
            payment: builder.mutation({
                query: (payload) => {
                    return {
                        url: `/payment`,
                        method: 'POST',
                        body: payload
                    }
                },
                invalidatesTags:['product']
            }),
            addProduct: builder.mutation({
                query: (payload) => {
                    return {
                        url: `/product/addproduct`,
                        method: 'POST',
                        body: payload
                    }
                },
                invalidatesTags: ['product']
            }),

            deleteProduct: builder.mutation({
                query: (id) => {
                    return {
                        url: `/product/delete-product/${id}`,
                        method: 'DELETE',
                    }
                },
                invalidatesTags: ['product']
            }),
            updateProduct: builder.mutation({
                query: ({data,id}) => {
                    return {
                        url: `/product/update-product/${id}`,
                        method: 'PATCH',
                        body: data  
                    }
                }
            })

        }
    }
})

export const { useGetProductQuery, useGetSingleProductQuery, useAddCartMutation, useGetCartdataQuery, useCreateUserMutation, useGetUserQuery, useSigninMutation,usePaymentMutation,useAddProductMutation,useDeleteProductMutation,useUpdateProductMutation } = baseApi