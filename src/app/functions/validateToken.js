import { decode } from "jsonwebtoken";
const validateToken = (token)=>{
    const isTokenValidate = decode(token);
    if(isTokenValidate){
        return token= true
    }
    return token=false;
}   
export {validateToken};

/*é usado para verificar se um token JWT é válido ou não. Se o token puder ser decodificado com 
sucesso, ele é considerado válido e a função retorna true. Caso contrário, se houver algum erro
 na decodificação ou o token for inválido, a função retorna false.  */