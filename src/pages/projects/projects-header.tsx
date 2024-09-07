import { useState } from 'react'
import Header, { type HeaderProps } from '../../components/header'

const PROJECTS_HEADER_TEXT = {
  all_projects: 'ALL PROJECTS',
  open_for_contributions: 'OPEN FOR CONTRIBUTIONS',
  finished: 'FINISHED',
}

const ProjectsHeader = ({
  subHeaderText,
}: Pick<HeaderProps, 'subHeaderText'>) => {
  const [headerText, setHeaderText] = useState(
    PROJECTS_HEADER_TEXT['all_projects'],
  )

  return (
    <Header
      headerText={headerText}
      text={{
        first: PROJECTS_HEADER_TEXT['all_projects'],
        second: PROJECTS_HEADER_TEXT['open_for_contributions'],
        third: PROJECTS_HEADER_TEXT['finished'],
      }}
      onClick={{
        first: () => setHeaderText(PROJECTS_HEADER_TEXT['all_projects']),
        second: () =>
          setHeaderText(PROJECTS_HEADER_TEXT['open_for_contributions']),
        third: () => setHeaderText(PROJECTS_HEADER_TEXT['finished']),
      }}
      subHeaderText={subHeaderText}
    />
  )
}

export default ProjectsHeader
