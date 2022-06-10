import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  defaultProps = {
    // country: "in",
    category: "science",
  };
  PropTypes = {
    // country: PropTypes.string,
    category: PropTypes.string,
  };
  articles = [];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `Norts--${this.props.category}`;
  }
  async updateNews() {
    this.props.setprogress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9acd4fa827c94a7ebe2651601e09755a&page=${this.state.page}&pageSize=5`;
    let data = await fetch(url);
    this.props.setprogress(40);
    let parsedData = await data.json();
    this.props.setprogress(70);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
    this.props.setprogress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => {
    this.setState({page:this.state.page+1})
    this.updateNews();
  };


  render() {
    return (
     <> 
     <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        > <div className="container" style ={{marginTop:"90px"}}>
          <h2 className="d-flex text-dark justify-content-around my-1" style ={{borderBottom:"2px solid red"}} >
          Trending-Headlines of {this.props.category}
        </h2>
          <div className="row"style ={{marginTop:"10px"}} >
            {this.state.articles.map((elements) => {
              return (
                <div
                  className="col-md-4 my-3 d-flex justify-content-around"
                  key={elements.url}
                >
                  <NewsItems
                    title={elements.title ? elements.title.slice(0, 40) : ""}
                    descri={
                      elements.description
                        ? elements.description.slice(0, 90)
                        : ""
                    }
                    imgurl={elements.urlToImage}
                    gotourl={elements.url}
                    date={elements.publishedAt}
                    source={elements.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
                            
     
    </>);
  }
}

export default News;















  // handleprevclick = async () => {
  //   // if(this.state.page>1)
  //   // {
  //   //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9acd4fa827c94a7ebe2651601e09755a&page=${this.state.page -1}&pageSize=9`;
  //   // let data = await fetch(url);
  //   // let parsedData= await data.json();
  //   // this.setState({
  //   //   articles:parsedData.articles,
  //   //   page:this.state.page-1
  //   // });
  //   // }
  //   if (this.state.page > 1) {
  //     this.setState({
  //       page: this.state.page - 1,
  //     });
  //     this.updateNews();
  //   }
  // };
  // handlenextclick = async () => {
  //   //   if(this.state.page+1<= Math.ceil(this.state.totalResults/9))
  //   //   {
  //   //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9acd4fa827c94a7ebe2651601e09755a&page=${this.state.page +1}&pageSize=9`;
  //   //   let data = await fetch(url);
  //   //   let parsedData= await data.json();
  //   //   this.setState({
  //   //     articles:parsedData.articles,
  //   //     page:this.state.page+1
  //   //   });
  //   // }
  //   if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 9)) {
  //     this.setState({
  //       page: this.state.page + 1,
  //     });
  //     this.updateNews();
  //   }
  // };
  

  /* <div className=" d-flex justify-content-between">
                                        <div
                                          type="button"
                                          disabled={this.state.page === 1}
                                          className="btn btn-light  mx-5 my-4"
                                          onClick={this.handleprevclick}
                                        >
                                          {" "}
                                          &larr; Prev
                                        </div>

                                        <div type="button" className="btn btn-light my-4 ">
                                          {" "}
                                          {this.state.page}.....of.....
                                          {Math.ceil(this.state.totalResults / 9)}{" "}
                                        </div>
                                        <div
                                          type="button"
                                          className="btn btn-light mx-5 my-4"
                                          onClick={this.handlenextclick}
                                        >
                                          {" "}
                                          Next &rarr;{" "}
                                        </div>
                                      </div> */