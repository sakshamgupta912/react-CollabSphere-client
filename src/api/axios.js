import axios from "axios";

export default axios.create({
    baseURL: 'https://collabspheresever.azurewebsites.net',
})