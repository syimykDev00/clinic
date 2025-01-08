import {useState} from "react";

const faqs = [
    {
        title: "Оборудование, которое видит больше, чем врач",
        text:
            "Мы предлагаем нашим пациентам только самые современные в сфере стоматологии технологии и оборудование, которые исключают возможность врачебной ошибки.\n" +
            "\n"
    },
    {
        title: "Консилиум врачей по преображению каждой улыбки",
        text:
            "За эстетику и функциональность зубов лично отвечают все специалисты клиники, которые участвуют в создании улыбки.\n" +
            "\n"
    },
    {
        title: "Работаем даже с самыми сложными случаями",
        text:
            "Опыт наших врачей, современное оборудование и материалы позволяют создать восхитительную улыбку при любой клинической ситуации.\n" +
            "\n"
    },
    {
        title: "Высокое качество услуг и сервиса",
        text:
            "Немецкие технологии: и передовые зарубежные методики, привезённые в Россию. Нашим врачам доверяют улыбки популярные люди и члены их семьей.\n" +
            "\n"
    },
    {
        title: "Пошаговый план лечения без скрытых расходов",
        text:
            "Полный чекап полости рта и составление цифрового плана лечения с предоставлением наглядных пошаговых действий и их стоимости.\n" +
            "\n"
    }
];

export default function App() {
    return (
        <section id="dentistTherapyFaq">
            <div className="container">
                <div className="dentistTherapyFaq">

                    <h1>5 причин доверить нам улыбку</h1>

                    <Accordion/>
                </div>
            </div>
        </section>
    );
}

function Faq({i, title, selectedId, setSelectedId, children}) {
    let selected = selectedId === i;
    // console.log(children);
    if (i < 10) i = "0" + i;

    return (
        <li
            className={selected ? "item open" : "item"}
            onClick={() => setSelectedId(Number(i))}
        >
            <h3 className="number">{i}</h3>
            <h2 className="title">{title}</h2>
            <h2 className="icon">{selected ? "--" : "+"}</h2>
            {selected ? <p className="content-box"> {children}</p> : null}
        </li>
    );
}

function Accordion() {
    let i = 1;
    const [selectedId, setSelectedId] = useState(-1);

    function handleSelection(e) {
        if (e === selectedId) setSelectedId(null);
        else setSelectedId(e);
    }

    return (
        <ul className="accordion">
            {faqs.map((f) => (
                <Faq
                    title={f.title}
                    i={i++}
                    selectedId={selectedId}
                    setSelectedId={handleSelection}
                    key={f.title}
                >
                    {f.text}
                </Faq>
            ))}
        </ul>
    );
}
