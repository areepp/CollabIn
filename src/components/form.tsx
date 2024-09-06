import Button from './button';

export const Input = ({
  label,
  placeholder,
  model,
  type,
}: {
  label: string;
  placeholder: string;
  model?: string;
  type?: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="">{label}</label>
      {model == 'textarea' ? (
        <textarea
          cols={70}
          rows={3}
          placeholder={placeholder}
          className="bg-background text-secondary placeholder-secondary focus:outline-none resize-none overflow-y-auto"
        />
      ) : (
        <input
          type={`${type ? type : 'text'}`}
          placeholder={placeholder}
          className="bg-background text-secondary placeholder-secondary focus:outline-none"
        />
      )}
    </div>
  );
};

const ImageInput = () => {
  return (
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
  );
};

const Form = () => {
  return (
    <div className="flex justify-center gap-20 h-[calc(100vh-64px)] items-start pt-[6vw]">
      <div className="text-5xl font-extrabold space-y-10">
        <h2>CREATE NEW PROJECT</h2>
        <input
          type="text"
          placeholder="PROJECT NAME"
          className="bg-background text-secondary placeholder-secondary focus:outline-none focus:border-text border-b-2 w-5/6"
        />
      </div>

      <form action="" className="space-y-6">
        <div className="flex gap-16">
          <Input label="CATEGORY" placeholder="music, platform, etc" />
          <Input label="INSTAGRAM (Optional)" placeholder="@username" />
        </div>
        <Input label="EMAIL" placeholder="name@email.com" type="email" />
        <Input
          label="DESCRIPTION"
          placeholder="This project is....."
          model="textarea"
        />
        <Input
          label="JOB DESCRIPTION"
          placeholder="This responsibility for project is....."
          model="textarea"
        />

        <div className="items-center justify-center w-full space-y-2">
          <label>MEDIA</label>
          <ImageInput />
        </div>
        <Button className="float-end">CREATE</Button>
      </form>
    </div>
  );
};

export default Form;
