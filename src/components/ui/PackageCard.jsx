import { Link } from "react-router";


const PackageCard = ({ singlePackage }) => {
  const {
    _id,
    name,
    photo,
    gideName,
    gidePhoto,
    gideEmail,
    duration,
    price,
    departureDate,
  } = singlePackage;
  // console.log(name)

 

  return (
    <div className=" shadow-md rounded-lg overflow-hidden transition hover:shadow-xl">
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
         <div>
             <p className="text-lg font-bold">👤 {gideName}</p>
              <p className="text-sm">📧 {gideEmail}</p>
         </div>
        </div>

        {/* Package Info */}
        <p className="mb-1">⏳ Duration: {duration}</p>
        <p className="mb-1">💰 Price: ৳{price}</p>
        <p className="mb-3">📅 Departure: {departureDate}</p>

        <Link to={`/details-package/${_id}`}
          
          className="btn btn-primary w-full"
        >
          👁️ View Details
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
