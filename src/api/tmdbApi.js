import axiosClient from "./axios-client";

export const category = {
    movie:'movie',
    tv:'tv',
}

export const movieType = {
    upcoming:'upcoming',
    popular:'popular',
    top_rated:'top_rated',
}

export const TVType = {
    popular: 'popular',
    top_rated:'top_rated',
    on_the_air:'on_the_air',
}

const tmdbApi = {
    getMovieList:(type, params)=>{
        const url = 'movie/' + movieType[type]
        return axiosClient.get(url, {params:{}})
    },
    getTVList:(type, params)=>{
        const url = 'tv/' + TVType[type]
        return axiosClient.get(url, {params:{}})
    },
    getVideos:(cate, id)=>{
        const url = category[cate] + '/' + id + '/video'
        return axiosClient.get(url, {params:{}})
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
}