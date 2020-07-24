// React Imports
import React from 'react'

// Semantic UI Imports
import { Progress } from 'semantic-ui-react'

// Style Imports

interface Props {
    optionName: string
    percent: number
    isWinning: boolean,
    showPercent: boolean
}
// label={`${optionName} (${Math.round(percent)}%)`}
const PollOption: React.FC<Props> = ({
        optionName,
        percent,
        isWinning,
        showPercent
}) => {
    return (
        <>
        <Progress className="p-bar" percent={percent} label={optionName} success={isWinning} error={!isWinning} size="small"/>
        </>
    )
}

export default PollOption;