import React from "react";

const cardDummy = () => {
  return (
    <>
      <section class="c-push-page js-c-push-page " data-scroll-section style ={{opacity: '0',
    pointerEvents: 'none',
    transform:`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`
}}>
        <div
          class="setUi"
          data-scroll
          data-scroll-repeat
          //  data-scroll-repeat
          data-scroll-call="setUi"
          data-scroll-offset="95%, 5%"
          data-ui="light"
        ></div>
        <div class="container">
          <h2 class="c-push-page__title st2">Novateurs responsables</h2>
          <div class="c-push-page__content">
            Les compétences et interactions humaines constituent le noyau de
            notre action, nous œuvrons pour des usagers, avons à cœur de
            concrétiser des visions pensées pour et par des femmes et des
            hommes. La valeur humaine est au cœur de notre écosystème et de la
            passion de notre métier.
            {/* <br> */}
            <br>
              Portés par cette énergie collective, notre volonté est d’œuvrer en
              acteur professionnel contemporain et responsable, connecté au
              monde par un engagement d’intégrité économique, environnementale
              et sociétale.
            </br>
            <a class="c-button" href="https://norea.paris/engagements/">
              <div class="c-button__icon has-bg">
                <svg class="svg-icon svg-arrow" aria-hidden="true">
                  {" "}
                  <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow"></use>
                </svg>
                <span class="c-button__icon__duplicate">
                  <svg class="svg-icon svg-arrow" aria-hidden="true">
                    {" "}
                    <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow"></use>
                  </svg>
                </span>
                <span class="c-button__icon__duplicateBg"></span>
              </div>
              <span class="c-button__label">DÉCOUVRIR NOS ENGAGEMENTS</span>
            </a>
            <div class="c-push-page__shape"></div>
          </div>
        </div>
      </section>
      <section class="c-overlap-cards js-c-overlap-cards" data-scroll-section>
        <div
          class="setUi"
          data-scroll
          data-scroll-repeat
          //  data-scroll-repeat
          data-scroll-call="setUi"
          data-scroll-offset="95%, 5%"
          data-ui="light"
        ></div>

        <div
          class="c-overlap-cards__header"
          data-scroll
          data-scroll-sticky
          data-scroll-target=".sectionTarget--overlapCards--259711927"
        >
          <h2
            class="c-overlap-cards__title st3 ls-appear"
            data-scroll
            data-scroll-offset="25%"
          >
            Notre méthodologie d’intervention
          </h2>
          <div
            class="c-overlap-cards__description ls-appear"
            data-scroll
            data-scroll-offset="25%"
          ></div>
        </div>

        <div class="c-overlap-cards__cards" data-component="overlap-cards">
          <div
            class="c-overlap-cards__cardContainer c-overlap-cards__cardContainer--0"
            data-scroll
            data-scroll-sticky
            data-scroll-target=".sectionTarget--card0--259711927"
            style="z-index: 0;"
          >
            <div
              class="c-overlap-cards__card orange top ls-appear"
              data-scroll
              data-scroll-offset="25%"
              data-card="0"
              style="--spacing:0px;"
            >
              <div class="c-overlap-cards__card__left">
                <h3 class="c-overlap-cards__card__title ">
                  Compréhension & validation des besoins
                </h3>
                <div class="c-overlap-cards__card__description">
                  <ul>
                    <li>Définition des enjeux : planning, budget, concept</li>
                    <li>Prise en compte de la spécificité du contexte</li>
                    <li>
                      Mise en place de l’équipe dédiée, dont chef de
                      projet/chargé d’affaires (garant de la fluidité des
                      échanges et de la dynamique de progression)
                    </li>
                    <li>
                      Planification de réunions thématiques avec notre client /
                      l’architecte / AMO du projet par <strong>norea</strong>
                    </li>
                    <li>
                      Confirmation du périmètre de collaboration, cadrage du
                      projet dès sa conception et validation collégiale des
                      process de mise en œuvre.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="c-overlap-cards__card__right">
                <div
                  class="c-overlap-cards__lottie"
                  data-lottie-src="https://norea.paris/wp-content/uploads/2023/12/01_MethodologieIntervention.json"
                ></div>

                <div class="c-overlap-cards__card__nav">
                  <button
                    class="c-overlap-cards__card__arrow bottom"
                    data-target=".sectionTarget--card1--259711927"
                  >
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="sectionTarget sectionTarget--card sectionTarget--card0--259711927"
            style="top: 0vh;"
          ></div>

          <div
            class="sectionProgress sectionProgress--cardOverlap"
            data-card="0"
            data-total-cards="5"
            data-scroll
            data-scroll-progress="cardOverlap"
            data-scroll-offset="0,100%"
            style="top: 120vh;"
          ></div>

          <div
            class="c-overlap-cards__cardContainer c-overlap-cards__cardContainer--1"
            data-scroll
            data-scroll-sticky
            data-scroll-target=".sectionTarget--card1--259711927"
            style="z-index: 1;"
          >
            <div
              class="c-overlap-cards__card pink  ls-appear"
              data-scroll
              data-scroll-offset="25%"
              data-card="1"
              style="--spacing:30px;"
            >
              <div class="c-overlap-cards__card__left">
                <h3 class="c-overlap-cards__card__title ">
                  Établissement du budget par notre bureau d’études
                </h3>
                <div class="c-overlap-cards__card__description">
                  <ul>
                    <li>Réalisation d’une enveloppe budgétaire</li>
                    <li>
                      Accompagnement dans la recherche de pistes d’économies et
                      variantes techniques
                    </li>
                    <li>
                      Optimisation du choix des entreprises partenaires grâce à
                      la performance de notre réseau qualifié et de notre
                      centrale d’achats <strong>norea</strong>
                    </li>
                    <li>
                      Proposition de l’inclusion des critères RSE et économie
                      circulaire dans la sélection des partenaires et matériaux
                    </li>
                    <li>Établissement du budget définitif.</li>
                  </ul>
                </div>
              </div>
              <div class="c-overlap-cards__card__right">
                <div
                  class="c-overlap-cards__lottie"
                  data-lottie-src="https://norea.paris/wp-content/uploads/2023/12/02_MethodologieIntervention.json"
                ></div>

                <div class="c-overlap-cards__card__nav">
                  <button
                    class="c-overlap-cards__card__arrow top"
                    data-target=".sectionTarget--card0--259711927"
                  >
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                  </button>
                  <button
                    class="c-overlap-cards__card__arrow bottom"
                    data-target=".sectionTarget--card2--259711927"
                  >
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="sectionTarget sectionTarget--card sectionTarget--card1--259711927"
            style="top: 100vh;"
          ></div>

          <div
            class="sectionProgress sectionProgress--cardOverlap"
            data-card="1"
            data-total-cards="5"
            data-scroll
            data-scroll-progress="cardOverlap"
            data-scroll-offset="0,100%"
            style="top: 220vh;"
          ></div>

          <div
            class="c-overlap-cards__cardContainer c-overlap-cards__cardContainer--2"
            data-scroll
            data-scroll-sticky
            data-scroll-target=".sectionTarget--card2--259711927"
            style="z-index: 2;"
          >
            <div
              class="c-overlap-cards__card green top ls-appear"
              data-scroll
              data-scroll-offset="25%"
              data-card="2"
              style="--spacing:60px;"
            >
              <div class="c-overlap-cards__card__left">
                <h3 class="c-overlap-cards__card__title ">Mise au point</h3>
                <div class="c-overlap-cards__card__description">
                  <ul>
                    <li>
                      Analyse de la faisabilité du projet et de sa mise au point
                      technique
                    </li>
                    <li>Précision/Conception des plans d’exécution</li>
                    <li>
                      Passage des bureaux d’études d’exécution selon besoin
                      (structure, fluide, acoustique et/ou éclairage).
                    </li>
                  </ul>
                </div>
              </div>
              <div class="c-overlap-cards__card__right">
                <div
                  class="c-overlap-cards__lottie"
                  data-lottie-src="https://norea.paris/wp-content/uploads/2023/12/03_MethodologieIntervention-4.json"
                ></div>

                <div class="c-overlap-cards__card__nav">
                  <button
                    class="c-overlap-cards__card__arrow top"
                    data-target=".sectionTarget--card1--259711927"
                  >
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                  </button>
                  <button
                    class="c-overlap-cards__card__arrow bottom"
                    data-target=".sectionTarget--card3--259711927"
                  >
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="sectionTarget sectionTarget--card sectionTarget--card2--259711927"
            style="top: 200vh;"
          ></div>

          <div
            class="sectionProgress sectionProgress--cardOverlap"
            data-card="2"
            data-total-cards="5"
            data-scroll
            data-scroll-progress="cardOverlap"
            data-scroll-offset="0,100%"
            style="top: 320vh;"
          ></div>

          <div
            class="c-overlap-cards__cardContainer c-overlap-cards__cardContainer--3"
            data-scroll
            data-scroll-sticky
            data-scroll-target=".sectionTarget--card3--259711927"
            style="z-index: 3;"
          >
            <div
              class="c-overlap-cards__card blue  ls-appear"
              data-scroll
              data-scroll-offset="25%"
              data-card="3"
              style="--spacing:90px;"
            >
              <div class="c-overlap-cards__card__left">
                <h3 class="c-overlap-cards__card__title ">
                  Gestion de projet & Réalisation des travaux
                </h3>
                <div class="c-overlap-cards__card__description">
                  <ul>
                    <li>
                      Déploiement de notre expertise en gestion de projet sur
                      l’intégralité de la phase
                    </li>
                    <li>
                      Travaux jusqu’à la réception du chantier et la levée des
                      réserves
                    </li>
                    <li>
                      Cadrage régulier pour vigilance au respect des coûts,
                      délais et concept
                    </li>
                    <li>Réunions de chantier et reporting photos.</li>
                  </ul>
                </div>
              </div>
              <div class="c-overlap-cards__card__right">
                <div
                  class="c-overlap-cards__lottie"
                  data-lottie-src="https://norea.paris/wp-content/uploads/2023/12/04_MethodologieIntervention.json"
                ></div>

                <div class="c-overlap-cards__card__nav">
                  <button
                    class="c-overlap-cards__card__arrow top"
                    data-target=".sectionTarget--card2--259711927"
                  >
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                  </button>
                  <button
                    class="c-overlap-cards__card__arrow bottom"
                    data-target=".sectionTarget--card4--259711927"
                  >
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="sectionTarget sectionTarget--card sectionTarget--card3--259711927"
            style="top: 300vh;"
          ></div>

          <div
            class="sectionProgress sectionProgress--cardOverlap"
            data-card="3"
            data-total-cards="5"
            data-scroll
            data-scroll-progress="cardOverlap"
            data-scroll-offset="0,100%"
            style="top: 420vh;"
          ></div>

          <div
            class="c-overlap-cards__cardContainer c-overlap-cards__cardContainer--4"
            data-scroll
            data-scroll-sticky
            data-scroll-target=".sectionTarget--card4--259711927"
            style="z-index: 4;"
          >
            <div
              class="c-overlap-cards__card light-blue top ls-appear"
              data-scroll
              data-scroll-offset="25%"
              data-card="4"
              style="--spacing:120px;"
            >
              <div class="c-overlap-cards__card__left">
                <h3 class="c-overlap-cards__card__title ">
                  Garantie professionnelle
                </h3>
                <div class="c-overlap-cards__card__description">
                  <ul>
                    <li>
                      Année de Garantie de Parfaite Achèvement gérée par le
                      chargé d’affaires/chef de projet dédié au projet depuis
                      son commencement.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="c-overlap-cards__card__right">
                <div
                  class="c-overlap-cards__lottie"
                  data-lottie-src="https://norea.paris/wp-content/uploads/2023/12/05_MethodologieIntervention.json"
                ></div>

                <div class="c-overlap-cards__card__nav">
                  <button
                    class="c-overlap-cards__card__arrow top"
                    data-target=".sectionTarget--card3--259711927"
                  >
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                    <svg class="svg-icon svg-arrow-long" aria-hidden="true">
                      {" "}
                      <use xlink:href="https://norea.paris/wp-content/themes/norea/library/images/sprite.a702016386ewd8515de35fc44e7c7ba09220.svg#arrow-long"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="sectionTarget sectionTarget--card sectionTarget--card4--259711927"
            style="top: 400vh;"
          ></div>
        </div>

        <div
          class="c-overlap-cards__cardsMobile"
          data-component="overlap-cards"
        >
          <div class="c-overlap-cards__card orange">
            <div class="c-overlap-cards__card__left">
              <h3 class="c-overlap-cards__card__title ">
                Compréhension & validation des besoins
              </h3>
              <div class="c-overlap-cards__card__description">
                <ul>
                  <li>Définition des enjeux : planning, budget, concept</li>
                  <li>Prise en compte de la spécificité du contexte</li>
                  <li>
                    Mise en place de l’équipe dédiée, dont chef de projet/chargé
                    d’affaires (garant de la fluidité des échanges et de la
                    dynamique de progression)
                  </li>
                  <li>
                    Planification de réunions thématiques avec notre client /
                    l’architecte / AMO du projet par <strong>norea</strong>
                  </li>
                  <li>
                    Confirmation du périmètre de collaboration, cadrage du
                    projet dès sa conception et validation collégiale des
                    process de mise en œuvre.
                  </li>
                </ul>
              </div>
            </div>
            <div class="c-overlap-cards__card__right">
              <div
                class="c-overlap-cards__lottie"
                data-lottie-src="https://norea.paris/wp-content/uploads/2023/12/01_MethodologieIntervention.json"
              ></div>
            </div>
          </div>
          <div class="c-overlap-cards__card pink">
            <div class="c-overlap-cards__card__left">
              <h3 class="c-overlap-cards__card__title ">
                Établissement du budget par notre bureau d’études
              </h3>
              <div class="c-overlap-cards__card__description">
                <ul>
                  <li>Réalisation d’une enveloppe budgétaire</li>
                  <li>
                    Accompagnement dans la recherche de pistes d’économies et
                    variantes techniques
                  </li>
                  <li>
                    Optimisation du choix des entreprises partenaires grâce à la
                    performance de notre réseau qualifié et de notre centrale
                    d’achats <strong>norea</strong>
                  </li>
                  <li>
                    Proposition de l’inclusion des critères RSE et économie
                    circulaire dans la sélection des partenaires et matériaux
                  </li>
                  <li>Établissement du budget définitif.</li>
                </ul>
              </div>
            </div>
            <div class="c-overlap-cards__card__right">
              <div
                class="c-overlap-cards__lottie"
                data-lottie-src="https://norea.paris/wp-content/uploads/2023/12/02_MethodologieIntervention.json"
              ></div>
            </div>
          </div>
          <div class="c-overlap-cards__card green">
            <div class="c-overlap-cards__card__left">
              <h3 class="c-overlap-cards__card__title ">Mise au point</h3>
              <div class="c-overlap-cards__card__description">
                <ul>
                  <li>
                    Analyse de la faisabilité du projet et de sa mise au point
                    technique
                  </li>
                  <li>Précision/Conception des plans d’exécution</li>
                  <li>
                    Passage des bureaux d’études d’exécution selon besoin
                    (structure, fluide, acoustique et/ou éclairage).
                  </li>
                </ul>
              </div>
            </div>
            <div class="c-overlap-cards__card__right">
              <div
                class="c-overlap-cards__lottie"
                data-lottie-src="https://norea.paris/wp-content/uploads/2023/12/03_MethodologieIntervention-4.json"
              ></div>
            </div>
          </div>
          <div class="c-overlap-cards__card blue">
            <div class="c-overlap-cards__card__left">
              <h3 class="c-overlap-cards__card__title ">
                Gestion de projet & Réalisation des travaux
              </h3>
              <div class="c-overlap-cards__card__description">
                <ul>
                  <li>
                    Déploiement de notre expertise en gestion de projet sur
                    l’intégralité de la phase
                  </li>
                  <li>
                    Travaux jusqu’à la réception du chantier et la levée des
                    réserves
                  </li>
                  <li>
                    Cadrage régulier pour vigilance au respect des coûts, délais
                    et concept
                  </li>
                  <li>Réunions de chantier et reporting photos.</li>
                </ul>
              </div>
            </div>
            <div class="c-overlap-cards__card__right">
              <div
                class="c-overlap-cards__lottie"
                data-lottie-src="https://norea.paris/wp-content/uploads/2023/12/04_MethodologieIntervention.json"
              ></div>
            </div>
          </div>
          <div class="c-overlap-cards__card light-blue">
            <div class="c-overlap-cards__card__left">
              <h3 class="c-overlap-cards__card__title ">
                Garantie professionnelle
              </h3>
              <div class="c-overlap-cards__card__description">
                <ul>
                  <li>
                    Année de Garantie de Parfaite Achèvement gérée par le chargé
                    d’affaires/chef de projet dédié au projet depuis son
                    commencement.
                  </li>
                </ul>
              </div>
            </div>
            <div class="c-overlap-cards__card__right">
              <div
                class="c-overlap-cards__lottie"
                data-lottie-src="https://norea.paris/wp-content/uploads/2023/12/05_MethodologieIntervention.json"
              ></div>
            </div>
          </div>
        </div>

        <div class="sectionTarget sectionTarget--overlapCards sectionTarget--overlapCards--259711927"></div>
      </section>
    </>
  );
};

export default cardDummy;
