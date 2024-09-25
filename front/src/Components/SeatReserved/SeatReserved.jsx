import React, { useEffect, useState } from 'react';
import { X, Check, Circle, CircleDot } from 'lucide-react';
import axios from 'axios';

const Seat = ({ isReserved, seatNumber, isSpecial = false, isDriver = false, onSeatClick, onCancelClick }) => (
    <div
        onClick={() => isReserved ? onCancelClick(seatNumber) : onSeatClick(seatNumber)}
        className={`relative w-10 h-10 rounded-t-lg border-2 flex items-center justify-center cursor-pointer ${isSpecial ? 'bg-yellow-200 border-yellow-400' :
            isReserved ? 'bg-red-200 border-red-400' : 'bg-green-200 border-green-400'
            }`}
    >
        {isDriver ? (
            <CircleDot className="text-yellow-600" size={18} />
        ) : isSpecial ? (
            <Circle className="text-yellow-600" size={16} />
        ) : isReserved ? (
            <X className="text-red-600" size={16} />
        ) : (
            <Check className="text-green-600" size={16} />
        )}
        <span className="absolute bottom-0 text-xs text-gray-600">{seatNumber}</span>
    </div>
);

const SeatPair = ({ leftSeat, rightSeat, onSeatClick, onCancelClick }) => (
    <div className="flex space-x-4">
        <Seat isReserved={leftSeat.isReserved} seatNumber={leftSeat.seatNumber} onSeatClick={onSeatClick} onCancelClick={onCancelClick} />
        <Seat isReserved={rightSeat.isReserved} seatNumber={rightSeat.seatNumber} onSeatClick={onSeatClick} onCancelClick={onCancelClick} />
    </div>
);

const BusSeatModel = ({ seats, onSeatClick, onCancelClick }) => (
    <div className="p-4 bg-gray-100 rounded-lg w-[400px]">
        <h2 className="mb-4 text-xl font-bold">Bus Seat Model</h2>
        <div className="p-4 bg-blue-200 rounded-lg">
            <div className="flex mb-4">
                <div className="w-10 h-10 mr-2">
                    <Seat isSpecial={true} isDriver={true} seatNumber="Driver" onSeatClick={() => { }} />
                </div>
                <div className="flex-grow"></div>
                <div className="w-10 h-10">
                    <Seat isSpecial={true} seatNumber="Conductor" onSeatClick={() => { }} />
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col mr-12 space-y-2">
                    {seats.slice(0, 23).map((_, index) => (
                        <SeatPair
                            key={index}
                            leftSeat={{ isReserved: seats[index * 2]?.isReserved, seatNumber: index * 2 + 1 }}
                            rightSeat={{ isReserved: seats[index * 2 + 1]?.isReserved, seatNumber: index * 2 + 2 }}
                            onSeatClick={onSeatClick}
                            onCancelClick={onCancelClick}
                        />
                    ))}
                </div>
                <div className="flex flex-col w-8 mx-2">
                    <div className="h-20 mb-2 bg-gray-300"></div>
                    <div className="flex-grow bg-gray-300"></div>
                </div>
                <div className="flex flex-col space-y-2">
                    {seats.slice(23, 46).map((_, index) => (
                        <SeatPair
                            key={index + 23}
                            leftSeat={{ isReserved: seats[index * 2 + 23]?.isReserved, seatNumber: index * 2 + 24 }}
                            rightSeat={{ isReserved: seats[index * 2 + 24]?.isReserved, seatNumber: index * 2 + 25 }}
                            onSeatClick={onSeatClick}
                            onCancelClick={onCancelClick}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center gap-4 mt-4 mr-5">
                {seats.slice(46, 50).map((seat, index) => (
                    <Seat
                        key={index + 46}
                        isReserved={seat.isReserved}
                        seatNumber={seat.seatNumber}
                        onSeatClick={onSeatClick}
                        onCancelClick={onCancelClick}
                    />
                ))}
            </div>
        </div>
    </div>
);

const SeatReservation = () => {
    const [seats, setSeats] = useState(Array(75).fill(null).map((_, index) => ({ isReserved: false, seatNumber: index + 1 })));
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [userId, setUserId] = useState('');
    const [busId, setBusId] = useState('');
    const [fare, setFare] = useState(0);
    const [travelDate, setTravelDate] = useState('');
    const [cnic, setCnic] = useState('');

    useEffect(() => {
        fetchReservedSeats();
    }, [busId]);

    const fetchReservedSeats = async () => {
        try {
            const response = await axios.get(`/api/reservedSeats/${busId}`);
            const reservedSeats = response.data.map(ticket => ticket.seatNumber);
            setSeats(seats.map(seat => ({
                ...seat,
                isReserved: reservedSeats.includes(seat.seatNumber)
            })));
        } catch (error) {
            console.error('Error fetching reserved seats:', error);
        }
    };

    const handleSeatClick = (seatNumber) => {
        if (!seats[seatNumber - 1].isReserved) {
            setSelectedSeat(seatNumber);
        }
    };

    const handleCancelClick = async (seatNumber) => {
        try {
            const response = await axios.delete(`/api/cancelTicket`, {
                data: { busId, seatNumber }
            });

            if (response.status === 200) {
                setSeats(seats.map(seat =>
                    seat.seatNumber === seatNumber ? { ...seat, isReserved: false } : seat
                ));
                alert("Seat reservation canceled successfully!");
            }
        } catch (error) {
            console.error('Error canceling seat:', error);
            alert("Error canceling seat. Please try again.");
        }
    };

    const handleReservation = async () => {
        if (!selectedSeat) return;

        try {
            const response = await axios.post('/api/generateTicket', {
                userId,
                busId,
                seatNumber: selectedSeat,
                fare,
                travelDate,
                cnic
            });

            if (response.status === 201) {
                setSeats(seats.map(seat =>
                    seat.seatNumber === selectedSeat ? { ...seat, isReserved: true } : seat
                ));
                setSelectedSeat(null);
                alert("Seat reserved successfully!");
            }
        } catch (error) {
            console.error('Error reserving seat:', error);
            alert("Error reserving seat. Please try again.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <BusSeatModel seats={seats} onSeatClick={handleSeatClick} onCancelClick={handleCancelClick} />
            {selectedSeat && (
                <div className="mt-4">
                    <p>Selected Seat: {selectedSeat}</p>
                    <button
                        onClick={handleReservation}
                        disabled={seats[selectedSeat - 1]?.isReserved}
                        className={`px-4 py-2 mt-2 text-white ${seats[selectedSeat - 1]?.isReserved ? 'bg-gray-400' : 'bg-blue-500'} rounded hover:bg-blue-600`}
                    >
                        Reserve Seat
                    </button>
                </div>
            )}
        </div>
    );
};

export default SeatReservation;
