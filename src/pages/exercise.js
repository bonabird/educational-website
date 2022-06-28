import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data"

export default function Exercise() {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams()
    let invoice = getInvoice(parseInt(params.exerciseId, 10))
    return (
        <main>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due date: {invoice.due}</p>
            <p>
                <button
                onClick={() => {
                    deleteInvoice(invoice.number);
                    navigate("/exercises" + location.search);
                }}
                >
                    Delete
                </button>
            </p>
        </main>
    )
}