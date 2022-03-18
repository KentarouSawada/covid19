import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { NativeSelect, FormControl } from '@material-ui/core'

import { useDispatch } from 'react-redux'
import { fetcAsyncGetDaily } from '../covidSlice'

const useStyles = makeStyles((theme) => ({
    formCntrol: {
        marginbottom: theme.spacing(3),
        minWidth: 320,
    },
}));



const SwitchCountry:React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const countries = [
        "japan",
        "china",
        "us",
        "france",
        "italy",
        "spain",
        "united kingdom",
        "germany",
        "russia",
        "brazil",
        "sweden",
        "india",
    ];


    return (
        <div>
            <FormControl className={classes.formCntrol}>
                <NativeSelect
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                    dispatch(fetcAsyncGetDaily(e.target.value))
                }
                >
                    {countries.map((country,i) => (
                        <option key={i} value={country}>
                            {country}
                        </option>
                    ))}
                </NativeSelect>
            </FormControl>
        </div>
      );
    };
    

export default SwitchCountry