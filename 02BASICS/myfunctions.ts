function addTwo(num: number): number {
    // return num + 2;
    return num + "hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5)

getUpper("4")

signUpUser("Daniel", "mrushidany@gmail.com", false)
loginUser("Daniel", "mrushidany@gmail.com")

export{}