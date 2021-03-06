import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Articles from '../Articles/Articles';
import Header from '../Header/Header';

const News = () => {
    const [news, setNews] = useState([]);
    const [searched, setSearched] = useState([]);
    useEffect(() => {
        fetch(
          "./data.JSON"
        )
          .then((res) => res.json())
            .then((data) => {
                setSearched(data.articles)
                setNews(data.articles)
            });
    },[])

    const handleOnSearch = name => {
        const searchedItem = news.filter(ns => ns.title.toLowerCase().includes(name.toLowerCase()));
        setSearched(searchedItem);
    }
    return (
    <>
    <Header
        handleOnSearch={handleOnSearch}        
    ></Header>
    <Container>          
        {
            searched.length === 0 ? 
                        <Spinner animation="border" />
                        :
                              <Row xs={1} md={3} className="g-4">
                                    {
                                        searched.map(ns => <Articles
                                            // key={ns.source.id}
                                            article={ns}
                                        ></Articles>)
                                }
      </Row>
        }

    </Container>
    </>
    );
};

export default News;