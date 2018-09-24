import axios from 'axios';
const URL = 'http://willensoll-nc-news.herokuapp.com/api'

export const withErrorHandling = (func) => {
    return function (...args) {
        return func(...args).catch(({response}) => {
            if (response) {
            const errorInfo = {
                code: response.status,
                message: response.data.message
            };
            throw errorInfo
        }
        });
    }   
}

export const fetchTopics = withErrorHandling(() => {
    return axios.get(`${URL}/topics`)
        .then(({ data: { topics } }) => topics)
})

export const fetchArticles = withErrorHandling((param) => {
    if (param) {
        return axios.get(`${URL}/topics/${param}/articles`)
            .then(({ data: { articles } }) => articles)
    } else {
        return axios.get(`${URL}/articles`)
            .then(({ data: { articles } }) => articles)
    }
})

export const fetchComments = withErrorHandling((article) => {
    return axios.get(`${URL}/articles/${article}/comments`)
        .then(({ data: { comments } }) => comments)
})

export const fetchArticle = (articleId) => {
    return axios.get(`${URL}/articles/${articleId}`)
        .then(({ data: { article } }) => article)
}

export const voteOnArticle = (articleId, direction, voted) => {
    if (!voted) axios.put(`${URL}/articles/${articleId}?vote=${direction}`)
    else if (voted && direction !== voted) {
        return Promise.all([
            axios.put(`${URL}/articles/${articleId}?vote=${direction}`),
            axios.put(`${URL}/articles/${articleId}?vote=${direction}`)
        ])
    }

}

export const voteOnComment = (commentId, direction, voted) => {
    if (!voted) axios.put(`${URL}/comments/${commentId}?vote=${direction}`)
    else if (voted && direction !== voted) {
        return Promise.all([
            axios.put(`${URL}/comments/${commentId}?vote=${direction}`),
            axios.put(`${URL}/comments/${commentId}?vote=${direction}`)
        ])
    }
}

export const postCommentToArticle = (id, newComment) => {
    return axios.post(`${URL}/articles/${id}/comments`, newComment)
        .then((addedComment) => addedComment)
}


export const deleteCommentfromArticle = (id) => {
    return axios.delete(`${URL}/comments/${id}`)
}