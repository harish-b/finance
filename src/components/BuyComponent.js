import React from 'react';

    function BuyComponent(props) {
        let successTxt = 'Fulfilled';
        let shareRemTxt = 'Share Remaining';
        let fulfilled = Math.floor(Math.random() * 60);
        let sharesRemaining = props.buyData.quantity - (fulfilled / 100 * props.buyData.quantity);
        return (  
            <div style = {{ marginLeft:30}}>
                <div style = {{display: 'flex',marginTop:15, height:20 }}>
                    <button className='btn-small'>BUY</button>                    
                        <p className='txt-1'>{props.buyData.quantity} shares</p>
                        <span className='txt-1'>&#8226;</span>
                        <p className='txt-1'>{props.buyData.orderType}</p>
                </div>
                <div style ={{width:'100%', marginTop:15, marginBottom:10, display:'flex', alignItems:'center', height:30}}>
                    <div style ={{width:'50%', marginRight:10, display:'flex', alignItems:'center', height:30, borderRadius:4, background:"#cacaca"}}>
                        <div style ={{width:`${fulfilled}%`, marginRight:10, height:30, borderRadius:4, background:"#000"}}>
                        
                        </div> 
                        <div>
                            <p className='txt-2 height-10'>{`${fulfilled}%`}</p>
                            <p className='txt-0'>{successTxt}</p>   
                        </div>
                    </div>
                    <div>
                        <p className='txt-2 height-10'>{Math.floor(sharesRemaining)}</p>
                        <p className='txt-0'>{shareRemTxt}</p>   
                    </div>                  
                </div>
                <p className='txt-1'>Streaming ..</p>  
            </div>
        );
}
 
export default BuyComponent;