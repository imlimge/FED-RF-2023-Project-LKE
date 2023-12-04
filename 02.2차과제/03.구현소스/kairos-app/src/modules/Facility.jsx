// Facility - 광고파트 모듈

import { SwiperApp } from "../plugin/SwiperApp";
import { ShowCont } from "../plugin/ShowCont";

// CSS
import "../css/facility.css";


export function Facility({sts}) {
    return (
        <>
            {/*   <!-- 학원시설 --> */}
            <section id="facility" className="mp">
                <div className="facility">
                    <h2 className="tit">학원시설</h2>
                    <SwiperApp sts={sts} />
                    <ShowCont/>
                </div>
            </section>
        </>
    );
}
