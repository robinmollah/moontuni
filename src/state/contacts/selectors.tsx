import {selectorFamily} from "recoil";

export const userProfileQuery = selectorFamily({
    key: 'userProfileQuery',
    get: uid => async ({}) => {
        console.log("uid", uid);
        const fake_id = Math.floor(Math.random() * 10) + 1;
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${fake_id}`);
        return response.json();
    }
})