import React from 'react'
import SavingsCard from './SavingsCard'
import './Savings.css'
import One from "../../assets/images/one.png"

const Savings = () => {
    return (
        <section className='savings'>
            <div className="savings-text">
                <h1>
                    Many ways to build your savings
                </h1>
                <p>
                    Earn 12%-22% when you save with any of these PiggyVest plans.
                </p>
            </div>


            <div className="savings-col col-1">
                <SavingsCard
                    title="Automated Savings"
                    description='Build a dedicated savings faster on your terms, automatically or manually.'
                    label='Piggybank'
                    image={One}
                    customClass="col-right"
                />

                <SavingsCard
                    title="Automated Savings"
                    description='Build a dedicated savings faster on your terms, automatically or manually.'
                    label='Piggybank'
                    image={One}
                    customClass="col-left"
                />
            </div>



            <div className="savings-col col-2">
                <SavingsCard
                    title="Automated Savings"
                    description='Build a dedicated savings faster on your terms, automatically or manually.'
                    label='Piggybank'
                    image={One}
                    customClass="col-right-2"
                />

                <SavingsCard
                    title="Automated Savings"
                    description='Build a dedicated savings faster on your terms, automatically or manually.'
                    label='Piggybank'
                    image={One}
                    customClass="col-left-2"
                />
            </div>



            <div className="savings-col col-3">
                <SavingsCard
                    title="Automated Savings"
                    description='Build a dedicated savings faster on your terms, automatically or manually.'
                    label='Piggybank'
                    image={One}
                    customClass="col-right-3"
                />

                <SavingsCard
                    title="Automated Savings"
                    description='Build a dedicated savings faster on your terms, automatically or manually.'
                    label='Piggybank'
                    image={One}
                    customClass="col-left-3"
                />
            </div>
        </section>
    )
}

export default Savings