import { Accreditation } from '@/data/azienda-data';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';

interface AccreditationCardProps {
  accreditation: Accreditation;
}

const AccreditationCard: React.FC<AccreditationCardProps> = ({ accreditation }) => {
  return (
    <Card className="rounded-xl flex flex-col h-full hover:-translate-y-0">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <i className={`${accreditation.icon} text-3xl text-primary`}></i>
        </div>
        <CardTitle className="text-xl mb-2 text-dark">{accreditation.title}</CardTitle>
        <CardDescription className="text-gray-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: accreditation.description }}></CardDescription>
      </CardContent>
    </Card>
  );
};

export default AccreditationCard;
