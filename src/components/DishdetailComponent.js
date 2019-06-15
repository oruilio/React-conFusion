import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            ) 
        }
        else{
            return(
                <div></div>
            )   
        }
    }

    renderComments(dish){
        if(dish!=null){
            const com = dish.comments.map((ele)=>
                <li key={ele.id}>
                    <ul className="list-unstyled">{ele.comment}</ul>
                    <br/>
                    <ul className="list-unstyled">-- {ele.author} , {ele.date}</ul>
                    <br/>
                </li>);
            
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">{com}</ul>
                </div>
                );
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render(){ 
        const dish=this.props.dish 
        return( 
            <div className="container">
            <div className="row"> 
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dish)}
                </div>     
            </div>  
            </div>    
        );
    }  
}

export default DishDetail;