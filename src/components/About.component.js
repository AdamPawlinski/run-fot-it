import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container fluid> 
            <Row>
                <Col className="text-justify" lg={{span: 8, offset: 2}}>
                    <h2>Run For IT</h2>
                    <p>
                        Bieg IT już w najbliższą sobotę oto najważniejsze informacje organizacyjne. Zobacz gdzie i kiedy odebrać pakiet startowy. Jak dołączyć do Biegu Bajtka, czy rzutu PC-em.
                        W dniu biegu nie ma możliwości zapisania się oraz zapłacenia za bieg.
                        Proszę o sprawdzenie swoich danych na liście startowej czy wszystko się zgadza (zwłaszcza nazwę drużyny): LISTA STARTOWA. Od tego zależy czy dana osoba jest klasyfikowana w danej drużynie.
                        Pakiety startowe będą wydawane już w piątek (21.09) oraz w dniu biegu (22.09). W piątek biuro zawodów będzie czynne od 14 do 18 w biurowcu Sky Tower na 21 piętrze w biurze IT Kontrakt. Można odebrać pakiet startowy za inną osobę. W tym celu należy okazać w biurze zawodów specjalne oświadczenie podpisane przez osobę za którą odbieramy pakiet (pobierz oświadczenie). Wejście do Biurowca Sky Tower znajduje się przy ul Gwiaździstej 66. Na recepcji należy podać hasło IT Kontrakt aby być bez przeszkód wpuszczonym na 21 piętro.
                        Pakiet startowy zawiera: 
                        - koszulkę, 
                        - nr startowy,  
                        - napój izotoniczny, 
                        - wodę, 
                        - prenumeratę magazynu IT Professional,
                        - torbę
                        Na mecie
                        - woda
                        - Lech Free
                        - medal
                        - bufet owocowy
                        Ze względów logistycznych w piątek nie będą wydawane woda oraz izotonik, które będą do odbioru dla każdego w dniu biegu na Stadionie Olimpijskim.
                        Biuro zawodów będzie działać w dniu biegu od godziny 9:00 na terenie stadionu lekkoatletycznego AWF.
                        Bieg Bajtka - na bieg obowiązuje określona liczba 100 miejsc. Bieg odbędzie się na dwóch dystansach 100 m (do 7 lat) oraz 400 metrów (8 lat +). Pula miejsc obowiązuje na oba dystanse. Zapisy będą dostępne w biurze zawodów w Sky Tower w piątek oraz w dniu biegu do wyczerpania puli miejsc startowych.
                        Wjazd na Stadion Olimpijski - Bezpłatny dla uczestników biegu tylko z kartą wjazdową, którą wysyłamy na adres e-mail. Karta umożliwia wjazd od godziny 8:50 do 10:40 przez bramę od strony Al. Paderewskiego 35. Od godziny 10:40 bezpłatny wjazd przez tę bramę oraz wogóle jako taki nie będzie możliwy. Jedynie od strony ul. Mickiewicza (tam wjazd tylko płatny 3 zł).
                    </p>
                </Col>
            </Row>
        </Container> 

    )
}

export default About;  