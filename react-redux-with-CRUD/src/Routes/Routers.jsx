import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Layouts/Main";
import AddBook from "../Features/Books/AddBook";
import BooksView from "../Features/Books/BooksView";
import EditBook from "../Features/Books/EditBook";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <h1>Error</h1>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/show-books',
                element:<BooksView></BooksView>
            },
            {
                path:'/add-books',
                element:<AddBook></AddBook>
            },
            {
                path:'/edit-book',
                element:<EditBook></EditBook>
            },
        ]
    },
]);
export default router;