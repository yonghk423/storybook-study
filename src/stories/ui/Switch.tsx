import React from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import './Switch.css';

const SwitchDemo = () => (
    <form>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label className="Label" htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
                Airplane mode
            </label>
            <RadixSwitch.Root className="SwitchRoot" id="airplane-mode">
                <RadixSwitch.Thumb className="SwitchThumb" />
            </RadixSwitch.Root>
        </div>
    </form>
);

export default SwitchDemo;