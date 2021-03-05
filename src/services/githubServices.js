const BASE_URL = 'https://api.github.com/users'

async function apitFetch(...args) {
    const response = await fetch(...args)
    const data = await response.json()
    return data;
}

function GithubServices() {
    if(!GithubServices.instance) {
        this.token = //
        GithubServices.instance = this; 
    }
    return GithubServices.instance
}

GithubServices.prototype.login = function() {
    return apitFetch(`${BASE_URL}/`, {
        method: 'GET',
        headers: {

        }
    })
}

export default GithubServices;