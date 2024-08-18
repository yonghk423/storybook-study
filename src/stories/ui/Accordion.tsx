import React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './Accordion.css';

const Accordions = () => {
    return (
        <div>
            <RadixAccordion.Root
                className='AccordionContainer'
                type="single" collapsible>
                <RadixAccordion.Item
                    className='AccordionItem'
                    value="item-1">
                    <RadixAccordion.Header
                        className='AccordionHeader'>

                        <RadixAccordion.Trigger className="AccordionTrigger">
                            <ChevronDownIcon className="AccordionChevron" aria-hidden />
                            <span
                                className='AccordionTriggerTitle'
                            >타이틀을 입력</span>
                        </RadixAccordion.Trigger>
                    </RadixAccordion.Header>
                    <RadixAccordion.Content
                        className='AccordionContent'
                    >hello</RadixAccordion.Content>
                </RadixAccordion.Item>
            </RadixAccordion.Root>
        </div>
    )
}

export default Accordions