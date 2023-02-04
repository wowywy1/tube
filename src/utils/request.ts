import axios from "axios";

const request = async (
  endpoint: string,
  { body, params }: { body?: any; params?: any }
) => {
  const url =
    (!endpoint.startsWith("https://") ? "https://" + endpoint : endpoint) +
    "?" +
    new URLSearchParams(params).toString();
  const response = await axios(url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export default request;
