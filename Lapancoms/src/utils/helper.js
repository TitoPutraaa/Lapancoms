export const apiHandler = async (promise) => {
  try {
    const response = await promise;
    return { data: response.data.data ?? response.data, error: null };
  } catch (error) {
    console.error("API error:", error);
    return { data: null, error };
  }
};
