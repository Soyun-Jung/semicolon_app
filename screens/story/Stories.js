//import Stories from 'react-insta-stories';
import React, { useState,Component } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const GETSTORY_QUERY = gql`
query getStories($id: String!)  {
    getStories(id: $id) {
     id
  user {
    id
    username
    avatar
  }
  caption
  files{
    id
    url
    type
  }
    }
  }
`;


export default () => {
    const { data, loading } = useQuery(GETSTORY_QUERY,
        { variables: { id } });
    const stories = [{content}, {type}, {finish : 0}];

    data && data.files && data.files(file => {
      stories.push({ content:file.url }, { type: file.type }, { finish:0});
    })
  console.log(stories);
    return stories;
}