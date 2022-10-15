const numbers = [45,32,87,10,5,8,2,245,754,84,133, 23, 11, 101, 103]

const dishes = [
    {
        "id":"34",
        "name":"Mojarra Frita",
        "calories":424,
        "isVegetarian":false,
        "value":45000
    },
    {
        "id":"17",
        "name":"Tomahowk",
        "calories":600,
        "isVegetarian":false,
        "value":76000
    },
    {
        "id":"10",
        "name":"Ensalada de Frutas",
        "calories":50,
        "isVegetarian":true,
        "value":18000
    },
    {
        "id":"20",
        "name":"Pollo a la Cazadora",
        "calories":320,
        "isVegetarian":false,
        "value":38000
    }
]

function isCousing(n){
    let cont = 2
    let cousing = true
    while( cont <= n / 2 && cousing ){
        cousing =!( n % cont++ == 0 )
    }

    return cousing
}

const students = [{
    "id": "46982981",
    "firstName": "Carolina",
    "lastName": "Herrera",
    "age": 43,
    "gender": false,
    "address": {
        "street": "Calle 15 # 12-44",
        "city": "Sogamoso"
    },
    "phone": [
        7703054,
        3004039830
    ],
    "education": [
        {
            "college": "Reyes Patria",
            "title": "Bachiller",
            "year": 1992
        },
        {
            "college": "Universidad INCA",
            "title": "Ing de Alimentos",
            "year": 2005
        }
    ]
}, {
    "id": "74663929",
    "firstName": "Horacio José",
    "lastName": "Porras Castro",
    "age": 39,
    "gender": true,
    "address": {
        "street": "Cra 2 # 32-43",
        "city": "Tunja"
    },
    "phone": [
        "7438434",
        "3109398732",
        3048930921
    ],
    "education": [
        {
            "college": "Silvino Rodriguez",
            "title": "Bachiller Comercial",
            "age": 1990
        },
        {
            "college": "SENA",
            "title": "Técnico en Sistemas",
            "age": 1992
        },
        {
            "college": "Universidad UPTC",
            "title": "Ingeniero de Sistemas y Computación",
            "age": 2000
        },
        {
            "college": "Universidad Nacional",
            "title": "Magister en Sistemas de Información",
            "age": 2010
        }
    ]
}, {
    "id": "74892341",
    "firstName": "Marcela",
    "lastName": "Sáenz Pinto",
    "age": 26,
    "gender": false,
    "address": {
        "street": "Cra 9 Bis # 17-43",
        "city": "Sogamoso"
    },
    "phone": [
        3238933298
    ],
    "education": [
        {
            "college": "Instituto Integrado",
            "title": "Bachiller Académico",
            "year": 2006
        },
        {
            "college": "Universidad de Boyacá",
            "title": "Arquitectura",
            "year": 2014
        }
    ]
}, {
    "id": "1057837092",
    "firstName": "Luis Antonio",
    "lastName": "Gómez Pérez",
    "age": 24,
    "gender": true,
    "address": {
        "street": "Av Circunvalar 21 # 69",
        "city": "Duitama"
    },
    "phone": [
        7602147,
        7658727,
        3149026387
    ],
    "education": [
        {
            "college": "Salesiano",
            "title": "Bachiller Académico",
            "year": 2013
        },
        {
            "college": "Universidad Antonio Nariño",
            "title": "Abogado",
            "year": 2018
        },
        {
            "college": "Universidad Antonio Nariño",
            "title": "Especialista en Derecho Procesal",
            "year": 2020
        }
    ]
}, {
    "id": "24908213",
    "firstName": "Danilo Alberto",
    "lastName": "Torres Barrera",
    "age": 51,
    "gender": true,
    "address": {
        "street": "Cra 172 # 89-15",
        "city": "Bogotá"
    },
    "phone": [
        2239323,
        3173204512
    ],
    "education": [
        {
            "college": "Gimnasio Moderno",
            "title": "Bachiller",
            "year": 1985
        },
        {
            "college": "Universidad de los Andres",
            "title": "Administrador de Empresas",
            "year": 1990
        },
        {
            "college": "Universidad de los Andres",
            "title": "Magister en Alta Gerencia",
            "year": 1993
        },
        {
            "college": "Universidad de Harvard",
            "title": "Doctor en Gerencia",
            "year": 2002
        }
    ]
}, {
    "id": "9527981",
    "firstName": "Carlos Eduardo",
    "lastName": "Rojas Correa",
    "age": 32,
    "gender": true,
    "address": {
        "street": "Cra 11 # 2 Sur 42",
        "city": "Sogamoso"
    },
    "phone": [
        3102429032,
        3112908021
    ],
    "education": [
        {
            "college": "Colegio Inocencio Militar Chincá",
            "title": "Bachiller Reservista",
            "year": 2004
        },
        {
            "college": "Escuela Militar José María Cordova",
            "title": "Subteniente",
            "year": 2010
        }
    ]
},
    {
        "id": "1067342092",
        "firstName": "Erika Lorena",
        "lastName": "Rincón Carvajal",
        "age": 27,
        "gender": false,
        "address": {
            "street": "Calle 7 # 21A - 64",
            "city": "Sogamoso"
        },
        "phone": [
            7758932,
            3046597670
        ],
        "education": [
            {
                "college": "Colegio Aleajandro de Humbolt",
                "title": "Bachiller Académico",
                "year": 2012
            },
            {
                "college": "Universidad Konrad Lorenz",
                "title": "Psicologa Clínica",
                "year": 2018
            },
            {
                "college": "Universidad Konrad Lorenz",
                "title": "Psicología Ocupacional",
                "year": 2020
            }
        ]
    },
    {
        "id": "74673098",
        "firstName": "Jorge Andrés",
        "lastName": "Moreno Leal",
        "age": 38,
        "gender": true,
        "address": {
            "street": "Cra 18 # 5 - 100",
            "city": "Sogamoso"
        },
        "phone": [
            3059210032,
            3178209184,
            3140938721
        ],
        "education": [
            {
                "college": "Colegio el Rosario",
                "title": "Bachiller Académico",
                "year": 2003
            },
            {
                "college": "Servicio Nacional de Aprendizaje SENA",
                "title": "Electricidad Industrial",
                "year": 2005
            }
        ]
    },
    {
        "id": "89394755",
        "firstName": "María Teresa",
        "lastName": "Fonseca Díaz",
        "age": 47,
        "gender": false,
        "address": {
            "street": "Cra 2 # 19 - 17",
            "city": "Duitama"
        },
        "phone": [
            7629021,
            3109202189,
        ],
        "education": [
            {
                "college": "Silvino Rodríguez",
                "title": "Bachiller Industrial",
                "year": 1995
            },
            {
                "college": "Universidad Nacional Abierta y a Distancia - UNAD",
                "title": "Regente de Farmacia",
                "year": 2000
            }
        ]
    },
    {
        "id": "46320816",
        "firstName": "Nubia Esperanza",
        "lastName": "Torres Estepa",
        "age": 30,
        "gender": false,
        "address": {
            "street": "Cra 8 # 5 - 24",
            "city": "Cuitiva"
        },
        "phone": [
            3222317830
        ],
        "education": [
            {
                "college": "Colegio Celco",
                "title": "Bachiller Académico",
                "year": 1996
            },
            {
                "college": "Universidad Pedagógica y Tecnológica de Colombia - UPTC",
                "title": "Contaduria Pública",
                "year": 2002
            }
        ]
    },
    {
        "id": "74828003",
        "firstName": "Leonardo",
        "lastName": "Rojas González",
        "age": 27,
        "gender": true,
        "address": {
            "street": "Calle 4 Sur # 14 - 43",
            "city": "Sogamoso"
        },
        "phone": [
            3127179103,
            3048920192
        ],
        "education": [
            {
                "college": "Técnico Gustavo Jiménez",
                "title": "Bachiller Técnico en Sistemas",
                "year": 2010
            },
            {
                "college": "Universidad Pedagógica y Tecnológica de Colombia - UPTC",
                "title": "Ingeniería de Sistemas",
                "year": 2016
            },
            {
                "college": "Universidad Pedagógica y Tecnológica de Colombia - UPTC",
                "title": "Especialista en Bases de Datos",
                "year": 2017
            },
            {
                "college": "Universidad Pedagógica y Tecnológica de Colombia - UPTC",
                "title": "Magister en Tecnología Informática",
                "year": 2020
            }
        ]
    },
    {
        "id": "40932931",
        "firstName": "Ximena Alexandra",
        "lastName": "Palacios Correa",
        "age": 19,
        "gender": false,
        "address": {
            "street": "Av. Central del Norte",
            "city": "Tunja"
        },
        "phone": [
            3227638921
        ],
        "education": [
            {
                "college": "Normal Femenina",
                "title": "Bachiller Comercial",
                "year": 2016
            }
        ]
    },
    {
        "id": "98383745",
        "firstName": "Sonia Esperanza",
        "lastName": "Aguirre García",
        "age": 40,
        "gender": false,
        "address": {
            "street": "Cra 12 # 4 - 23",
            "city": "Paipa"
        },
        "phone": [
            3057828932,
            31098303525
        ],
        "education": [
            {
                "college": "Instituto Agrícola de Paipa",
                "title": "Bachiller Agrícola",
                "year": 1997
            },
            {
                "college": "Universidad Pedagógica y Tecnológica de Colombia - UPTC",
                "title": "Ingeniero Agrónomo",
                "year": 2002
            },
            {
                "college": "Universidad del Norte de Barranquilla",
                "title": "Maestría en Cultivos Hidróponicos",
                "year": 2007
            }
        ]
    },
    {
        "id": "1057321679",
        "firstName": "Tatiana Alejandra",
        "lastName": "Cárdenas Barrera",
        "age": 25,
        "gender": false,
        "address": {
            "street": "Cra 32 # 41 - 23",
            "city": "Sogamoso"
        },
        "phone": [
            3227829825,
            7735631
        ],
        "education": [
            {
                "college": "Colegio Reyes Patria",
                "title": "Bachiller Técnico en Sistemas",
                "year": 2012
            },
            {
                "college": "Universidad Pedagógica y Tecnológica de Colombia - UPTC",
                "title": "Ingeniero de Sistemas y Computación",
                "year": 2018
            },
            {
                "college": "Universidad Pedagógica y Tecnológica de Colombia - UPTC",
                "title": "Especialista en Telemática",
                "year": 2020
            },
        ]
    },
    
    {
        "id": "33759544",
        "firstName": "Diego Hernan",
        "lastName": "Trujillo Andrade",
        "age": 34,
        "gender": true,
        "address": {
            "street": "Cra 12 # 41 - 23",
            "city": "Sogamoso"
        },
        "phone": [
            3059394934,
        ],
        "education": [
            {
                "college": "Colegio Cades",
                "title": "Bachiller Comercial",
                "year": 2000
            },
        ]
    },
]

