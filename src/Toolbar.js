import React from "react";
import { google_docs_logo } from "./config";

import Fileinfo from "./Fileinfo";
import FileOptions from "./FileOptions";
import Userinfo from "./Userinfo";

function Toolbar(){
    return (
        <div className="flex items-center bg-blue-50">
            <img src={google_docs_logo} alt="google-docs-logo" className="w-12 h-14  mt-1 ml-1 "/>
            <div>
                <Fileinfo></Fileinfo>
                <FileOptions></FileOptions>
            </div>
            <Userinfo/>
        </div>
    )
}

export default Toolbar;