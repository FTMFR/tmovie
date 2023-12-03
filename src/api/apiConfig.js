const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '28c9cd3c50367a3e936404dd4375f8db',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;