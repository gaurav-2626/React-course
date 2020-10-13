import React , {useState,useContext} from "react"

import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap"

import {v4} from "uuid"

import {TodoContext} from "../Context/TodoContext"
import {ADD_TODO} from "../Context/action.types.js"

// doubt in css and bootstrap

const TodoForm = () => {
    const [todoString, setTodoString] = useState("");
    const {todos,dispatch} = useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if(todoString === ""){
            return alert("Please Enter !");
        }

        const todo = {
            todoString,
            id : v4()
        }

        dispatch({
            type: ADD_TODO,
            payload: todo
        })

        setTodoString("")

    }

    return (
        <Form onSubmit={handleSubmit}>
                <FormGroup>
                <InputGroup>
                    <Input
                    type="text"
                    id = "todo"
                    name ="todo"
                    placeholder="Your next Todo"
                     value = {todoString}
                     //dobut on what events is.
                     onChange={e => setTodoString(e.target.value)}
                    />

                    <InputGroupAddon addonType = "prepend">
                        <Button color="warning"
                        //Todo onclick
                        >
                            Add
                        </Button>
                    </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
        </Form>
    )
}

export default TodoForm;