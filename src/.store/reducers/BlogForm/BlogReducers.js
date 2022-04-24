import {
    CREATE_POST,
    EDIT_POST,
    UPDATE_POST,
    COMPLETE_POST,
    LIKE_POST,
    UNLIKE_POST,
    UPDATE_COMMENT,
    CONFIRM_COMMENT,
    DELETE_POST,
    DELETE_COMMENT
} from "../../actions/BlogForm/BlogActions"


let initalState = {
    postList: [
        {
            id: 0,
            label: "How to create react project",
            text: " Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine. ",
            author: "Alex",
            liked: 56,
            comment: [
                {
                    id: 0,
                    comment_author: "guest1",
                    comment_text: "Thx"
                },
                {
                    id: 1,
                    comment_author: "guest2",
                    comment_text: "Wow"
                },
                {
                    id: 2,
                    comment_author: "guest3",
                    comment_text: "Cool"
                },
                {
                    id: 3,
                    comment_author: "guest4",
                    comment_text: "Hello its my first comment"
                }
            ]
        },
        {
            id: 1,
            label: "How to create react project  Test V2.2",
            text: " Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine. ",
            author: "Alex",
            liked: 56,
            comment: [
                {
                    id: 0,
                    comment_author: "guest1",
                    comment_text: "Thx"
                },
                {
                    id: 1,
                    comment_author: "guest2",
                    comment_text: "Wow"
                },
                {
                    id: 2,
                    comment_author: "guest3",
                    comment_text: "Cool"
                },
                {
                    id: 3,
                    comment_author: "guest4",
                    comment_text: "Hello its my first comment"
                }
            ]
        },
        {
            id: 2,
            label: "Vue vs React ? ",
            text: "Front-end development can be confusing with new JavaScript libraries sprouting like mushrooms after a summer rain. Each time you start a new project, you face a tough choice: stick with your battle-tested stack, or experiment with cutting-edge tech? So let’s compare the two most popular options, Vue vs React.",
            author: "Alex",
            liked: 16,
            comment: [
                {
                    id: 0,
                    comment_author: "guest1",
                    comment_text: "Thx"
                },
                {
                    id: 1,
                    comment_author: "guest2",
                    comment_text: "Wow"
                },
                {
                    id: 2,
                    comment_author: "guest3",
                    comment_text: "Cool"
                },
                {
                    id: 3,
                    comment_author: "guest4",
                    comment_text: "Hello its my first comment"
                }
            ]
        },
        {
            id: 3,
            label: "4 Design Patterns You Should Know for Web Development",
            text: "Observer, Singleton, Strategy, and Decorator. Have you ever been on a team where you need to start a project from scratch? That's usually the case in many start-ups and other small companies. There are so many different programming languages, architectures, and other concerns that it can be difficult to figure out where to start. That's where design patterns come in. A design pattern is like a template for your project. It uses certain conventions and you can expect a specific kind of behavior from it. These patterns were made up of many developers' experiences so they are really like different sets of best practices. And you and your team get to decide which set of best practices is the most useful for your project. Based on the design pattern you choose, you all will start to have expectations for what the code should be doing and what vocabulary you all will be using. Programming design patterns can be used across all programming languages and can be used to fit any project because they only give you a general outline of a solution. There are 23 official patterns from the book Design Patterns - Elements of Reusable Object-Oriented Software, which is considered one of the most influential books on object-oriented theory and software development. In this article, I'm going to cover four of those design patterns just to give you some insight to what a few of the patterns are and when you would use them.",
            author: "Alex",
            liked: 23,
            comment: [
                {
                    id: 0,
                    comment_author: "guest1",
                    comment_text: "Thx"
                },
                {
                    id: 1,
                    comment_author: "guest2",
                    comment_text: "Wow"
                },
                {
                    id: 2,
                    comment_author: "guest3",
                    comment_text: "Cool"
                },
                {
                    id: 3,
                    comment_author: "guest4",
                    comment_text: "Hello its my first comment"
                }
            ]
        },
        {
            id: 4,
            label: "7 Best React UI Framework and Component Libraries in 2022",
            text: "On the hunt for the best React UI framework for your project? Because of its popularity, you can find a huge array of frameworks designed to help you create a great-looking interface for your React project. To make it easier for you to find the best framework, we’ve done the work to curate our picks for the seven top options in 2022 and beyond. Over the rest of this post, we’ll examine the different functionalities and user-friendliness of each UI framework so that you can pick the best one for your development goals. Let’s jump right in…",
            author: "Alex",
            liked: 16,
            comment: [
                {
                    id: 0,
                    comment_author: "guest1",
                    comment_text: "Thx"
                },
                {
                    id: 1,
                    comment_author: "guest2",
                    comment_text: "Wow"
                },
                {
                    id: 2,
                    comment_author: "guest3",
                    comment_text: "Cool"
                },
                {
                    id: 3,
                    comment_author: "guest4",
                    comment_text: "Hello its my first comment"
                }
            ]
        },
        {
            id: 5,
            label: "Overview - React Router",
            text: "If you're familiar with the JavaScript ecosystem, React, and React Router, this serves as a quick overview of React Router v6 with lots of code and minimal explanations. React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native. If you're just getting started with React generally, we recommend you follow the excellent Getting Started guide in the official docs. There is plenty of information there to get you up and running. React Router is compatible with React >= 16.8. We'll keep this tutorial quick and to the point. By the end you'll know the APIs you deal with day-to-day with React Router. After that, you can dig into some of the other docs to get a deeper understanding.",
            author: "Alex",
            liked: 16,
            comment: [
                {
                    id: 0,
                    comment_author: "guest1",
                    comment_text: "Thx"
                },
                {
                    id: 1,
                    comment_author: "guest2",
                    comment_text: "Wow"
                },
                {
                    id: 2,
                    comment_author: "guest3",
                    comment_text: "Cool"
                },
                {
                    id: 3,
                    comment_author: "guest4",
                    comment_text: "Hello its my first comment"
                }
            ]
        },
        {
            id: 6,
            label: "Ant Design ",
            text: "Ant Design provides its own alternatives to CSS Flexbox implementation for laying out UI items and to maintain a fluid and responsive user interface. For the same purpose, Ant Design provides row and column components that can be used as alternatives to equivalent divs with flex-direction row and column respectively",
            author: "Alex",
            liked: 290,
            comment: [
                {
                    id: 0,
                    comment_author: "guest1",
                    comment_text: "Thx"
                },
                {
                    id: 1,
                    comment_author: "guest2",
                    comment_text: "Wow"
                },
                {
                    id: 2,
                    comment_author: "guest3",
                    comment_text: "Cool"
                },
                {
                    id: 3,
                    comment_author: "guest4",
                    comment_text: "Hello its my first comment"
                }
            ]
        }
    ],
    bufferNewPostData: {
        id: 0,
        label: "",
        text: "",
        author: "",
        liked: 0,
        comment: [
            {
                id: 0,
                comment_author: "guest1",
                comment_text: "First Comment"
            }
        ]
    },
    newCommentText: 'Enter comment',
    isLoaded: true,
    isCreatedNewPost: false

}

