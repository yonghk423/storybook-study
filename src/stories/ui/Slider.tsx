import React from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <form>
                <RadixSlider.Root className="SliderRoot" defaultValue={[50]} max={100} step={1}>
                    <RadixSlider.Track className="SliderTrack">
                        <RadixSlider.Range className="SliderRange" />
                    </RadixSlider.Track>
                    <RadixSlider.Thumb className="SliderThumb" aria-label="Volume" />
                </RadixSlider.Root>
            </form>
        </div>
    )
}

export default Slider;