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
            <Typography variant="subtitle1" component={'span'} sx={{fontWeight: 'bold'}} aria-label="key" role="span">
                {left}
            </Typography>
            {
                left !== '' ?
                    <Typography variant="subtitle1" component={'span'} align="left" role="span" aria-label="value"> 
                        : {right}
                    </Typography>
                :
                <Typography variant="subtitle1" component={'span'} role="span" aria-label="value"> 
                    {right}
                </Typography>
            }
        </>
    )
}

export default JsonRow;