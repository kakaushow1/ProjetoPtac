import { getUsers } from "@/app/functions/handlerAcessAPI";
import './painel.css';


export default async function Dashboard() {
    const users = await getUsers();
    return (
        
        <div>
            <header>
        <ul class='nav-menu'>
          <li class='nav-menu-item'><a href='/'>Home</a></li>
          <li class='nav-menu-item'><a href='/pages/alter'>Alterar</a></li>
          <li class='nav-menu-item'><a href='/pages/register'>Cadastrar</a></li>
        </ul>
            </header>
            <h1>Dashboard</h1>
            <div className="container">
                {users?.map((user, index) =>
                    <div key={index} className="bloco">
                       
                    <p><strong>Nome:  </strong>{user.name}</p>
                    <p><strong>E-mail:  </strong>{user.email}</p>
                        
                    </div>
                )}
            </div>
            
        </div>
    );
};