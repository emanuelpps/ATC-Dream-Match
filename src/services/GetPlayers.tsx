import axios from "axios";

interface AllPlayers {
  name: string;
  player_name: string;
  player_image: string;
  team_key: string;
  team_name: string;
}

interface ApiResponse {
  players: AllPlayers[];
}

export const GetPlayers = async (): Promise<AllPlayers[] | null> => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const idTeam = "302";

  try {
    const response = await axios.get<ApiResponse[]>(
      `https://apiv3.apifootball.com/?action=get_teams&league_id=${idTeam}&APIkey=${API_KEY}`
    );

    console.log(response.data[0].players);
    return response.data[0].players;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    } else {
      console.log(error);
    }
    return null;
  }
};
