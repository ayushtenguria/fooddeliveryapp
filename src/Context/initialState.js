import { fetchUser } from "../utils/fetchLocalStorageData";


const userinfo = fetchUser()

export const initialState = {
 user: userinfo,
};