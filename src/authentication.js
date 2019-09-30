class Auth{
    constructor(){
        this.isAuthenticated = false;
    }

    login = () => {
        let promise = new Promise( (resolve, reject) => {
            setTimeout( () => {
                this.isAuthenticated = true;
                console.log('authenticated!');
                resolve();
            }, 1000);
        });
        return promise;
    }

    logout = () => {
        let promise = new Promise( (resolve, reject) => {
            setTimeout( () => {
                this.isAuthenticated = false;
                console.log('successfully logged out!');
                resolve();
            }, 1000);
        });
        return promise;
    }

    isUserAuthenticated = () => {
        return this.isAuthenticated;
    }

}

//new Auth() - es6 singleton pattern
export default new Auth();