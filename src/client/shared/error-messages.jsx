"use client"
import React from 'react'
import { useTranslation } from 'next-i18next'

const ErrorMessages = ({ message }) => {
    const { t } =  useTranslation('common');
    return  <>{t(`${message}`)}</>
}
  
export default ErrorMessages