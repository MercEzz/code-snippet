interface FormProps {
  title: string;
  name: string;
}

export default function FormSnippet(props: FormProps) {
  return (
    <div className="flex gap-4">
      <label className="w-12 text-sm" htmlFor="title">
        {props.title}
      </label>
      <input
        name={props.name}
        className="border rounded p-2 w-full h-6"
        id={props.name}
      />
    </div>
  );
}
