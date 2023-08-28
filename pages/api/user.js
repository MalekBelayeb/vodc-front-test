import axios from 'axios';

export default async (req, res) => {
  const userId = '646f8aae425529003c82647d'; // Replace with the actual user ID
  const url = `https://www.orangedigitalcenters.com/api/v1/user/${userId}`;
 
  try {
    const response = await axios.get(url);

    // Check if the response status code is 403
    if (response.status === 401) 
    {
      res.status(401).json({ error: 'Access denied' });
      console.log('Access denied')

    } 
    else {
      res.status(200).json(response.data);
      console.log(response.data)

    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error',details: error.message });
  }
};