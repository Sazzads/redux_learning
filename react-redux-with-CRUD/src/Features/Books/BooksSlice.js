import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [,
        { id: 1, title: "Love Mars", author: "Nasa" },
        { id: 2, title: "Love Jupitar", author: "Basa" },
    ]
};

export const bookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
    },
});

export const { showBooks } = bookSlice.actions;
export default bookSlice.reducer;