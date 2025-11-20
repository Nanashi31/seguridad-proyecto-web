import express from 'express';
import { InMemoryProductRepository } from './infrastructure/data/in-memory-product.repository';
import { CreateProduct } from './application/use-cases/create-product';
import { GetProduct } from './application/use-cases/get-product';
import { GetAllProducts } from './application/use-cases/get-all-products';
import { UpdateProduct } from './application/use-cases/update-product';
import { DeleteProduct } from './application/use-cases/delete-product';
import { ProductController } from './infrastructure/web/product.controller';
import { productRouter } from './infrastructure/web/product.routes';
import { setupSwagger } from './infrastructure/web/swagger';
import { InMemoryRolRepository } from './infrastructure/data/rol/in-memory-rol.repository';
import { CreateRol } from './application/use-cases/rol/create-rol';
import { GetRol } from './application/use-cases/rol/get-rol';
import { GetAllRols } from './application/use-cases/rol/get-all-rols';
import { UpdateRol } from './application/use-cases/rol/update-rol';
import { DeleteRol } from './application/use-cases/rol/delete-rol';
import { RolController } from './infrastructure/web/rol/rol.controller';
import { rolRouter } from './infrastructure/web/rol/rol.routes';
import { InMemoryUsuarioRepository } from './infrastructure/data/usuario/in-memory-usuario.repository';
import { CreateUsuario } from './application/use-cases/usuario/create-usuario';
import { GetUsuario } from './application/use-cases/usuario/get-usuario';
import { GetAllUsuarios } from './application/use-cases/usuario/get-all-usuarios';
import { UpdateUsuario } from './application/use-cases/usuario/update-usuario';
import { DeleteUsuario } from './application/use-cases/usuario/delete-usuario';
import { UsuarioController } from './infrastructure/web/usuario/usuario.controller';
import { usuarioRouter } from './infrastructure/web/usuario/usuario.routes';
import { InMemoryZonaRepository } from './infrastructure/data/zona/in-memory-zona.repository';
import { CreateZona } from './application/use-cases/zona/create-zona';
import { GetZona } from './application/use-cases/zona/get-zona';
import { GetAllZonas } from './application/use-cases/zona/get-all-zonas';
import { UpdateZona } from './application/use-cases/zona/update-zona';
import { DeleteZona } from './application/use-cases/zona/delete-zona';
import { ZonaController } from './infrastructure/web/zona/zona.controller';
import { zonaRouter } from './infrastructure/web/zona/zona.routes';
import { InMemoryTurnoRepository } from './infrastructure/data/turno/in-memory-turno.repository';
import { CreateTurno } from './application/use-cases/turno/create-turno';
import { GetTurno } from './application/use-cases/turno/get-turno';
import { GetAllTurnos } from './application/use-cases/turno/get-all-turnos';
import { UpdateTurno } from './application/use-cases/turno/update-turno';
import { DeleteTurno } from './application/use-cases/turno/delete-turno';
import { TurnoController } from './infrastructure/web/turno/turno.controller';
import { turnoRouter } from './infrastructure/web/turno/turno.routes';
import { InMemoryRegistroAsistenciaRepository } from './infrastructure/data/registro-asistencia/in-memory-registro-asistencia.repository';
import { CreateRegistroAsistencia } from './application/use-cases/registro-asistencia/create-registro-asistencia';
import { GetRegistroAsistencia } from './application/use-cases/registro-asistencia/get-registro-asistencia';
import { GetAllRegistrosAsistencia } from './application/use-cases/registro-asistencia/get-all-registros-asistencia';
import { UpdateRegistroAsistencia } from './application/use-cases/registro-asistencia/update-registro-asistencia';
import { DeleteRegistroAsistencia } from './application/use-cases/registro-asistencia/delete-registro-asistencia';
import { RegistroAsistenciaController } from './infrastructure/web/registro-asistencia/registro-asistencia.controller';
import { registroAsistenciaRouter } from './infrastructure/web/registro-asistencia/registro-asistencia.routes';
import { InMemoryTiposIncidenteRepository } from './infrastructure/data/tipos-incidente/in-memory-tipos-incidente.repository';
import { CreateTiposIncidente } from './application/use-cases/tipos-incidente/create-tipos-incidente';
import { GetTiposIncidente } from './application/use-cases/tipos-incidente/get-tipos-incidente';
import { GetAllTiposIncidentes } from './application/use-cases/tipos-incidente/get-all-tipos-incidentes';
import { UpdateTiposIncidente } from './application/use-cases/tipos-incidente/update-tipos-incidente';
import { DeleteTiposIncidente } from './application/use-cases/tipos-incidente/delete-tipos-incidente';
import { TiposIncidenteController } from './infrastructure/web/tipos-incidente/tipos-incidente.controller';
import { tiposIncidenteRouter } from './infrastructure/web/tipos-incidente/tipos-incidente.routes';
import { InMemoryIncidenteRepository } from './infrastructure/data/incidente/in-memory-incidente.repository';
import { CreateIncidente } from './application/use-cases/incidente/create-incidente';
import { GetIncidente } from './application/use-cases/incidente/get-incidente';
import { GetAllIncidentes } from './application/use-cases/incidente/get-all-incidentes';
import { UpdateIncidente } from './application/use-cases/incidente/update-incidente';
import { DeleteIncidente } from './application/use-cases/incidente/delete-incidente';
import { IncidenteController } from './infrastructure/web/incidente/incidente.controller';
import { incidenteRouter } from './infrastructure/web/incidente/incidente.routes';
import { InMemoryEvidenciaIncidenteRepository } from './infrastructure/data/evidencia-incidente/in-memory-evidencia-incidente.repository';
import { CreateEvidenciaIncidente } from './application/use-cases/evidencia-incidente/create-evidencia-incidente';
import { GetEvidenciaIncidente } from './application/use-cases/evidencia-incidente/get-evidencia-incidente';
import { GetAllEvidenciasIncidente } from './application/use-cases/evidencia-incidente/get-all-evidencias-incidente';
import { UpdateEvidenciaIncidente } from './application/use-cases/evidencia-incidente/update-evidencia-incidente';
import { DeleteEvidenciaIncidente } from './application/use-cases/evidencia-incidente/delete-evidencia-incidente';
import { EvidenciaIncidenteController } from './infrastructure/web/evidencia-incidente/evidencia-incidente.controller';
import { evidenciaIncidenteRouter } from './infrastructure/web/evidencia-incidente/evidencia-incidente.routes';
import { InMemoryEquipoCatalogoRepository } from './infrastructure/data/equipo-catalogo/in-memory-equipo-catalogo.repository';
import { CreateEquipoCatalogo } from './application/use-cases/equipo-catalogo/create-equipo-catalogo';
import { GetEquipoCatalogo } from './application/use-cases/equipo-catalogo/get-equipo-catalogo';
import { GetAllEquiposCatalogo } from './application/use-cases/equipo-catalogo/get-all-equipos-catalogo';
import { UpdateEquipoCatalogo } from './application/use-cases/equipo-catalogo/update-equipo-catalogo';
import { DeleteEquipoCatalogo } from './application/use-cases/equipo-catalogo/delete-equipo-catalogo';
import { EquipoCatalogoController } from './infrastructure/web/equipo-catalogo/equipo-catalogo.controller';
import { equipoCatalogoRouter } from './infrastructure/web/equipo-catalogo/equipo-catalogo.routes';
import { InMemoryEquipoAsignadoRepository } from './infrastructure/data/equipo-asignado/in-memory-equipo-asignado.repository';
import { CreateEquipoAsignado } from './application/use-cases/equipo-asignado/create-equipo-asignado';
import { GetEquipoAsignado } from './application/use-cases/equipo-asignado/get-equipo-asignado';
import { GetAllEquiposAsignados } from './application/use-cases/equipo-asignado/get-all-equipos-asignados';
import { UpdateEquipoAsignado } from './application/use-cases/equipo-asignado/update-equipo-asignado';
import { DeleteEquipoAsignado } from './application/use-cases/equipo-asignado/delete-equipo-asignado';
import { EquipoAsignadoController } from './infrastructure/web/equipo-asignado/equipo-asignado.controller';
import { equipoAsignadoRouter } from './infrastructure/web/equipo-asignado/equipo-asignado.routes';
import { InMemoryCertificacionRepository } from './infrastructure/data/certificacion/in-memory-certificacion.repository';
import { CreateCertificacion } from './application/use-cases/certificacion/create-certificacion';
import { GetCertificacion } from './application/use-cases/certificacion/get-certificacion';
import { GetAllCertificaciones } from './application/use-cases/certificacion/get-all-certificaciones';
import { UpdateCertificacion } from './application/use-cases/certificacion/update-certificacion';
import { DeleteCertificacion } from './application/use-cases/certificacion/delete-certificacion';
import { CertificacionController } from './infrastructure/web/certificacion/certificacion.controller';
import { certificacionRouter } from './infrastructure/web/certificacion/certificacion.routes';
import { InMemoryGuardiaCertificacionRepository } from './infrastructure/data/guardia-certificacion/in-memory-guardia-certificacion.repository';
import { CreateGuardiaCertificacion } from './application/use-cases/guardia-certificacion/create-guardia-certificacion';
import { GetGuardiaCertificacion } from './application/use-cases/guardia-certificacion/get-guardia-certificacion';
import { GetAllGuardiaCertificaciones } from './application/use-cases/guardia-certificacion/get-all-guardia-certificaciones';
import { UpdateGuardiaCertificacion } from './application/use-cases/guardia-certificacion/update-guardia-certificacion';
import { DeleteGuardiaCertificacion } from './application/use-cases/guardia-certificacion/delete-guardia-certificacion';
import { GuardiaCertificacionController } from './infrastructure/web/guardia-certificacion/guardia-certificacion.controller';
import { guardiaCertificacionRouter } from './infrastructure/web/guardia-certificacion/guardia-certificacion.routes';

