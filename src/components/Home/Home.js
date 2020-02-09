import React from 'react';

import classes from './Home.module.scss';

const Home = () => {
    return (
        <section className={classes.Home}>
            <header className={classes.Home__Header}>
                <h2>İŞ BANKASI ŞUBE BULUCU</h2>
            </header>

            <div className={classes.Home__Description}>
                <h3>(TR)</h3>
                <p>
                    Küçük bir haftasonu projesi. API'ini kendim oluşturdum (MongoDB + NodeJS). Şube datasını
                    internet üzerinden parse etmek durumunda kaldım (Beautiful Soup {`<3`}) çünkü İş Bankası'nın
                    sunduğu şube bilgilerini içeren API tam bir rezalet (ya da belki ben kullanamamışımdır bilemiyorum).
                </p>
                
                <p>
                    Front end kısmı React, haritalar için Leaflet kullandım. App'i genişletilebilir bir şekilde dizyan ettim,
                    ilerde başka iller ve ilçeler ile başka bankalar ekleyebilirim.
                </p>
            </div>

            <div className={classes.Home__Description} style={{marginTop: "6rem"}}>
                <h3>(EN)</h3>
                <p>
                    A small weekend project. I created the API (MongoDB + NodeJS). I had to parse the branch data
                    from internet (Beautiful Soup {`<3`}) because the API containing Branch info which İş Bankası provides 
                    is pitifull (or perhaps; I couldn't use it, not sure..)
                </p>
                
                <p>
                    I used React for front end, and Leaflet for maps. App is scalable so that I can add more cities and districts,
                    along with other Banks.
                </p>
            </div>
        </section>
    )
}

export default Home;