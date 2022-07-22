import { useContext } from "react";
import { AppContext } from "../Context";

const UserList = () => {
    const {
        users,
        userLength,
    } = useContext(AppContext);

    return !userLength ? (
        <p>{userLength === null ? "Loading..." : "Please insert some users."}</p>
    ) : (
        <table>
            <thead>
            <tr>
                <th>Pk</th>
            </tr>
            </thead>
            <tbody>
            {users.map((pk) => {
                return (
                    <tr key={pk}>
                        <td>{pk}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default UserList;
