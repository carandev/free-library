export default {
  get: async (url, params) => {
    const response = await fetch(`${url}?${params}`)
    return await response.json();
  },
}