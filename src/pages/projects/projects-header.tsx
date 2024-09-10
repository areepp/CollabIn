import { useState } from 'react'
import Header, { type HeaderProps } from '../../components/header'
import Content from '../projects/content'
import Button from '../../components/button'

const PROJECTS_HEADER_TEXT = {
  all_projects: 'ALL PROJECTS',
  open_for_contributions: 'OPEN FOR CONTRIBUTIONS',
  finished: 'FINISHED',
}

const ProjectsHeader = ({
  subHeaderText,
  addProject,
}: Pick<HeaderProps, 'subHeaderText' | 'addProject'>) => {
  const [headerText, setHeaderText] = useState(
    PROJECTS_HEADER_TEXT['all_projects']
  )
  const [filter, setFilter] = useState<string>('all_projects')

  const handleClick = (header: keyof typeof PROJECTS_HEADER_TEXT) => {
    setHeaderText(PROJECTS_HEADER_TEXT[header])
    setFilter(header)
  }

  return (
    <>
      <Header
        addProject={addProject}
        headerText={headerText}
        text={{
          first: PROJECTS_HEADER_TEXT['all_projects'],
          second: PROJECTS_HEADER_TEXT['open_for_contributions'],
          third: PROJECTS_HEADER_TEXT['finished'],
        }}
        onClick={{
          first: () => handleClick('all_projects'),
          second: () => handleClick('open_for_contributions'),
          third: () => handleClick('finished'),
        }}
        subHeaderText={subHeaderText}
      />
      {addProject && (
        <div className="flex justify-end mr-6">
          <Button className="text-right">
            <a href="/my-projects/new">ADD PROJECT</a>
          </Button>
        </div>
      )}

      <Content filter={filter} />
    </>
  )
}

export default ProjectsHeader
