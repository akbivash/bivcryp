import React, { useState } from 'react'
import './faq.css'
import { BsArrowDownShort } from 'react-icons/bs'
import { FiArrowUp, FiArrowDown } from 'react-icons/fi'
import { faqs } from './data'

const Faq = () => {
    const [isSelectedTopic, setIsSelectedTopic] = useState('General')
    const [showAnswer, setShowAnswer] = useState(false)
    const [questionId, setQuestionId] = useState()

    function handleQuestion(q) {
        setQuestionId(q)

        if (q !== questionId) {
            setShowAnswer(true)
        } else {
            setShowAnswer(prev => !prev)
        }
    }

    return (
        <div className='faq_container'>
            <div className="heading">
                <span>FAQS</span>
                <h1>Frenquently Asked Questions</h1>
            </div>

            <section>
                <div className="faq_items mobile">
                    {faqs.map(item => {

                        return <div className="faq_item" key={item.id}>
                            <span className={`${isSelectedTopic === item.title ? 'faq_topic active' : 'faq_topic'}`} onClick={() => setIsSelectedTopic(item.title)}>{item.title}</span>
                            <div className='faq_details'>
                                {item.details.map(d => {

                                    if (isSelectedTopic === item.title) {
                                        return <div className="q_a " key={d.question}>
                                            <span className={`${showAnswer && questionId === d.question ? 'q active' : 'q'}`} onClick={() => handleQuestion(d.question)}>{d.question} <i>{showAnswer && questionId === d.question ? <FiArrowUp /> : <FiArrowDown />}</i></span>
                                            <span className={`${showAnswer && questionId === d.question ? 'a active' : 'a'}`}>{d.answer}</span>
                                        </div>
                                    }
                                })}
                            </div>
                        </div>
                    })}
                </div>
                {/* desktop */}
                <div className="faq_items desktop">
                    <div className="faq_topics">
                        {faqs.map(item => {
                            return <span key={item.title} className={`${isSelectedTopic === item.title ? 'faq_topic active' : 'faq_topic'}`} onClick={() => setIsSelectedTopic(item.title)}>{item.title}</span>
                        })}
                    </div>
                    <div className='faq_details'>
                        {faqs.map(f => {
                            return f.details.map(d => {

                                if (f.title === isSelectedTopic) {
                                    return <div className="q_a " key={d.question}>
                                        <span className={`${showAnswer && questionId === d.question ? 'q active' : 'q'}`} onClick={() => handleQuestion(d.question)}>{d.question} <i>{showAnswer && questionId === d.question ? <FiArrowUp /> : <FiArrowDown />}</i></span>
                                        <span className={`${showAnswer && questionId === d.question ? 'a active' : 'a'}`}>{d.answer}</span>
                                    </div>
                                }
                            })
                        })}
                    </div>
                </div>
                <img src="https://demo.ovatheme.com/cryptlight/wp-content/uploads/2021/08/faq.png" alt="" />

            </section>
        </div>
    )
}

export default Faq