const app = express();
app.use(express.json());

// Repositories
const productRepository = new InMemoryProductRepository();
const rolRepository = new InMemoryRolRepository();
const usuarioRepository = new InMemoryUsuarioRepository();
const zonaRepository = new InMemoryZonaRepository();
const turnoRepository = new InMemoryTurnoRepository();
const registroAsistenciaRepository = new InMemoryRegistroAsistenciaRepository();
const tiposIncidenteRepository = new InMemoryTiposIncidenteRepository();
const incidenteRepository = new InMemoryIncidenteRepository();
const evidenciaIncidenteRepository = new InMemoryEvidenciaIncidenteRepository();
const equipoCatalogoRepository = new InMemoryEquipoCatalogoRepository();
const equipoAsignadoRepository = new InMemoryEquipoAsignadoRepository();
const certificacionRepository = new InMemoryCertificacionRepository();
const guardiaCertificacionRepository = new InMemoryGuardiaCertificacionRepository();

// Use Cases
const createProduct = new CreateProduct(productRepository);
const getProduct = new GetProduct(productRepository);
const getAllProducts = new GetAllProducts(productRepository);
const updateProduct = new UpdateProduct(productRepository);
const deleteProduct = new DeleteProduct(productRepository);

const createRol = new CreateRol(rolRepository);
const getRol = new GetRol(rolRepository);
const getAllRols = new GetAllRols(rolRepository);
const updateRol = new UpdateRol(rolRepository);
const deleteRol = new DeleteRol(rolRepository);

