const publications = [
  {
    id: 1,
    title: "Land Tenure Security and Forest Cover in the Colombian Amazon",
    authors: "Jones, K. W., Cabra-Ruiz, N., Correa Sánchez, N., Molina González, E., Vélez, M. A.",
    publication: "<b>Frontiers in Forests and Global Change</b>, 7, 1487898 (2024)",
    date: "2024-01-01",
    type: "publication",
    link: "https://www.frontiersin.org/journals/forests-and-global-change/articles/10.3389/ffgc.2024.1487898/full",
    dataset: null
  },
  {
    id: 2,
    title: "Forced Displacement, the Perpetuation of Autocratic Leaders, and Development in Origin Countries",
    authors: "Cabra-Ruiz, N., Rozo, S. V., Sviatschi, M. M.",
    publication: "<b>National Bureau of Economic Research</b>, Working Paper No. w33131 (2024)",
    date: "2024-01-01",
    type: "working_paper",
    link: "https://www.nber.org/papers/w33131",
    dataset: null
  },
  {
    id: 3,
    title: "Una caracterización histórica de los partidos políticos de Colombia: 1958-2022",
    authors: "Cabra-Ruiz, N., Torres, S., Wills-Otero, L., Castilla-Gutiérrez, V.",
    publication: "<b>Documento CEDE</b>, (36) (2023)",
    date: "2023-01-01",
    type: "working_paper",
    link: "https://example.com",
    dataset: "https://example.com"
  },
  {
    id: 4,
    title: "El Baile Rojo: impacto de la violencia política sobre el comportamiento electoral, el caso de la Unión Patriótica (1984-2007)",
    authors: "Cabra-Ruiz, N.",
    publication: "<b>Documentos CEDE</b> 20683, Universidad de los Andes, Facultad de Economía – CEDE (2023)",
    date: "2023-01-01",
    type: "working_paper",
    link: "https://example.com",
    dataset: null
  },
  {
    id: 5,
    title: "Café ¿alternativa para la sustitución de cultivos de uso ilícito?",
    authors: "Bobadilla, S., Cabra, N., Escobar, N.",
    publication: "<b>Econografos - Escuela de Economía</b> 017286, Universidad Nacional de Colombia-FCE-CID (2019)",
    date: "2019-01-01",
    type: "working_paper",
    link: "https://example.com",
    dataset: null
  },
  {
    id: 6,
    title: "Evaluación de la Misión Bogotá S.XXI en la cobertura de servicios públicos domésticos (1990-2017)",
    authors: "Cabra, N.",
    publication: "<b>Econografos – Facultad de Ciencias Económicas</b> 017215, Universidad Nacional de Colombia (2019)",
    date: "2019-01-01",
    type: "working_paper",
    link: "https://example.com",
    dataset: null
  },
  {
    id: 7,
    title: "Determinantes de la violencia homicida en Bogotá 2002-2010",
    authors: "Cabra, N., Escobar, N., Herrera, A.",
    publication: "<b>Econografos Escuela de Economía</b> 017223, Universidad Nacional de Colombia (2019)",
    date: "2019-01-01",
    type: "working_paper",
    link: "https://example.com",
    dataset: null
  },
  {
    id: 8,
    title: "La globalización como proceso sinérgico en la evolución del desarrollo humano y la educación",
    authors: "Cabra, N.",
    publication: "<b>Econografos Escuela de Economía</b> 017236, Universidad Nacional de Colombia (2019)",
    date: "2019-01-01",
    type: "working_paper",
    link: "https://example.com",
    dataset: null
  },
  {
    id: 9,
    title: "Los polos de desarrollo de François Perroux en el modelo de regionalización para Colombia (1969-1972)",
    authors: "Cabra, N.",
    publication: "<b>Econografos - Escuela de Economía</b> 017392, Universidad Nacional de Colombia (2019)",
    date: "2019-01-01",
    type: "working_paper",
    link: "https://example.com",
    dataset: null
  },
  {
    id: 10,
    title: "Del papel a la sustitución de cultivos ilícitos: análisis de la implementación del punto 4 del Acuerdo de paz en el departamento del Cauca",
    authors: "Cabra, N.",
    publication: "<b>Econografos - Escuela de Economía</b> 017437, Universidad Nacional de Colombia (2019)",
    date: "2019-01-01",
    type: "working_paper",
    link: "https://example.com",
    dataset: null
  }
];




