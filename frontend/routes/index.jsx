import AddTask from "../src/pages/AddTask";
import TaskListing from "../src/pages/TaskListing";

export const routes = [
    {
     path: '/',
     element: <TaskListing />,
    }, 
    {
      path: '/add',
      element: <AddTask />,  

    },
    {
      path: '/edit/:id',
      element: <AddTask />,
    }
];