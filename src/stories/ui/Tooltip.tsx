import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { PlusIcon } from '@radix-ui/react-icons';
import './Tooltip.css';

const Tooltip = () => {
    return (
        <RadixTooltip.Provider>
            <RadixTooltip.Root>
                <RadixTooltip.Trigger asChild>
                    <button className="IconButton">
                        <PlusIcon />
                    </button>
                </RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                    <RadixTooltip.Content className="TooltipContent" sideOffset={5}>
                        Add to library
                        <RadixTooltip.Arrow className="TooltipArrow" />
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    )
}

export default Tooltip;