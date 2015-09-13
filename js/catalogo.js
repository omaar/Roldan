angular.module('catalogApp', [])
	.controller('catalogoController', function(){
		var catalogList = this;
		catalogList.catalogo = {
		  "alambre":[  
		     {  
		        "id":"Papelero",
		        "nombre":"Papelero",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Papelero alambre",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Tarjetero",
		        "nombre":"Tarjetero",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Tarjetero alambre",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"PortaLentes",
		        "nombre":"Porta Lentes",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/28-cart_default/blouse.jpg",
		        "alt":"Porta Lentes Alambre",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Canastilla",
		        "nombre":"Canastilla",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Canastilla Alambre",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Mensula",
		        "nombre":"Mensula",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Mensula Alambre",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"GanchoenNiveles",
		        "nombre":"Gancho en Niveles",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Gancho en Niveles",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Dulcero",
		        "nombre":"Dulcero",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Dulcero",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Barnicero",
		        "nombre":"Barnicero",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Barnicero",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"BarniceroCombinado",
		        "nombre":"Barnicero Combinado",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Barnicero Combinado",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Aretero",
		        "nombre":"Aretero",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Aretero",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"PortaLapizlabial",
		        "nombre":"Porta lápiz labial",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Porta lápiz labial",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Botanero",
		        "nombre":"Botanero",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Botanero",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"PortaCartulina",
		        "nombre":"Porta cartulina",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Porta cartulina",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Botadero",
		        "nombre":"Botadero",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Botadero",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"Esquinero",
		        "nombre":"Esquinero",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Esquinero",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"PortaRopa",
		        "nombre":"Porta ropa",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Porta ropa",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"PortaFlores",
		        "nombre":"Porta flores",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Porta flores",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"ArañaDePiso",
		        "nombre":"Araña de piso",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/28-cart_default/blouse.jpg",
		        "alt":"Araña de piso",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "id":"PortaPinturas",
		        "nombre":"Porta pinturas",
		        "descripcion":"",
		        "img":"http://demo.posthemes.com/pos_cendo/53-home_default/blouse.jpg",
		        "alt":"Porta pinturas",
		        "medidas":"2, 3, 4, 5, 6"
		     }
		  ],
		  "unicel":[  
		     {  
		        "nombre":"Porta peluca",
		        "descripcion":"",
		        "img":"../img/catalogo/porta-peluca.jpg",
		        "alt":"Porta peluca",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "nombre":"Maniquie de Unicel",
		        "descripcion":"",
		        "img":"../img/catalogo/maniquie-unicel.jpg",
		        "alt":"Maniquie de Unicel",
		        "medidas":"2, 3, 4, 5, 6"
		     }
		  ],
		  "terciopelo":[  
		     {  
		        "nombre":"Porta pulseras",
		        "descripcion":"",
		        "img":"../img/catalogo/porta-pulseras.jpg",
		        "alt":"Porta pulseras",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "nombre":"Porta collares",
		        "descripcion":"",
		        "img":"../img/catalogo/porta-collares.jpg",
		        "alt":"Porta collares",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "nombre":"Porta aretes",
		        "descripcion":"",
		        "img":"../img/catalogo/porta-aretes.jpg",
		        "alt":"Porta aretes",
		        "medidas":"2, 3, 4, 5, 6"
		     },
		     {  
		        "nombre":"Porta Reloj",
		        "descripcion":"",
		        "img":"../img/catalogo/porta-reloj.jpg",
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
		  ]
		}
	});