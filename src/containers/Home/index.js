import React, { Component } from 'react';
import AppHeader from '../../components/AppHeader';
import BuyComponent from '../../components/BuyComponent';
import SellComponent from '../../components/SellComponent';
import NewOrder from './NewOrder';
import TradeDataService from '../../service/TradeDataService';

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            headerInput:'',
            isOrderBtn:true,
            trades: []
         }
    }

    handleTFChange=(e)=>{
        let headerInput = e.target.value;
        if(!!headerInput) {
            headerInput = headerInput.toLowerCase();
        }

        this.setState(function(prevState, props){
            let trades = prevState.tradesCopy.filter(
                (trade) => trade.ticker.toLowerCase().indexOf(headerInput) > -1 ||
                            trade.name.toLowerCase().indexOf(headerInput) > -1
            )
            return {headerInput,
                    trades}
        });
    }
    submitBtnClick=(e)=>{
        this.setState({
            isOrderBtn : !this.state.isOrderBtn
        })
    }

    componentDidMount() {
        this.refreshTrades();
    }

    refreshTrades =() => {
        TradeDataService.retrieveAllTrades().then(
            response => {
                this.setState({trades: response.data, tradesCopy: response.data})
            }
        )
    }

    renderBuySell=(item)=>{
        return(
                <div key = {item.id.toString()} style = {{display:'flex'}} >
                    <div style = {{width:'50%'}} >
                        {/* { 
                            item.buyData.map((data, index) =>{
                                return(
                                    <BuyComponent key = {data.id} buyData = {data}/> 
                                )
                            })
                        } */}
                        {item.side === "BUY" && <BuyComponent buyData = {item}/> }
                    </div>
                    <div style = {{width:'50%'}} >
                        {/* { 
                            item.sellData.map((data, index) =>{
                                return(
                                    <SellComponent key = {data.id} sellData = {data}/> 
                                )
                            })
                        } */}
                        {item.side === "SELL" && <SellComponent sellData = {item}/> }
                    </div>
                </div>
        )
    }

    createAppHeader=(item)=>{
        return(
            <React.Fragment key = {item.id.toString()}>
                <div className = 'App-header'>
                    <div style = {{ width:'100%', alignItems:'center', display:'flex', justifyContent:"space-between",marginRight:30, marginLeft:30}}>
                        <div>
                            <p className='txt-0'>{item.ticker}</p>
                            <p className='txt-1'>{item.name}</p>
                        </div>
                    </div>
                </div>
                {                
                    this.renderBuySell(item)   
                }
            </React.Fragment>
        )
    }
    render() { 
        return (  
            <>
                <AppHeader headerInput={this.state.headerInput}  handleTFChange= {this.handleTFChange} submitBtnClick={this.submitBtnClick} />
                {this.state.isOrderBtn ? <NewOrder refreshTrades={this.refreshTrades}/>:null}
                {
                    this.state.trades.map((item, index)=>{
                        return(
                            this.createAppHeader(item)                            
                        )
                    })
                }
            </>
        );
    }
}
 
export default Home;