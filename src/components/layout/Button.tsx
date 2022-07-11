type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 px-4 block py-2 rounded cursor-pointer font-bold font-serif tracking-tight"
    >
      {children}
    </button>
  );
}
