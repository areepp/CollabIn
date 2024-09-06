export const TextInput = ({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type?: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="">{label}</label>
      <input
        type={`${type ? type : 'text'}`}
        placeholder={placeholder}
        className="bg-background text-secondary placeholder-secondary focus:outline-none"
      />
    </div>
  );
};

export const TextArea = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="">{label}</label>
      <textarea
        cols={70}
        rows={3}
        placeholder={placeholder}
        className="bg-background text-secondary placeholder-secondary focus:outline-none resize-none overflow-y-auto"
      />
    </div>
  );
};

export const ImageInput = ({ label }: { label: string }) => {
  return (
    <div className="items-center justify-center w-full space-y-2">
      <label>{label}</label>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full border border-text border-dashed rounded-sm cursor-pointer">
          <div className="flex flex-col items-center justify-center py-7">
            <svg
              className="w-8 h-8 mb-4 text-secondary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-secondary">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};
