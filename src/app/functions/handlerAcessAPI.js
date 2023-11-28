'use server'
const url="https://aula-17-10inicio.vercel.app"

//testeS

const getUserAuthenticated = async (user) => {
    const responseOfApi = await fetch(url + "/user/authenticated",
    {method:"POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(user)
}
    );
    const userAuth = await responseOfApi.json();
    console.log(userAuth)
    return userAuth;
} 

const getUsers = async (user) => {
const responseOfApi = await fetch(url + "/users", {cache:"no-cache"})
const userAuth = await responseOfApi.json();
return userAuth;
    
}

const postUser = async (user) => {
    try{
        const responseOfApi = await fetch(url + "/user",{
            method:'POST',
            headerd: {'Content-Type': 'Application/json'},
            body: JSON.stringify(user)
        });
        const userSave = await responseOfApi.json();
        return userSave
    } catch
    {
        return null
    }
}

export { getUsers, getUserAuthenticated, postUser };

/*fornece funções para autenticar usuários com base em seus e-mails e senhas, 
bem como obter a lista completa de usuários. */