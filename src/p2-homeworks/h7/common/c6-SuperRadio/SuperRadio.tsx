import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'
type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange&&onChange(e)
        onChangeOption&&onChangeOption(e.currentTarget.checked)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label className={s.container} key={name + '-' + i}>
            <input
                type={'radio'}
                name={name}
                checked={o === value}
                value={o}
                onChange={onChange}
            />
            {o}
            <span className={s.checkmark}></span>
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
