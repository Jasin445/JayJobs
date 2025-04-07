import Images from "./Images";
import plusIcon from '../assets/plusIcon.png'
import minusIcon from '../assets/minusIcon.png'


interface AccordionProps {
    question: string,
    answer: string,
    isOpen: boolean,
    onClick: any,
    index: number
}

export default function Accordion({ question, answer, onClick, index, isOpen }: AccordionProps) {

    return <div className="border-2 rounded-[12px] p-9 mb-9">
        <div className="flex justify-between items-center">
            <p className="text-2xl">{question}</p>
            <div>
                <Images
                    className="cursor-pointer"
                    onClick={() => onClick(index)}
                    images={isOpen ? minusIcon : plusIcon}
                    alt={isOpen ? 'image of plus icon' : 'image of minus icon'} />
            </div>
        </div>

        {isOpen && <div>
            <div className='border-b pb-8 mb-8'></div>
            <p className="text-2xl">
                {answer}
            </p>
        </div>}

    </div>
}

