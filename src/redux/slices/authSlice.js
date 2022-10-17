import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    'auth/login',
    async (payload)=>{
        console.log(JSON.stringify(payload))
        const resp = await fetch('http://localhost:3001/api/v1/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload)
		})
        // on wrong loging creditial
        if ([400].includes(resp.status)) {
            // disconnect the user if the token is not valid anymore
            localStorage.removeItem('user')
            const user = {
                userName: null,
                firstName: null,
                lastName: null,
                token: null,
                rememberLog: false,
                error: resp.status
            }
            return {user}
        }
		if (resp.ok){
			const response = await resp.json()
            const token = response.body.token
            //console.log(token)
            const user = {
                userName: payload.email,
                token: token,
                rememberLog: payload.rememberLog,
                error: null
            }
			return {user}
		}
	}
)

export const signup = createAsyncThunk(
    'auth/signup',
    async (payload)=>{
        console.log(JSON.stringify(payload))
        const resp = await fetch('http://localhost:3001/api/v1/user/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload)
		})
		if (resp.ok){
			const response = await resp.json()
            return{response}
		}
	}
)

export const profile = createAsyncThunk(
    'auth/profile',
    async (payload)=>{
        console.log(JSON.stringify(payload))
        const resp = await fetch('http://localhost:3001/api/v1/user/profile', {
			method: 'POST',
			// headers: {
			// 	'Content-Type': 'application/json',
            //  'Authorization': `Bearer ${payload.token}`
			//},
            headers: {Authorization: `Bearer ${payload.token}`}
			//body: JSON.stringify(payload)
		})
        if (!resp.ok) {
            if ([401, 403].includes(resp.status)) {
                // disconnect the user if the token is not valid anymore
                localStorage.removeItem('user')
                const user = {
                    userName: null,
                    firstName: null,
                    lastName: null,
                    token: null,
                    rememberLog: false,
                    error: resp.status
                }
                return {user}
            }
            
        }
		if (resp.ok){
			const response = await resp.json()
            const userName = response.body.email
            const firstName = response.body.firstName
            const lastName = response.body.lastName
            //console.log(token)
            const user = {
                userName: userName,
                firstName: firstName,
                lastName: lastName,
                token: payload.token,
                error: null
            }
            return {user}
		}
	}
)

export const editprofile = createAsyncThunk(
    'auth/editprofile',
    async (payload)=>{
        console.log(JSON.stringify({firstName: payload.firstName, lastName: payload.lastName}))
        const resp = await fetch('http://localhost:3001/api/v1/user/profile', {
			method: 'PUT',
			// headers: {
			// 	'Content-Type': 'application/json',
            //  'Authorization': `Bearer ${payload.token}`
			//},
            headers: {
                Authorization: `Bearer ${payload.token}`,
                'Content-Type': 'application/json'
                
            },
			body: JSON.stringify({firstName: payload.firstName, lastName: payload.lastName})
		})
        
		if (resp.ok){
			const response = await resp.json()
            const userName = response.body.email
            const firstName = response.body.firstName
            const lastName = response.body.lastName
            //console.log(response)
            const user = {
                userName: userName,
                firstName: firstName,
                lastName: lastName,
            }
            return {user}
		}
	}
)

const createInitialState = ()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    if (user == undefined){
        return {
            userName: null,
            firstName: null,
            lastName: null,
            token: null,
            rememberLog: false,
        }
    }
    else {
        return {
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            token: user.token,
            rememberLog: user.rememberLog
        }
    }
}

export const authSlice = createSlice({
    name: "auth",
    // initialState: {
    //     userName: null,
    //     firstName: null,
    //     lastName: null,
    //     token: null
    // },
    initialState: createInitialState(),
    reducers: {
        logout: (state, action)=>{
            localStorage.removeItem('user')
			return {
                userName: null,
                firstName: null,
                lastName: null,
                token: null,
                rememberLog: false,
            }
		}
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            //console.log(action.payload.user)
            //const userlocal = JSON.parse(localStorage.getItem('user'))
            if(action.payload.user.rememberLog){
                console.log('save the values')
                localStorage.setItem('user', JSON.stringify({userName: action.payload.user.userName, token:action.payload.user.token}))
            }
            return {...state, 
                userName: action.payload.user.userName, 
                token:action.payload.user.token,
                rememberLog: action.payload.user.rememberLog
            }
			//return action.payload.user
		},
        [signup.fulfilled]: (state, action) => {
            return state
        },
        [profile.fulfilled]: (state, action)=>{
            const rememberLog = JSON.parse(JSON.stringify(state.rememberLog))

            if(rememberLog === true){
                var user = JSON.parse(localStorage.getItem('user'))
                user.firstName = action.payload.user.firstName
                user.lastName = action.payload.user.lastName
                user.rememberLog = rememberLog
                localStorage.setItem('user', JSON.stringify(user))
            }
            return {...state,
                userName: action.payload.user.userName,
                firstName: action.payload.user.firstName,
                lastName: action.payload.user.lastName,
                token: action.payload.user.token,
                rememberLog: false
            }
        },
        [editprofile.fulfilled]: (state, action)=>{
            return {...state, 
                userName: action.payload.user.userName, 
                firstName: action.payload.user.firstName,
                lastName: action.payload.user.lastName
            }
        }
    }

})
export const {logout} = authSlice.actions
export default authSlice.reducer