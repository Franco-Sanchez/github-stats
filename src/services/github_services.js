const BASE_URL = 'https://api.github.com'
const { REACT_APP_GITHUB_USERNAME, REACT_APP_GITHUB_PASSWORD } = process.env;

async function apitFetch(...args) {
    const response = await fetch(...args)
    const data = await response.json()
    return data;
}

function GithubServices() {
    if(!GithubServices.instance) {
        this.token = btoa(`${REACT_APP_GITHUB_USERNAME}:${REACT_APP_GITHUB_PASSWORD}`)
        GithubServices.instance = this; 
    }
    return GithubServices.instance
}

GithubServices.prototype.login = function(username) {
    return apitFetch(`${BASE_URL}/users/${username}`, {
        method: 'GET',
        headers: {
            Authorization: `Basic ${this.token}`
        }
    })
}

export default GithubServices;