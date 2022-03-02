import UsuarioService from "../services/UsuarioService";
import ModuloService from "../services/ModuloService";
import ProcesoService from "../services/ProcesoService"


//Procesos 1: ventas, 2: compras, 3: contabilidad, 4: cotizaciones: 5 : login

class UsuarioController {

  static getItems(req, res) {                   
    UsuarioService.getItems()
        .then((usuarios) => {                
            res.status(200).send({message:"usuarios lista", result: usuarios });                                               
        })                   
        .catch((reason) => {              
          res.status(400).send({ message: reason });
        });         
  }


  
  static login(req, res) {
    const { username, password, start, end } = req.body;    
    UsuarioService.login(username, password)
      .then((user) => {          
        if(user.usuario){                 
            ModuloService.getList(user.usuario.rolId)             
            .then((modulos) =>{                                         
              res.status(200).send({ user,modulos}); 
            })        
        }else{
          res.status(400).send({ message: user.message });
        }        
      })                   
      .catch((reason) => {              	    
        res.status(400).send({ message: reason });
    });
  }
}

export default UsuarioController;
