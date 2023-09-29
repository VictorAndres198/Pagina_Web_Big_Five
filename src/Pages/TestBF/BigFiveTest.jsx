import React, { useState,useEffect } from 'react';
import '../../styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function BigFiveTest() {
  // Define las preguntas y opciones de respuesta de manera programática
  const bigfiveQuestions = [
    // !Neuroticismo
    {
      id: 'AnsiedadP1',
      question: 'Me suelo preocupar por las cosas',
      group: 'Neuroticismo',
    },
    {
      id: 'AnsiedadP2',
      question: 'Me estreso fácilmente',
      group: 'Neuroticismo',
    },
    {
      id: 'IraP1',
      question: 'Me molesto fácilmente',
      group: 'Neuroticismo',
    },
    {
      id: 'IraP2',
      question: 'Suelo perder mi temperamento',
      group: 'Neuroticismo',
    },
    {
      id: 'DepresionP1',
      question: 'A menudo me siento triste',
      group: 'Neuroticismo',
    },
    {
      id: 'DepresionP2',
      question: 'Me desagrado',
      group: 'Neuroticismo',
    },
    {
      id: 'AutoconcienciaP1',
      question: 'Me resulta difícil acercarme a los demás',
      group: 'Neuroticismo',
    },
    {
      id: 'AutoconcienciaP2',
      question: 'Soy fácilmente intimidado',
      group: 'Neuroticismo',
    },
    {
      id: 'InmoderacionP1',
      question: 'Rara vez me dejo llevar',
      group: 'Neuroticismo',
    },
    {
      id: 'InmoderacionP2',
      question: 'Puedo controlar mis antojos',
      group: 'Neuroticismo',
    },
    {
      id: 'VulnerabilidadP1',
      question: 'Me mantengo calmado bajo presión',
      group: 'Neuroticismo',
    },
    {
      id: 'VulnerabilidadP2',
      question: 'Estoy calmado incluso en momentos de tensión',
      group: 'Neuroticismo',
    },
    // !Extraversion
    {
      id: 'AmabilidadP1',
      question: 'Hago amigos fácilmente',
      group: 'Extraversion',
    },
    {
      id: 'AmabilidadP2',
      question: 'Me encuentro cómodo en compañia de otros',
      group: 'Extraversion',
    },
    {
      id: 'SociabilidadP1',
      question: 'Me gustan las fiestas',
      group: 'Extraversion',
    },
    {
      id: 'SociabilidadP2',
      question: 'Evito a la multitud',
      group: 'Extraversion',
    },
    {
      id: 'AsertividadP1',
      question: 'Tomo el control en situaciones sociales',
      group: 'Extraversion',
    },
    {
      id: 'AsertividadP2',
      question: 'Trato de liderar a los demás',
      group: 'Extraversion',
    },
    {
      id: 'NivelActividadP1',
      question: 'Estoy siempre ocupado',
      group: 'Extraversion',
    },
    {
      id: 'NivelActividadP2',
      question: 'Siempre estoy haciendo cosas',
      group: 'Extraversion',
    },
    {
      id: 'BusquedaEmocionP1',
      question: 'Me gustan las actividades emocionantes',
      group: 'Extraversion',
    },
    {
      id: 'BusquedaEmocionP2',
      question: 'Busco la aventura',
      group: 'Extraversion',
    },
    {
      id: 'AlegriaP1',
      question: 'Me divierto mucho',
      group: 'Extraversion',
    },
    {
      id: 'AlegriaP2',
      question: 'Amo la vida',
      group: 'Extraversion',
    },
    // !Apertura a la Experiencia
    {
      id: 'ImaginacionP1',
      question: 'Tengo una vivida imaginación',
      group: 'Apertura',
    },
    {
      id: 'ImaginacionP2',
      question: 'Amo soñar despierto',
      group: 'Apertura',
    },
    {
      id: 'InteresArtisticoP1',
      question: 'Creo en la importancia del arte',
      group: 'Apertura',
    },
    {
      id: 'InteresArtisticoP2',
      question: 'No me gusta el arte',
      group: 'Apertura',
    },
    {
      id: 'EmocionalidadP1',
      question: 'Experimento mis emociones intensamente',
      group: 'Apertura',
    },
    {
      id: 'EmocionalidadP2',
      question: 'No me afectan facilmente mis emociones',
      group: 'Apertura',
    },
    {
      id: 'AventuraP1',
      question: 'Prefiero las cosas que ya conozco',
      group: 'Apertura',
    },
    {
      id: 'AventuraP2',
      question: 'No me gusta la idea del cambio',
      group: 'Apertura',
    },
    {
      id: 'IntelectoP1',
      question: 'Evito las discusiones filosóficas',
      group: 'Apertura',
    },
    {
      id: 'IntelectoP2',
      question: 'No me interesan las discusiones teóricas',
      group: 'Apertura',
    },
    {
      id: 'LiberalismoP1',
      question: 'Voto por candidatos politicamente liberales',
      group: 'Apertura',
    },
    {
      id: 'LiberalismoP2',
      question: 'Creo en una religión verdadera',
      group: 'Apertura',
    },
    //! Agradabilidad
    {
      id: 'ConfianzaP1',
      question: 'Confio en los demás',
      group: 'Agradabilidad',
    },
    {
      id: 'ConfianzaP2',
      question: 'Creo en las buenas intenciones de los demás',
      group: 'Agradabilidad',
    },
    {
      id: 'MoralidadP1',
      question: 'Hago trampa para ganar ventaja',
      group: 'Agradabilidad',
    },
    {
      id: 'MoralidadP2',
      question: 'Me aprovecho de los demás',
      group: 'Agradabilidad',
    },
    {
      id: 'AltruismoP1',
      question: 'Me gusta ayudar a los demás',
      group: 'Agradabilidad',
    },
    {
      id: 'AltruismoP2',
      question: 'Me preocupo por los demás',
      group: 'Agradabilidad',
    },
    {
      id: 'CooperacionP1',
      question: 'Insulto a la gente',
      group: 'Agradabilidad',
    },
    {
      id: 'CooperacionP2',
      question: 'Ejerzo venganza sobre los demás',
      group: 'Agradabilidad',
    },
    {
      id: 'ModestiaP1',
      question: 'Creo que soy mejor que los demás',
      group: 'Agradabilidad',
    },
    {
      id: 'ModestiaP2',
      question: 'Pienso muy bien de mi mismo',
      group: 'Agradabilidad',
    },
    {
      id: 'SimpatiaP1',
      question: 'Simpatizo con las personas sin hogar',
      group: 'Agradabilidad',
    },
    {
      id: 'SimpatiaP2',
      question: 'Siento simpatia por aquellos que están en peor situación que yo',
      group: 'Agradabilidad',
    },
    //! Diligencia
    {
      id: 'AutoeficaciaP1',
      question: 'Me encargo de las tareas fácilmente',
      group: 'Diligencia',
    },
    {
      id: 'AutoeficaciaP2',
      question: 'Se como hacer las cosas',
      group: 'Diligencia',
    },
    {
      id: 'OrdenP1',
      question: 'Me gusta el orden',
      group: 'Diligencia',
    },
    {
      id: 'OrdenP2',
      question: 'Dejo desordenada mi habitación',
      group: 'Diligencia',
    },
    {
      id: 'ResponsabilidadP1',
      question: 'Digo la verdad',
      group: 'Diligencia',
    },
    {
      id: 'ResponsabilidadP2',
      question: 'Rompo mis promesas',
      group: 'Diligencia',
    },
    {
      id: 'LogrosP1',
      question: 'Trabajo duro',
      group: 'Diligencia',
    },
    {
      id: 'LogrosP2',
      question: 'Pongo altos estándares para mi y los demás',
      group: 'Diligencia',
    },
    {
      id: 'DisciplinaP1',
      question: 'Llevo a cabo mis planes',
      group: 'Diligencia',
    },
    {
      id: 'DisciplinaP2',
      question: 'Tengo dicultad para iniciar tareas',
      group: 'Diligencia',
    },
    {
      id: 'CautelaP1',
      question: 'Tomo decisiones precipitadas',
      group: 'Diligencia',
    },
    {
      id: 'CautelaP2',
      question: 'Actuo sin pensar',
      group: 'Diligencia',
    }
  ];

  // Define las opciones de respuesta para todas las preguntas
  const options = [
    'Totalmente de acuerdo',
    'Parcialmente de acuerdo',
    'Neutral',
    'Parcialmente en desacuerdo',
    'Totalmente en desacuerdo',
  ];

  // Define los valores asociados a las opciones de respuesta
  const optionValues = [
    4, // Totalmente de acuerdo
    3, // Parcialmente de acuerdo
    2, // Neutral
    1, // Parcialmente en desacuerdo
    0, // Totalmente en desacuerdo
  ];

  const optionValuesI = [
    0, // Totalmente de acuerdo
    1, // Parcialmente de acuerdo
    2, // Neutral
    3, // Parcialmente en desacuerdo
    4, // Totalmente en desacuerdo
  ];

  const pageSize = 3; // Cantidad de preguntas por página

  // Estado para controlar la página actual
  const [currentPage, setCurrentPage] = useState(0); // Página actual

  // Estado para almacenar las respuestas
  const [responses, setResponses] = useState({});

  // Controla si se puede avanzar
  const [canAdvance, setCanAdvance] = useState(false); 

  // Controla si se puede regresar
  const [canGoBack, setCanGoBack] = useState(false); 

  // Estado para saber si todas las preguntas han sido respondidas
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  

  // Calcular resultados por grupo
  const calculateResultsByGroup = () => {
  const resultsByGroup = {};

  bigfiveQuestions.forEach((question) => {
    const group = question.group;
    const questionId = question.id;
    const responseIndex = responses[questionId];

    if (!resultsByGroup[group]) {
      resultsByGroup[group] = 0;
    }

    if (responseIndex !== undefined) {
      resultsByGroup[group] += responseIndex + 1; // Suma +1 para que coincida con los valores (0-4)
    }
  });

  return resultsByGroup;
  };

  const calculateResultsByQuestionInGroup = (groupName) => {
  const resultsByQuestion = {};

  const groupQuestions = bigfiveQuestions.filter((question) => question.group === groupName);

  groupQuestions.forEach((question) => {
    const questionId = question.id;
    const responseIndex = responses[questionId];

    if (responseIndex !== undefined) {
      resultsByQuestion[questionId] = responseIndex + 1; // Suma +1 para que coincida con los valores (0-4)
    }
  });

  return resultsByQuestion;
  };

  // Calcular los resultados por grupo y por pregunta
  const resultsByGroup = calculateResultsByGroup();
  const resultsInNeuroticismo = calculateResultsByQuestionInGroup('Neuroticismo');
  const resultsInExtraversion = calculateResultsByQuestionInGroup('Extraversion');
  const resultsInApertura = calculateResultsByQuestionInGroup('Apertura');
  const resultsInAgradabilidad = calculateResultsByQuestionInGroup('Agradabilidad');
  const resultsInDiligencia = calculateResultsByQuestionInGroup('Diligencia');

  // Ahora puedes guardar los resultados en un formato que facilite el envío a una base de datos
  const resultsToDatabase = {
  neuroticismo: {
    total: resultsByGroup['Neuroticismo'],
    ansiedad: resultsInNeuroticismo['AnsiedadP1'] + resultsInNeuroticismo['AnsiedadP2'],
    ira: resultsInNeuroticismo['IraP1'] + resultsInNeuroticismo['IraP2'],
    depresion: resultsInNeuroticismo['DepresionP1'] + resultsInNeuroticismo['DepresionP2'],
    autoconciencia: resultsInNeuroticismo['AutoconcienciaP1'] + resultsInNeuroticismo['AutoconcienciaP2'],
    inmoderacion: resultsInNeuroticismo['InmoderacionP1'] + resultsInNeuroticismo['InmoderacionP2'],
    vulnerabilidad: resultsInNeuroticismo['VulnerabilidadP1'] + resultsInNeuroticismo['VulnerabilidadP2'],
  },

  extraversion: {
    total: resultsByGroup['Extraversion'],
    amabilidad: resultsInExtraversion['AmabilidadP1']+resultsInExtraversion['AmabilidadP2'],
    sociabilidad: resultsInExtraversion['SociabilidadP1']+resultsInExtraversion['SociabilidadP2'],
    asertividad: resultsInExtraversion['AsertividadP1']+resultsInExtraversion['AsertividadP2'],
    actividad: resultsInExtraversion['NivelActividadP1']+resultsInExtraversion['NivelActividadP2'],
    emocion: resultsInExtraversion['BusquedaEmocionP1']+resultsInExtraversion['BusquedaEmocionP2'],
    alegria: resultsInExtraversion['AlegriaP1']+resultsInExtraversion['AlegriaP2']
  },

  apertura: {
    total: resultsByGroup['Apertura'],
    imaginacion: resultsInApertura['ImaginacionP1']+resultsInApertura['ImaginacionP2'],
    arte: resultsInApertura['InteresArtisticoP1']+resultsInApertura['InteresArtisticoP2'],
    emocionalidad: resultsInApertura['EmocionalidadP1']+resultsInApertura['EmocionalidadP2'],
    aventura: resultsInApertura['AventuraP1']+resultsInApertura['AventuraP2'],
    intelecto: resultsInApertura['IntelectoP1']+resultsInApertura['IntelectoP2'],
    liberalismo: resultsInApertura['LiberalismoP1']+resultsInApertura['LiberalismoP2']
  },

  agradabilidad: {
    total: resultsByGroup['Agradabilidad'],
    confianza: resultsInAgradabilidad['ConfianzaP1']+resultsInAgradabilidad['ConfianzaP2'],
    moral: resultsInAgradabilidad['MoralidadP1']+resultsInAgradabilidad['MoralidadP2'],
    altruismo: resultsInAgradabilidad['AltruismoP1']+resultsInAgradabilidad['AltruismoP2'],
    cooperacion: resultsInAgradabilidad['CooperacionP1']+resultsInAgradabilidad['CooperacionP2'],
    modestia: resultsInAgradabilidad['ModestiaP1']+resultsInAgradabilidad['ModestiaP2'],
    simpatia: resultsInAgradabilidad['SimpatiaP1']+resultsInAgradabilidad['SimpatiaP2']
  },

  diligencia: {
    total: resultsByGroup['Diligencia'],
    autoeficacia: resultsInDiligencia['AutoeficaciaP1']+resultsInDiligencia['AutoeficaciaP2'],
    orden: resultsInDiligencia['OrdenP1']+resultsInDiligencia['OrdenP2'],
    responsabilidad: resultsInDiligencia['ResponsabilidadP1']+resultsInDiligencia['ResponsabilidadP2'],
    logros: resultsInDiligencia['LogrosP1']+resultsInDiligencia['LogrosP2'],
    disciplina: resultsInDiligencia['DisciplinaP1']+resultsInDiligencia['DisciplinaP2'],
    cautela: resultsInDiligencia['CautelaP1']+resultsInDiligencia['CautelaP2']
  }
  };
    // todo: Esto es para comprobar los puntajes, borrar despues
    // Ahora tienes un objeto `resultsToDatabase` con los resultados en un formato que puedes enviar a tu base de datos
    console.log('Resultados para la Base de Datos:', resultsToDatabase);

    // Estado para el valor visual de las opciones seleccionadas
    const [visualValues, setVisualValues] = useState({});

    // Codigo para asignar puntajes a las respuestas
    const handleResponseChange = (questionId, responseIndex) => {    
    // Verificar si la pregunta es una de las que deben invertir los valores
    if (
      //Neuroticismo
      questionId === 'InmoderacionP1' ||
      questionId === 'InmoderacionP2' ||
      questionId === 'VulnerabilidadP1' ||
      questionId === 'VulnerabilidadP2' ||
      //Extraversion
      questionId === 'SociabilidadP2' ||
      //Apertura a la experiencia
      questionId === 'InteresArtisticoP2' ||
      questionId === 'EmocionalidadP2' ||
      questionId === 'AventuraP1' ||
      questionId === 'AventuraP2' ||
      questionId === 'IntelectoP1' ||
      questionId === 'IntelectoP2' ||
      questionId === 'LiberalismoP2' ||
      //Agradabilidad o Afabilidad
      questionId === 'MoralidadP1' ||
      questionId === 'MoralidadP2' ||
      questionId === 'CooperacionP1' ||
      questionId === 'CooperacionP2' ||
      questionId === 'ModestiaP1' ||
      questionId === 'ModestiaP2' ||
      // Diligencia, Disciplia o Conciencia
      questionId === 'OrdenP2' ||
      questionId === 'ResponsabilidadP2' ||
      questionId === 'DisciplinaP2' ||
      questionId === 'CautelaP1' ||
      questionId === 'CautelaP2'
    ) {
      // Obtener el valor invertido
      const invertedValue = optionValuesI[responseIndex];
      setResponses({ ...responses, [questionId]: invertedValue });
    } else {
      // Obtener el valor asociado a la respuesta seleccionada
      const selectedValue = optionValues[responseIndex];
      // Actualizar el estado de las respuestas
      setResponses({ ...responses, [questionId]: selectedValue });
    }
      // Actualizar el estado visual para mantener el valor marcado
      setVisualValues({ ...visualValues, [questionId]: responseIndex });
    };

    // Función para calcular el porcentaje de preguntas respondidas
    const calculateProgress = () => {
      const totalQuestions = bigfiveQuestions.length;
      const answeredQuestions = Object.keys(responses).length;
      return (answeredQuestions / totalQuestions) * 100;
    };

    useEffect(() => {
    // Verificar si se han respondido todas las preguntas actuales
      const currentQuestions = bigfiveQuestions.slice(
        currentPage * pageSize,
        (currentPage + 1) * pageSize
      );

      const allAnswered = currentQuestions.every(
        (question) => responses[question.id] !== undefined
      );

      setCanAdvance(allAnswered);
      setCanGoBack(currentPage > 0);
      
      // Verificar si todas las preguntas del test han sido respondidas
      const allQuestionsAnswered = bigfiveQuestions.every(
        (question) => responses[question.id] !== undefined
      );
      
      setAllQuestionsAnswered(allQuestionsAnswered);

    }, [responses, currentPage, bigfiveQuestions]);

    const nextPage = () => {
      if (currentPage < bigfiveQuestions.length / pageSize - 1) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const prevPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const currentQuestions = bigfiveQuestions.slice(
      currentPage * pageSize,
      (currentPage + 1) * pageSize
    );

    const navigate = useNavigate();
    
    const handleFinish = () => {
      // todo: Realizar lógica necesaria antes de finalizar
      
      // Redirige a la página de resultados cuando finaliza
      navigate('/TestResultado'); 
    };

    // Renderizar el formulario del test
    return (
    <div>
      <form className="question-container">
        <ProgressBar className="progress-bar-test" animated now={calculateProgress()} />
        {currentQuestions.map((question) => (
          <div key={question.id}>
            <p className="bold-text">{question.question}</p>
            <ul className="no-bullets">
              {options.map((option, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name={question.id}
                      value={index}
                      checked={visualValues[question.id] === index}
                      onChange={() => handleResponseChange(question.id, index)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </form>
      <section className="centered-column-test">
        <Button onClick={prevPage} disabled={!canGoBack}>
          Regresar
        </Button>
        {allQuestionsAnswered ? (
          <Button onClick={handleFinish}>Finalizar</Button>
        ) : (
          <Button onClick={nextPage} disabled={!canAdvance}>
            Siguiente
          </Button>
        )}
      </section>
    </div>
    );
}

export default BigFiveTest;