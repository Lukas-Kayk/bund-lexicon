var KATEGORIEN_DATA = [];

var KATEGORIEN_DATA_MAP = {
    "Lebensräume": [],
    "Tiere": [],
    "Pflanzen": [],
    "Pilze": []
}

// Function to fetch and parse JSON data
async function fetchData() {
    try {
        const kategorienResponse = await fetch('data/kategorien.json');
        const lebensraumResponse = await fetch('data/lebensraum.json');
        const pflanzenResponse = await fetch('data/pflanzen.json');
        const pilzeResponse = await fetch('data/pilze.json');
        const tiereResponse = await fetch('data/tiere.json');


        KATEGORIEN_DATA = await kategorienResponse.json();
        KATEGORIEN_DATA_MAP["Lebensräume"] = await lebensraumResponse.json();
        KATEGORIEN_DATA_MAP["Pflanzen"] = await pflanzenResponse.json();
        KATEGORIEN_DATA_MAP["Pilze"] = await pilzeResponse.json();
        KATEGORIEN_DATA_MAP["Tiere"] = await tiereResponse.json();


    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function getQueryParam(name, url) {
    if (!url) {
        url = window.location.href;
    }

    name = name.replace(/[[]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);

    if (!results) {
        return null;
    }

    if (!results[2]) {
        return "";
    }

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}