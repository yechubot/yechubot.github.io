import React from 'react';

import Card from '../components/Card';

import bookslog from '../assets/images/bookslog.png';
import homes from '../assets/images/homes.png';
import surprise from '../assets/images/surprise.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: '북스로그(BooksLog)',
                    subTitle: '책만을 위한 기록장 앱',
                    imgSrc: bookslog,
                    link: 'https://vimeo.com/508936838',
                    selected: false
                },
                {
                    id: 1,
                    title: '산책홈즈(Sancheck Homes)',
                    subTitle: '아두이노 센서를 이용한 스마트 홈 앱',
                    imgSrc: homes,
                    link: 'https://docs.google.com/presentation/d/15zWooeCEPeMfXxToaxr3fw2XERmVlgTuiHCRAQM-ESM/edit',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Surprise',
                    subTitle: 'CSS와 HTML만으로 구현된 화면',
                    imgSrc: surprise,
                    link: 'https://vimeo.com/493023371',
                    selected: false
                },
                
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;