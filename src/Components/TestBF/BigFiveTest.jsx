import React, { useState,useEffect } from 'react';
import '../../styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';

function BigFiveTest() {
  // Define las preguntas y opciones de respuesta de manera programática
  const bigfiveQuestions = [
    // Preguntas de Neuroticismo
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
    // Preguntas de extroversion
    {
      id: 'VulnerabilidadP2',
      question: 'Estoy calmado incluso en momentos de tensión',
      group: 'Neuroticismo',
    },
    {
      id: 'VulnerabilidadP2',
      question: 'Estoy calmado incluso en momentos de tensión',
      group: 'Neuroticismo',
    },
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

  const pageSize = 3; // Cantidad de preguntas por página

  // Estado para controlar la página actual
  const [currentPage, setCurrentPage] = useState(0); // Página actual

  // Estado para almacenar las respuestas
  const [responses, setResponses] = useState({});

  // Controla si se puede avanzar
  const [canAdvance, setCanAdvance] = useState(false); 

  // Controla si se puede regresar
  const [canGoBack, setCanGoBack] = useState(false); 

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
// todo:Agregar los demás campos, ya funciona neuroticismo
const resultsByGroup = calculateResultsByGroup();
const resultsInNeuroticism = calculateResultsByQuestionInGroup('Neuroticismo');

// Mostrar resultados por grupo
// todo: Quitar los resultados de la consola para luego mandarlo a la base de datos, ya funciona neuroticismo
console.log('Resultados por Grupo:', resultsByGroup);
// Mostrar resultados por pregunta dentro de un grupo
console.log('Resultados en Neuroticismo:', resultsInNeuroticism);

// !Modificar para agregar los valores a la base de datos que agregare
// Ahora puedes guardar los resultados en un formato que facilite el envío a una base de datos
const resultsToDatabase = {
  neuroticismo: {
    total: resultsByGroup['Neuroticismo'],
    ansiedad: resultsInNeuroticism['AnsiedadP1'] + resultsInNeuroticism['AnsiedadP2'],
    ira: resultsInNeuroticism['IraP1'] + resultsInNeuroticism['IraP2'],
    depresion: resultsInNeuroticism['DepresionP1'] + resultsInNeuroticism['DepresionP2'],
    autoconciencia: resultsInNeuroticism['AutoconcienciaP1'] + resultsInNeuroticism['AutoconcienciaP2'],
    inmoderacion: resultsInNeuroticism['InmoderacionP1'] + resultsInNeuroticism['InmoderacionP2'],
    vulnerabilidad: resultsInNeuroticism['VulnerabilidadP1'] + resultsInNeuroticism['VulnerabilidadP2'],
  },
  extraversion: {
    //total: resultsByGroup['Extraversion'],
    // Agrega preguntas dentro de Extraversion según sea necesario
  },
  // Agrega más grupos según sea necesario
};

// Ahora tienes un objeto `resultsToDatabase` con los resultados en un formato que puedes enviar a tu base de datos
console.log('Resultados para la Base de Datos:', resultsToDatabase);









    // Codigo para asignar puntajes a las respuestas 
    const handleResponseChange = (questionId, responseIndex) => {
    // Obtener el valor asociado a la respuesta seleccionada
    let selectedValue = optionValues[responseIndex];

    // Verificar si la pregunta es una de las que deben invertir los valores
    if (
      questionId === 'InmoderacionP1' ||
      questionId === 'InmoderacionP2' ||
      questionId === 'VulnerabilidadP1' ||
      questionId === 'VulnerabilidadP2'
    ) {
      // Invertir el valor
      selectedValue = 6 - selectedValue;
    }


    // Actualizar el estado de las respuestas
    setResponses({ ...responses, [questionId]: selectedValue });
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
                      checked={responses[question.id] === optionValues[index]} // Comparar con el valor seleccionado
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
        <Button onClick={nextPage} disabled={!canAdvance}>
          Siguiente
        </Button>
      </section>
    </div>
    );
}

export default BigFiveTest;