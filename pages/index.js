import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import dynamic from 'next/dynamic'
import HomePage from './HomePage'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  )
}
