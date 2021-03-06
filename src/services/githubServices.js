const BASE_URL = 'https://api.github.com'
const { REACT_APP_GITHUB_USERNAME, REACT_APP_GITHUB_PASSWORD } = process.env;

async function apitFetch(...args) {
    const response = await fetch(...args);
    const data = await response.json();
    return data;
}

function GithubServices() {
    if(!GithubServices.instance) {
        this.token = btoa(`${REACT_APP_GITHUB_USERNAME}:${REACT_APP_GITHUB_PASSWORD}`)
        GithubServices.instance = this; 
    }
    return GithubServices.instance
}

GithubServices.prototype.profile = function(username) {
    return apitFetch(`${BASE_URL}/users/${username}`, {
        method: 'GET',
        headers: {
            Authorization: `Basic ${this.token}`
        }
    })
}

GithubServices.prototype.followers = function(username) {
    return apitFetch(`${BASE_URL}/users/${username}/followers`, {
        method: 'GET',
        headers: {
            Authorization: `Basic ${this.token}`
        }
    })
}

GithubServices.prototype.following = function(username) {
    return apitFetch(`${BASE_URL}/users/${username}/following`, {
        method: 'GET',
        headers: {
            Authorization: `Basic ${this.token}`
        }
    })
}

GithubServices.prototype.repos = function(username) {
    return apitFetch(`${BASE_URL}/users/${username}/repos`, {
        method: 'GET',
        headers: {
            Authorization: `Basic ${this.token}`
        }
    })
}

export default GithubServices;