import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath : "api", // this is default path
    baseQuery : fetchBaseQuery({baseUrl : "http://localhost:3500"}),
    tagTypes : ['Todos'], // tagtype name ("Todos") does not matters, we can use anything
    endpoints : (builder)=> ({
        getTodos : builder.query({ // query is used because we are requesting for data
            query : ()=> "/todos",
            transformResponse : (res)=> res.sort((a, b)=> b.id-a.id),
            providesTags : ["Todos"]
        }),
        addTodo : builder.mutation({ // mutation is used because we are changing the data
            query : (todo)=> ({
                url : "/todos",
                method : "POST",
                body : todo
            }),
            invalidatesTags : ['Todos'] // invalidating todos cache
        }),
        updateTodo : builder.mutation({
            query : (todo)=> ({
                url : "/todos/"+todo.id,
                method : "PATCH",
                body : todo
            }),
            invalidatesTags : ['Todos']
        }),
        deleteTodo : builder.mutation({
            query : ({id})=> ({
                url : "/todos/"+id,
                method : "DELETE",
                body : id
            }),
            invalidatesTags : ['Todos']
        })
    })
})

// creating & exporting custom hook
export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} = apiSlice