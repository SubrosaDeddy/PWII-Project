# PWII-Project
https://github.com/SubrosaDeddy/PWII-Project
 
Fernando De Luna Guardiola      1726916
Daniel Luna Flores              1721922
Angel Ivan Rodriguez Dominguez  1743099
Edgar Adrián Oviedo Peña        1728696


Ourker:
Aplicación destinada a la búsqueda y contacto de trabajadores por zonas a conveniencia del usuario.
Un usuario puede registrarse directamente o especificar que es un trabajador para ofrecer sus servicios.
Un usuario trabajador podrá crear post los cuales aparecerán en su perfil.
Un usuario promedio se limita a poder buscar trabajadores por ubicación y/o ocupación, ver sus perfiles y publicaciones y contactarlos.
Después de contactarse, queda a criterio de ambos usuarios continuar su comunicación por este medio o trasladarse a otro ya que nuestra página no pretende desarrollar el papel de un contratista, sino facilitar la búsqueda y contacto de servicios.

Carpetas: 
	Backend: Carpeta destinada al Back-end de la aplicación. Contiene las carpetas con controladores, modelos y rutas.
		controllers: Contiene los controladores de la aplicación (exports para ejecutar acciones en la base de datos).
		middleware: En auth.js se verifica la existencia del token y en caso de no existir o ser invalido enviar el error.
		models: Ejecuta la conexión a la base de datos y contiene la representación de los schemas de la misma, requisitos de los datos y encriptaciones.
		routes: Contiene las rutas del proyecto para ejecutar los controladores, enviar parámetros y trabajar la base de datos, gets, post, deletes, etc.
		util: función creada para el registro de logs desde la librería "winston" los cuales se muestran en el archivo error.log
		

	Ourker-app: Carpeta destinada al desarrollo del Front-End de la aplicación 
		public: Aquí se encuentran los recursos externos como imágenes y svg's.
		src: Contiene las carpetas de componentes, modelos, páginas y servicios.
			components: Componentes de la aplicación pensados para utilizarse en más de una pantalla, por ejemplo, el navbar y la barra de búsqueda.
			models: Manager del frontend para comunicarse con la base de datos (no fue utilizado al final).
			pages: Paginas de la aplicación (diseño y funcionalidad/comunicación de frontend).
			services: Comunicación FronEnd a BackEnd para tomar y desplegar la información.
			utils: Theme.js contiene los datos de los colores utilizados en la aplicación para tener integridad en el formato y diseños de las pantallas.
