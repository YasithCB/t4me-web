import React from "react";
import { createRoot } from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {AuthProvider} from "./context/auth";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
    );
