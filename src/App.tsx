import { useState } from "react";

import axios from "axios";


const App = () => {

  const [token, setToken] = useState('');


  const albumSearch = () => axios.get('https://api.spotify.com/v1/search', {
    params: {
      q: "72 Seasons",
      type: 'album',
      market: 'GB'
    },
    headers: {
      Authorization: `Bearer  ${token}}`
    }
  }).then(() => {
    console.log('Profit?');
  })

  return (
    <h1>Start Here</h1>
  )
}

export default App
