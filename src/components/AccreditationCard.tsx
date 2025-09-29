import { Accreditation } from '@/data/azienda-data';

interface AccreditationCardProps {
  accreditation: Accreditation;
}

const AccreditationCard: React.FC<AccreditationCardProps> = ({ accreditation }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full transition-all duration-300 border border-gray-200 hover:shadow-xl hover:border-primary">
      <div className="mb-4">
        <i className={`${accreditation.icon} text-3xl text-primary`}></i>
      </div>
      <h5 className="text-xl font-bold mb-2 text-dark">{accreditation.title}</h5>
      <p className="text-gray-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: accreditation.description }}></p>
    </div>
  );
};

export default AccreditationCard;
