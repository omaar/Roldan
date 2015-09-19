angular.module('catalogApp', ['ui.bootstrap']);
angular.module('catalogApp').controller('catalogoController', function ($scope, $modal) { //$log
  
  $scope.catalogo = {
		  "alambre":[  
		     {  
		        "id":"Papelero",
		        "nombre":"Papelero",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/25.png",
		        "alt":"Papelero alambre",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Tarjetero",
		        "nombre":"Tarjetero",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/26.png",
		        "alt":"Tarjetero alambre",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"PortaLentes",
		        "nombre":"Porta Lentes",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/32.png",
		        "alt":"Porta Lentes Alambre",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Canastilla",
		        "nombre":"Canastilla",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/42.png",
		        "alt":"Canastilla Alambre",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Mensula",
		        "nombre":"Mensula",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/43.png",
		        "alt":"Mensula Alambre",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"GanchoenNiveles",
		        "nombre":"Gancho en Niveles",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/44.png",
		        "alt":"Gancho en Niveles",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Dulcero",
		        "nombre":"Dulcero",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/",
		        "alt":"Dulcero",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Barnicero",
		        "nombre":"Barnicero",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/",
		        "alt":"Barnicero",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"BarniceroCombinado",
		        "nombre":"Barnicero Combinado",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/",
		        "alt":"Barnicero Combinado",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Aretero",
		        "nombre":"Aretero",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/",
		        "alt":"Aretero",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"PortaLapizlabial",
		        "nombre":"Porta lápiz labial",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/",
		        "alt":"Porta lápiz labial",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Botanero",
		        "nombre":"Botanero",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/",
		        "alt":"Botanero",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"PortaCartulina",
		        "nombre":"Porta cartulina",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/",
		        "alt":"Porta cartulina",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Botadero",
		        "nombre":"Botadero",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/",
		        "alt":"Botadero",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Esquinero",
		        "nombre":"Esquinero",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/",
		        "alt":"Esquinero",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"PortaRopa",
		        "nombre":"Porta ropa",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/",
		        "alt":"Porta ropa",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"PortaFlores",
		        "nombre":"Porta flores",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/",
		        "alt":"Porta flores",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"ArañaDePiso",
		        "nombre":"Araña de piso",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/",
		        "alt":"Araña de piso",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"PortaPinturas",
		        "nombre":"Porta pinturas",
		        "descripcion":"",
		        "img":"../img/catalogo/alambre/48.jpg",
		        "alt":"Porta pinturas",
		        "medidas":"2, 3, 4, 5, 6"
		     }
		  ],
		  "unicel":[  
		     {  
		     	"id":"Portapeluca",
		        "nombre":"Porta peluca",
		        "descripcion":"",
		        "img":"../img/catalogo/unicel/24-min.png",
		        "alt":"Porta peluca",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {
		     	"id":"ManiquieUnicel",
		        "nombre":"Maniquie de Unicel",
		        "descripcion":"",
		        "img":"../img/catalogo/unicel/22-min.png",
		        "alt":"Maniquie de Unicel",
		        "medidas":"2, 3, 4, 5, 6"
		     }
		  ],
		  "terciopelo":[  
		     {
		     	"id":"PortaPulseras",
		        "nombre":"Porta pulseras",
		        "descripcion":"",
		        "img":"../img/catalogo/terciopelo/05-min.png",
		        "alt":"Porta pulseras",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {
		     	"id": "PortaCollares",
		        "nombre":"Porta collares",
		        "descripcion":"",
		        "img":"../img/catalogo/terciopelo/10-min.png",
		        "alt":"Porta collares",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {
		     	"id":"PortaAretes",
		        "nombre":"Porta aretes",
		        "descripcion":"",
		        "img":"../img/catalogo/terciopelo/08-min.png",
		        "alt":"Porta aretes",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {
		     	"id":"PortaReloj",
		        "nombre":"Porta Reloj",
		        "descripcion":"",
		        "img":"../img/catalogo/terciopelo/06-min.png",
		        "alt":"Porta Reloj",
		        "medidas":"2, 3, 4, 5, 6"
		     }
		  ],
		  "acrilico":[
		     {  
		        "nombre":"Porta aretes",
		        "descripcion":"",
		        "img":"../img/catalogo/porta-aretes-acrilico.jpg",
		        "alt":"Porta aretes",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "nombre":"Porta Lentes",
		        "descripcion":"",
		        "img":"../img/catalogo/porta-lentes-acrilico.jpg",
		        "alt":"Porta Lentes Acrílico",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "nombre":"Porta teléfono",
		        "descripcion":"",
		        "img":"../img/catalogo/porta-telefono.jpg",
		        "alt":"Porta teléfono",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "nombre":"Porta tablet",
		        "descripcion":"",
		        "img":"../img/catalogo/porta-tablet.jpg",
		        "alt":"Porta tablet",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "nombre":"Porta Papel",
		        "descripcion":"",
		        "img":"../img/catalogo/porta-papel.jpg",
		        "alt":"Porta Papel",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "nombre":"Porta Reloj Acrílico",
		        "descripcion":"",
		        "img":"../img/catalogo/porta-reloj-acrilico.jpg",
		        "alt":"Porta Reloj Acrílico",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "nombre":"Porta Plumas",
		        "descripcion":"",
		        "img":"../img/catalogo/porta-plumas.jpg",
		        "alt":"Porta Plumas",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "nombre":"Porta Anuncios",
		        "descripcion":"",
		        "img":"../img/catalogo/porta-anuncios.jpg",
		        "alt":"Porta Anuncios",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "nombre":"Porta Zapatos",
		        "descripcion":"",
		        "img":"../img/catalogo/porta-zapatos.jpg",
		        "alt":"Porta Zapatos",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "nombre":"Dulcero Acrílico",
		        "descripcion":"",
		        "img":"../img/catalogo/dulcero-acrilico.jpg",
		        "alt":"Dulcero Acrílico",
		        "medidas":"2, 3, 4, 5, 6"
		     }
		  ],
		  "plastico":[
		  	 {
		  		"id": "TorsoMujer",
		  		"nombre":"Torso Mujer",
		        "descripcion":"",
		        "img":"../img/catalogo/plastico/29-min.png",
		        "alt":"Porta aretes",
		        "medidas":""
		     },
		  	 {
		  		"id": "TorsoHombre",
		  		"nombre":"Torso Hombre",
		        "descripcion":"",
		        "img":"../img/catalogo/plastico/28-min.png",
		        "alt":"Porta aretes",
		        "medidas":""
		     },
		     {
		    	"id":"Maniquie",
		  		"nombre":"Maniquie",
		        "descripcion":"",
		        "img":"../img/catalogo/plastico/27-min.png",
		        "alt":"Porta aretes",
		        "medidas":""
		     }
		  ],
		  "otros":[
		  	 {
		  		"id": "PortaPapelMadera",
		  		"nombre":"Porta Papel de Madera",
		        "descripcion":"",
		        "img":"../img/catalogo/otros/01-min.png",
		        "alt":"Porta Palel de Madera",
		        "medidas":""
		     },
		  	 {
		  		"id": "CarritoMandado",
		  		"nombre":"Carrito Mandado",
		        "descripcion":"",
		        "img":"../img/catalogo/otros/31-min.png",
		        "alt":"Carrito Mandado",
		        "medidas":""
		     },
		     {
		    	"id":"DiablitoCarga",
		  		"nombre":"Diablito de Carga",
		        "descripcion":"",
		        "img":"../img/catalogo/otros/30-min.png",
		        "alt":"Diablito de Carga",
		        "medidas":""
		     }
		  ]
	};

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        catalogo: function () {
          return $scope.catalogo;
        },
        articulo: function(){
          return size;
        }
      }
    });

  };

  $(function(){
  	// Instantiate MixItUp:
  	$('#Container').mixItUp({
  		load: {
  			filter: '.alambre'
		}
  	});
  });

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('catalogApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, catalogo, articulo) {
  
  //console.log(articulo);
  $scope.articulo = articulo;
  
  $scope.catalogo = catalogo;
  $scope.selected = {
    articulo: $scope.catalogo[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.articulo);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});