const marvel = {
	"Marvel Cinematic Universe" : {
		"Iron Man": {
			"movie_id" : 1,
			"title" : "Iron Man",
			"phase" : "Phase One: Avengers Assembled",
			"category_name" : "Action",
			"release_year" : 2015,
			"running_time" : 126,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "May 2, 2008",
			"budget" : "140,000,000",
			"gross" : "318,298,180",
			"time_stamp" : "2015-05-03"
		},
		"The Incredible Hulk": {
			"movie_id" : 2,
			"title" : "The Incredible Hulk",
			"phase" : "Phase One: Avengers Assembled",
			"category_name" : "Action",
			"release_year" : 2008,
			"running_time" : 112,
			"rating_name" : "PG-13",
			"disc_format_name" : "DVD",
			"number_discs" : 3,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "June 13, 2008",
			"budget" : "150,000,000",
			"gross" : "134,518,390",
			"time_stamp" : "2008-10-21"
		},
		"Iron Man 2": {
			"movie_id" : 3,
			"title" : "Iron Man 2",
			"phase" : "Phase One: Avengers Assembled",
			"category_name" : "Action",
			"release_year" : 2015,
			"running_time" : 124,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "May 7, 2010",
			"budget" : "200,000,000",
			"gross" : "312,057,433",
			"time_stamp" : "2015-05-03"
		},
		"Thor": {
			"movie_id" : 4,
			"title" : "Thor",
			"phase" : "Phase One: Avengers Assembled",
			"category_name" : "Action",
			"release_year" : 2011,
			"running_time" : 115,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray + DVD",
			"number_discs" : 2,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "May 6, 2011",
			"budget" : "150,000,000",
			"gross" : "181,015,141",
			"time_stamp" : "2011-10-30"
		},
		"Captain America: The First Avenger": {
			"movie_id" : 5,
			"title" : "Captain America",
			"phase" : "Phase One: Avengers Assembled",
			"category_name" : "Action",
			"release_year" : 2011,
			"running_time" : 124,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray + DVD",
			"number_discs" : 2,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "July 22, 2011",
			"budget" : "140,000,000",
			"gross" : "176,636,816",
			"time_stamp" : "2011-10-30"
		},
		"Marvel's The Avengers": {
			"movie_id" : 6,
			"title" : "Avengers, The",
			"phase" : "Phase One: Avengers Assembled",
			"category_name" : "Science Fiction",
			"release_year" : 2012,
			"running_time" : 143,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray + DVD",
			"number_discs" : 2,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "1.85:1",
			"status" : 1,
			"release_date" : "May 4, 2012",
			"budget" : "220,000,000",
			"gross" : "623,279,547",
			"time_stamp" : "2012-10-20"
		},
		"Iron Man 3": {
			"movie_id" : 7,
			"title" : "Iron Man 3",
			"phase" : "Phase Two",
			"category_name" : "Action",
			"release_year" : 2015,
			"running_time" : 130,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray + DVD",
			"number_discs" : 2,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "May 3, 2013",
			"budget" : "200,000,000",
			"gross" : "408,992,272",
			"time_stamp" : "2015-05-03"
		},
		"Thor: The Dark World": {
			"movie_id" : 8,
			"title" : "Thor: The Dark World",
			"phase" : "Phase Two",
			"category_name" : "Science Fiction",
			"release_year" : 2013,
			"running_time" : 112,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 2,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "November 8, 2013",
			"budget" : "170,000,000",
			"gross" : "206,360,018",
			"time_stamp" : "2014-03-04"
		},
		"Captain America: The Winter Soldier": {
			"movie_id" : 9,
			"title" : "Captain America: The Winter Soldier",
			"phase" : "Phase Two",
			"edition" : "Blu-ray Edition",
			"release_year" : 2014,
			"running_time" : 136,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "April 4, 2014",
			"budget" : "170,000,000",
			"gross" : "259,746,958",
			"time_stamp" : "2014-09-19"
		},
		"Guardians of the Galaxy": {
			"movie_id" : 10,
			"title" : "Guardians of the Galaxy",
			"phase" : "Phase Two",
			"category_name" : "Science Fiction",
			"release_year" : 2014,
			"running_time" : 121,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "August 1, 2014",
			"budget" : "170,000,000",
			"gross" : "333,130,696",
			"time_stamp" : "2014-12-07"
		},
		"Avengers: Age of Ultron": {
			"movie_id" : 11,
			"title" : "Avengers: Age of Ultron",
			"phase" : "Phase Two",
			"category_name" : "Science Fiction",
			"release_year" : 2015,
			"running_time" : 141,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "May 1, 2015",
			"budget" : "250,000,000",
			"gross" : "458,991,599",
			"time_stamp" : "2015-12-07"
		},
		"Ant-Man": {
			"movie_id" : 12,
			"title" : "Ant-Man",
			"phase" : "Phase Two",
			"category_name" : "Science Fiction",
			"release_year" : 2015,
			"running_time" : 132,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "1.85:1",
			"status" : 1,
			"release_date" : "July 17, 2015",
			"budget" : "130,000,000",
			"gross" : "179,017,481",
			"time_stamp" : "2015-12-07"
		},
		"Captain America: Civil War": {
			"movie_id" : 13,
			"title" : "Captain America: Civil War",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2016,
			"running_time" : 147,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.39:1",
			"status" : 1,
			"release_date" : "May 6, 2016",
			"budget" : "250,00,000",
			"gross" : "408,084,349",
			"time_stamp" : "2017-11-09"
		},
		"Doctor Strange": {
			"movie_id" : 14,
			"title" : "Doctor Strange",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2016,
			"running_time" : 115,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.39:1",
			"status" : 1,
			"release_date" : "November 4, 2016",
			"budget" : "165,000,000",
			"gross" : "232,641,920",
			"time_stamp" : "2017-11-09"
		},
		"Guardians of the Galaxy Vol. 2": {
			"movie_id" : 15,
			"title" : "Guardians of the Galaxy Vol. 2",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2017,
			"running_time" : 136,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.39:1",
			"status" : 1,
			"release_date" : "May 5, 2017",
			"budget" : "200,000,000",
			"gross" : "389,213,281",
			"time_stamp" : "2017-11-09"
		},
		"Spider-Man: Homecoming": {
			"movie_id" : 16,
			"title" : "Spider-Man: Homecoming",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2017,
			"running_time" : 133,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "July 7, 2017",
			"budget" : "175,000,000",
			"gross" : "314,057,748",
			"time_stamp" : "2017-11-09"
		},
		"Thor: Ragnarok": {
			"movie_id" : 17,
			"title" : "Thor: Ragnarok",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2017,
			"running_time" : 130,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "November 3, 2017",
			"budget" : "180,000,000",
			"gross" : "tbd",
			"time_stamp" : "2017-11-09"
		},
		"Black Panther": {
			"movie_id" : 18,
			"title" : "Black Panther",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2018,
			"running_time" : 0,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.39:1",
			"status" : 1,
			"release_date" : "February 16, 2018",
			"budget" : "tbd",
			"gross" : "tbd",
			"time_stamp" : "2018-01-09"
		},
		"Avengers: Infinity War": {
			"movie_id" : 19,
			"title" : "Avengers: Infinity War",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2018,
			"running_time" : 0,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.39:1",
			"status" : 1,
			"release_date" : "May 4, 2018",
			"budget" : "tbd",
			"gross" : "tbd",
			"time_stamp" : "2018-01-09"
		},
		"Ant-Man and the Wasp": {
			"movie_id" : 20,
			"title" : "Ant-Man and the Wasp",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2018,
			"running_time" : 0,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.39:1",
			"status" : 1,
			"release_date" : "July 6, 2018",
			"budget" : "tbd",
			"gross" : "tbd",
			"time_stamp" : "2018-01-09"
		}
	}
}

export {
    numbers as default, dishes, students, marvel, isCousing
}