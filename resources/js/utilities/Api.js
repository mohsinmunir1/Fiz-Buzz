const Api = {
    async fizzbuzzNumbers () {
        const response = await axios.get('/api/numbers/fizzbuzz')
        return response.data;
    }
}

export default Api
