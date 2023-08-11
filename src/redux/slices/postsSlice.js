import { createSlice} from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'posts',
    initialState: [
        {id: "idg", title:'First', content: 'First post content'},
        {id: "dkds", title:'Second', content: 'Second post content'}
    ],
    reducers: {
        addPost: (state, action) => {
            const { payload } = action
            
            state.push(payload)
        },
        editPost: (state, action) => {
            const { payload } = action
            const indexOfPost = state.findIndex(post => post.id === payload.id)
            //state[indexOfPost] = payload
            state.splice(indexOfPost, 1, payload)
        },
        deletePost: (state, action) => {
            const { payload } = action
            state.filter(post => post.id !== payload.id)
        }
    }
})

export const { addPost, editPost, deletePost } = postSlice.actions
export default postSlice.reducer