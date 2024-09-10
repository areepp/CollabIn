import Button from '../../components/button'
import { ImageInput, TextArea, TextInput } from '../../components/input'

const Form = () => {
  return (
    <div className="flex justify-center gap-20 h-[calc(100vh-80px)] items-start pt-[6vw]">
      <form action="" className="text-5xl font-extrabold space-y-10">
        <h2>CREATE NEW PROJECT</h2>
        <input
          type="text"
          placeholder="PROJECT NAME"
          className="bg-background text-secondary placeholder-secondary focus:outline-none focus:border-text border-b-2 w-5/6"
        />
      </form>

      <div className="space-y-6">
        <div className="flex gap-16">
          <TextInput label="CATEGORY" placeholder="music, platform, etc" />
          <TextInput label="INSTAGRAM (Optional)" placeholder="@username" />
        </div>
        <TextInput label="EMAIL" placeholder="name@email.com" type="email" />
        <TextArea label="DESCRIPTION" placeholder="This project is....." />
        <TextArea
          label="JOB DESCRIPTION"
          placeholder="This responsibility for project is....."
        />

        <ImageInput label="MEDIA" />
        <Button className="float-end">CREATE</Button>
      </div>
    </div>
  )
}

export default Form
