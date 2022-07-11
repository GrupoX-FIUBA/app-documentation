import React from 'react'
import ReactMarkdown from 'react-markdown'

const markdown = `
# Manual de usuario

Bienvenido a Spotifuiby, la aplicación para escuchar sus canciones favoritas y estar al tanto de los nuevos lanzamientos de sus artistas preferidos.

Además, si usted es una artista, Spotifiuby es una gran herramienta para permitirle seguir creciendo, sumando nuevos oyentes cada día con la posibilidad de obtener retribuciones monetarias a cambio.

## ¿Qué se puede hacer en Spotifiuby?

Existen dos modalidades de uso en la aplicación: como oyente y como artista. Estas tienen facultades en común y facultades que las diferencian.

### **Tanto un usuario como un artista pueden…**

- Escuchar canciones.
- Generación y edición de playlists.
- Servicio de mensajes privados con otros usuarios.
- Ver y emitir opiniones sobre los distintos contenidos de la plataforma.
- Enviar y recibir donaciones mediante ETH.

### **A su vez, sólo los artistas pueden…**

- Subir nuevo contenido
- Eliminar comentarios

## Primer paso: Registrarse

Para registrarse en Spotifiuby, debe completar correctamente con sus datos los campos que aparecen en la pantalla, seleccionar una foto de perfil (tomada con la cámara o de la galería) si lo desea y presionar el botón &quot;Registrarse&quot;. Una vez realizado esto, si el registro fue exitoso, ya tendrá una cuenta en la aplicación asociada a su dirección de correo.

A continuación, se le sugerirá que permita compartir la ubicación para poder brindar un mejor servicio en cuanto a recomendaciones personalizadas.

Finalmente, se le mostrará la billetera asociada a su cuenta para que pueda hacer transacciones desde otras billeteras a esa y, de tal manera, tener dinero en **ethers (ETH)** en Spotifiuby. En caso de haber ingresado una suma de dinero, el usuario podrá seleccionar uno de los planes disponibles que serán mencionados en la sección de **Suscripciones**.

## Inicio de sesión

El inicio de sesión es sencillo y puede realizarse por dos medios distintos:

- Inicio de sesión tradicional, ingresando dirección de correo electrónico y contraseña.
- Inicio de sesión con Google. Aquí, tras cliquear el respectivo botón se abrirá una ventana del navegador en la que el usuario podrá seleccionar la cuenta de Google con la que desee iniciar sesión y listo, ya podrá ingresar a Spotifiuby.

## Organización de la aplicacion

### Home

Aquí el usuario podrá observar una serie canciones y playlists del momento, de acuerdo a su suscripción.

Podrá seleccionar la que sea de su preferencia y escucharla con una calidad de audio sin igual.

### Mensajes

En esta pantalla aparecerán todas las conversaciones que el usuario tuvo con otros usuarios de la app, ordenadas de las más actuales a las menos.

Para acceder a una conversación, sólo se debe presionar sobre el recuadro de la misma y ahí aparecerá el chat completo, junto con una entrada de texto en la cual podrá escribir el mensaje que desee. Cabe aclarar que las conversaciones son en tiempo real, algo muy importante para tener una conversación fluida.

### Notificaciones

En esta pantalla aparecerán todas las notificaciones que el usuario reciba, apretando sobre las mismas se podrá acceder al contenido relacionado a la misma.

### Lista de Usuarios 

Se permite visualizar el resto de usuarios de la aplicación, pudiendo filtrar por nombre o email. Además se puede ingresar al perfil de los mismos.

### Visualización del perfil de otro usuario

- Observando el perfil de otro usuario se permite:
  - Ver la foto de perfil. 
  - Enviarle mensajes privados.
  - Seguirlo.
  - Observar sus seguidores.
  - Observar a qué usuarios sigue.
  - Donar dinero mediante ETH.

### Billetera

Se permite observar el balance actual de la misma, un historial de movimientos y extraer el dinero.

### Agregar canción (Solo disponible para artistas)
Se permite seleccionar una canción del storage local para subir a la plataforma y que la puedan escuchar otros usuarios. Se debe especificar que plan deben tener como mínimo los usuarios para escuchar dicha canción


### Visualización de perfil propio

- Observando el perfil propio se permite:
  - Observar seguidores.
  - Observar seguidos.
  - Editar Nombre.
  - Editar Foto de perfil.

`


export const UserManualScreen = () => {

  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      }}>
        <div style={{ color:"white", width:"50%", marginTop:25 }}>
          <ReactMarkdown children = {markdown} style/>
      </div>

    </div>    

  )
}