let originalData = [...publications];
let currentData = [...publications];
let sortByTitle = false;
let activeFilter = null;


const iconByType = {
    publication: "book",
    working_paper: "edit_note",
    press: "newspaper",
    other: "content_copy"
};

var n_pubs = 0

function renderPublications(data) {
    const container = document.getElementById("publication-list");
    container.innerHTML = "";

    updateIcons()

    n_pubs = n_pubs + publications.length



    data.forEach(pub => {
        const wrapper = document.createElement("div");
        wrapper.className = "mdl-cell mdl-cell--12-col mdl-grid";

        wrapper.style = " padding: 10px; "

        const icon = iconByType[pub.type] || "description";

        wrapper.innerHTML = `
            <div class="paper-container" data-date="${pub.date}">
                <div class="icon-wrapper">
                    <i class="material-icons icon">${icon}</i>
                </div>
                <div class="paper-content" style="box-shadow: 1px 1px gray; padding: 15px;">
                    <div class="paper-title">
                        <h4>
                            <a href="${pub.link || '#'}" target="_blank" style="text-decoration: none; color: inherit;">
                                ${pub.title}
                            </a>
                            ${pub.dataset ? `
                                <a href="${pub.dataset}" target="_blank" style="text-decoration: none; margin-right: -10px;">
                                    <button id="data_btt${pub.id+n_pubs}" class="action-button mdl-js-ripple-effect mdl-button mdl-js-button mdl-button--icon">
                                        <i class="material-icons">folder</i>
                                    </button>

                                    <div class="mdl-tooltip" for="data_btt${pub.id+n_pubs}">
                                        Download Dataset
                                    </div>

                                </a>` : ''}
                            ${pub.link ? `
                                <a href="${pub.link}" target="_blank" style="text-decoration: none">
                                    <button id="link_btt${pub.id+n_pubs}" class="action-button mdl-js-ripple-effect mdl-button mdl-js-button mdl-button--icon">
                                        <i class="material-icons">link</i>
                                    </button>

                                    <div class="mdl-tooltip" for="link_btt${pub.id+n_pubs}">
                                        Go to editor
                                    </div>
                                </a>` : ''}
                        </h4>
                    </div>
                    <div class="paper-meta">
                        <h5>${pub.authors}</h5>
                        <h5>${pub.publication}</h5>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(wrapper);
    });
}

function updateIcons(){
    document.getElementById('all_icon').classList.remove('option_selected')
    document.getElementById('publications_icon').classList.remove('option_selected')
    document.getElementById('working_papers_icon').classList.remove('option_selected')
    document.getElementById('press_icon').classList.remove('option_selected')
    document.getElementById('others_icon').classList.remove('option_selected')
    document.getElementById('order_by').classList.remove('option_selected')

    if(sortByTitle){
        document.getElementById('order_by').classList.add('option_selected')
    }

    if(activeFilter=="publication")
        document.getElementById('publications_icon').classList.add('option_selected')
    else if(activeFilter=="working_paper")
        document.getElementById('working_papers_icon').classList.add('option_selected')
    else if(activeFilter=="press")
        document.getElementById('press_icon').classList.add('option_selected')
    else if(activeFilter=="other")
        document.getElementById('others_icon').classList.add('option_selected')
    else
        document.getElementById('all_icon').classList.add('option_selected')
}

function toggleSort() {
    sortByTitle = !sortByTitle;
    applyFiltersAndSorting();
}

function toggleFilter(type) {
    activeFilter = activeFilter === type ? null : type;
    applyFiltersAndSorting();
}

function showAll() {
    activeFilter = null;
    applyFiltersAndSorting();
}

function applyFiltersAndSorting() {
    currentData = [...originalData];

    if (activeFilter) {
        currentData = currentData.filter(pub => pub.type === activeFilter);
    }

    if (sortByTitle) {
        currentData.sort((a, b) => a.title.localeCompare(b.title));
    } else {
        currentData.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    renderPublications(currentData);
}