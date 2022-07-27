import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import main1 from '../../../assets/home/main1.png'
import style from './MainBlock.module.css'

export const MainBlock = () => {

  const router = useRouter()

  return (
    <div>
         <Image
        src={main1}
        alt="Landscape picture"
        width={800}
        height={400}
      />
      <div className={style.bla}>
        <h1>Выездные творческие мастер-классы</h1>
        <h2>Организуем творческую активность на мероприятии любого масштаба</h2>
        <button type="button" onClick={() => router.back()}>
        Узнать подробнее
    </button>
      </div>
    </div>
  )
}
