import axios from "axios";

export const wowapi = axios.create({
  baseURL: "https://us.api.blizzard.com/data/wow/",
});
