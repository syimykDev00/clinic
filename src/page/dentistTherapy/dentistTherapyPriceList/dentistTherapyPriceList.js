import React from "react";

const date = [
    {
        id: 1,
        text: "Лечения 1 канала",
        price: "500 cом"
    },
    {
        id: 2,
        text: "Пломба",
        price: "Цена"
    },
    {
        id: 3,
        text: "3M Espe filltek in USA",
        price: "2000 cом"
    },
    {
        id: 4,
        text: "GRADIA in JAPON",
        price: "1500 сом"
    },
    {
        id: 5,
        text: "ESTELITE in JAPON",
        price: "1300 сом"
    },
    {
        id: 6,
        text: "ES COM in KOREA",
        price: "1000 сом"
    },
    {
        id: 7,
        text: "CHARISMA in german",
        price: "1000 сом"
    },
    {
        id: 8,
        text: "I FLOW in KOREA",
        price: "700 сом"
    },
]

const DentistTherapyPriceList = () => {
    return (
        <section id="dentistTherapyPriceList">
            <div className="container">
                <div className="dentistTherapyPriceList">

                    <h1>Прайс-лист</h1>
                    <p>
                        Доступные цены для всех различных вид услуг
                    </p>

                    <div className="dentistTherapyPriceList--blocks">
                        <div className="dentistTherapyPriceList--blocks__price">
                            {
                                date.map((el, idx) => (
                                    <div className="dentistTherapyPriceList--blocks__price--block">
                                        <h4>
                                            {el.id}. {el.text}
                                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.9861 14.6844C15.5685 14.0995 15.6472 13.2326 15.1613 12.7454C14.6755 12.2592 13.8083 12.3379 13.2249 12.9218C12.6425 13.5056 11.7753 13.5844 11.2895 13.0981C10.8036 12.6119 10.8823 11.744 11.4657 11.1611M11.4657 11.1611L11.1132 10.8084M11.4657 11.1611C11.7952 10.8303 12.2154 10.6629 12.6066 10.6659M15.3375 15.0361L14.9851 14.6834C14.5869 15.0829 14.0542 15.2463 13.6022 15.1527M8.233 10.1897C8.62682 10.1897 9.01179 10.0728 9.33924 9.85382C9.66669 9.63485 9.9219 9.32362 10.0726 8.95949C10.2233 8.59535 10.2628 8.19467 10.1859 7.80811C10.1091 7.42155 9.91945 7.06647 9.64098 6.78777C9.36251 6.50908 9.00771 6.31929 8.62146 6.24239C8.23521 6.1655 7.83485 6.20496 7.47101 6.35579C7.10717 6.50662 6.79619 6.76204 6.5774 7.08975C6.3586 7.41746 6.24182 7.80275 6.24182 8.19688"
                                                    stroke="#40B1DE" strokeWidth="1.5" strokeLinecap="round"/>
                                                <path
                                                    d="M15.7298 4.06079C14.1906 2.52137 13.422 1.75116 12.4235 1.4652C11.4249 1.17824 10.3646 1.42335 8.24496 1.91357L7.02238 2.19555C5.23828 2.60706 4.34623 2.81331 3.73494 3.4241C3.12464 4.03588 2.91856 4.92865 2.50738 6.71418L2.22463 7.93775C1.73579 10.0601 1.49088 11.1202 1.77661 12.1196C2.06334 13.119 2.83293 13.8882 4.37112 15.4276L6.19305 17.251C8.87119 19.9323 10.2093 21.2704 11.8719 21.2704C13.5355 21.2704 14.8736 19.9313 17.5507 17.252C20.2289 14.5717 21.567 13.2326 21.567 11.5676C21.567 10.2304 20.7028 9.10253 18.9744 7.32098"
                                                    stroke="#40B1DE" strokeWidth="1.5" strokeLinecap="round"/>
                                            </svg>
                                        </h4>
                                        <div className="dentistTherapyPriceList--blocks__price--block__line"></div>
                                        <h5>{el.price}</h5>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DentistTherapyPriceList;
