import React from 'react';
import {Link,useParams} from 'react-router-dom';
import styled from 'styled-components';


 const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

const PageNum = styled.ul`
  display: flex;
  list-style: none;
  padding:30px;
  margin-top:850px;
  margin-left:700px;
 `

const PageLi = styled.li` 
    width: 40px;
    height: 40px;
    border:solid;
    margin-right:10px;
    padding:15px;
    border-radius: 15px;
    box-shadow: 0px 5px 20px -7px rgba(0,0,0,0.75);
    border: none;
    background-color:lightgrey;
    cursor:pointer
    `


  const pageNumbers = [];
  const {title} =useParams()

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav >
        <PageNum>     
        {pageNumbers.map(number => (
          <PageLi key={number} >
            <Link onClick={() => paginate(number)} to={`/cards/${title}`} style={{textDecoration:'none',color:'black'}} >
              {number}
            </Link>
          </PageLi>
        ))}
      </PageNum>
    </nav>
  )
}

export  {Pagination}