export async function fetchData(url) {
  const response = await fetch(url);
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch data from backend");
  }
  return responseData;
}
