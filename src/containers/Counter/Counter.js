import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actiontypes from '../../actions/action'
class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.cnt} />
                <CounterControl label="Increment" clicked={this.props.counterIncrement} />
                <CounterControl label="Decrement" clicked={this.props.counterIncrementdec}  />
                <CounterControl label="Add 10" clicked={this.props.counterIncrementadd}  />
                <CounterControl label="Subtract 15" clicked={this.props.counterIncrementsub}  />
                <hr/>
                <button onClick={()=>this.props.storeResult(this.props.cnt)}>Store Result</button>
                <ul>
                    {this.props.re.map(strresult=>(
                        <li key={strresult.id} onClick={()=>this.props.deleteResult(strresult.id)}>{strresult.value}</li>
                    )
                        
                    )}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return {
        cnt : state.ctr.counter,
        re: state.str.results 
    }
 
}

const mapDispacherToProps= dispatch =>{
return {
    counterIncrement:()=>dispatch({type:actiontypes.INCREMENT}),
    counterIncrementdec:()=>dispatch({type: actiontypes.DECREMENT}),
    counterIncrementadd:()=>dispatch({type: actiontypes.INCREMENT10,value:10}),
    counterIncrementsub:()=>dispatch({type: actiontypes.DECREMENT10,value:15}),
    storeResult:(count)=>dispatch({type: actiontypes.store_Result, value: count}),
    deleteResult:(id)=>dispatch({type:actiontypes.delete_Result,id1:id})
}
}
export default connect(mapStateToProps, mapDispacherToProps)(Counter);