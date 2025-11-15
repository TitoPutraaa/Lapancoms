import { useState } from 'react';

import ArrowBtn from "../components/common/ArrowBtn";
import BackBtn from "../components/common/BackBtn";
import CancelBtn from "../components/common/CancelBtn";
import ComfirmBtn from "../components/common/ComfirmBtn";
import DeletedAdmin from '../components/common/DeletedAdmin';


export default function Demo() {
    return (
        <div>
            <h1>INI PAGE DEMO</h1>
            <br></br>
            <ComfirmBtn/>
            <br></br>
            <CancelBtn/>
            <br></br>
            <ArrowBtn/>
            <br></br>
            <DeletedAdmin/>
        </div>
    )
}