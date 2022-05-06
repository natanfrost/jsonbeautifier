import { Typography } from "@mui/material"
import { useEffect, useState } from "react"

interface Props {
    json: string
}

const JsonRow = (props: Props) => { 
    const [left, setLeft] = useState('');
    const [right, setRight] = useState('');

    useEffect(() => {
        const { json } = {...props} ;
        if (json.replace(' ', '').includes('":')) {
            const splited = props.json.split(':');
            setLeft(splited[0]);
            setRight(splited[1]);
        } else {
            setRight(props.json);
        }
    }, [props])

    return(
        <>
            <Typography variant="subtitle1" component={'span'} sx={{fontWeight: 'bold'}}>
                {left}
            </Typography>
            <Typography variant="subtitle1" component={'span'}>
                {
                    left !== '' ?
                    ':' :
                    null
                }
                {right}
            </Typography>
        </>
    )
}

export default JsonRow;