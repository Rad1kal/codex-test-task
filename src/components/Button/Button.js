import React from 'react'
import   './Button.scss'
import {IconPlus, IconBrackets} from '@codexteam/icons';


export default function Button(props) {
    const {type, size, btStyle, design, disabled} = props;

    let res;
    let classes = 'btn btn_';

    if (type.trim().length > 0) classes += `${type}`
    else classes += `solid`

    if (btStyle.trim().length > 0) classes += `_${btStyle}`
    else classes += `_primary`

    if (size.trim().length > 0) classes += ` btn_${size}`
    else classes += ' btn_s'

    const types ={
        'leading': 
        <button 
            dangerouslySetInnerHTML={{ __html: IconPlus + "Button" }} 
            className={classes}>
        </button>,
        'trailing': 
        <button className={classes}>
            Button
            <span style={{transform: "rotate(90deg)"}} dangerouslySetInnerHTML={{ __html: IconBrackets}}></span>
        </button>,
        'leadingTrailing': 
        <button className={classes}>
            <span dangerouslySetInnerHTML={{ __html: IconPlus}}/>
            Button
            <span style={{transform: "rotate(90deg)"}} dangerouslySetInnerHTML={{ __html: IconBrackets}}></span>
        </button>,
        'standalone': 
        <button 
            dangerouslySetInnerHTML={{ __html: IconPlus}} 
            className={classes}>
        </button>
    }
      
    // constract btn

    if (design) res = types[design]
    else res = <button className={`btn btn_primary btn_s`}>
                    Button
                </button>

    // disabled btn

    if (disabled) res = React.cloneElement(res, {
        disabled: true});

    return (
        <div>
            {res}
        </div>
    )
}
