import React from 'react'
import '../styles/globalClass.scss'
import Header from '../../components/Header'
import ActionBlock from '../../components/ActionBlock'
import Table from '../../components/Table'

const MainView = () => {
  return (
    <div className="body">
      <div className="g-container">
        <Header title="Invoice" />
        <ActionBlock />
        <Table />
      </div>
    </div>
  )
}
export default MainView
