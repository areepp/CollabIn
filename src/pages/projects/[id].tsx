import { useState } from 'react'
import Button from '../../components/button'
import { ImageInput, TextInput } from '../../components/input'

const ProjectDetail = ({ isMyProject = false }: { isMyProject?: boolean }) => {
  const [showContributeForm, setShowContributeForm] = useState(false)

  console.log('isMyproject', isMyProject)

  return (
    <div className="mb-[550px]">
      <div className="w-full h-[650px] px-24 relative">
        <img
          src="/project-image-3.png"
          className="w-full h-full object-cover"
          alt="project cover"
        />
        <div className="absolute inset-0 bg-text w-full h-[300px] -z-10" />
      </div>
      <section className="relative mt-24 px-32 container mx-auto">
        <div className="flex justify-between">
          <p>JOHN DOE -- PROJECT TITLE</p>
          <p>THE CATEGORY</p>
        </div>
        <img
          src="/bookmark-icon.svg"
          alt="bookmark icon"
          className="absolute right-0 top-0 cursor-pointer"
        />
        <div className="px-32">
          <p className="my-12">
            17th anniversary remaster. New sleeve artwork with photos by Steve
            Gullick and pressed on dirty white vinyl. Ladybird … one perfect
            heavy as fuck hypnotic riff played over and over and over and over
            across 2 sides of an LP. Back when Shit And Shine formed, the idea
            was basically to sound like their heroes DRUNKS WITH GUNS and
            STRANGULATED BEATOFFS, using that same basic formula. A big dumb ass
            catchy riff played over and over until the joke gets old … then keep
            going. Recorded live at Southern Studios, London (fun fact: the same
            room where BAUHAUS recorded ‘Bela Lugosi’s Dead’!) in 2004 with just
            two basses, a snare drum, a huge cardboard box and a tiny toy Casio
            sa-1 keyboard (using the “airplane” sound hitting the same key over
            and over for 41 minutes) Some still say it’s the best thing shit and
            shine has ever done. I’m not arguing. Originally released on CD, and
            super limited vinyl waaay back in 2005. This was Shit And Shine’s
            second release and it sold out REAL quick. Remastered and beefed the
            hell up by Craig Clouse at Shit And Shine Ranch 2022.
          </p>
          <div className="flex gap-6">
            <img
              src="/project-image-5.png"
              width="150"
              height="150"
              className="object-cover"
              alt="other project attachment media"
            />
            <img
              src="/project-image-6.png"
              width="150"
              height="150"
              className="object-cover"
              alt="other project attachment media"
            />
          </div>
        </div>

        <h2 className="text-7xl mt-24 text-secondary font-extrabold">
          HOW DO YOU CONTRIBUTE TO THIS PROJECT?
        </h2>
        <p className="px-32 my-12">
          17th anniversary remaster. New sleeve artwork with photos by Steve
          Gullick and pressed on dirty white vinyl. Ladybird … one perfect heavy
          as fuck hypnotic riff played over and over and over and over across 2
          sides of an LP. Back when Shit And Shine formed, the idea was
          basically to sound like their heroes DRUNKS WITH GUNS and STRANGULATED
          BEATOFFS, using that same basic formula. A big dumb ass catchy riff
          played over and over until the joke gets old … then keep going.
          Recorded live at Southern Studios, London (fun fact: the same room
          where BAUHAUS recorded ‘Bela Lugosi’s Dead’!) in 2004 with just two
          basses, a snare drum, a huge cardboard box and a tiny toy Casio sa-1
          keyboard (using the “airplane” sound hitting the same key over and
          over for 41 minutes) Some still say it’s the best thing shit and shine
          has ever done. I’m not arguing. Originally released on CD, and super
          limited vinyl waaay back in 2005. This was Shit And Shine’s second
          release and it sold out REAL quick. Remastered and beefed the hell up
          by Craig Clouse at Shit And Shine Ranch 2022.
        </p>
        <div className="relative mt-32 flex justify-between">
          <div className="flex items-center">
            <img src="/instagram-logo.svg" alt="instagram logo" />
            <span className="text-xl">@arifamjy</span>
          </div>
          {isMyProject ? (
            <>
              <Button
                onClick={() => setShowContributeForm(!showContributeForm)}
              >
                FINISH PROJECT
              </Button>
              {showContributeForm && (
                <div className="absolute top-20 right-0 w-1/2 flex flex-col gap-6">
                  <TextInput
                    label="CONTRIBUTORS"
                    placeholder="Enter the contributors of this project (separated by commas, e.g., John Doe, Quentin)"
                  />
                  <Button>SET PROJECT AS FINISHED</Button>
                </div>
              )}
            </>
          ) : (
            <>
              <Button
                onClick={() => setShowContributeForm(!showContributeForm)}
              >
                CONTRIBUTE NOW
              </Button>
              {showContributeForm && (
                <div className="absolute top-full right-0 w-1/2 flex flex-col gap-9">
                  <TextInput label="NAME" placeholder="Enter your name" />
                  <TextInput
                    label="EMAIL"
                    placeholder="name@email.com"
                    type="email"
                  />
                  <TextInput label="PHONE NUMBER" placeholder="08xxxxxxxx" />
                  <ImageInput label="PORTFOLIO OR PAST PROJECTS" />
                  <Button>SEND</Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail
