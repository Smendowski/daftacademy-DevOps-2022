import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

export const Actions = () => {
    let [users, setUsers] = useState([]);

    let [userLength, setUserLength] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/api/users`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.users.length > 0) {
                    setUsers(data.users);
                    setUserLength(true);
                } else {
                    setUserLength(0);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const createUser = (newUser) => {
        fetch(`${API_URL}/api/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.pk) {
                    setUsers([
                        ...users,
                        data.pk
                    ]);
                    setUserLength(true);
                } else {
                    alert(data.msg);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return {
        users,
        createUser,
        userLength
    };
};