const createUsuario = new CreateUsuario(usuarioRepository);
const getUsuario = new GetUsuario(usuarioRepository);
const getAllUsuarios = new GetAllUsuarios(usuarioRepository);
const updateUsuario = new UpdateUsuario(usuarioRepository);
const deleteUsuario = new DeleteUsuario(usuarioRepository);

const createZona = new CreateZona(zonaRepository);
const getZona = new GetZona(zonaRepository);
const getAllZonas = new GetAllZonas(zonaRepository);
const updateZona = new UpdateZona(zonaRepository);
const deleteZona = new DeleteZona(zonaRepository);

const createTurno = new CreateTurno(turnoRepository);
const getTurno = new GetTurno(turnoRepository);
const getAllTurnos = new GetAllTurnos(turnoRepository);
const updateTurno = new UpdateTurno(turnoRepository);
const deleteTurno = new DeleteTurno(turnoRepository);

const createRegistroAsistencia = new CreateRegistroAsistencia(registroAsistenciaRepository);
const getRegistroAsistencia = new GetRegistroAsistencia(registroAsistenciaRepository);
const getAllRegistrosAsistencia = new GetAllRegistrosAsistencia(registroAsistenciaRepository);
const updateRegistroAsistencia = new UpdateRegistroAsistencia(registroAsistenciaRepository);
const deleteRegistroAsistencia = new DeleteRegistroAsistencia(registroAsistenciaRepository);

