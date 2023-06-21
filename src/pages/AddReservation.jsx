import ReservationForm from 'components/reservation/ReservationForm';
import { useParams } from 'react-router-dom';

const AddReservation = () => {
  const { tourId } = useParams();

  return (
    <div className="flex flex-col justify-center items-center bg-primary" id="reservation-page">
      <h1 className="text-4xl font-bold mb-4 text-gray-100">
        BOOK A TOUR
      </h1>
      <p className="text-lg  mb-8 p-2 text-gray-100">
        Please use the form below to book a reservation for the tour.
      </p>

      <>
        <ReservationForm tourId={tourId} />
      </>
    </div>
  );
};

export default AddReservation;