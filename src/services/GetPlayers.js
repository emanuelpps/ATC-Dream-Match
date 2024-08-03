import axios from "axios";

export const GetPlayers = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const idTeam = "302";

  try {
    const response = await axios.get(`
      https://apiv3.apifootball.com/?action=get_teams&league_id=${idTeam}&APIkey=${API_KEY}`);
    //const formatResponse = JSON.stringify(response.data);
    console.log(response.data[0].players);
    return response.data[0].players;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
