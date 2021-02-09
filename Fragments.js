import { gql } from "apollo-boost";

export const POST_FRAGMENT = gql`
  fragment PostParts on Post {
    id
    location
    caption
    user {
      id
      isSelf
      avatar
      username
    }
    files {
      id
      url
    }
    likeCount
    isLiked
    comments {
      id
      text
      user {
        avatar
        id
        username
      }
    }
    createdAt
  }
`;

export const USER_FRAGMENT = gql`
  fragment UserParts on User {
    id
    avatar
    username
    fullName
    firstName
    lastName
    isFollowing
    isSelf
    bio
    followingCount
    followersCount
    postsCount
    stories {
      id
      caption
      createdAt
    }
    posts {
      ...PostParts
    }
    following{
      id
    }
  }
  ${POST_FRAGMENT}
`;

export const STORY_FRAGMENT = gql`
  fragment StoryParts on Story {
    id
    caption
    user {
      id
      avatar
      username
    }
    seenUsers {
      id
      avatar
      username
    }
    tagUser {
      id
      avatar
      username
    }
    files {
      id
      name
      url
    }
    createdAt
  }
`;