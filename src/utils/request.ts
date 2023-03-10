import axios from "axios";

const request = async (
  endpoint: string,
  { body, params }: { body?: any; params?: any }
) => {
  const url =
    (!endpoint.startsWith("https://") && !endpoint.startsWith("http://")
      ? "https://" + endpoint
      : endpoint) +
    "?" +
    new URLSearchParams(params).toString();
  console.log(url);
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
