import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID cHqbi3UqdtFHhqkTeNFR7iC1_nvHDPH_Wn1Iva6LZGw'
    }
});