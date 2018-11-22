import React, { Component } from 'react'
import Dtop from '../../components/Dtop/Dtop';
import Dlist from '../../components/Dlist/Dlist';
import Dbottom from '../../components/Dbottom/Dbottom';



class Classify extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div style={{height:"100%"}}>
                <Dtop/>
                <Dlist/>
                <Dbottom/>
            </div>
            
        )
    }
}

export default Classify
