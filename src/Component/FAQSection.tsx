import { useState } from 'react'
import Accordion from './Accordion'
import { accordionDetails } from './utils'


export default function FAQSection() {
    const [accordionIndex, setAccordionIndex] = useState<number | null>(null)

    function handleToggle(index: number) {
        setAccordionIndex(prev => prev === index ? null : index)
    }

    return <>
        <div className='mt-[100px] max-sm:mt-[80px]'>
            <h1 className="text-center text-4xl mb-6 max-sm:text-[25px]">FAQ Section</h1>
            <h1 className='text-2xl text-center mb-11 max-sm:text-[18px]'>Everything you need to know</h1>

            {accordionDetails.map((item, index): any => {
                return <Accordion
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    onClick={handleToggle}
                    index={index}
                    isOpen={index === accordionIndex} />
            })}

        </div>
    </>
}   