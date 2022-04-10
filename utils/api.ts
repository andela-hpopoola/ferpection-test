export const getAPIData = async (url: string) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
  try {
    const apiResponse = await fetch(`${BASE_URL}${url}`);
    const json = await apiResponse.json();
    return json;
  } catch (error) {
    return error;
  }
};
