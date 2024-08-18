import React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';

const Tabs = () => {
    return (
        <div>
            <RadixTabs.Root defaultValue="tab1" orientation="vertical">
                <RadixTabs.List aria-label="tabs example">
                    <RadixTabs.Trigger value="tab1">One</RadixTabs.Trigger>
                    <RadixTabs.Trigger value="tab2">Two</RadixTabs.Trigger>
                    <RadixTabs.Trigger value="tab3">Three</RadixTabs.Trigger>
                </RadixTabs.List>
                <RadixTabs.Content value="tab1">Tab one content</RadixTabs.Content>
                <RadixTabs.Content value="tab2">Tab two content</RadixTabs.Content>
                <RadixTabs.Content value="tab3">Tab three content</RadixTabs.Content>
            </RadixTabs.Root>
        </div>
    )
}

export default Tabs;