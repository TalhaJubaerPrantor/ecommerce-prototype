import './Collections.css';

const Collections = () => {
    return (<div><br /><br />
        <h1 style={{marginLeft:"3%"}}>Collections</h1>
        <div className='collection-container'>
            <div className='collection-left'>
                <img style={{height:"100%",width:"100%"}} src="MensCollection.png" alt="mensCollection" />
                
            </div>

            <div className='collection-right'>
                <div style={{height:"100%"}}>
                    <img style={{height:"100%",width:"100%"}} src="womensCollection.png" alt="mensCollection" />
                    
                </div>
                <div  style={{height:"100%"}}>
                    <img style={{height:"100%",width:"100%"}} src="kidsCollection.png" alt="mensCollection" />
                </div>
            </div>
        </div>

       </div>
    );
};

export default Collections;