const configFile = JSON.parse(process.env["NODE_APP_CONFIG"]);
const ClienteException = require("../../../exceptions/ClienteException");
 //#region
/**Configuracion de middleware 
 * 
 * 
 */
 //#endregion

const cookieParser = require('cookie-parser');
/** Se recomienda usar GOT para invocar servicios backeclear
 * 
 *  'request' ha sido deprecada.
 *  ver referencia: https://github.com/sindresorhus/got     */
const got = require("got");
const Bourne = require("@hapi/bourne");

/** Server backend */
const baseUrlBknd = process.env.ENDPOINT_MICROSERVICIOS_SERVER + ":" + configFile.app_config.backend_port;
//const baseUrlBknd = "http://localhost:8096";

/** SERVICIOS BACKEND  */




async function ideSolicitud(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/obtener/ideSolicitud`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      const sanitizedString = req.sanitize(req.params.propertyToSanitize)

      return response.body({ sanitized: sanitizedString})
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });
  return llamada;
}

async function sessionManager(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/toc/sessionManager`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });

  return llamada;
}

async function obtenerClaveUnica(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/toc/obtenerClaveUnica`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });

  return llamada;
}

async function validaCedulaVsDatos(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/toc/validaCedulaVsDatos`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });

  return llamada;
}

async function validaCedulaVsRostro(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/toc/validaCedulaVsRostro`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });

  return llamada;
}

async function validarClienteBanchile(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/validar/clienteBanchile`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });

  return llamada;
}

async function crearClaveBanco(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/claveBanco/crear`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });

  return llamada;
}

async function resetClaveBanco(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/claveBanco/resetear`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });

  return llamada;
}

async function generaSms(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/contacto/generaSms`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });

  return llamada;
}

async function validarCodigoSms(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/contacto/validarCodigo`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });

  return llamada;
}

async function reenviarSms(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/contacto/reenviarCodigo`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });

  return llamada;
}

async function oneOperacionesCanalesConsultar(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/oneOperacionesCanales/consultar`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });

  return llamada;
}

async function oneOperacionesCanalesBuscarOpciones(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/oneOperacionesCanales/buscarOpciones`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });

  return llamada;
}

async function oneActualizarProspecto(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/one/actualizarProspecto`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });

  return llamada;
}

async function oneCalcularEpi(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/one/calcularEpi`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });

  return llamada;
}

async function oneGenerarContratos(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/one/generarContratos`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });

  return llamada;
}

async function generaHtml(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/contratos/generaHtml`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });
  return llamada;
}

async function completarProceso(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/completar/proceso`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });
  return llamada;
}

async function guardarClave(params) {
  const urlSrvBknd = `${baseUrlBknd}/onboardingDigital/cliente/clave`;
  const llamada = got.post(urlSrvBknd, {
      json: params
    })
    .then(response => {
      return Bourne.parse(response.body);
    })
    .catch(error => {
      console.log(`Error al llamar la URL: ${urlSrvBknd}`);
      console.log(error);
      throw new ClienteException();
    });
  return llamada;
}

module.exports = {
  ideSolicitud,
  sessionManager,
  validaCedulaVsRostro,
  validaCedulaVsDatos,
  obtenerClaveUnica,   
  validarClienteBanchile,
  crearClaveBanco,
  resetClaveBanco,
  generaSms,
  validarCodigoSms,
  reenviarSms,
  oneOperacionesCanalesConsultar,
  oneOperacionesCanalesBuscarOpciones,
  oneActualizarProspecto,
  oneCalcularEpi,
  oneGenerarContratos,
  generaHtml,
  completarProceso,
  guardarClave
};
