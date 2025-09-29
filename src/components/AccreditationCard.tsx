import { Accreditation } from '@/data/azienda-data';

interface AccreditationCardProps {
  accreditation: Accreditation;
}

const AccreditationCard: React.FC<AccreditationCardProps> = ({ accreditation }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl h-full">
        <div className="inline-block p-4 bg-[#F49918] text-white rounded-full mb-4">
          <i className={`${accreditation.icon} text-4xl`}></i>
        </div>
        <h5 className="text-2xl font-bold mb-3 text-[#1A2A36]">{accreditation.title}</h5>
        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: accreditation.description }}></p>
      </div>
    </div>
  );
};

export default AccreditationCard;
