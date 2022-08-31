const initState={
    posts:[
        {id:'1',title:'test 1',body:'testtttt'},
        {id:'2',title:'test 2',body:'testtttt 2'},
        {id:'3',title:'test 3',body:'testtttt 3'},
    ]
}

const rootReducers=(state=initState,action)=>{
    if(action.type==='DELETE_POST')
    {
        let newPosts=state.posts.filter(post=>{
            return post.id!==action.id
        })
        return {
            ...state,
            posts:newPosts
        }
    }
    return state;
}
export default rootReducers;