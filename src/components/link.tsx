export const Link = ({ url, label }: { url: string; label: string }) => {
  return (
    <a
      className="text-primary hover:text-primary-hover mx-4"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      {label}
    </a>
  );
};
