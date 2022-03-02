import database from "../../src/models";
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Certificado } = database;

class CertificadoService {

  static getData(pag,num,prop,value){
    return new Promise((resolve,reject) =>{
      let page = parseInt(pag);
      let der = num * page - num;
        Certificado.findAndCountAll({
          raw: true,
          nest: true,
          offset: der,
          limit: num,
          order: [['id','asc']],
          where:{ alumnoId: prop }, 
          /*attributes:["id","codigo","nombres","estado","filename","telefono"]              */
        })
        .then((rows) => resolve({
          paginas: Math.ceil(rows.count / num),
          pagina: page,
          total: rows.count,
          data: rows.rows
        }))
        .catch((reason) => reject({ message: reason.message }))
    })
}

  static getList(alumnoId){
     return new Promise((resolve,reject) =>{            
            Certificado.findAll({
              raw: true,
              nest: true,               
              where:{ alumnoId: alumnoId }, 
              order: [['id','ASC']],
              /*attributes:['id','path','name','component','layout','enabled']              */
            })
            .then((rows) => resolve(rows))
            .catch((reason) => reject({ message: reason.message }))             
    })

  }  

  static delete(datoId) {
    return new Promise((resolve, reject) => {
      Certificado.destroy({ where: { id: Number(datoId) } })
        .then((rows) => resolve({ message: 'eliminado' }))
        .catch((reason)  => reject({ message: reason.message }))      
    });
}

  static search(prop,value){
    return new Promise((resolve,reject) =>{            
        let iValue = '%' + value + '%'
        if (value === '--todos--' || value === null || value === '0') { iValue = '%' }            
        Certificado.findAndCountAll({
            raw: true,
            nest: true,
            offset: 0,
            limit: 12,
            /*where: { [prop]: { [Op.iLike]: iValue }},*/
            where: {[Op.and]: [
              { [prop]:{ [Op.iLike]: iValue }},             
              { id: { [Op.gt]: 1 }},     
            ]},
            order: [[prop,'ASC']],
            attributes:["id","codigo","nombres","email","direccion","tipo","nit","filename","telefono"] 
        })		
        .then((rows) => resolve({
            paginas: Math.ceil(rows.count / 12),
            pagina: 1,
            total: rows.count,
            data: rows.rows
        } 
        ))
    .catch((reason)  => reject({ message: reason.message })) 
     })
   }

    static verificar(nit) {      
        return new Promise((resolve, reject) => {        
          Certificado.findOne({
            raw: true,
            nest: true,            
              where : { codigo: {[Op.eq]: nit }}
          })           
            .then((result) => {                              
                resolve(result)
            })
            .catch((reason) => {                
                reject({ message: reason.message })
              });             
        });
      }

   
    static getItem(pky){
        return new Promise((resolve,reject) =>{
            Certificado.findByPk(pky,{
              raw: true,
              nest: true
            })
            .then((row)=> resolve( row ))
            .catch((reason) => reject({ message: reason.message }))
        })
    }    
    static setUpdate(value,id){
        return new Promise((resolve,reject) =>{
            Certificado.update(value, { where: { id: Number(id) } })
            .then((row)=> resolve( row ))
            .catch((reason) => reject({ message: reason.message })) 
        })
    }
    
    static setAdd(value){
        return new Promise((resolve,reject) =>{
            Certificado.create(value)
            .then((row) => resolve( row ))
            .catch((reason)  => reject({ message: reason.message }))  
        })
    }  
    static getTotal(){
      return new Promise((resolve,reject) =>{
        Certificado.findOne({
            raw:true,
            nest:true,
            attributes: [[Sequelize.fn('count',Sequelize.col('id')),'total']]         
  
          })
          .then((row) => resolve( row.total ))
          .catch((reason)  => reject({ message: reason.message }))  
      })
    }

    
}
export default CertificadoService;
