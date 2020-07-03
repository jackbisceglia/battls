import React from 'react'

import { Progress} from 'semantic-ui-react'

import '../Styles/poll.css'

// Props to take in
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