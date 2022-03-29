import React from 'react'
import style from "./Message.module.css"

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.message_main}>
            <div >
                <img src={props.avatar} className={style.picture} width={70} height={70} alt={"avatar"}/>
            </div>

                <div className={style.message_text}>
                    <span className={style.message_name}>{props.name}</span>
                    <p className={style.message_item}>{props.message}</p>
                    <p className={style.message_time}>{props.time}</p>
                </div>
            </div>

    )
}

export default Message
