import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Card, Container, Row, Col, Button } from "react-bootstrap";

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Row>
          <Col lg={11}>
        <h2>Where in the world ?</h2>
        </Col>
        <Col lg={1}>
        <a>Dark Mode</a>
        </Col>
        </Row>
      </nav>
    </header>
    {children}
  </div>
)

export default Layout
