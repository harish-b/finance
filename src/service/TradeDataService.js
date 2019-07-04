import axios from 'axios'

const API_URL = 'http://localhost:3000/trades'
const TRADES_API_URL = `${API_URL}`

class TradeDataService {

    retrieveAllTrades() {
        return axios.get(`${TRADES_API_URL}`)
    }

    deleteTrade(id) {
        return axios.delete(`${TRADES_API_URL}/${id}`);
    }

    findById(id) {
        return axios.get(`${TRADES_API_URL}/${id}`)
    }

    createTrade(){
        return axios.post(`${TRADES_API_URL}`)
    }

    getSide() {
        return axios.get(`${TRADES_API_URL}/sides`)
    }

    getOrderStatus() {
        return axios.get(`${TRADES_API_URL}/orderstatus`)
    }

    processOrder(trade) {
        console.log("The trade is" + trade);
        return axios.post(`${TRADES_API_URL}/processOrder`, {trade})
                          .then(res => {
                              console.log(res);
                              console.log(res.state.trades);
                          })
    }

    getAPIUrl() {
        return API_URL;
    }

}

export default new TradeDataService()