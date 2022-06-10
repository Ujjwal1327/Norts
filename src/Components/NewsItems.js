import React, { Component } from 'react'

export class NewsItems extends Component {
    
    render() {
        let {title , descri,imgurl,gotourl,date,source}=this.props; 
        return (
            <div style={{width:"90%"}}>
                <div>
                  <div className="card mx-3" style={{ border:"2px solid grey", borderRadius:"10px", boxShadow: "#bd4040 0px -50px 86px -28px inset"}}>
                  <span class="position-absolute top-0 start-100 
                        translate-middle badge rounded-pill bg-danger" style={{zIndex:1, left:"80%"}}>{source}</span>
                      <img src={imgurl? imgurl:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"} className="card-img-top" alt="..."style={{  height: "161px", objectFit:"cover"}}/>
                      <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{descri}....</p>
                        <p className="card-text"><small className="text-danger"> On {new Date(date).toGMTString()}  </small></p>
                        <a href={gotourl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                      </div>
                  </div>
                </div>
           </div>
        )
    }
}

export default NewsItems
