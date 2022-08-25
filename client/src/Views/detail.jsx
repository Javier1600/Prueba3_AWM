import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = (props) => {
    const{id} = useParams();
    const [pirate, setPirate] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/pirate/${id}`)
        .then(res => setPirate({...res.data}))
        .catch(err => console.log(err))
    },[id]);

    return(
        <div>
            <div>
                <img src={pirate.imageURL} alt="" />
                <h1>{pirate.phrase}</h1>
            </div>
            <div>
                <table>
                    <tr>
                        <td>Position:   </td>
                        <td>{pirate.crewProsition}</td>
                    </tr>
                    <tr>
                        <td>Treasures:   </td>
                        <td>{pirate.treasures}</td>
                    </tr>
                    <tr>
                        <td>Peg leg:   </td>
                        {pirate.treasures ?<td>No</td> : <td>Yes</td>}
                    </tr>
                    <tr>
                        <td>Eye patch:   </td>
                        {pirate.eyePatch ?<td>No</td> : <td>Yes</td>}
                    </tr>
                    <tr>
                        <td>Hook hand:   </td>
                        {pirate.hookHand ? <td>No</td> : <td>Yes</td>}
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Detail;