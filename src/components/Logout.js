import React, { useEffect } from "react";

function Logout(props) {
    useEffect(() => {
        localStorage.clear();
        localStorage.setItem("isLogged", "");
        localStorage.setItem("access-token", "");
        window.location.href = "/login";

    }, []);
}

export default Logout;