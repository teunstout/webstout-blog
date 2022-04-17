import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../../../redux/slices/userSlice";

interface AuthenticationInterface {
    children: React.ReactChild;
}

const Authentication = ({ children }: AuthenticationInterface) => {
    const dispatch = useDispatch();

    const auth = getAuth();
    onAuthStateChanged(auth, user => {
        if (user && user.email) {
            dispatch(setUser(user.email));
        } else {
            dispatch(removeUser());
        }
    });
    return children;
};

export default Authentication;
