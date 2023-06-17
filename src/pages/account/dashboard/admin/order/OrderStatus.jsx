import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function OrderStatus({ status, setStatus }) {
    const handleSelect = (e) => {
        if (confirm(`Are you sure you want to change status to ${e.target.value}`)) {
            toast.success(`Status changed to ${e.target.value}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            setStatus(e.target.value);
        } else {
            toast.success(`Action has been canceled`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }


    return (
        <>
            <select name="status" id="status" value={status} onChange={e => handleSelect(e)} >
                <option value="In Payment">In Payment</option>
                <option value="Payment Confirmed">Payment Confirmed</option>
                <option value="Payment Canceled">Payment Canceled</option>
                <option value="Refund">Refund</option>
                <option value="Packages being prepared">Packages Being Prepared</option>
                <option value="Package Sent">Package Sent</option>
                <option value="Order Completed">Order Completed</option>
                <option value="Order Canceled">Order Canceled</option>
            </select>
            <ToastContainer />
        </>
    )
}
