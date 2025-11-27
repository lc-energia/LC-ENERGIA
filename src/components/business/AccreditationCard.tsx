import { memo } from 'react';
import { Accreditation } from '@/data/azienda-data';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import SafeHTML from '@/components/shared/SafeHTML';

interface AccreditationCardProps {
  accreditation: Accreditation;
}

const AccreditationCard: React.FC<AccreditationCardProps> = memo(function AccreditationCard({ accreditation }) {
  return (
    <Card className="rounded-xl flex flex-col h-full hover:-translate-y-0">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <i className={`${accreditation.icon} text-3xl text-primary`}></i>
        </div>
        <CardTitle className="text-xl mb-2 text-dark">{accreditation.title}</CardTitle>
        <SafeHTML html={accreditation.description} as={CardDescription} className="text-gray-500 leading-relaxed" />
      </CardContent>
    </Card>
  );
});

export default AccreditationCard;
