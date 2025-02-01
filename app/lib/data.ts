import axios from "axios";

export async function fetchAllCoffees() {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json",
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    // throw new Error("Failed to fetch all coffees data.");
  }
}
