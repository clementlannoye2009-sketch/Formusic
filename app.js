import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

const LESSONS = [
  {
    id: 1,
    title: "Lecture des notes (clé de sol)",
    level: "Débutant",
    description: "Repérer les notes sur la portée en clé de sol.",
    exercises: [
      { id: "e1", question: "Quelle note est sur la deuxième ligne ?", choices: ["Sol", "Si", "Ré"], answer: 0 }
    ]
  },
  {
    id: 2,
    title: "Rythme: noires et blanches",
    level: "Débutant",
    description: "Comprendre les durées: ronde, blanche, noire, croche.",
    exercises: [
      { id: "e2", question: "Combien de temps vaut une blanche ?", choices: ["1 temps", "2 temps", "4 temps"], answer: 1 }
    ]
  }
];

function App() {
  const [selected, setSelected] = React.useState(null);
  const [answers, setAnswers] = React.useState({});
  const [score, setScore] = React.useState(null);
  
  function handleAnswer(qid, idx) {
    setAnswers((s) => ({ ...s, [qid]: idx }));
  }

  function submitQuiz() {
    if (!selected) return;
    let correct = 0;
    selected.exercises.forEach((ex) => {
      if (answers[ex.id] === ex.answer) correct++;
    });
    setScore(`${correct} / ${selected.exercises.length}`);
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Solfège Facile</h1>

      <div className="grid gap-4">
        {LESSONS.map((l) => (
          <div
            key={l.id}
            className="border p-4 rounded cursor-pointer bg-white"
            onClick={() => {
              setSelected(l);
              setScore(null);
              setAnswers({});
            }}
          >
            <h3 className="font-semibold">{l.title}</h3>
            <p className="text-xs text-slate-600">Niveau : {l.level}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="mt-6 border p-4 rounded bg-white">
          <button
            className="text-sm underline mb-2"
            onClick={() => setSelected(null)}
          >
            Fermer
          </button>

          <h2 className="font-semibold text-lg">{selected.title}</h2>
          <p className="text-sm mt-2">{selected.description}</p>

          <h3 className="mt-4 font-medium">Quiz</h3>
          {selected.exercises.map((ex) => (
            <div key={ex.id} className="mt-2">
              <p>{ex.question}</p>
              <div className="flex gap-2 mt-1">
                {ex.choices.map((c, i) => (
                  <button
                    key={c}
                    onClick={() => handleAnswer(ex.id, i)}
                    className={
                      "px-2 py-1 border rounded text-sm " +
                      (answers[ex.id] === i ? "bg-slate-200" : "")
                    }
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button
            className="mt-4 px-3 py-1 bg-slate-900 text-white rounded"
            onClick={submitQuiz}
          >
            Valider
          </button>

          {score && <p className="mt-2">Score : {score}</p>}
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
