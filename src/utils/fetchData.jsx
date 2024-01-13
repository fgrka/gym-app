import axios from "axios";

const fetchData = async (url) => {
 

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'afaa448531mshc979557ae6ca9e4p115acdjsnd2ee5224c4b7',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      },
      params: {limit: '50'},
    };
      
    const data = axios.get(url, options).then(res => res.data)

    return data;
}

 
export default fetchData;
