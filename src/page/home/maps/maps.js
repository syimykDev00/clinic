import React from 'react';
import { BiSolidNavigation } from "react-icons/bi";
const Maps = () => {
    return (
        <section id="maps">
            <div className="container">
                <div className="maps">

                    <a href="https://2gis.kg/bishkek/directions/points/%7C72.808513%2C40.523281%3B70030076150106251?m=74.520986%2C42.847569%2F11.37">
                        <button>
                            <span><BiSolidNavigation /></span>
                            Маршрут
                        </button>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Maps;