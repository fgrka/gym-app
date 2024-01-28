import axios from "axios";

const fetchData = async (url) => {
 
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      },
      params: {limit: '50'},
    };
      
    const data = axios.get(url, options).then(res => res.data)

    return data;
}

 
export default fetchData;
