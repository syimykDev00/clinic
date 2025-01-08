import {useState} from "react";

const faqs = [
    {
        title: "Кабинетное отбеливание",
        text:
            "Самая современная и популярная система отбеливания от Philips. Amazing White Безопасное отбеливание зубов до 7−9 тонов за одно посещение. Внутрикоронковое отбеливание Быстро и просто восстанавливает эстетику изменивших цвет зубов, из которых ранее удалили нерв.\n" +
            "\n"
    },
    {
        title: "Домашнее отбеливание\n" +
            "\n",
        text:
            "Opalescence Система отбеливания на основе перекиси карбамида. Состав щадяще воздействует на эмаль зубов, питая и отбеливая их.\n" +
            "\n"
    }
];

export default

function App() {
    return (
        <section id="whiteningSystem">
            <div className="container">
                <div className="whiteningSystem">

                    <h1>Какую систему отбеливания выбрать?</h1>

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
