// React Imports
import React from 'react'

// Semantic UI Imports
import { Progress} from 'semantic-ui-react'

// Style Imports
import '../Styles/poll.css'

interface Props {
    optionName: string
    percent: number
    isWinning: boolean
}

const PollOption: React.FC<Props> = ({
        optionName,
        percent,
        isWinning
}) => {
    return (
        <Progress className="p-bar" percent={percent} label={optionName} success={isWinning} error={!isWinning} size="small"/>
    )
}

export default PollOption;