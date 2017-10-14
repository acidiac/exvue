import Api from '@/services/Api'

export default {
    register(credentials) {
        console.log('Client: hi from AuthenticationServices')
        return Api().post('register', credentials)
    }
}

/*
AuthenticationService.register({
    email: 'testing@gmail.com',
    password: '12345'
})
*/