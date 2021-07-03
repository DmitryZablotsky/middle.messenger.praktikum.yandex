import {registrationPage} from "./pages/registrationPage"
import {authorizationPage} from "./pages/authorizationPage";
import {mainPage} from "./pages/mainPage";
import {profilePage} from "./pages/profilePage";
import {errorPage} from "./pages/errorPage";

import "./index.scss";

const root = document.querySelector("#root");

switch (window.location.pathname) {
    case "/": {
        root.innerHTML = mainPage;
        break;
    }

    case "/authorisation": {
        root.innerHTML = authorizationPage;
        break;
    }

    case "/registration": {
        root.innerHTML = registrationPage;
        break;
    }

    case "/profile": {
        root.innerHTML = profilePage;
        break;
    }

    default: {
        root.innerHTML = errorPage({error: {text: "Страница не существует", status: 404}});
    }
}