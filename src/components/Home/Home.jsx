import { Component } from "react";
import axios from 'axios';


export default class Home extends Component{
    state={
        articles:[]
    }

    getNews = async ()=>{
        let { data } = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-02-06&sortBy=publishedAt&apiKey=e29ea79144924a429c90a4db652cf77d')
        this.setState({articles:data.articles});
    }

    componentDidMount(){
        this.getNews();
    }

    render(){
        return (
        <>
                <div className="row vh-100 align-items-center">
                    {this.state.articles.length > 0?   this.state.articles.map((article , index) => <div key={index} className="col-md-3">
                        <div className="article">
                            <img src={article.urlToImage} className='w-100' alt={article.content} />
                            <h4 className="fw-bold">{article.title}</h4>
                            <p>{article.description}</p>
                        </div>
                    </div>):
                        <div className="text-center ">
                            <h2><i className='fas fa-spinner'></i></h2>
                        </div>
                    }
        </div>
        </>
        )
    }
}