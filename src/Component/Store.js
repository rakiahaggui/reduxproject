import { configureStore } from "@reduxjs/toolkit"
import Todo from './Todo'
export default configureStore({
    reducer:{
        todo:Todo
    }
})

