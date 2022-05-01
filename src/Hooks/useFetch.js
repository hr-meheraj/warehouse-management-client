import React , {useState, useEffect} from 'react';
import axios form 'axios';

const useFetch = url => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [err, setErr] = useState(null);

    const getApi = async apiUrl => {
        try{
            setLoading(true);
            const response = await axios.get(apiUrl);
            const apidata = await response.data;
            setData(apidata);
        }catch(err){
            setErr(err);
        }finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        getApi(url);
    },[url])

    return [data, loading, err, setData];
}

export default useFetch;