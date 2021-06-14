import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movielist: [
        {
            id: "f31782a6-441f-4672-b6b2-87d85ed52050",
            avatar:'bao.jpg',
            detail:'bao.jpg'
        },
        {
            id: "3f1bf5b9-a015-46e9-a5e4-34119059edaf",
            avatar: 'burrow.jpg',
            detail: 'burrow.png'
        },
        {
            id: "a6c4570c-9911-4a4c-8102-5896ea24886a",
            avatar: 'Edna.jpg',
            detail: 'Edna.jpg'
        },
        {
            id: "8b74e002-6950-401a-aa6a-756e5a72d68d",
            avatar: "falcon.jpg",
            detail: "falcon.jpg"
        },
        {
            id: "e5a24cde-635a-442c-b99e-b35a852165cc",
            avatar: "garfield.jpg",
            detail: "garfield.jpg"
        },
        {
            id: "d43b6bd3-d638-4ebe-9383-2bc3957e4c41",
            avatar: "incredibles.jpg",
            detail: "incredibles.jpg"
        },
        {
            id: "2016374d-f9b9-4367-a69e-f0dfb5491d36",
            avatar: "insideout.jpg",
            detail: "insideout.png"
        },
        {
            id: "05109f59-207c-419f-811f-7c50d665126a",
            avatar: "legends.jpg",
            detail: "legends.jpg"
        },
        {
            id: "5957ef9c-8412-4e8c-a9c3-75da10567658",
            avatar: "moana.jpg",
            detail: "moana.jpg"
        },
        {
            id: "edca89c1-22fa-4ee7-8136-6a7074db8f09",
            avatar: "musicstory.jpg",
            detail: "musicstory.jpg"
        },
        {
            id: "2d6bfe0d-73ca-40af-8720-2da12ce32470",
            avatar: "raya.jpg",
            detail: "raya.png"
        },
        {
            id: "479a0343-179b-4dac-8e93-fe038c69ef8a",
            avatar: "simpsons.jpg",
            detail: "simpsons.jpg"
        },
        {
            id: "27ae1e87-a9f8-4245-aab4-1b62776d1741",
            avatar: "soul.jpg",
            detail: "soul.jpg"
        },
        {
            id: "6443b30b-df19-4d46-a6bf-3987c63ba69b",
            avatar: "tangled.jpg",
            detail: "tangled.jpg"
        },
        {
            id: "c446bf22-724e-4390-babe-1c147f94bf06",
            avatar: "assembled.jpg",
            detail: "falcon.jpg"
        }
    ],
    loginuser:[]
}

export const movieSlice = createSlice({
    name:"hotstar",
    initialState,
    reducers: {
        updateuser: (state, action) => {
            state.loginuser = action.payload;
        }
    }
});

export const {updateuser} = movieSlice.actions;

export default movieSlice.reducer
