import axios from "axios";

export const apis = {
  byName: (summonerName: string) =>
    axios.get(
      `/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    ),
};
