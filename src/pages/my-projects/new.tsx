import Button from '../../components/button'
import { ImageInput, TextArea, TextInput } from '../../components/input'

const Form = () => {
  return (
    <div className="flex md:flex-row flex-col lg:justify-center md:justify-between lg:gap-20 gap-8 items-start lg:pt-[6vw] md:py-12 py-5 lg:px-12 px-8">
      <form
        action=""
        className="lg:text-5xl md:text-4xl text-2xl font-extrabold lg:space-y-10 space-y-6 w-full md:w-max"
      >
        <h2>CREATE NEW PROJECT</h2>
        <input
          type="text"
          placeholder="PROJECT NAME"
          className="bg-background text-secondary placeholder-secondary focus:outline-none focus:border-text border-b-2 lg:w-5/6 w-full"
        />
      </form>

      <div className="space-y-6 w-full md:w-max">
        <div className="flex md:flex-row flex-col md:gap-16 gap-5">
          <TextInput
            label="CATEGORY"
            placeholder="e.g. music, website, video"
          />
          <TextInput label="INSTAGRAM (Optional)" placeholder="@username" />
        </div>
        <TextInput label="EMAIL" placeholder="name@email.com" type="email" />
        <TextArea
          label="DESCRIPTION"
          placeholder="Description for the project"
        />
        <TextArea
          label="JOB DESCRIPTION"
          placeholder="Briefly describe the role, responsibilities, and skills you're looking for..."
        />

        <div className="space-y-3">
          <ImageInput label="MEDIA" />
          <Button className="float-end">CREATE</Button>
        </div>
      </div>
    </div>
  )
}

export default Form