const createTiposIncidente = new CreateTiposIncidente(tiposIncidenteRepository);
const getTiposIncidente = new GetTiposIncidente(tiposIncidenteRepository);
const getAllTiposIncidentes = new GetAllTiposIncidentes(tiposIncidenteRepository);
const updateTiposIncidente = new UpdateTiposIncidente(tiposIncidenteRepository);
const deleteTiposIncidente = new DeleteTiposIncidente(tiposIncidenteRepository);

const createIncidente = new CreateIncidente(incidenteRepository);
const getIncidente = new GetIncidente(incidenteRepository);
const getAllIncidentes = new GetAllIncidentes(incidenteRepository);
const updateIncidente = new UpdateIncidente(incidenteRepository);
const deleteIncidente = new DeleteIncidente(incidenteRepository);

const createEvidenciaIncidente = new CreateEvidenciaIncidente(evidenciaIncidenteRepository);
const getEvidenciaIncidente = new GetEvidenciaIncidente(evidenciaIncidenteRepository);
const getAllEvidenciasIncidente = new GetAllEvidenciasIncidente(evidenciaIncidenteRepository);
const updateEvidenciaIncidente = new UpdateEvidenciaIncidente(evidenciaIncidenteRepository);
const deleteEvidenciaIncidente = new DeleteEvidenciaIncidente(evidenciaIncidenteRepository);

const createEquipoCatalogo = new CreateEquipoCatalogo(equipoCatalogoRepository);
const getEquipoCatalogo = new GetEquipoCatalogo(equipoCatalogoRepository);
const getAllEquiposCatalogo = new GetAllEquiposCatalogo(equipoCatalogoRepository);
const updateEquipoCatalogo = new UpdateEquipoCatalogo(equipoCatalogoRepository);
const deleteEquipoCatalogo = new DeleteEquipoCatalogo(equipoCatalogoRepository);

const createEquipoAsignado = new CreateEquipoAsignado(equipoAsignadoRepository);
const getEquipoAsignado = new GetEquipoAsignado(equipoAsignadoRepository);
const getAllEquiposAsignados = new GetAllEquiposAsignados(equipoAsignadoRepository);
const updateEquipoAsignado = new UpdateEquipoAsignado(equipoAsignadoRepository);
const deleteEquipoAsignado = new DeleteEquipoAsignado(equipoAsignadoRepository);

const createCertificacion = new CreateCertificacion(certificacionRepository);
const getCertificacion = new GetCertificacion(certificacionRepository);
const getAllCertificaciones = new GetAllCertificaciones(certificacionRepository);
const updateCertificacion = new UpdateCertificacion(certificacionRepository);
const deleteCertificacion = new DeleteCertificacion(certificacionRepository);

