import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';

const PackageCard = ({ singlePackage }) => {
  const {
    _id,
    name,
    photo,
    gideName,
    gidePhoto,
    duration,
    price,
    departureDate,
  } = singlePackage;
  console.log(name)

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate(`/package/${_id}`);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden transition hover:shadow-xl">
      <img src={photo} alt={name} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>

        {/* Guide Info */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src={gidePhoto}
            alt={gideName}
            className="w-10 h-10 rounded-full border-2 border-cyan-700"
          />
          <p className="text-sm">👤 {gideName}</p>
        </div>

        {/* Package Info */}
        <p className="mb-1">⏳ Duration: {duration}</p>
        <p className="mb-1">💰 Price: ৳{price}</p>
        <p className="mb-3">📅 Departure: {departureDate}</p>

        <button
          onClick={handleViewDetails}
          className="btn btn-primary w-full"
        >
          👁️ View Details
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
