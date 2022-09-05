import { Input } from "./style";

export default function SearchInput({
  placeholder,
  action,
}: {
  placeholder: string;
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return <Input placeholder={placeholder} onChange={(e) => action(e)} />;
}
