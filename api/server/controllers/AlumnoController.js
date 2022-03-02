import AlumnoService from "../services/AlumnoService";
import CertificadoService from "../services/CertificadoService";

class AlumnoController {

  static getData(req, res) {                           
    AlumnoService.getData(req.params.pagina,req.params.num,req.params.prop,req.params.orden)
        .then((alumnos) => {                
            res.status(200).send({message:"alumnos lista", result: alumnos });                                               
        })                   
        .catch((reason) => {              
          res.status(400).send({ message: reason });
        });         
  }

  static crear(req, res) {           
    const { codigo } = req.body        
      AlumnoService.verificar(codigo)
        .then((row) => {                
            if(row)
            {
              res.status(200).send({message:"el alumno ya existe", result: row });                          
            }else{
              AlumnoService.setAdd(req.body)
                  .then((xalumno)=>{
                    res.status(200).send({message:"Alumno registrado", result: xalumno });                           
                  })                              
                  .catch((reason) => {              
                        res.status(400).send({ message: reason });
                    });                
            }                    
        })                   
        .catch((reason) => {              
          res.status(400).send({ message: reason });
        });         
} 

  static getDelete(req, res) {                           
    AlumnoService.delete(req.params.id)
        .then((Alumno) => {                                    
            AlumnoService.getData(1,15,'nombres','DESC')
              .then((Alumnos) => {                
                  res.status(200).send({message:"Alumno eliminado", result: Alumnos });                                               
            })          
        })                   
        .catch((reason) => {              
          console.log(reason)
          res.status(400).send({ message: reason });
        });         
  }

  static setCopiar(req, res) {                           
    AlumnoService.getItem(req.params.id)
        .then((Alumno) => {                
          let newItem = Alumno
          newItem.id = null
          newItem.createdAt = null
          newItem.updatedAt = null
          newItem.codigo = '(copia)'+Alumno.codigo
          newItem.nombres = '(copia)'+Alumno.nombres
          AlumnoService.setAdd(newItem)
          .then((itm)=>{
              AlumnoService.getData(1,15,'nombres','DESC')
              .then((Alumnos) => {                
                  res.status(200).send({message:"Alumno copiado", result: Alumnos });                                               
              })
          })
        })                   
        .catch((reason) => {              
          console.log(reason)
          res.status(400).send({ message: reason });
        });         
  }

  static search(req, res) {  
    const { prop, value } = req.body                         
    AlumnoService.search(prop, value)
        .then((data) => {                          
          res.status(200).send({message:"Alumnos lista", result: data });            
        })                   
        .catch((reason) => {              
          console.log(reason)
          res.status(400).send({ message: reason });
        });         
  }

  static actualizar(req, res) {                           
    AlumnoService.setUpdate(req.body,req.params.id)
        .then((xAlumno) => {                
          AlumnoService.getItem(req.params.id)
            .then((Alumno)=>{
              res.status(200).send({message:"Alumno actualizado", result: Alumno });
            })            
        })                   
        .catch((reason) => {              
          console.log(reason)
          res.status(400).send({ message: reason });
        });         
  }

  static getItem(req, res) {                           
    AlumnoService.getItem(req.params.id)
        .then((alumnos) => {        
          CertificadoService.getList(req.params.id)      
            .then((certificados)=>{
              res.status(200).send({message:"Alumno item", result: {alumnos:alumnos,certificados:certificados }});
            })  
            .catch((reason) => {              
              console.log(reason)
              res.status(400).send({ message: reason });
            });
                                                           
        })                   
        .catch((reason) => {              
          console.log(reason)
          res.status(400).send({ message: reason });
        });         
  }
  
  
  
    
}

export default AlumnoController;
