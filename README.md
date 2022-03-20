# proyecto FrontEnd de mi video club! 

Este proyecto coohome.pngnsiste en recrear el frontend de una pagina web de alquiler de peliculas donde los usuarios podran registrarse, ver las peliculas disponibles, y hacer pedidos, conectando con mi backend y base de datos que hice realice en mi proyecto backend que podrian ver aqui: https://github.com/parra1996/proyecto-VideoClub .

## instrucciones: 

el frontend esta deployado en AWS ( amazon web services ), pueden ingresar por aca: https://master.d1hrx4ba14ehzf.amplifyapp.com/.

## bienvenida.

La pagina principal es Home, ahi podremos ver un video en la zona central junto con un header y un footer, el header tiene el boton home junto con el nombre de la app, un buscador de peliculas solo si estas logueado, y las opciones de ver las peliculas, loguearte y registrarte.

![](img/homee2.png)

Para registrarnos, debemos clickar sobre register y nos redirigirá a la vista de registro, donde podremos introducir nuestros datos para crear un usuario. Se cuiadoso cuando rellenes el formulario porque los campos tinen medidas de seguridad para asegurarse de que no habra errores cuando se guarden tus datos.

Una vez nos hemos registrado, nos redirigirá a la vista de Login, donde deberemos introducir nuestro email y nuestro password con los que nos hemos registrado previamente.

a continuacion ya puedes buscar alguna pelicula por titulo, alquilar alguna pelicula de tu preferencia, ver tu perfil y modificar tus datos, dentro de otras cosas.

si vas a movies, y te llama la atencion alguna de ellas, puedes clickear en ellas y te llevara a mostrarte detalles sobre ellas y la opcion de alquilarla.

si vas a buscar una pelicula por titulo (solo si estas logueado como dije anteriormente) escribes su nombre en el busquedar, de encontrarla en el store te la mostrara y de no ser asi te enviara un mensaje diciendo que no la tiene y que por favor busques otra.

si vas a tu perfil puedes ver tus datos como nombre, apellido, correo, numero de telefono y edad, asi como tambien todos los pedidos que has realizado. En caso de querer actualizar tu telefono puedes hacerlo escribiendolo en el campo y dandole al boton de actualizar.

Al loguearte podras ver que aparece el boton de admin, pero no podras ingresar a no ser que tengas el permiso de administrador, eres libre de intentar ;) .

## tecnologias utilizadas:

![](img/axios.png)    ![](img/node%20express.png)   ![](img/bcrypt.png)   ![](img/sql.png)   ![](img/jwtAuth.png)




