import usuarios from './usuarioRoutes'
import alumnos from './alumnoRoutes'
import files from './fileRoutes'
import certificado from './certificadoRoutes'

export default(app) => {    
    app.use('/api/usuarios',usuarios);          
    app.use('/api/alumnos',alumnos);          
    app.use('/api/files',files);
    app.use('/api/certificados',certificado);    
    
}

