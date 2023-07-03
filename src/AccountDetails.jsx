import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function AccountDetails(props) {
  const { financialData, renderSpendingInfo, handleAccountClick } = props

  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (renderSpendingInfo === false && windowWidth >= 1100) {
        setContainerWidth(730)
      } else {
        setContainerWidth(529)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [renderSpendingInfo])

  const styles = {
    width: `${containerWidth}px`
  }

  return (
    <main className="container">
      <div className="account-details-container">
        <div className="pay-transfer-btn-container">
          <button className="primary-btn">Pay</button>
          <button className="primary-btn">Transfer</button>
        </div>

        <div className="account-financials-container">
          <div className="account-container">
            <h3>Accounts</h3>

            {financialData.map((account) => (
              <a href="#spending-section-id" key={uuidv4()}>
                <section
                  className="accounts"
                  onClick={() => handleAccountClick(account.title)}
                  style={{
                    backgroundColor: account.isClicked ? '#FFD18C' : '',
                    width: styles.width
                  }}
                >
                  <p>{account.title}</p>
                  <p>${account.balance}</p>
                </section>
              </a>
            ))}
          </div>

          {financialData.map((account) => {
            if (account.isClicked && renderSpendingInfo === true) {
              return (
                <div className="spending-container" key={uuidv4()}>
                  <h3 id="spending-section-id">Spending</h3>
                  {account.spendings.map((spendingItem) => (
                    <section className="spending-info" key={uuidv4()}>
                      <p>{spendingItem.category}</p>
                      <p>${spendingItem.spent}</p>
                    </section>
                  ))}
                </div>
              )
            }
          })}
        </div>
      </div>
    </main>
  )
}
