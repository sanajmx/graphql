

export function SaveToken(token: string){
    localStorage.setItem("authToken", token)
}

export function GetToken(){
    return localStorage.getItem("authToken");
}

export function ClearToken(){
    localStorage.removeItem("authToken");
}

export function IsStupidTokenExpired(token: string): boolean{
    try{
        const payload = JSON.parse(atob(token.split('.')[1])); // we have the payload now.. 
        const expTime = payload.exp * 1000; 
        return Date.now() >= expTime;
    } catch (e){
        console.error("error parsing token ", e);
        return true; // if cannot be parsed then expired 
    }
}

export function IsTheTokenValid() {  
    const token = GetToken(); // get the token first 
    if (!token) return false; 

    if (IsStupidTokenExpired(token)){
        ClearToken();
        return null;
    }

    return token
}
