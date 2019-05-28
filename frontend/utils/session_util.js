//frontend auth located in frontend > session.js
//creating user, signing in our user, signing out our user

export const postUser = (user) => (         //sign up user
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user },
    })
)

export const postSession = (user) => (      //sign in user
    $.ajax({
        url: 'api/session',
        method: 'POST',
        data: { user },
    })
)

export const deleteSession = () => (        //sign out user
    $.ajax({
        url: '/api/session',
        method: 'DELETE',
    })
)