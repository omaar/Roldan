angular.module('catalogApp', ['ui.bootstrap']);
angular.module('catalogApp').controller('catalogoController', function ($scope, $modal) {
  $scope.catalogo = {
		  "alambre":[
			 {  
			    "id":"blister",
			    "nombre":"Blister",
			    "descripcion":"Disponible en color Blanco en medidas de 5cm a 30cm",
			    "img":"../static/img/catalogo/alambre/blister.jpg",
			    "alt":"Blister",
			    "medidas": {
			    	"CH":"5cm",
			    	"M":"",
			    	"G":"30cm"
			    },
			    "popular":"popular"
			 },
			 {  
			    "id":"Canastilla",
			    "nombre":"Canastilla de Alambre",
			    "descripcion":"Disponible en color Blanco",
			    "img":"../static/img/catalogo/alambre/canastilla.jpg",
			    "alt":"Canastilla Alambre",
			    "medidas": {
			    	"CH":"29cm x 15cm",
			    	"M":"40cm x 20cm",
			    	"G":"60cm x 20cm"
			    }
			 },
			 {  
			    "id":"Cascadas",
			    "nombre":"Cascadas de Alambre",
			    "descripcion":"Disponible en color Blanco de Tres a Siete Pernos",
			    "img":"../static/img/catalogo/alambre/cascadas.jpg",
			    "alt":"Cascadas Alambre",
			    "medidas": {
			    	"CH":"20cm, 25cm",
			    	"M":"29cm, 34cm",
			    	"G":"39cm"
			    },
			    "popular":"popular"
			 },
			 {  
			    "id":"Repisa",
			    "nombre":"Repisa de Alambre",
			    "descripcion":"Disponible en color Blanco, perfecto para uso con exhibipanel",
			    "img":"../static/img/catalogo/alambre/repisa.jpg",
			    "alt":"Repisa de Alambre",
			    "medidas": {
			    	"CH":"40cm x 20cm",
			    	"M":"60cm x 20cm ",
			    	"G":"80cm x 20cm"
			    }
			 },
		  	 {  
			    "id":"ArañaDeMostrador",
			    "nombre":"Araña de mostrador",
			    "descripcion":"Disponible en color Blanco de Uno a Tres Niveles",
			    "img":"../static/img/catalogo/alambre/araña-mostrador.png",
			    "imghd":"../static/img/catalogo/alambre/46.png",
			    "alt":"Araña de mostrador",
			    "medidas": {
			    	"CH":"62cm x 41cm",
			    	"M":"",
			    	"G":""
			    }
			 },
		  	 {  
			    "id":"ArañaDePiso",
			    "nombre":"Araña de piso",
			    "descripcion":"Disponible en color Blanco de Uno a Cinco Niveles",
			    "img":"../static/img/catalogo/alambre/araña-piso.png",
			    "alt":"Araña de piso",
			    "medidas": {
			    	"CH":"",
			    	"M":"",
			    	"G":"158cm x 39cm"
			    }
			 },
			 {  
			    "id":"Aretero",
			    "nombre":"Aretero",
			    "descripcion":"Disponible en color Blanco de Uno a Cinco Niveles",
			    "img":"../static/img/catalogo/alambre/aretero.png",
			    "alt":"Aretero de Alambre",
			    "medidas": {
			    	"CH":"29cm x 18cm",
			    	"M":"155cm x 50cm",
			    	"G":""
			    }
			 },
			 {  
			    "id":"Barnicero",
			    "nombre":"Barnicero",
			    "descripcion":"Disponible en color Blanco.",
			    "img":"../static/img/catalogo/alambre/barnicero.png",
			    "alt":"Barnicero",
			    "medidas": {
			    	"CH":"32cm x 29cm",
			    	"M":"42cm x 29cm",
			    	"G":""
			    }
			 },
			 {  
			    "id":"BarniceroCombinado",
			    "nombre":"Barnicero Combinado",
			    "descripcion":"Disponible en color Blanco",
			    "img":"../static/img/catalogo/alambre/barnicero-combinado.png",
			    "alt":"Barnicero Combinado",
			    "medidas": {
			    	"CH":"36cm x 20cm",
			    	"M":"",
			    	"G":""
			    }
			 },
			 {  
			    "id":"Botadero",
			    "nombre":"Botadero",
			    "descripcion":"Disponible en color Blanco de Dos a Cinco Niveles",
			    "img":"../static/img/catalogo/alambre/botadero.png",
			    "alt":"Botadero",
			    "medidas": {
			    	"CH":"",
			    	"M":"",
			    	"G":"113cm x 36cm"
			    }
			 },
			 {  
			    "id":"Botanero",
			    "nombre":"Botanero",
			    "descripcion":"Disponible en color Blanco de Dos y Tres niveles",
			    "img":"../static/img/catalogo/alambre/botanero.png",
			    "alt":"Botanero",
			    "medidas": {
			    	"CH":"69cm x 25cm",
			    	"M":"",
			    	"G":""
			    }
			 },
			 {  
			    "id":"Cajon",
			    "nombre":"Cajon de Alambre",
			    "descripcion":"Disponible en color Blanco",
			    "img":"../static/img/catalogo/alambre/cajones.png",
			    "alt":"Cajon de Alambre",
			    "medidas": {
			    	"CH":"36cm x 36cm",
			    	"M":"50cm x 36cm",
			    	"G":"60cm x 49cm"
			    }
			 },
			 {  
			    "id":"Esquinero",
			    "nombre":"Esquinero de Alambre",
			    "descripcion":"Disponible en color Blanco de Dos a Cuatro niveles",
			    "img":"../static/img/catalogo/alambre/esquinero.png",
			    "alt":"Esquinero de Alambre",
			    "medidas": {
			    	"CH":"48cm x 29cm",
			    	"M":"75cm x 29cm",
			    	"G":"101cm X 29cm "
			    }
			 },
			 {  
			    "id":"Frutero",
			    "nombre":"Frutero de Alambre",
			    "descripcion":"Disponible en color Blanco de Dos a Cuatro niveles",
			    "img":"../static/img/catalogo/alambre/frutero.png",
			    "alt":"Frutero de Alambre",
			    "medidas": {
			    	"CH":"55x29",
			    	"M":"74cm x 29cm",
			    	"G":""
			    }
			 },
			 {  
			    "id":"PortaCartulina",
			    "nombre":"Porta cartulina",
			    "descripcion":"Disponible en color Blanco de Hasta 27 Niveles",
			    "img":"../static/img/catalogo/alambre/porta-cartulina-2.png",
			    "alt":"Porta cartulina",
			    "medidas": {
			    	"CH":"48cm x 112cm",
			    	"M":"59cm x 140cm",
			    	"G":"121cm x 56cm"
			    }
			 },
			 {  
			    "id":"PortaFlores",
			    "nombre":"Porta flores",
			    "descripcion":"",
			    "img":"../static/img/catalogo/alambre/porta-flores.png",
			    "alt":"Porta flores",
			    "medidas": {
			    	"CH":"",
			    	"M":"",
			    	"G":"156cm x 18cm"
			    }
			 },
			 {  
			    "id":"PortaHojas",
			    "nombre":"Porta Hojas",
			    "descripcion":"Disponible en color Blanco y en versiones Vertical y en Pila",
			    "img":"../static/img/catalogo/alambre/porta-hojas.png",
			    "alt":"Porta Hojas",
			    "medidas": {
			    	"CH":"",
			    	"M":"100cm x 25 (6-10 Niveles)",
			    	"G":"150cm x 25 (26 Niveles)"
			    }
			 },
			 {  
			    "id":"PortaLapizlabial",
			    "nombre":"Porta lápiz labial",
			    "descripcion":"Disponible en color Blanco y en versiones Vertical y en Pila",
			    "img":"../static/img/catalogo/alambre/porta-labial.png",
			    "alt":"Porta lápiz labial",
			    "medidas": {
			    	"CH":"26cm x 17cm (70 Compartimentos)",
			    	"M":"",
			    	"G":""
			    }
			 },
			 {  
			    "id":"PortaPinturas",
			    "nombre":"Porta pinturas",
			    "descripcion":"Disponible en color Blanco de Dos y Cuatro Niveles",
			    "img":"../static/img/catalogo/alambre/porta-pinturas.png",
			    "alt":"Porta pinturas",
			    "medidas": {
			    	"CH":"23cm x 35cm (2 Niveles)",
			    	"M":"51cm x 35cm (4 Niveles)",
			    	"G":""
			    }
			 },
			 {  
			    "id":"TarjeteroMostrador",
			    "nombre":"Tarjetero de mostrador",
			    "descripcion":"Disponible en color Blanco de Cuatro y Cinco Niveles",
			    "img":"../static/img/catalogo/alambre/tarjetero-mini.png",
			    "alt":"Tarjetero Mini",
			    "medidas": {
			    	"CH":"",
			    	"M":"25cm x 29cm (4 Niveles)",
			    	"G":"35cm x 33cm (5 Niveles)"
			    }
			 },
			 {  
			    "id":"RejaAlambre",
			    "nombre":"Reja de Alambre",
			    "descripcion":"Disponible en color Blanco.",
			    "img":"../static/img/catalogo/alambre/reja.jpg",
			    "alt":"Reja de Alambre",
			    "medidas": {
			    	"CH":"36cm x 36cm",
			    	"M":"150cm x 60cm",
			    	"G":"200cm x 100cm"
			    }
			 },
			 {  
			    "id":"TarjeteroNiveles",
			    "nombre":"Tarjetero de mostrador en niveles",
			    "descripcion":"Disponible en color Blanco de Cuatro y Cinco Niveles",
			    "img":"../static/img/catalogo/alambre/tarjetero-niveles.png",
			    "alt":"Tarjetero en Niveles",
			    "medidas": {
			    	"CH":"",
			    	"M":"69x28",
			    	"G":" 156cm x 49cm"
			    }
			 }
		  ],
		  "unicel":[  
		     {  
		     	"id":"Portapeluca",
		        "nombre":"Porta peluca",
		        "descripcion":"",
		        "img":"../static/img/catalogo/unicel/23-min.png",
		        "alt":"Porta peluca",
		        "medidas": {
			    	"CH":"",
			    	"M":"",
			    	"G":""
			    }
		     },
		     {
		     	"id":"ManiquieUnicel",
		        "nombre":"Maniquie de Unicel",
		        "descripcion":"",
		        "img":"../static/img/catalogo/unicel/maniquie-unicel.png",
		        "alt":"Maniquie de Unicel",
		        "medidas": {
			    	"CH":"100cm x 42cm",
			    	"M":"",
			    	"G":""
			    }
		     }
		  ],
		  "terciopelo":[  
		     {
		     	"id":"PortaPulseras",
		        "nombre":"Porta pulseras",
		        "descripcion":"Disponible en color Negro, de Uno a Tres Niveles",
		        "img":"../static/img/catalogo/terciopelo/porta-pulsera-3.png",
		        "alt":"Porta pulseras",
		        "medidas": {
			    	"CH":"10cm x 29cm",
			    	"M":"25cm x 29cm",
			    	"G":"33cm x 29cm"
			    }
		     },
		     {
		     	"id": "PortaCollares",
		        "nombre":"Porta collares",
		        "descripcion":"Disponible en color Negro, de Uno a Cuatro Niveles",
		        "img":"../static/img/catalogo/terciopelo/porta-collar-2.png",
		        "alt":"Porta collares",
		        "medidas": {
			    	"CH":"25cm x 18cm",
			    	"M":"25cm x 16cm",
			    	"G":"35cm x 28cm"
			    }
		     },
		     {
		     	"id":"PortaAretes",
		        "nombre":"Porta aretes",
		        "descripcion":"Disponible en color Negro, de Uno a Tres Niveles",
		        "img":"../static/img/catalogo/terciopelo/aretero.png",
		        "alt":"Porta aretes",
		        "medidas": {
			    	"CH":"25cm x 30cm",
			    	"M":"32cm x 25cm",
			    	"G":"38cm x 37cm"
			    }
		     },
		     {
		     	"id":"PortaReloj",
		        "nombre":"Porta Reloj",
		        "descripcion":"Disponible en color Negro, de Uno a Tres Niveles",
		        "img":"../static/img/catalogo/terciopelo/porta-pulsera.png",
		        "alt":"Porta Reloj",
		        "medidas": {
			    	"CH":"36cm x 20cm",
			    	"M":"",
			    	"G":""
			    }
		     }
		  ],
		  "acrilico":[
		     {  
		        "nombre":"Porta aretes",
		        "descripcion":"",
		        "img":"../static/img/catalogo/acrilico/aretero.png",
		        "alt":"Porta aretes",
		        "medidas": {
			    	"CH":"27cm x 16cm",
			    	"M":"27cm x 25cm",
			    	"G":""
			    }
		     },
		     {  
		        "nombre":"Porta Calzado",
		        "descripcion":"",
		        "img":"../static/img/catalogo/acrilico/porta-calzado.jpg",
		        "alt":"Porta Zapatos",
		        "medidas": {
			    	"CH":"36cm x 20cm",
			    	"M":"",
			    	"G":""
			    }
		     },
		     {  
		        "nombre":"Porta Calzado (Charola)",
		        "descripcion":"",
		        "img":"../static/img/catalogo/acrilico/porta-calzado-simple.jpg",
		        "alt":"Porta Zapatos",
		        "medidas": {
			    	"CH":"26cm x 6cm",
			    	"M":"",
			    	"G":""
			    }
		     },
		     {  
		        "nombre":"Torre Porta Calzado",
		        "descripcion":"",
		        "img":"../static/img/catalogo/acrilico/porta-calzado-torre.png",
		        "alt":"Porta Zapatos",
		        "medidas": {
			    	"CH":"60cm x 30cm",
			    	"M":"45cm x 23cm",
			    	"G":""
			    }
		     },
		     {  
		        "nombre":"Dulcero Acrílico",
		        "descripcion":"",
		        "img":"../static/img/catalogo/acrilico/dulcero.png",
		        "alt":"Dulcero Acrílico",
		        "medidas": {
			    	"CH":"17cm x 25cm",
			    	"M":"",
			    	"G":""
			    },
			    "popular":"popular"
		     },
		     {  
		        "nombre":"Porta Lentes con Espejo",
		        "descripcion":"",
		        "img":"../static/img/catalogo/acrilico/porta-lentes-3.png",
		        "alt":"Porta Lentes Acrílico",
		        "medidas": {
			    	"CH":"",
			    	"M":"",
			    	"G":"70cm x 20cm"
			    }
		     },
		     {  
		        "nombre":"Porta Lentes Media Luna",
		        "descripcion":"",
		        "img":"../static/img/catalogo/acrilico/porta-lentes.png",
		        "alt":"Porta Lentes Acrílico",
		        "medidas": {
			    	"CH":"70cm x 20cm",
			    	"M":"",
			    	"G":"60cm x 19cm"
			    },
			    "popular":"popular"
		     },
		     {  
		        "nombre":"Porta Teléfono y Tablet",
		        "descripcion":"Disponible tambien enh azul y naranja",
		        "img":"../static/img/catalogo/acrilico/porta-celular.png",
		        "alt":"Porta teléfono",
		        "medidas": {
			    	"CH":"10cm x 7cm",
			    	"M":"",
			    	"G":""
			    }
		     },
		     {  
		        "nombre":"Porta Reloj Acrílico",
		        "descripcion":"",
		        "img":"../static/img/catalogo/acrilico/porta-reloj-2.png",
		        "alt":"Porta Reloj Acrílico",
		        "medidas": {
			    	"CH":"8cm x 4cm",
			    	"M":"12cm x 3cm",
			    	"G":""
			    }
		     },
		     {  
		        "nombre":"Porta Plumas",
		        "descripcion":"Disponible en 16 compartimentos y 20 compartimentos ",
		        "img":"../static/img/catalogo/acrilico/porta-plumas.png",
		        "alt":"Porta Plumas",
		        "medidas": {
			    	"CH":"17cm x 8cm",
			    	"M":"",
			    	"G":"9cm x 13cm"
			    }
		     },
		     {  
		        "nombre":"Porta Anuncios",
		        "descripcion":"",
		        "img":"../static/img/catalogo/acrilico/porta-anuncios-3.png",
		        "alt":"Porta Anuncios",
		        "medidas": {
			    	"CH":"36cm x 20cm",
			    	"M":"",
			    	"G":""
			    }
		     }
		  ],
		  "plastico":[
		  	 {
		  		"id": "TorsoMujer",
		  		"nombre":"Torso Mujer",
		        "descripcion":"",
		        "img":"../static/img/catalogo/plastico/torso-mujer.png",
		        "alt":"Torso Mujer",
		        "medidas": {
			    	"CH":"42cm x 40cm",
			    	"M":"",
			    	"G":""
			    }
		     },
		  	 {
		  		"id": "TorsoHombre",
		  		"nombre":"Torso Hombre",
		        "descripcion":"",
		        "img":"../static/img/catalogo/plastico/torso-hombre.png",
		        "alt":"Torso Hombre",
		        "medidas": {
			    	"CH":"59cm x 48cm",
			    	"M":"",
			    	"G":""
			    }
		     }
		  ],
		  "otros":[
			 {  
			    "id":"anaquelMetalico",
			    "nombre":"Anaquel Metalico",
			    "descripcion":"Disponible en gris y galvanizado",
			    "img":"../static/img/catalogo/otros/anaquel-metalico.png",
			    "alt":"Anaquel Metalico",
			    "medidas": {
			    	"CH":"30cm x 85cm",
			    	"M":"45cm x 85cm",
			    	"G":"60cm x 85cm"
			    },
			    "popular":"popular"
			 },
		  	 {
		  		"id": "PortaPapelMadera",
		  		"nombre":"Porta Papel de Madera",
		        "descripcion":"",
		        "img":"../static/img/catalogo/otros/porta-papel-madera.png",
		        "alt":"Porta Palel de Madera",
		        "medidas": {
			    	"CH":"36cm x 20cm",
			    	"M":"",
			    	"G":""
			    }
		     },
			 {  
			    "id":"RackRopa",
			    "nombre":"Rack para ropa",
			    "descripcion":"Disponible en color Negro",
			    "img":"../static/img/catalogo/otros/rack-ropa.png",
			    "alt":"Rack para ropa",
			    "medidas": {
			    	"CH":"",
			    	"M":"",
			    	"G":"140cm x 64cm"
			    },
			    "popular":"popular"
			 },
		  	 {
		  		"id": "CarritoMandado",
		  		"nombre":"Carrito Mandado",
		        "descripcion":"",
		        "img":"../static/img/catalogo/otros/carrito-mandado.png",
		        "alt":"Carrito Mandado",
		        "medidas": {
			    	"CH":"100cm x 36cm ",
			    	"M":"",
			    	"G":"92cm x 43cm"
			    }
		     },
		     {
		    	"id":"DiablitoCarga",
		  		"nombre":"Diablito de Carga",
		        "descripcion":"",
		        "img":"../static/img/catalogo/otros/diablito-carga.png",
		        "alt":"Diablito de Carga",
		        "medidas": {
			    	"CH":"98cm x 26cm",
			    	"M":"100cm x 26cm",
			    	"G":"110cm x 32cm (Reforzado)"
			    }
		     },
		     {
		    	"id":"MensulaCromada",
		  		"nombre":"Mensula Cromada",
		        "descripcion":"",
		        "img":"../static/img/catalogo/otros/mensulas-cromada.jpg",
		        "alt":"Mensula Cromada",
		        "medidas": {
			    	"CH":"",
			    	"M":"",
			    	"G":""
			    }
		     },
		     {
		    	"id":"MensulaSimple",
		  		"nombre":"Mensula Simple",
		        "descripcion":"",
		        "img":"../static/img/catalogo/otros/mensula.jpg",
		        "alt":"Mensula Simple",
		        "medidas": {
			    	"CH":"",
			    	"M":"",
			    	"G":""
			    }
		     }
		  ]
	};
  $scope.open = function (articulo) { 
  	var modalInstance = $modal.open({ 
  		templateUrl: 'templates/modal.html', 
  		controller: 'ModalInstanceCtrl', 
  		articulo: articulo, 
  		size: 'lg', 
  		resolve: { catalogo: function () { return $scope.catalogo; }, 
  		articulo: function(){ return articulo; } } }); };
  $(function() { $('#productos').mixItUp({ load: { filter: '.popular' } }); });
});
angular.module('catalogApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, catalogo, articulo) {
  $scope.articulo = articulo;
  $scope.catalogo = catalogo;
  $scope.selected = { articulo: $scope.catalogo[0] };
  $scope.ok = function () { $modalInstance.close($scope.selected.articulo); };
  $scope.cancel = function () { $modalInstance.dismiss('cancel'); };
});