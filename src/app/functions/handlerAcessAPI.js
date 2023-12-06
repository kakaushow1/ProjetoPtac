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

const getUsers = async () => {
const responseOfApi = await fetch(url + "/users", {cache:"no-cache"})
const userAuth = await responseOfApi.json();
return userAuth;
    
}

const postUser = async (user) => {
    try{
       
        const responseOfApi = await fetch(url + "/user",{
            method:'POST',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify(user)
        });
        const userSave = await responseOfApi.json();
        console.log(userSave)
        return userSave
    } catch
    {
        return null
    }
}

const updateUser = async (user, id) => {
    try{
        const responseOfApi = await fetch(url + "/user/" + id,{
            method:'PUT',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify(user)
        });
        const userUpdateSave = await responseOfApi.json();
        return userUpdateSave
    } catch
    {
        return null
    }
}

export { getUsers, getUserAuthenticated, postUser, updateUser };

/*fornece funções para autenticar usuários com base em seus e-mails e senhas, 
bem como obter a lista completa de usuários. */