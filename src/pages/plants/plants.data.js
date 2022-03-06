const PLANTS_DATA = [
    {
        id: 1,
        nombre : "Sansevieria trifasciata zeylanica",
        tipo: "Interior",
        descripcion: "La planta conocida científicamente como Sansevieria, y en español como lengua de suegra o lengua de tigre y en inglés llamada popularmente snake plant, es de la familia de las Liliáceas originaria de África, Asia y sobre todo Nueva Guinea. Esta planta se volvió muy popular dante los años 30 como una planta de interior muy resistente. Se trata de una planta crasa, que tolera bien la sequía y los escasos cuidados, lo único que no resiste es el exceso de agua, ni el frío extremo.",
        cuidados: {
            exposicion: "Debe reciba unas pocas horas de luz de sol directa al día, podrá desarrollarse más fuerte y con hojas más verdes",
            temperatura: "Está entre 16ºC y 30ºC, pero es sensible a temperaturas menores a 14ºC. Por esto, resiste bien el verano, pero en invierno se debe evitar que este a una temperatura muy baja.",
            riego: "Hay que tener presente que está planta almacena agua en sus tejidos, por lo que se deberá regar de vez en cuando, con bastante espacio de tiempo. Es una planta que teme la humedad excesiva, por lo que el suelo entre los riegos deberá secarse."
        },
        img: "https://images.unsplash.com/photo-1599719840163-1cd5b7c1fabe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        id: 2,
        nombre : "Suculenta cebra",
        tipo: "Interior",
        descripcion: "Originaria de Suráfrica, exactamente Cabo Oriental y descubierta por Haworth. Esta es una de las especies de Haworthia que más difusión tiene y es fácilmente cultivable en el hogar y de ahí y por su belleza, su gran conocimiento popular.",
        cuidados: {
            exposicion : "Gusta de estar en zonas de semisombra, bien iluminada pero sin sol directo",
            temperatura: "No le van bien las temperaturas bajas, no debe bajar de los 10ºC. En tiempo cálido, se puede mantener al exterior.        ",
            riego: "Regar cada 15 días hasta que el agua salga por los agujeros de drenaje de la maceta y no volverla a regar hasta que el sustrato esté seco al tacto y también en función de la temperatura exterior. Aunque admiten más agua que otras suculentas, cuidado con pasarnos porque podríamos tener problemas de pudrición."
        },
        img: "https://images.unsplash.com/photo-1599463098641-ca3a2609990d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        id: 3,
        nombre : "Calathea makoyana",
        tipo: "Interior",
        descripcion: "Es conocida por el nombre vulgar de Calatea. Son plantas tropicales originarias de Brasil que no superan el medio metro de altura. Se utilizan como plantas de interior por sus atractivas hojas de forma oval y unos 20 cm de longitud; en su superficie presentan color verde claro con manchas de verde oscuro y finas líneas en forma de V, mientras que en el envés son de color púrpura rosado. Tienen la particularidad de que por la noche se suelen poner en posición vertical para volver a una posición horizontal al salir el sol. Las flores son insignificantes desde el punto de vista ornamental.",
        cuidados: {
            exposicion : "Necesitan una exposición de sombra",
            temperatura: "medias anuales de 15-21 ºC.",
            riego: "Abundantemente con agua en primavera y verano. Si el calor sube por encima de los 23 ºC conviene rociar la planta a diario y poner bajo la maceta grava húmeda en un plato. En invierno regar menos esperando que se seque la superficie de la tierra entre riegos."
        },
        img: "https://images.unsplash.com/photo-1597306200021-f8e16b12fb45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        id: 4,
        nombre : "Aglaonema Spotted Star",
        tipo: "Interior",
        descripcion: "Procedente de las selvas tropicales del sur de Asia, se caracteriza por una gran resistencia para sobrevivir en lugares poco luminosos lo que ha hecho de la aglaonema adquiera un espacio importante como planta de interior resistente y fácil de cuidar.",
        cuidados: {
            exposicion : "La luminosidad no es una de las exigencias, pero siempre que reciba mayor luz indirecta crecerá más y le saldrán en sus hojas los tonos mas vivos.",
            temperatura: "La ideal sería entre los 15 -25ºC ",
            riego: "Cuidado siempre de los encharcamientos. La mejor manera de saber cuándo es momento de volver a regar es tocando el sustrato. Dejar secar completamente el sustrato antes de volver a regar."
        },
        img: "https://images.unsplash.com/photo-1620803113545-8cd9d55c4a31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        id: 5,
        nombre : "Ficus lyrata",
        tipo: "Interior",
        descripcion: "Es una planta tropical procedente de África perfecta para interiores. Su nombre es un homenaje a la lira ya que sus hojas tienen la forma de ese instrumento de cuerda. Aunque también se la conoce como higuera de hojas de violín, árbol lira o ficus lirado.",
        cuidados: {
            exposicion : "Le gustan los espacios luminosos pero no tolera la luz directa.",
            temperatura: "Es una planta de interior sensible al frío, deberás controlar que la temperatura no sea inferior a los 15º Centígrados.",
            riego: "Durante el invierno, puedes regarla una vez a la semana y aumentar la frecuencia en verano (2 ó 3 veces). Eso sí, vigila que nunca se encharquen sus raíces o morirá (así que mejor que se seque a que se ahogue)."
        },
        img: "https://images.unsplash.com/photo-1596547612397-1432a7a7d37d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        id: 6,
        nombre : "Scindapsus picuts",
        tipo: "Interior",
        descripcion: "El Scindapsus pictus es una planta de interior muy apreciada, y con razón. Su naturaleza enredadera la hace una opción excelente para los que buscan una planta colgante, mientras que sus hojas suaves, con manchas verdes plateadas, están destinadas a llamar la atención. El cuidado del poto plateado es muy sencillo e incluso los principiantes pueden cultivar esta especie.",
        cuidados: {
            exposicion : "Luz indirecta",
            temperatura: "Intentar mantener la planta alejada del frío para evitar que se dañe. No tolera en absoluto las heladas, se recomiendan una temperatura mínima de 15 °C.",
            riego: "Hay que vigilar la tierra de la planta para saber cuándo necesita agua. Debe estar ligeramente seca en la parte superior y ligeramente húmeda en la parte inferior. Si está muy seca, has esperado demasiado; si está empapada, deberías regar menos la próxima vez."
        },
        img: "https://images.unsplash.com/photo-1603095736210-f67a2accb6d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        id: 7,
        nombre : "Arenca",
        tipo: "Interior",
        descripcion: "La palmera Areca, también llamada Dypsis lutescens, palmera bambú, palmera amarilla, palma de frutos de oro o simplemente Areca, es una planta muy popular en la decoración de interiores, ya que aporta a cualquier espacio en que se ubique ese aire tropical tan único de las palmeras. Estas plantas son también muy apreciadas por su capacidad de eliminar las toxinas del aire, por lo que resultan una de las mejores plantas de interior que se pueden tener en casa.",
        cuidados: {
            exposicion : "Soporta la luz directa, pero agradece más la semisombra.",
            temperatura: "Su temperatura óptima es de entre 18 ºC y 25 ºC.",
            riego: "Cada 2 o 3 días en los meses cálidos, y cada 10-15 días en los meses fríos. Lo importante es comprobar que el sustrato se mantenga siempre ligeramente húmedo"
        },
        img: "https://images.unsplash.com/photo-1598531403144-43fdb36c9ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        id: 8,
        nombre : "Gomero",
        tipo: "Interior",
        descripcion: "El Gomero, también conocido como Ficus elástica Robx., es una de las especies más cultivadas en el interior del hogar por su capacidad de adaptación a distintas condiciones del medio. Originario de la India, puede llegar a alcanzar hasta 30 m de altura en su estado silvestre. Se trata un árbol ramificado con follaje persistente, hojas verdes, brillantes, coriáceas y simples.",
        cuidados: {
            exposicion : "Prefiere ambientes con buena luz solar directa durante la mañana. Se adapta muy bien en lugares oscuros, pero la luz insuficiente podrá inhibir su crecimiento.",
            temperatura: "Prospera con temperaturas de 25 °C y se adapta a los 8 °C y 30 °C como máximo. Es sensible al frío y debajo de los 8 °C empieza a perder sus hojas. El calor seco y las variaciones bruscas de temperatura lo perjudican",
            riego: "Riega abundantemente en verano y cada tres días, evitando el encharcamiento. El invierno, disminuye a una vez por semana y en ambientes calefaccionados riega dos veces por semana."
        },
        img: "https://images.unsplash.com/photo-1597055181300-e3633a917c9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        id: 9,
        nombre : "Filodendro Brasil",
        tipo: "Interior",
        descripcion: "El Filodendron es un género de plantas muy extenso del que se conocen +700 especies. Es originaria de bosques de Bolivia, Brasil y México y es una planta muy resistente y decorativa. Suele cultivarse como planta trepadora o colgante, en interiores climatizados, ya que no tolera mucho frío.",
        cuidados: {
            exposicion : "Luz directa",
            temperatura: "No tolera heladas, mejor +15°C.",
            riego: "Riego semanal suele ser suficiente"
        },
        img: "https://images.unsplash.com/photo-1642511271208-1c149222e5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        id: 10,
        nombre : "Monstera",
        tipo: "Interior",
        descripcion: "La Monstera deliciosa fue una planta de interior muy popular durante los años 60 y 70, y ahora que la tendencia urban jungle está en auténtico apogeo, ha vuelto para quedarse. Sus hojas tienen el poder de infundir un aire selvático a cualquier rincón, y queda bien con todos los estilos de decoración. Es además una planta resistente y poco exigente, apta incluso para principiantes y ‘matacactus’.",
        cuidados: {
            exposicion : "Necesita un espacio con buena luz, pero en ningún caso puede recibirla directamente. También se adapta a espacios poco iluminados. Eso sí: es importante saber que, aunque lo haga, ralentizará su crecimiento.",
            temperatura: "Monstera será feliz entre los 18 y 27 ºC. Por debajo de 18 ºC el crecimiento será lento, y por debajo de 10 ºC se detendrá por completo.",
            riego: "Uno o dos riegos semanales en verano y uno cada 15 días en invierno. Pero más allá de teorías, hay una regla de oro: es imprescindible que el sustrato esté siempre seco antes de volver a regar."
        },
        img: "https://images.unsplash.com/photo-1638824192715-ab0b930b7545?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        id: 11,
        nombre : "Hoya Wayetii Tricolor",
        tipo: "Interior",
        descripcion: "La Hoya Wayetii Tricolor, también conocida como flor de cera, es una planta trepadora que también podemos disfrutar en forma de cascada si no la fijamos a ningún tutor,  de hojas alargadas, ligeramente brillantes en tonos de color verde, crema, rosa, lima y carmesí enmarcadas por márgenes de hojas ondulados oscuros y distintos. Es una variedad bastante rara dentro del género de las hoyas. La Hoya Wayetii Tricolor produce racimos de flores rosadas y perfumadas, que parecen pequeñas joyas.",
        cuidados: {
            exposicion : "Requiere estar situada en un lugar muy bien iluminado pero sin sol directo.",
            temperatura: "No resisten el frío y mucho menos las heladas; el ambiente debe ser cálido y la temperatura no bajar de los 10 ºC en invierno.",
            riego: "Le gusta la humedad ambientas y necesita un riego moderado."
        },
        img: "https://images.unsplash.com/photo-1639756533782-4876ac24941e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
    },
    {
        id: 12,
        nombre : "Ceropegia woodii / Collar de corazones",
        tipo: "",
        descripcion: "Entre las plantas colgantes que se pueden cultivar dentro de casa pocas son tan curiosas y decorativas como la Ceropegia woodii, con su cascada de collares de hojas en forma de corazón y sus extrañas flores peludas. Se trata de una vivaz suculenta nativa de las regiones del este de Sudáfrica, de fácil cuidado.",
        cuidados: {
            exposicion : "Mucha luz, fuera del sol directo",
            temperatura: "Entre 16º y 22º; no menos de 12º",
            riego: "Reduce todo lo que puedas los riegos en invierno y en verano aumenta un poco la frecuencia pero siempre dejando que la tierra se seque completamente entre riego y riego."
        },
        img: "https://images.unsplash.com/photo-1644996649410-f0b7ed45b77b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        id: 13,
        nombre : "Epiphyllum anguliger",
        tipo: "Interior",
        descripcion: "Hay muchos cactus que pueden usarse como plantas colgantes, pero el Epiphyllum anguliger es muy especial. Sus tallos son muy vistosos, y como se mantienen verdes durante mucho tiempo, la planta se ve preciosa siempre. Por eso, a menudo se utiliza para decorar el interior de los hogares, ya que además no necesita tanta luz como otros cactus.",
        cuidados: {
            exposicion : "Necesita mucha luz, pero no tiene que darle de manera directa.",
            temperatura: "Las temperaturas se han de mantener entre los 10ºC de mínima y los 25ºC de máxima, aunque puede soportar valores más altos si está en un lugar resguardado del sol.",
            riego: "Regaremos un promedio de 2 veces a la semana durante el verano, dejando secar el sustrato entre riegos."
        },
        img: "https://images.unsplash.com/photo-1638435055217-5aef25d1982b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        id: 14,
        nombre : "Filodendro",
        tipo: "Interior",
        descripcion: "El filodendro es una planta cuyo nombre proviene del griego y que significa planta que ama a los árboles. Pertenece a la familia de las Aráceas y su género cuenta con unas 120 especies que tienen origen en lugares como Colombia, Guayana o Brasil, aunque se pueden cultivar en cualquier lugar del mundo si se consiguen las condiciones idóneas para ello.",
        cuidados: {
            exposicion : "Necesita estar en un lugar muy bien iluminado pero en el que no reciba la luz del sol de forma directa. De hecho, le van muy bien las zonas algo sombrías o con luz artificial.",
            temperatura: "No tolera heladas, mejor +15°C.",
            riego: "Necesita regarse cada 4 días durante primavera y verano. Cuando llegue el otoño, ir reduciendo los riegos según dure el agua. Es bueno pulverizas las hojas cada dos días para que mantengan humedad constante."
        },
        img: "https://images.unsplash.com/photo-1644783851964-763c7119e15d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        id: 15,
        nombre : "Potus",
        tipo: "Interior",
        descripcion: "Comúnmente conocido como potos o potus, nos referimos a una planta de interior de la familia de las aráceas. Su uso es básicamente como elemento decorativo en el hogar, centros comerciales, oficinas, etc. Resulta una planta muy atractiva gracias a sus vistosas hojas verdes y amarillas de forma acorazonada.",
        cuidados: {
            exposicion : "No les sienta nada bien recibir la luz solar directamente, pero les encanta los lugares luminosos, así que hay que buscarles una zona luminosa pero que no les de el sol directamente.",
            temperatura: "Evitar temperaturas muy bajas y también muy altas. Si puede ser que esté entre los 10 y los 25 grados.",
            riego: "El riego, debe ser moderado: estaría bien regar los potos cada 10 días en invierno y cada 5 días en verano. Si lo regamos en exceso las hojas empezarán a ponerse marrones."
        },
        img: "https://images.unsplash.com/photo-1642511271389-5125b36ee485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        id: 16,
        nombre : "Helecho nido de ave",
        tipo: "",
        descripcion: "El helecho nido de ave es originario de las selvas lluviosas tropicales del norte de Australia y posee unas grandes hojas que lo convierten en una planta protagonista allí donde se coloca por su elegancia y exuberancia.",
        cuidados: {
            exposicion : "Necesita estar en un lugar luminoso, aguanta cierto grado de penumbra, pero nunca expuesta a sol directo",
            temperatura: "Temperatura ideal entre 18-25 ºC. Temperatura mínima entre 3-6 ºC",
            riego: "Los riegos han de ser regulares, evitando tanto tierras empapadas. En invierno, reduciremos el riego y dejaremos que se seque la parte superficial del sustrato."
        },
        img: "https://images.unsplash.com/photo-1636901942318-972ea62b4d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    }

];

export default PLANTS_DATA;