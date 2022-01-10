import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import dynamic from 'next/dynamic'
import HomePage from './HomePage'
import Link from 'next/link'
import * as AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-2',
  endpoint: 'dynamodb.us-east-1.amazonaws.com',
  accessKeyId: ['AKIA6QF7IXA5SRDMAQ6G'],
  secretAccessKey: ['Claire@0217']
});

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  )
}
