import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  BookOpen,
  List,
  Clock,
  Droplet,
  FilePlus,
  Scissors,
  Thermometer,
  Activity,
  Calendar,
} from "lucide-react";

const avulsionData = [
  {
    id: 1,
    title: "Qué es avulsión",
    icon: <BookOpen className="h-6 w-6 text-white" />,
    content:
      "La avulsión dental es una condición traumática en la que un diente se desprende completamente de su alvéolo, el hueso que lo sostiene en la mandíbula o maxilar. Este tipo de lesión se considera una emergencia odontológica que requiere atención inmediata para aumentar las posibilidades de conservar el diente.",
    subitems: [],
  },
  {
    id: 2,
    title: "Incidencia y prevalencia",
    icon: <List className="h-6 w-6 text-white" />,
    content:
      "La avulsión de los dientes permanentes se observa entre el 0.5 y el 16% de todas las lesiones dentales y en la dentición primaria, la avulsión representa entre el 7% y el 13% de todas las lesiones dentales traumáticas. La mayor incidencia de la avulsión dental se evidencia entre los 7 y los 12 años, considerándose como el tipo de lesión dental más común en menores de 15 años debido a la poca resistencia que ofrece el hueso alveolar ante fuerzas extrusivas.",
    subitems: [],
  },
  {
    id: 3,
    title: "Diagnóstico y pronóstico",
    icon: <Activity className="h-6 w-6 text-white" />,
    content: "",
    subitems: [
      {
        id: "3.1",
        title: "Diagnóstico",
        content:
          "Se debe examinar con cuidado el paciente ya que hay otro tipo de lesiones asociadas, como fractura de la pared alveolar y lesiones en tejidos blandos. \n\nDurante el examen clínico se debe valorar: \n\n* Condiciones periodontales \n* Integridad del diente avulsionado \n* Contraindicaciones ortodónticas (Ej: apiñamiento) \n* Grado de desarrollo radicular \n\nEl examen clínico se puede complementar con el examen radiográfico, sin embargo, la radiografía no es fundamental, y por ella no se debe posponer la reimplantación inmediata del diente.",
      },
      {
        id: "3.2",
        title: "Pronóstico",
        content:
          "El pronóstico de un diente avulsionado reimplantado depende principalmente de que las células del ligamento periodontal en la superficie de la raíz se mantengan vivas. La supervivencia de estas células está relacionada con el tiempo que el diente permanece fuera de la boca y con el tipo de medio en el que se conserve mientras tanto.",
      },
    ],
  },
  {
    id: 4,
    title: "Tiempo extraoral",
    icon: <Clock className="h-6 w-6 text-white" />,
    content:
      "El factor más importante para asegurar resultados favorables después de la reimplantación de la pieza es la velocidad con la que el diente es reimplantado. El objetivo principal es prevenir la deshidratación del diente, lo cual altera el metabolismo fisiológico y la morfología de las células del ligamento periodontal. Por tanto, debe realizarse el mayor esfuerzo para reimplantar el diente dentro de los primeros 15-20 minutos. \n\nSi la raíz del diente se conserva en un medio seco, aproximadamente el 50% de las células del ligamento periodontal mueren después de 30 minutos; y transcurridos 60 minutos casi ninguna célula se encuentra viva.",
    subitems: [],
  },
  {
    id: 5,
    title: "Medio de almacenamiento",
    icon: <Droplet className="h-6 w-6 text-white" />,
    content: "Los medios de transporte sugeridos en orden de importancia son:",
    subitems: [
      {
        id: "5.1",
        title: "Leche",
        content:
          "Es un excelente medio de almacenamiento, permite conservar el diente hasta por 6 horas sin mostrar índice de reabsorción debido a su capacidad para mantener el pH y osmolaridad adecuados para las células periodontales.",
      },
      {
        id: "5.2",
        title: "Saliva",
        content:
          "Por su alta carga bacteriana no es muy idónea, además de que su hipo tonicidad disminuye la supervivencia celular. No obstante, los estudios demuestran que, si el diente se pone en el vestíbulo bucal, los fibroblastos pueden mantenerse vitales alrededor de dos horas.",
      },
      {
        id: "5.3",
        title: "Suero fisiológico",
        content:
          "Es un medio de conservación aceptable a corto plazo, manteniendo la vitalidad celular por aproximadamente 2 horas. Sin embargo, al no contener nutrientes, los resultados no mejorarán si deja el diente en este medio por más tiempo.",
      },
      {
        id: "5.4",
        title: "Agua",
        content:
          "Es el medio de transporte menos adecuado, pues al ser hipotónica desencadena lisis celular; adicionalmente, produce un efecto similar a las de un medio de almacenamiento seco, por lo que el almacenamiento en agua más de veinte minutos provoca grandes reabsorciones radiculares.",
      },
      {
        id: "5.5",
        title: "Soluciones especializadas",
        content:
          "El uso de soluciones diseñadas específicamente para preservar dientes avulsionados, por ejemplo:",
        subitems: [
          {
            id: "5.5.1",
            title: "Solución balanceada de Hank's",
            content:
              "Es el mejor medio de almacenamiento para preservar las células del ligamento periodontal, debido a su pH compatible, lo que mantiene los fibroblastos vivos por más de 96 horas y revitaliza las células del ligamento peridontal en dientes que han permanecido en medio de almacenamiento seco superior a 15 minutos.",
          },
          {
            id: "5.5.2",
            title: "Otros medios especializados",
            content:
              "Medio de cultivo de Eagles, Viaspan, Eurocollins, Custodiol HTK: Los cuales han demostrado preservar la viabilidad de las células del ligamento periodontal por periodos prolongados.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Consideraciones para reimplantación",
    icon: <FilePlus className="h-6 w-6 text-white" />,
    content: "",
    subitems: [
      {
        id: "6.1",
        title: "Ápice Cerrado",
        content: "",
        subitems: [
          {
            id: "6.1.1",
            title:
              "El diente ha sido reimplantado en el lugar del accidente antes de la llegada del paciente a la clínica",
            content:
              "1. Limpie la zona lesionada con agua, suero salino o clorhexidina.\n\n2. Verifique que el diente está bien posicionado clínica y radiográficamente.\n\n3. Mantenga el diente/los dientes en su lugar (excepto cuando el diente está mal posicionado; en este caso la mal posición se debe corregir usando presión digital ligera).\n\n4. Administre anestesia local, si es que es necesario, preferiblemente sin vasoconstrictor.\n\n5. Si el diente o los dientes han sido reimplantados en un alveolo incorrecto o están rotados, considere reposicionar el diente/los dientes a la posición correcta hasta 48 horas después del accidente.\n\n6. Realizar la ferulización correspondiente.\n\n7. Suture las laceraciones gingivales si es que están presentes.\n\n8. Inicie el tratamiento de conductos radiculares dentro de las 2 semanas posteriores al reimplante.\n\n9. Administre antibióticos sistémicos.\n\n10. Compruebe el estado de la vacuna antitetánica.\n\n11. Dar las instrucciones post operatorias.\n\n12. Seguimiento.",
          },
          {
            id: "6.1.2",
            title:
              "El diente ha sido mantenido en un medio de almacenamiento fisiológico o en condiciones no fisiológicas, con un tiempo extraoral en seco menor a 60 minutos",
            content:
              "1. Si hay contaminación visible, enjuague la superficie radicular con un chorro de suero o medio de osmolaridad equilibrada para eliminar los residuos más grandes.\n\n2. Examine el diente avulsionado en busca de restos superficiales. Remueva cualquier resto que quede agitando el diente en el medio de almacenaje. Como alternativa, puede usar un chorro de suero para limpiar cuidadosamente la superficie.\n\n3. Mantenga o ponga el diente en solución de almacenaje mientras se realiza la historia clínica, se examina al paciente clínicamente y radiográfica y se prepara al paciente para el reimplante.\n\n4. Administre anestesia local, preferiblemente sin vasoconstrictor.\n\n5. Irrigue el alveolo con suero salino estéril.\n\n6. Examine el alveolo. Si hay una fractura de la pared alveolar, reposicione el fragmento en su posición original mediante un instrumento adecuado.\n\n7. La eliminación del coágulo sanguíneo con un chorro de suero ayudará a reposicionar mejor el diente.\n\n8. Reimplante el diente lentamente mediante presión digital ligera. No se debe usar fuerza excesiva para reimplantar el diente en su posición original.\n\n9. Verifique que la posición del diente reimplantado es correcta clínicamente y radiográfica.\n\n10. Realizar la ferulización correspondiente.\n\n11. En el caso de que haya laceraciones gingivales se deben suturar.\n\n12. Inicie el tratamiento de conductos radiculares antes de las 2 semanas después del reimplante.\n\n13. Administre antibióticos sistémicos.\n\n14. Compruebe el estado de la vacuna antitetánica.\n\n15. Dar las instrucciones post operatorias.\n\n16. Seguimiento.",
          },
          {
            id: "6.1.3",
            title: "Tiempo extraoral mayor a 60 minutos",
            content:
              "1. Elimine los restos superficiales y la contaminación visible agitando el diente en medio fisiológico de almacenamiento, o con la ayuda de una gasa humedecida en suero salino. El diente debe ser mantenido en medio de almacenaje mientras se realiza la historia clínica, se examina a paciente clínicamente y radiográfica y se prepara al paciente para el reimplante.\n\n2. Administre anestesia local, preferiblemente sin vasoconstrictor.\n\n3. Irrigue el alveolo con suero salino estéril.\n\n4. Examine el alveolo. Elimine el coágulo si es preciso. Si hay una fractura de la pared alveolar, reposicione el fragmento en su posición original mediante un instrumento adecuado.\n\n5. Reimplante el diente lentamente mediante presión digital ligera. El diente no debe ser reimplantado a la fuerza.\n\n6. Verifique que la posición del diente reimplantado es correcta clínicamente y radiográfica.\n\n7. Realizar la ferulización correspondiente.\n\n8. En el caso de que haya laceraciones gingivales se deben suturar.\n\n9. Inicie el tratamiento de conductos radiculares antes de las 2 semanas después del reimplante.\n\n10. Administre antibióticos sistémicos.\n\n11. Compruebe el estado de la vacuna antitetánica.\n\n12. Dar las instrucciones post operatorias.\n\n13. Seguimiento.\n\nEl reimplante tardío tiene mal pronóstico a largo plazo. El ligamento periodontal estará necrótico y no se espera que se regenere. El resultado esperado es la anquilosis (reabsorción por reemplazo). El objetivo del reimplante, en estos casos, es restaurar, al menos de forma temporal, la estética y la función a la vez que se mantiene el contorno del hueso alveolar, la anchura y la altura.",
          },
        ],
      },
      {
        id: "6.2",
        title: "Ápice abierto",
        content: "",
        subitems: [
          {
            id: "6.2.1",
            title:
              "El diente ha sido reimplantado antes de la llegada del paciente a la clínica",
            content:
              "1. Limpie el área con agua, suero o clorhexidina.\n\n2. Verifique que la posición del diente reimplantado es correcta radiográfica y clínicamente.\n\n3. Deje el diente en el maxilar (con excepción de que esté mal posicionado; la malposición debe ser corregida usando presión digital ligera).\n\n4. Administre anestesia local, si es necesario, preferiblemente sin vasoconstrictor.\n\n5. Si el diente o dientes fueron reimplantados en un alveolo incorrecto o rotados, considere reposicionar el diente/s en su localización correcta hasta 48 horas después del traumatismo.\n\n6. Realizar la ferulización correspondiente.\n\n7. En el caso de que haya laceraciones gingivales se deben suturar.\n\n8. La revascularización pulpar, que puede conllevar el desarrollo futuro radicular, es el objetivo de reimplantar dientes inmaduros en niños. El riesgo de reabsorción radicular relacionada con infección (inflamatoria) debe ser sopesado frente a las posibilidades de revascularización. Este tipo de reabsorción es muy rápida en niños. Si la revascularización espontánea no ocurre, se debe iniciar la apicoformación, la revascularización/revitalización o el tratamiento de conductos radiculares tan pronto como se identifique la necrosis y la infección.\n\n9. Administre antibióticos sistémicos.\n\n10. Compruebe el estado de la vacuna antitetánica.\n\n11. Dar las instrucciones post operatorias.\n\n12. Seguimiento.\n\nEn los dientes inmaduros con ápices abiertos existe un potencial de curación espontánea en forma de tejido conectivo con un aporte vascular. Esto permite la continuación del desarrollo radicular y su maduración. Por lo tanto, el tratamiento endodóntico no debe ser iniciado a no ser que haya signos definitivos de necrosis pulpar e infección del sistema de conductos radiculares durante las visitas de seguimiento.",
          },
          {
            id: "6.2.2",
            title:
              "El diente se ha mantenido en un medio de almacenaje fisiológico o en condiciones no fisiológicas, y el tiempo extraoral ha sido menor a 60 minutos",
            content:
              "1. Compruebe el diente avulsionado y elimine los restos superficiales agitándolo cuidadosamente en el medio de almacenaje. Como alternativa, use un chorro de suero salino o medio fisiológico para enjuagar la superficie.\n\n2. Coloque o mantenga el diente en medio de almacenaje mientras se realiza la historia clínica, se examina al paciente clínica y radiográficamente y se prepara al paciente para el reimplante.\n\n3. Administre anestesia local, preferiblemente sin vasoconstrictor.\n\n4. Irrigue el alveolo con suero salino estéril.\n\n5. Examine el alveolo. Si es necesario, elimine el coágulo. Si hay fractura de la pared alveolar, reposicione el fragmento fracturado con un instrumento adecuado.\n\n6. Reimplante el diente lentamente con presión digital ligera.\n\n7. Verifique que la posición del diente reimplantado es correcta tanto clínica como radiográficamente.\n\n8. Realizar la ferulización correspondiente.\n\n9. En el caso de que haya laceraciones gingivales se deben suturar.\n\n10. La revascularización pulpar, que puede conllevar el desarrollo futuro radicular, es el objetivo de reimplantar dientes inmaduros en niños. El riesgo de reabsorción radicular relacionada con infección (inflamatoria) debe ser sopesado frente a las posibilidades de revascularización. Este tipo de reabsorción es muy rápida en niños. Si la revascularización espontánea no ocurre, se debe iniciar la apicoformación, la revascularización/revitalización o el tratamiento de conductos radiculares tan pronto como se identifique la necrosis y la infección.\n\n11. Administre antibióticos sistémicos.\n\n12. Compruebe el estado de la vacuna antitetánica.\n\n13. Dar las instrucciones post operatorias.\n\n14. Seguimiento.",
          },
          {
            id: "6.2.3",
            title: "Tiempo extraoral mayor a 60 minutos",
            content:
              "1. Compruebe el diente avulsionado y elimine los restos de la superficie agitándolo ligeramente en el medio de almacenaje. También puede utilizar un chorro de suero salino para limpiar la superficie.\n\n2. Coloque o mantenga el diente en medio de almacenaje mientras se realiza la historia clínica, se examina al paciente clínica y radiográficamente y se prepara al paciente para el reimplante.\n\n3. Administre anestesia local, preferiblemente sin vasoconstrictor.\n\n4. Irrigue el alveolo con suero salino estéril.\n\n5. Examine el alveolo. Si es necesario, elimine el coágulo. Si hay fractura de la pared alveolar, reposicione el fragmento fracturado con un instrumento adecuado.\n\n6. Reimplante el diente lentamente con presión digital ligera.\n\n7. Verifique que la posición del diente reimplantado es correcta tanto clínica como radiográficamente.\n\n8. Realizar la ferulización correspondiente.\n\n9. En el caso de que haya laceraciones gingivales se deben suturar.\n\n10. La revascularización pulpar, que puede conllevar el desarrollo futuro radicular, es el objetivo de reimplantar dientes inmaduros en niños. El riesgo de reabsorción radicular relacionada con infección (inflamatoria) debe ser sopesado frente a las posibilidades de revascularización. Este tipo de reabsorción es muy rápida en niños. Si la revascularización espontánea no ocurre, se debe iniciar la apicoformación, la revascularización/revitalización, o el tratamiento de conductos radiculares tan pronto como se identifique la necrosis y la infección.\n\n11. Administre antibióticos sistémicos.\n\n12. Compruebe el estado de la vacuna antitetánica.\n\n13. Dar las instrucciones post operatorias.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Ferulización",
    icon: <Scissors className="h-6 w-6 text-white" />,
    content:
      "La evidencia actual recomienda que los dientes reimplantados se estabilicen mediante ferulizaciones pasivas, flexibles y de corta duración, ya que se ha demostrado que permitir cierto grado de movilidad fisiológica durante la cicatrización estimula una mejor curación periodontal y pulpar, además de disminuir la incidencia de anquilosis. Para este propósito, se aconseja utilizar un alambre de acero inoxidable con un diámetro máximo de 0.016'' (0.4 mm) o hilo de pescar de nylon de 0.13 a 0.25 mm, adherido a los dientes adyacentes mediante resina compuesta, ácido grabador y adhesivo. Esta férula debe colocarse sobre las superficies vestibulares para evitar interferencias oclusales y permitir acceso lingual o palatino para tratamiento endodóntico. Además, facilita una buena higiene oral y es bien tolerada por los pacientes.\n\nEl periodo ideal de ferulización es de 7 a 14 días, dependiendo de la longitud radicular y grado de maduración del diente reimplantado. Se debe evitar que la férula genere movimientos ortodónticos o dañe los tejidos gingivales. Una semana suele ser suficiente para estabilizar el diente y favorecer el soporte periodontal; sin embargo, si persiste movilidad o existe riesgo de trauma por los dientes antagonistas, se puede prolongar una semana adicional, previa valoración de la oclusión tras retirar la férula.\n\nLa excepción a este protocolo ocurre en los casos en que la avulsión se asocia a fracturas alveolares o maxilares, donde se indica una ferulización más rígida, mantenida por un periodo de cuatro semanas. Tras la colocación de cualquier tipo de férula, es imprescindible realizar un control radiográfico para verificar la correcta posición del diente y disponer de una referencia preoperatoria para el seguimiento. Finalmente, es fundamental mantener los materiales adhesivos alejados de los márgenes gingivales e interproximales para evitar la retención de placa y posibles infecciones, y advertir tanto al paciente como a sus padres que el diente lesionado puede presentar movilidad transitoria tras la retirada de la férula.",
    subitems: [],
  },
  {
    id: 8,
    title: "Manejo analgésico y antibiótico",
    icon: <Thermometer className="h-6 w-6 text-white" />,
    content:
      "El uso de antibióticos sistémicos tras una avulsión y reimplante dental está ampliamente recomendado para prevenir infecciones locales y reducir el riesgo de reabsorción radicular inflamatoria. Esta cobertura antimicrobiana resulta especialmente importante en pacientes con condiciones médicas predisponentes o lesiones concomitantes que incrementen el riesgo de infección. La instauración de terapia antibiótica sistémica debe realizarse en el momento de la reimplantación y antes del tratamiento endodóntico, ya que su eficacia se ha asociado a la prevención de la invasión bacteriana en la pulpa necrótica y la subsiguiente reabsorción inflamatoria.\n\nLa amoxicilina y la penicilina continúan siendo los fármacos de primera elección por su efectividad frente a la flora oral y su baja incidencia de efectos secundarios. En pacientes alérgicos a la penicilina se deberán considerar antibióticos alternativos. La doxiciclina, en particular, ha demostrado beneficios adicionales por sus propiedades antimicrobianas, antiinflamatorias y antireabsortivas, ya que disminuye la movilidad de los osteoclastos y la actividad de las colagenasas, contribuyendo a reducir la reabsorción radicular. No obstante, antes de su administración en pacientes pediátricos debe valorarse el riesgo de pigmentación dental, ya que el uso de tetraciclinas, incluida la doxiciclina, no se recomienda en menores de 12 años.\n\nAdemás de la terapia antibiótica, es fundamental evaluar y cubrir las necesidades analgésicas del paciente mediante antiinflamatorios no esteroideos (AINEs), ajustando la dosis según la edad y peso corporal. Se debe remitir al médico tratante para la aplicación de la vacuna antitetánica en las primeras 48 horas tras el trauma, especialmente si existió contaminación de la herida o del diente. Durante la fase de cicatrización, es indispensable controlar la carga bacteriana del surco gingival mediante el uso de enjuagues con clorhexidina durante un periodo de 7 a 10 días, complementado con una adecuada higiene oral.",
    subitems: [],
  },
  {
    id: 9,
    title: "Tratamiento endodóntico",
    icon: <FilePlus className="h-6 w-6 text-white" />,
    content: "",
    subitems: [
      {
        id: "9.1",
        title: "Ápice cerrado",
        content:
          "Cuando está indicado el tratamiento endodóntico en dientes con ápice cerrado, este debe iniciarse dentro de las dos semanas posteriores al reimplante. Como medicación intraconducto, se recomienda el uso de hidróxido de calcio, idealmente por un periodo inicial de 10 días a un mes, según la evolución clínica y radiográfica. En casos donde el tratamiento se inicie después de este periodo o se detecten signos de reabsorción radicular, se debe instaurar una terapia prolongada con hidróxido de calcio, cambiándolo cada tres meses durante un periodo de 6 a 24 meses, evitando recambios más frecuentes para no afectar la viabilidad celular de la superficie radicular.\n\nLa obturación definitiva del conducto se realiza una vez que se evidencia normalidad radiográfica del espacio del ligamento periodontal. Alternativamente, pueden emplearse medicamentos intraconducto como Ledermix (mezcla de tetraciclina y corticoesteroides), que ofrece efectos antiinflamatorios y una adecuada difusión por los túbulos dentinales. Además, estudios recientes sugieren que combinaciones de Ledermix, Emdogain, adrenolato y calcitonina podrían tener un efecto sinérgico en la disminución de la reabsorción externa tras avulsión dental.\n\nEs importante colocar cuidadosamente estos medicamentos en el sistema de conductos, evitando su aplicación en la corona, debido al riesgo de decoloración dental que puede generar insatisfacción estética en el paciente.",
      },
      {
        id: "9.2",
        title: "Ápice abierto",
        content:
          "En dientes reimplantados con ápices abiertos existe la posibilidad de revascularización del espacio pulpar, por lo que se debe evitar el tratamiento endodóntico inicial y monitorear estrechamente la evolución clínica y radiográfica en controles periódicos cada 3 a 4 semanas.\n\nEl objetivo es favorecer el restablecimiento del flujo sanguíneo y permitir la continuación del desarrollo radicular. Sin embargo, debido a la amplitud de los túbulos dentinales en estos casos, la infección pulpar puede provocar una rápida reabsorción radicular inflamatoria externa, especialmente en niños, por lo que al primer signo clínico o radiográfico de necrosis o infección se debe instaurar inmediatamente el tratamiento endodóntico correspondiente, ya sea mediante apexificación, apicoformación o revascularización del espacio pulpar. En aquellos casos donde se prevea anquilosis y futura necesidad de decoronación, debe seleccionarse cuidadosamente el material intraconducto y su tiempo de permanencia. Adicionalmente, se ha sugerido que la aplicación tópica de minociclina en el ápice radicular previa a la reimplantación podría favorecer la revascularización al reducir la carga bacteriana local.",
      },
    ],
  },
  {
    id: 10,
    title: "Complicaciones",
    icon: <Activity className="h-6 w-6 text-white" />,
    content:
      "Reabsorción radicular:\n\nLas complicaciones del reimplante son frecuentemente las reabsorciones. La reabsorción dentaria es la disolución patológica o fisiológica de los tejidos mineralizados del diente (dentina, cemento y hueso alveolar) por acción de dentinoclastos y osteoclastos. En dientes temporales es fisiológica, mientras que en dientes permanentes se considera patológica, ya que bajo condiciones normales estos no se reabsorben gracias a las propiedades protectoras del pre-cemento y la pre-dentina. Si estos tejidos se dañan por trauma o inflamación, se activa una reabsorción inflamatoria destructiva, visible radiográficamente como radiolucidez. La cicatrización dependerá de la extensión del daño: si es limitada, puede regenerarse cemento y ligamento periodontal (cicatrización favorable); si es extensa, ocurre reemplazo óseo (anquilosis), considerado una cicatrización desfavorable.",
    subitems: [
      {
        id: "10.1",
        title: "Reabsorción superficial o transitoria",
        content:
          "Son cavidades pequeñas sobre el cemento y la dentina, no visibles radiográficamente; se reparan por reposición de cemento nuevo que representa una cicatrización.",
      },
      {
        id: "10.2",
        title: "Reabsorción por reemplazo",
        content:
          "La reabsorción por reemplazo ocurre cuando el hueso se fusiona con la raíz dental, sustituyéndola progresivamente, a consecuencia del daño al ligamento periodontal tras un trauma. En niños, este proceso avanza rápidamente, mientras que en adultos es más lento. Para retrasarlo, se recomienda conservar el diente en solución de fluoruro si han pasado más de dos horas desde la avulsión, y reimplantarlo tras lavado con suero fisiológico.\n\nEl diagnóstico es clínico y radiográfico, caracterizado por inmovilidad, sonido sordo a la percusión, infraoclusión y pérdida del espacio del ligamento periodontal. El manejo incluye endodoncia con hidróxido de calcio en adultos y, en niños, control de la infraoclusión o exodoncia en casos severos, pudiendo considerarse reimplante con Emdogain o sumersión radicular para preservar la estética.",
      },
      {
        id: "10.3",
        title: "Reabsorción inflamatoria",
        content:
          "La reabsorción radicular inflamatoria ocurre como respuesta a una pulpa necrótica infectada y al daño del ligamento periodontal tras una avulsión, favorecida en jóvenes por la amplitud de los túbulos dentinales.\n\nSu tratamiento consiste en realizar endodoncia, dejando hidróxido de calcio por al menos 21 días hasta controlar la reabsorción, tras lo cual el defecto se repara con cemento o hueso. Radiográficamente se manifiesta como pérdida de sustancia dental y una zona radiolúcida persistente en el hueso alveolar.",
      },
    ],
  },

  // Ítem 11: Seguimiento
  {
    id: 11,
    title: "Seguimiento",
    icon: <Calendar className="h-6 w-6 text-white" />,
    content:
      "Las evaluaciones de seguimiento deben realizarse a los tres y seis meses, y posteriormente de forma anual durante cinco años. Ante la detección de reemplazo óseo, será necesario reconsiderar el plan de tratamiento. En caso de reabsorción radicular inflamatoria, se puede intentar detener el proceso mediante un retratamiento endodóntico convencional para desinfectar nuevamente el conducto radicular. Además, es fundamental monitorear los dientes adyacentes al avulsionado, ya que pueden desarrollar alteraciones patológicas incluso tiempo después del trauma; sus hallazgos deben compararse con los registros obtenidos en la consulta inicial.",
    subitems: [],
  },
];

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});

  const handleCardClick = (itemId) => {
    setSelectedItem(itemId === selectedItem ? null : itemId);
    // Reset expanded subitems when changing main item
    setExpandedItems({});
  };

  const toggleSubitem = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectedItemData = avulsionData.find(
    (item) => item.id === selectedItem
  );

  const renderSubitems = (subitems, level = 0) => {
    return subitems.map((subitem) => (
      <div key={subitem.id} className={`mt-4 ${level > 0 ? "ml-4" : ""}`}>
        <div
          className={`p-3 rounded-md cursor-pointer flex justify-between items-center ${
            subitem.subitems?.length
              ? "bg-blue-50 border-l-4 border-blue-500"
              : "bg-gray-50 border-l-4 border-gray-300"
          }`}
          onClick={() => toggleSubitem(subitem.id)}
        >
          <h3 className="text-lg font-medium">
            {subitem.id} {subitem.title}
          </h3>
          {subitem.subitems?.length > 0 &&
            (expandedItems[subitem.id] ? (
              <ChevronDown className="h-5 w-5 text-blue-500" />
            ) : (
              <ChevronRight className="h-5 w-5 text-blue-500" />
            ))}
        </div>

        {/* Content */}
        {(expandedItems[subitem.id] || !subitem.subitems?.length) && (
          <div className="p-4 bg-white rounded-b-md shadow-sm">
            {subitem.content.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="mb-3">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Nested subitems */}
        {expandedItems[subitem.id] &&
          subitem.subitems?.length > 0 &&
          renderSubitems(subitem.subitems, level + 1)}
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <header className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 rounded-lg shadow-lg text-white text-center mb-8">
          <div className="flex justify-center items-center mb-3">
            <BookOpen className="h-12 w-12 mr-3" />
            <h1 className="text-3xl font-bold">
              Material Educativo sobre Avulsión Dental
            </h1>
          </div>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Guía completa para el manejo de emergencias de avulsión dental según
            protocolos clínicos actualizados
          </p>
        </header>

        {selectedItem ? (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 transition-all duration-300">
            <button
              onClick={() => setSelectedItem(null)}
              className="flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Volver a todas las categorías
            </button>

            <h2 className="text-2xl font-bold mb-4 text-blue-700 border-b-2 border-blue-200 pb-2">
              {selectedItemData.id}. {selectedItemData.title}
            </h2>

            {selectedItemData.content && (
              <div className="mb-6 text-gray-700">
                {selectedItemData.content
                  .split("\n\n")
                  .map((paragraph, idx) => (
                    <p key={idx} className="mb-3">
                      {paragraph}
                    </p>
                  ))}
              </div>
            )}

            {selectedItemData.subitems?.length > 0 && (
              <div className="mt-6">
                {renderSubitems(selectedItemData.subitems)}
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avulsionData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 transition-transform"
                onClick={() => handleCardClick(item.id)}
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-4 text-white flex items-center">
                  <div className="bg-blue-600 p-2 rounded-full mr-3">
                    {item.icon}
                  </div>
                  <h2 className="font-bold text-xl">
                    {item.id}. {item.title}
                  </h2>
                </div>
                <div className="p-5">
                  <p className="text-gray-600">
                    {item.content
                      ? item.content.length > 120
                        ? `${item.content.substring(0, 120)}...`
                        : item.content
                      : `Información detallada sobre ${item.title.toLowerCase()}`}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-blue-500">
                      {item.subitems?.length
                        ? `${item.subitems.length} subtemas`
                        : "Ver detalles"}
                    </span>
                    <ChevronRight className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>
            © 2025 Material Educativo Dental • Basado en protocolos clínicos
            actualizados
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