const createGuardiaCertificacion = new CreateGuardiaCertificacion(guardiaCertificacionRepository);
const getGuardiaCertificacion = new GetGuardiaCertificacion(guardiaCertificacionRepository);
const getAllGuardiaCertificaciones = new GetAllGuardiaCertificaciones(guardiaCertificacionRepository);
const updateGuardiaCertificacion = new UpdateGuardiaCertificacion(guardiaCertificacionRepository);
const deleteGuardiaCertificacion = new DeleteGuardiaCertificacion(guardiaCertificacionRepository);


// Controllers
const productController = new ProductController(
    createProduct,
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
);

const rolController = new RolController(
    createRol,
    getRol,
    getAllRols,
    updateRol,
    deleteRol
);

const usuarioController = new UsuarioController(
    createUsuario,
    getUsuario,
    getAllUsuarios,
    updateUsuario,
    deleteUsuario
);

const zonaController = new ZonaController(
    createZona,
    getZona,
    getAllZonas,
    updateZona,
    deleteZona
);

const turnoController = new TurnoController(
    createTurno,
    getTurno,
    getAllTurnos,
    updateTurno,
    deleteTurno
);

const registroAsistenciaController = new RegistroAsistenciaController(
    createRegistroAsistencia,
    getRegistroAsistencia,
    getAllRegistrosAsistencia,
    updateRegistroAsistencia,
    deleteRegistroAsistencia
);

const tiposIncidenteController = new TiposIncidenteController(
    createTiposIncidente,
    getTiposIncidente,
    getAllTiposIncidentes,
    updateTiposIncidente,
    deleteTiposIncidente
);

const incidenteController = new IncidenteController(
    createIncidente,
    getIncidente,
    getAllIncidentes,
    updateIncidente,
    deleteIncidente
);

const evidenciaIncidenteController = new EvidenciaIncidenteController(
    createEvidenciaIncidente,
    getEvidenciaIncidente,
    getAllEvidenciasIncidente,
    updateEvidenciaIncidente,
    deleteEvidenciaIncidente
);

const equipoCatalogoController = new EquipoCatalogoController(
    createEquipoCatalogo,
    getEquipoCatalogo,
    getAllEquiposCatalogo,
    updateEquipoCatalogo,
    deleteEquipoCatalogo
);

const equipoAsignadoController = new EquipoAsignadoController(
    createEquipoAsignado,
    getEquipoAsignado,
    getAllEquiposAsignados,
    updateEquipoAsignado,
    deleteEquipoAsignado
);

const certificacionController = new CertificacionController(
    createCertificacion,
    getCertificacion,
    getAllCertificaciones,
    updateCertificacion,
    deleteCertificacion
);

const guardiaCertificacionController = new GuardiaCertificacionController(
    createGuardiaCertificacion,
    getGuardiaCertificacion,
    getAllGuardiaCertificaciones,
    updateGuardiaCertificacion,
    deleteGuardiaCertificacion
);


// Swagger
setupSwagger(app);

// Routes
app.use('/products', productRouter(productController));
app.use('/rols', rolRouter(rolController));
app.use('/usuarios', usuarioRouter(usuarioController));
app.use('/zonas', zonaRouter(zonaController));
app.use('/turnos', turnoRouter(turnoController));
app.use('/registros-asistencia', registroAsistenciaRouter(registroAsistenciaController));
app.use('/tipos-incidente', tiposIncidenteRouter(tiposIncidenteController));
app.use('/incidentes', incidenteRouter(incidenteController));
app.use('/evidencias-incidente', evidenciaIncidenteRouter(evidenciaIncidenteController));
app.use('/equipos-catalogo', equipoCatalogoRouter(equipoCatalogoController));
app.use('/equipos-asignados', equipoAsignadoRouter(equipoAsignadoController));
app.use('/certificaciones', certificacionRouter(certificacionController));
app.use('/guardias-certificaciones', guardiaCertificacionRouter(guardiaCertificacionController));


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
