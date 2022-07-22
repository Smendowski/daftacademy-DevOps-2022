import { useState, useContext } from "react";
import { AppContext } from "../Context";

const CreateUserForm = () => {
    const {
        createUser
    } = useContext(AppContext);

    const [newUser, setNewUser] = useState({});

    const addNewTask = (e, field) => {
        setNewUser({
            ...newUser,
            [field]: e.target.value,
        });
    };

    const submitUser = (e) => {
        e.preventDefault();
        createUser(newUser);
        e.target.reset();
    };

    return (
        <form className="insert-form" onSubmit={submitUser}>
            <label>Create user</label>
            <input
                type="text"
                id="_name"
                onChange={(e) => addNewTask(e, "first_name")}
                placeholder="First name"
                autoComplete="off"
                required
            />
            <input
                type="text"
                id="_name"
                onChange={(e) => addNewTask(e, "last_name")}
                placeholder="Last name"
                autoComplete="off"
                required
            />
            <input
                type="email"
                id="_name"
                onChange={(e) => addNewTask(e, "email")}
                placeholder="Email"
                autoComplete="off"
                required
            />
            <input type="submit" value="Create" />
        </form>
    );
};

export default CreateUserForm;
