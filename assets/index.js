import * as React from 'react';
// import Logo from './svg/logo.svg';
import BackArrow from './svg/back-arrow.svg';
import Svg, {Path} from 'react-native-svg';

const LoGo = () => {
    return(
<Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M7.08615 6.30731L17.5575 21.8845C13.7529 21.1405 2.23773 18.2756 0.202186 11.1151C-1.12865 6.43354 4.44719 5.49724 7.08615 6.30731Z" fill="#00A4A4"/>
<Path d="M5.14699 8.71122C5.98929 11.0325 9.40047 14.2101 17.5575 21.8846L7.08614 6.30732C7.08614 6.30732 4.18983 6.07342 5.14699 8.71122Z" fill="#7CF7F7"/>
<Path d="M7.08624 6.30737L17.5576 21.8846C18.309 18.1117 19.9729 6.18327 14.0672 1.59572C10.4746 -1.19501 7.33314 3.5787 7.08624 6.30737Z" fill="#32E0E0"/>
</Svg>
    );
}
const Backarrow = () => {
    return(
<Svg width="25" height="20" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M11.5 6C11.7761 6 12 5.77614 12 5.5C12 5.22386 11.7761 5 11.5 5V6ZM1.5 6H11.5V5H1.5V6Z" fill="#281D3F"/>
<Path d="M6 1L1 5.5L6 10" stroke="#281D3F" stroke-linecap="round"/>
</Svg>
    );
}
export {
    LoGo,
    Backarrow,
}