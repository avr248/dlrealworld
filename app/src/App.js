import React from 'react';
import fetch from 'node-fetch';
import RestClient from './restClient';
import './resp.css';
const apiClient = new RestClient({
    baseUrl: 'https://crj9h4tld6.execute-api.eu-west-1.amazonaws.com/dev/'
});
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: null
        };
    }
    componentDidMount() {
        apiClient.getProducts().then(
            response => 
                this.setState({products:response.products})
        );
    }
    
    render(){
        let { products } = this.state;
        let content = <p>loading . . . </p>;
        if(products && products.length > 0){
            console.log(products)
            content = products.map((item, index) => (
                <div key={index} className="fd-col ai-c jc-c height-100p">
                    <h2>{item.title}</h2>
                    <img src={item.image.src} style={{width:300, height:'auto'}}/>
                </div>
            ));
        }
        return (
            <div className="col mtbl-100p ai-c jc-c height-100p">
                {content}
            </div>
        )
    }
}
export default App;
