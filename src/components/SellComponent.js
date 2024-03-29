import React from 'react';

    function SellComponent(props) {
        let successTxt = 'Fulfilled';
        let shareRemTxt = 'Share Remaining';
        let fulfilled = Math.floor(Math.random() * 60);
        let sharesRemaining = props.sellData.quantity - (fulfilled / 100 * props.sellData.quantity);
        return (  
            <div style = {{ marginLeft:30}}>
                <div style = {{display: 'flex',marginTop:15, height:20 }}>
                    <button className='btn-small sell-clr'>SELL</button>                    
                        <p className='txt-1'>{props.sellData.quantity} shares</p>
                        <span className='txt-1'>&#8226;</span>
                        <p className='txt-1'>{props.sellData.orderType}</p>
                </div>
                <div style ={{width:'100%', marginTop:15, marginBottom:10, display:'flex', alignItems:'center', height:30}}>
                    <div style ={{width:'50%', marginRight:10, display:'flex', alignItems:'center', height:30, borderRadius:4, background:"#cacaca"}}>
                        <div style ={{width:`${fulfilled}%`,display:'flex',alignItems:'center', marginRight:10, height:30, borderRadius:4, background:"#000"}}>
                            {fulfilled >20 &&
                            <div style = {{marginLeft:8}}>
                                <p className='txt-2 height-10' style ={{color:'#fff'}}>{`${fulfilled}%`}</p>
                                <p className='txt-0' style ={{color:'#fff'}}>{successTxt}</p>   
                            </div>
                            }
                        </div> 
                        {fulfilled <=20 &&
                        <div>
                            <p className='txt-2 height-10'>{`${fulfilled}%`}</p>
                            <p className='txt-0'>{successTxt}</p>   
                        </div>
                        }
                    </div>
                    <div>
                        <p className='txt-2 height-10'>{Math.floor(sharesRemaining)}</p>
                        <p className='txt-0'>{shareRemTxt}</p>   
                    </div>                 
                </div>
                <p className='txt-1'>Streaming ..</p>  
                <br/>
            </div>
        );
}
 
export default SellComponent;