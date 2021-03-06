import React, { Component } from 'react';
import { SWIPER_LIST,HOT_SERIES_LIST,CLASSICAL_SERIES_LIST,MOVIE_TYPES } from '../../server/api';
import { HOME_FLAG } from "../../common/content";
import './home.scss';
import Header from '../../components/header/header';
import Swiper from '../../components/swiper/swiper';
import ContentList from '../../components/list/contentList';

class Home  extends Component{
    constructor(){
        super();
        this.state = {
            swiperList:[],
            scrollTopVal:0,
            flag:HOME_FLAG
        }
    }
    componentWillMount(){
        this.setState({
            swiperList:SWIPER_LIST,
            hotSeriesList:HOT_SERIES_LIST,//最热的剧
            classicalSeriesList:CLASSICAL_SERIES_LIST,//经典的剧
            movie_types:MOVIE_TYPES,
        })
    }
    render(){
        return (
            <div className="home-container">
                <Header 
                    scrollTop={this.state.scrollTopVal}
                    types={this.state.movie_types}
                ></Header>
                <div className="home-scroll">
                    <div className="home-banner">
                        <Swiper swiperList={this.state.swiperList}></Swiper> 
                    </div>
                    <div className="common-content-container">
                        <ContentList list={this.state.hotSeriesList} flag={this.state.flag}></ContentList>
                        <ContentList list={this.state.classicalSeriesList} flag={this.state.flag}></ContentList>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
        let homeScroll = document.getElementsByClassName("home-scroll")[0];
        homeScroll.addEventListener("scroll",(e)=>{
           let scrollTop = e.target.scrollTop
           this.setState({
               scrollTopVal:scrollTop
           })
        });
    }
};
export default Home;