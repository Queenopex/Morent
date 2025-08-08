// components/molecules/SectionHeader.tsx
type Props = {
  title: string;
  actionText?: string;
  onActionClick?: () => void;
};

const SectionHeader = ({ title, actionText, onActionClick }: Props) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-semibold">{title}</h2>
    {actionText && (
      <button
        onClick={onActionClick}
        className="text-sm text-blue-600 hover:underline"
      >
        {actionText}
      </button>
    )}
  </div>
);

export default SectionHeader;
