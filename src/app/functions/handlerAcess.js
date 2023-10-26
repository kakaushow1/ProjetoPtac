import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {

    const userAuth = await getUserAuthenticated(user);
    
    const isTokenValidate = await validateToken(userAuth.token);

    if (isTokenValidate) {
        Cookies.set('token', userAuth.token, { expires: 1 });
        localStorage.setItem('name', userAuth.name) //para deixar guardado o nome no localStorage
    }
    return userAuth; //retorna o usuario autenticado
}
export default handlerAcessUser;

/*recebe um objeto de usuário como entrada, autentica o usuário, valida o token e armazena 
o token e o nome do usuário em cookies e localStorage, respectivamente, se o token for válido.
Em seguida, ele retorna as informações do usuário autenticado.*/