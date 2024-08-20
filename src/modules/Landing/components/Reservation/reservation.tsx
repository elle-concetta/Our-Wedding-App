
import {
    collection,
    DocumentData,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";

import {
    styReservationWrapper,
    styReservationValue,
    styMessagesWrapper,
} from "./styles";

import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { db, sendReservation } from "src/libs/firebase";
import { RevealWrapper } from "next-reveal";


function Reservation() {
    const [inputValue, setInputValue] = useState<{
        name: string;
        presence: string;
        accInvitees: string;
        guests: string;
        message: string;
    }>({
        name: "",
        presence: "Attending",
        accInvitees: "",
        guests: "",
        message: "",
    });
    const [reservations, setReservations] = useState<DocumentData[]>([]);

    useEffect(() => {
        const q = query(collection(db, "reservation"), orderBy("time", "desc"));

        return onSnapshot(q, (querySnapshot) => {
            setReservations(
                querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                })
            );
        });
    }, []);

    function getZero(num: number) {
        return num < 10 ? `0${num}` : num;
    }

    function handleSubmit() {
        sendReservation(
            inputValue.name,
            inputValue.presence,
            inputValue.accInvitees,
            inputValue.guests,
            inputValue.message
        );
        setInputValue({
            name: "",
            presence: "Attending",
            accInvitees: "",
            guests: "",
            message: "",
        });
    }

    return (
        <section id="reservation" css={styReservationWrapper}>
            <div className="bg-[url('/public/images/bg.png')] bg-center bg-no-repeat bg-cover px-8 py-16 lg:px-10 space-y-8 -mt-4">
                <RevealWrapper duration={2500} origin="bottom" className="space-y-8">
                    <h1>RSVP</h1>
                    <p className="text-center text-[0.75rem] text-[#424242]">
                        Please fill out the RSVP form
                    </p>
                    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Name"
                                value={inputValue.name}
                                onChange={(e) =>
                                    setInputValue({ ...inputValue, name: e.target.value })
                                }
                            />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-group">
                            <textarea
                                placeholder="You can leave a message here"
                                value={inputValue.message}
                                onChange={(e) =>
                                    setInputValue({ ...inputValue, message: e.target.value })
                                }
                            />
                            <label htmlFor="message">Message</label>
                        </div>
                        <div className="input-group">
                            <div css={styReservationValue(inputValue.presence === "Attending")}>
                                <button
                                    type="button"
                                    className={inputValue.presence === "Attending" ? "coming" : ""}
                                    onClick={() => setInputValue({ ...inputValue, presence: "Attending" })}
                                >
                                    Attending
                                </button>
                                <button
                                    type="button"
                                    className={inputValue.presence === "Not Attending" ? "not-coming" : ""}
                                    onClick={() => setInputValue({
                                        ...inputValue,
                                        presence: "Not Attending",
                                        accInvitees: "",
                                        guests: "",
                                        message: "",
                                    })}
                                >
                                    Not Attending
                                </button>
                            </div>
                        </div>
                        {inputValue.presence === "Attending" && (
                            <>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        placeholder="Names of Accompanying Invitees"
                                        value={inputValue.accInvitees || ""}
                                        onChange={(e) =>
                                            setInputValue({
                                                ...inputValue,
                                                accInvitees: e.target.value,
                                            })
                                        }
                                    />
                                    <label htmlFor="accInvitees">Names of Accompanying Invitees</label>
                                </div>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        placeholder="Number of Guests"
                                        value={inputValue.guests || ""}
                                        onChange={(e) =>
                                            setInputValue({ ...inputValue, guests: e.target.value })
                                        }
                                    />
                                    <label htmlFor="guests">Number of Guests</label>
                                </div>
                            </>
                        )}
                        <button type="submit">Send</button>
                    </form>
                </RevealWrapper>
                <div css={styMessagesWrapper}>
                    {reservations.map((data) => {
                        const date = new Date(data.time.seconds * 1000);
                        return (
                            <div key={data.id} className="message-card">
                                <p className="name">{data.name} <span className={data.presence === "Attending" ? "text-green-600" : "text-red-600"}>({data.presence})</span></p>
                                <p className="message">{data.message}</p>
                                <p className="date">
                                    <AiOutlineClockCircle />
                                    {getZero(date.getDate())}/{getZero(date.getMonth() + 1)}/{getZero(date.getFullYear())} {getZero(date.getHours())}:{getZero(date.getMinutes())}:{getZero(date.getSeconds())}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Reservation;

