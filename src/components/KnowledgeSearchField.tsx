import type { ChangeEventHandler } from "react";
import { SearchBar } from "./SearchBar";

interface KnowledgeSearchFieldProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export function KnowledgeSearchField({
  value,
  onChange,
  placeholder,
}: KnowledgeSearchFieldProps) {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <SearchBar
        variant="hero"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