const blogReducer = (state = initalState, action) => {
    let index = state.postList.findIndex(element => element.id === action.postIndex);
    switch (action.type) {
        case EDIT_POST:
            return {
                ...state,
                bufferNewPostData: state.postList[index]
            };
        case CREATE_POST:
            return {
                ...state,
                bufferNewPostData: {
                    id: state.postList.length,
                    label: "",
                    text: "",
                    author: "",
                    liked: 0,
                    comment: [
                        {
                            id: 0,
                            comment_author: "guest1",
                            comment_text: "Im First !!! XD"
                        }
                    ]
                },
                isCreatedNewPost: true
            };
        case UPDATE_POST:
            return { ...state, bufferNewPostData: { ...state.bufferNewPostData, label: action.postLabel, text: action.postText } };
        case COMPLETE_POST:
            {
                let newState = state.postList
                state.isCreatedNewPost ?
                    newState.push(state.bufferNewPostData) :
                    newState[action.postIndex] = state.bufferNewPostData
                return { ...state, postList: newState, isCreatedNewPost: false };
            }
        case DELETE_COMMENT:
            return state;
        case LIKE_POST:
            {
                state.postList[index].liked += 1
                return { ...state };
            }
        case UNLIKE_POST:
            {

                state.postList[index].liked -= 1
                return { ...state };
            }
        case UPDATE_COMMENT:
            return { ...state, newCommentText: state.newCommentText = action.commentText };
        case CONFIRM_COMMENT:
            {
                let lenCommentArray = state.postList[index].comment.length;
                let indexOfLastComment = state.postList[index].comment[lenCommentArray - 1].id;
                let newMsgData = state.postList[index].comment
                newMsgData.push({ id: indexOfLastComment, comment_author: action.userData, comment_text: state.newCommentText })

                return {
                    ...state,
                    postList: [...state.postList, {
                        ...state.postList[index],
                        comment: newMsgData
                    }
                    ]
                };
            }
        case DELETE_POST:
            {
                state.postList.splice(index, 1);
                return { ...state, postList: [...state.postList] };
            }
        default:
            return state;
    }
}

export default blogReducer;
