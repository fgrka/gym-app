import axios from "axios";

const fetchData = async (url) => {
    const token = process.env.VITE_RAPID_API;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': token,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      },
      params: {limit: '50'},
    };
      
    const data = axios.get(url, options).then(res => res.data)

    return data;
}

//import.meta.env.VITE_RAPID_API ?? 
 
export default fetchData;
