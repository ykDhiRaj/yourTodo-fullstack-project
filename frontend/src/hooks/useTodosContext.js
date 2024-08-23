    import { TodoContext } from "../context/TodosContext";
    import { useContext } from "react";

    export const useTodosContext = ()=>{
        const context = useContext(TodoContext)

        if(!context){
            throw Error("useTodoContext must be used inside the TodoContextProvider")
        }

        return context
    }